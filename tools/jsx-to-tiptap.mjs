/**
 * Parse a page JSX file into a TipTap-compatible doc JSON.
 * Runs server-side (Node.js) inside the Vite editor plugin.
 */
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
const traverse = _traverse.default ?? _traverse;

// Components to skip entirely (auto-generated wrappers)
const SKIP_COMPONENTS = new Set(['Breadcrumb', 'PageNav']);

export function jsxFileToDoc(source) {
  const ast = parse(source, { sourceType: 'module', plugins: ['jsx'] });

  // Find the JSX children inside the return(<div>…</div>)
  let returnChildren = null;
  traverse(ast, {
    ReturnStatement(path) {
      const arg = path.node.argument;
      if (arg?.type === 'JSXElement') {
        returnChildren = arg.children;
        path.stop();
      }
    },
  });

  if (!returnChildren) return { type: 'doc', content: [] };
  const content = returnChildren.flatMap((c) => jsxChildToNode(c, source)).filter(Boolean);
  return { type: 'doc', content };
}

// ─── Node dispatching ───────────────────────────────────────────────────────

function jsxChildToNode(child, source) {
  if (child.type === 'JSXText') {
    const text = child.value.trim();
    return text ? [{ type: 'paragraph', content: [{ type: 'text', text }] }] : [];
  }
  if (child.type !== 'JSXElement') return [];

  const name = getComponentName(child);
  if (!name || SKIP_COMPONENTS.has(name)) return [];

  const node = jsxElementToNode(child, name, source);
  return node ? [node] : [];
}

function jsxElementToNode(el, name, source) {
  switch (name) {
    case 'H1': return heading(el, 1);
    case 'H2': return heading(el, 2);
    case 'H3': return heading(el, 3);
    case 'H4': return heading(el, 4);
    case 'P':  return { type: 'paragraph', content: inlineContent(el.children) };
    case 'HR': return { type: 'horizontalRule' };
    case 'Blockquote': return { type: 'blockquote', content: blockquoteContent(el, source) };
    case 'Callout':    return calloutNode(el, source);
    case 'UL':         return listNode(el, 'bulletList');
    case 'OL':         return listNode(el, 'orderedList');
    case 'CheckList':  return checkListNode(el);
    case 'Figure':     return figureNode(el);
    case 'ZoomableImage': return figureNode(el);
    case 'Pre':        return codeBlockNode(el);
    case 'InternalLink': return internalLinkParagraph(el);
    default: {
      if (name && /^[a-z]/.test(name)) {
        // Native HTML element — store original JSX source verbatim for round-trip fidelity
        const jsx = source ? source.slice(el.start, el.end) : `<${name}>...</${name}>`;
        return { type: 'nativeHtml', attrs: { jsx } };
      }
      const inline = inlineContent(el.children);
      return inline.length ? { type: 'paragraph', content: inline } : null;
    }
  }
}

// ─── Block nodes ────────────────────────────────────────────────────────────

function heading(el, level) {
  return {
    type: 'heading',
    attrs: { level, id: getProp(el, 'id') ?? null },
    content: inlineContent(el.children),
  };
}

const BLOCK_COMPONENT_NAMES = new Set(['H1','H2','H3','H4','UL','OL','Blockquote','P','HR','Callout','CheckList','Figure','ZoomableImage','Pre']);

function blockquoteContent(el, source) {
  const result = [];
  let pendingInline = [];

  const flushInline = () => {
    if (pendingInline.length) {
      result.push({ type: 'paragraph', content: pendingInline });
      pendingInline = [];
    }
  };

  for (const child of el.children) {
    if (child.type === 'JSXText') {
      const text = child.value.replace(/\n\s*/g, ' ');
      if (text.trim()) pendingInline.push({ type: 'text', text: text.trim() });
    } else if (child.type === 'JSXExpressionContainer') {
      const { expression } = child;
      if (expression.type === 'TemplateLiteral') {
        const text = expression.quasis.map((q) => q.value.cooked ?? q.value.raw).join('');
        if (text.includes('\n')) {
          flushInline();
          const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
          const allBullets = lines.every((l) => l.startsWith('- '));
          if (allBullets) {
            result.push({
              type: 'bulletList',
              content: lines.map((l) => ({
                type: 'listItem',
                attrs: { color: null },
                content: [{ type: 'paragraph', content: [{ type: 'text', text: l.slice(2) }] }],
              })),
            });
          } else {
            lines.forEach((l) => result.push({ type: 'paragraph', content: [{ type: 'text', text: l }] }));
          }
        } else if (text) {
          pendingInline.push({ type: 'text', text });
        }
      } else {
        pendingInline.push({ type: 'text', text: ' ' });
      }
    } else if (child.type === 'JSXElement') {
      const name = getComponentName(child);
      if (name && BLOCK_COMPONENT_NAMES.has(name)) {
        flushInline();
        const node = jsxElementToNode(child, name, source);
        if (node) result.push(node);
      } else {
        pendingInline.push(...inlineChild(child));
      }
    }
  }
  flushInline();
  return result.length ? result : [{ type: 'paragraph', content: [] }];
}

function calloutNode(el, source) {
  const type = getProp(el, 'type') ?? 'info';
  return {
    type: 'callout',
    attrs: { calloutType: type },
    content: blockquoteContent(el, source),
  };
}

function listNode(el, listType) {
  const items = el.children
    .filter((c) => c.type === 'JSXElement' && getComponentName(c) === 'LI')
    .map(liNode);
  return items.length ? { type: listType, content: items } : null;
}

function liNode(el) {
  const color = getProp(el, 'color') ?? null;
  const NESTED_BLOCK = new Set(['UL', 'OL', 'Blockquote']);
  const isBlock = (c) => c.type === 'JSXElement' && NESTED_BLOCK.has(getComponentName(c));

  const paragraphContent = inlineContent(el.children.filter((c) => !isBlock(c)));
  const result = { type: 'listItem', attrs: { color }, content: [{ type: 'paragraph', content: paragraphContent }] };

  for (const child of el.children.filter(isBlock)) {
    const name = getComponentName(child);
    if (name === 'UL') { const n = listNode(child, 'bulletList'); if (n) result.content.push(n); }
    else if (name === 'OL') { const n = listNode(child, 'orderedList'); if (n) result.content.push(n); }
    else if (name === 'Blockquote') {
      const node = { type: 'blockquote', content: blockquoteContent(child) };
      result.content.push(node);
    }
  }
  return result;
}

function checkListNode(el) {
  const items = el.children
    .filter((c) => c.type === 'JSXElement' && getComponentName(c) === 'CheckItem')
    .map((c) => ({
      type: 'taskItem',
      attrs: { checked: getProp(c, 'checked') === true },
      content: [{ type: 'paragraph', content: inlineContent(c.children) }],
    }));
  return items.length ? { type: 'taskList', content: items } : null;
}

function figureNode(el) {
  const name = getComponentName(el);
  const src = getProp(el, 'src') ?? '';
  const caption = name === 'Figure' ? (getProp(el, 'caption') ?? '') : '';
  return { type: 'figure', attrs: { src, caption } };
}

function codeBlockNode(el) {
  const text = childrenText(el.children);
  return { type: 'codeBlock', attrs: { language: null }, content: [{ type: 'text', text }] };
}

function internalLinkParagraph(el) {
  const id = getProp(el, 'id') ?? '';
  const label = childrenText(el.children) || id;
  return {
    type: 'paragraph',
    content: [{
      type: 'text',
      text: label,
      marks: [{ type: 'internalLink', attrs: { id } }],
    }],
  };
}

// ─── Inline content ─────────────────────────────────────────────────────────

function inlineContent(children) {
  return children.flatMap(inlineChild).filter(Boolean);
}

function inlineChild(child) {
  if (child.type === 'JSXText') {
    const text = child.value.replace(/\n\s*/g, ' ');
    return text ? [{ type: 'text', text }] : [];
  }
  if (child.type === 'JSXExpressionContainer') {
    const { expression } = child;
    if (expression.type === 'TemplateLiteral') {
      // Collapse newlines in inline context — block context handles multiline separately
      const text = expression.quasis.map((q) => q.value.cooked ?? q.value.raw).join('').replace(/\n/g, ' ').trim();
      return text ? [{ type: 'text', text }] : [];
    }
    return [];
  }
  if (child.type !== 'JSXElement') return [];

  const name = getComponentName(child);
  switch (name) {
    case 'strong':
    case 'b': {
      const text = childrenText(child.children);
      return text ? [{ type: 'text', text, marks: [{ type: 'bold' }] }] : [];
    }
    case 'em':
    case 'i': {
      const text = childrenText(child.children);
      return text ? [{ type: 'text', text, marks: [{ type: 'italic' }] }] : [];
    }
    case 'code': {
      const text = childrenText(child.children);
      return text ? [{ type: 'text', text, marks: [{ type: 'code' }] }] : [];
    }
    case 'Code': {
      const text = childrenText(child.children);
      return text ? [{ type: 'text', text, marks: [{ type: 'code' }] }] : [];
    }
    case 'ExtLink': {
      const href = getProp(child, 'href') ?? '';
      const text = childrenText(child.children) || href;
      return [{ type: 'text', text, marks: [{ type: 'link', attrs: { href, target: '_blank' } }] }];
    }
    case 'InternalLink': {
      const id = getProp(child, 'id') ?? '';
      const text = childrenText(child.children) || id;
      return [{ type: 'text', text, marks: [{ type: 'internalLink', attrs: { id } }] }];
    }
    case 'CrossLink': {
      const pageId = getProp(child, 'pageId') ?? '';
      const anchor = getProp(child, 'anchor') ?? '';
      const id = anchor ? `${pageId}#${anchor}` : pageId;
      const text = childrenText(child.children) || pageId;
      return [{ type: 'text', text, marks: [{ type: 'internalLink', attrs: { id } }] }];
    }
    case 'Annotation': {
      const note = getProp(child, 'note') ?? '';
      const text = childrenText(child.children);
      return text ? [{ type: 'text', text, marks: [{ type: 'annotation', attrs: { note } }] }] : [];
    }
    default: {
      // Unknown component: extract text content
      const text = childrenText(child.children);
      return text ? [{ type: 'text', text }] : [];
    }
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function getComponentName(el) {
  const opening = el.openingElement;
  if (!opening) return null;
  const { name } = opening.name;
  return typeof name === 'string' ? name : null;
}

function getProp(el, propName) {
  const attr = el.openingElement?.attributes?.find(
    (a) => a.type === 'JSXAttribute' && a.name?.name === propName,
  );
  if (!attr) return undefined;
  const { value } = attr;
  if (!value) return true; // boolean prop
  if (value.type === 'StringLiteral') return value.value;
  if (value.type === 'JSXExpressionContainer') {
    const { expression } = value;
    if (expression.type === 'BooleanLiteral') return expression.value;
    if (expression.type === 'StringLiteral') return expression.value;
    if (expression.type === 'NumericLiteral') return expression.value;
  }
  return undefined;
}

function childrenText(children) {
  return children
    .map((c) => {
      if (c.type === 'JSXText') return c.value;
      if (c.type === 'JSXElement') return childrenText(c.children);
      return '';
    })
    .join('');
}
