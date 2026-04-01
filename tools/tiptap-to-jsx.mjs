/**
 * Serialize a TipTap doc JSON back to a JSX page file.
 * Uses surgical replacement: only the return(<div>) body is rewritten;
 * the original import line and export signature are preserved/updated.
 */

// Map from TipTap node/mark types to the JSX component names they require
const NODE_COMPONENTS = {
  heading:        (n) => `H${n.attrs?.level ?? 1}`,
  paragraph:      () => 'P',
  bulletList:     () => 'UL',
  orderedList:    () => 'OL',
  listItem:       () => 'LI',
  blockquote:     () => 'Blockquote',
  callout:        () => 'Callout',
  horizontalRule: () => 'HR',
  taskList:       () => 'CheckList',
  taskItem:       () => 'CheckItem',
  figure:         () => 'Figure',
  codeBlock:      () => 'Pre',
};

const MARK_COMPONENTS = {
  link:         'ExtLink',
  internalLink: 'InternalLink',
};

// Components that get included unconditionally
const ALWAYS_INCLUDE = ['Breadcrumb'];

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Convert a TipTap doc into a full JSX file string.
 * @param {object} doc - TipTap doc JSON
 * @param {string} label - Page title (for fallback H1)
 * @param {string} [existingSource] - Original file content to preserve non-content parts
 */
export function docToJsxFile(doc, label, existingSource = null) {
  const usedComponents = new Set(ALWAYS_INCLUDE);
  // Indent=6: inside export default → return( → <div>
  const bodyLines = (doc.content ?? []).map((n) => serializeNode(n, 6, usedComponents)).filter(Boolean);
  const bodyIndented = bodyLines.join('\n');

  if (existingSource) return surgicalReplace(existingSource, bodyIndented, usedComponents);

  // Generate from scratch
  const importList = [...usedComponents].sort().join(', ');
  return [
    `import { ${importList} } from '@/components/ui.jsx';`,
    '',
    `export default function Page({ go }) {`,
    `  return (`,
    `    <div>`,
    `      <Breadcrumb auto go={go} />`,
    bodyIndented,
    `    </div>`,
    `  );`,
    `}`,
    '',
  ].join('\n');
}

// ─── Surgical replacement ────────────────────────────────────────────────────

/**
 * Replace only the return body inside an existing JSX file,
 * and update the import line to reflect used components.
 */
function surgicalReplace(source, bodyIndented, usedComponents) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');

  // Update the ui.jsx import line
  const importIdx = lines.findIndex((l) => l.includes('@/components/ui.jsx'));
  if (importIdx !== -1) {
    const importList = [...usedComponents].sort().join(', ');
    lines[importIdx] = `import { ${importList} } from '@/components/ui.jsx';`;
  }

  // Find the <div> ... </div> return body and replace its inner children
  const divOpenIdx = lines.findIndex((l) => l.trimStart().startsWith('<div>'));
  const divCloseIdx = lines.findLastIndex((l) => l.trimStart().startsWith('</div>'));

  if (divOpenIdx === -1 || divCloseIdx === -1) return source; // fallback: no change

  // Preserve: Breadcrumb line and PageNav line if present
  const breadcrumbLine = lines.slice(divOpenIdx + 1, divCloseIdx).find((l) => l.includes('<Breadcrumb'));
  const pageNavLine    = lines.slice(divOpenIdx + 1, divCloseIdx).find((l) => l.includes('<PageNav'));

  const newInner = [
    breadcrumbLine ?? '      <Breadcrumb auto go={go} />',
    bodyIndented,
    ...(pageNavLine ? [pageNavLine] : []),
  ].filter(Boolean).join('\n');

  const result = [
    ...lines.slice(0, divOpenIdx + 1),
    newInner,
    ...lines.slice(divCloseIdx),
  ];
  return result.join('\n');
}

// ─── Node serializers ────────────────────────────────────────────────────────

function serializeNode(node, indent, used) {
  const pad = ' '.repeat(indent);
  switch (node.type) {
    case 'heading':       return serializeHeading(node, pad, used);
    case 'paragraph':     return serializeParagraph(node, pad, used);
    case 'bulletList':    return serializeList(node, 'UL', pad, used);
    case 'orderedList':   return serializeList(node, 'OL', pad, used);
    case 'blockquote':    return serializeBlockquote(node, pad, used);
    case 'callout':       return serializeCallout(node, pad, used);
    case 'horizontalRule':used.add('HR'); return `${pad}<HR />`;
    case 'taskList':      return serializeTaskList(node, pad, used);
    case 'figure':        return serializeFigure(node, pad, used);
    case 'codeBlock':     return serializeCodeBlock(node, pad, used);
    case 'nativeHtml':    return serializeNativeHtml(node, pad);
    default: return null;
  }
}

function serializeHeading(node, pad, used) {
  const level = node.attrs?.level ?? 1;
  const tag = `H${level}`;
  used.add(tag);
  const id = node.attrs?.id ? ` id="${node.attrs.id}"` : '';
  const inner = serializeInline(node.content ?? [], used);
  return `${pad}<${tag}${id}>${inner}</${tag}>`;
}

function serializeParagraph(node, pad, used) {
  const inner = serializeInline(node.content ?? [], used);
  if (!inner.trim()) return null;
  used.add('P');
  return `${pad}<P>${inner}</P>`;
}

function serializeList(node, tag, pad, used) {
  used.add(tag);
  used.add('LI');
  const items = (node.content ?? []).map((li) => {
    const colorAttr = li.attrs?.color ? ` color="${li.attrs.color}"` : '';
    const innerLines = (li.content ?? []).map((child) => {
      if (child.type === 'paragraph') {
        const text = serializeInline(child.content ?? [], used);
        // Check if text starts with '> ' (nested blockquote marker from parser)
        if (text.startsWith('&gt; ') || text.startsWith('> ')) {
          used.add('Blockquote');
          const bqText = text.replace(/^(&gt;|>) /, '');
          return `\n${pad}    <Blockquote>${bqText}</Blockquote>`;
        }
        return text;
      }
      return serializeNode(child, pad.length + 4, used) ?? '';
    });
    return `${pad}  <LI${colorAttr}>${innerLines.join('')}</LI>`;
  });
  return `${pad}<${tag}>\n${items.join('\n')}\n${pad}</${tag}>`;
}

function serializeBlockquote(node, pad, used) {
  used.add('Blockquote');
  const children = node.content ?? [];
  // Single paragraph → inline form
  if (children.length === 1 && children[0].type === 'paragraph') {
    const inner = serializeInline(children[0].content ?? [], used);
    return `${pad}<Blockquote>${inner}</Blockquote>`;
  }
  // Multi-block → multi-line form
  const inner = children.map((c) => serializeNode(c, pad.length + 2, used)).filter(Boolean).join('\n');
  return `${pad}<Blockquote>\n${inner}\n${pad}</Blockquote>`;
}

function serializeCallout(node, pad, used) {
  used.add('Callout');
  const type = node.attrs?.calloutType ?? 'info';
  const inner = serializeInline(node.content?.[0]?.content ?? [], used);
  return `${pad}<Callout type="${type}">${inner}</Callout>`;
}

// Output original JSX verbatim; first line gets pad, rest retain file indentation
function serializeNativeHtml(node, pad) {
  const jsx = node.attrs?.jsx;
  return jsx ? `${pad}${jsx}` : null;
}

function serializeTaskList(node, pad, used) {
  used.add('CheckList');
  used.add('CheckItem');
  const items = (node.content ?? []).map((item) => {
    const checked = item.attrs?.checked ? ' checked' : '';
    const text = serializeInline(item.content?.[0]?.content ?? [], used);
    return `${pad}  <CheckItem${checked}>${text}</CheckItem>`;
  });
  return `${pad}<CheckList>\n${items.join('\n')}\n${pad}</CheckList>`;
}

function serializeFigure(node, pad, used) {
  used.add('Figure');
  const src = node.attrs?.src ?? '';
  const caption = node.attrs?.caption ? ` caption="${node.attrs.caption}"` : '';
  return `${pad}<Figure src="${src}"${caption} />`;
}

function serializeCodeBlock(node, pad, used) {
  used.add('Pre');
  const text = (node.content ?? []).filter((c) => c.type === 'text').map((c) => c.text).join('');
  return `${pad}<Pre>${text}</Pre>`;
}

// ─── Inline serializer ───────────────────────────────────────────────────────

function serializeInline(nodes, used) {
  return (nodes ?? []).map((node) => {
    if (node.type !== 'text') return '';
    const text = escapeJsx(node.text ?? '');
    const marks = node.marks ?? [];

    // Apply marks (last-in-first-out wrapping)
    return marks.reduce((inner, mark) => {
      switch (mark.type) {
        case 'bold':   return `<strong>${inner}</strong>`;
        case 'italic': return `<em>${inner}</em>`;
        case 'code':   { used.add('Code'); return `<Code>${inner}</Code>`; }
        case 'link': {
          used.add('ExtLink');
          const href = mark.attrs?.href ?? '';
          return `<ExtLink href="${href}">${inner}</ExtLink>`;
        }
        case 'internalLink': {
          const id = mark.attrs?.id ?? '';
          if (id.includes('#')) {
            const [pageId, anchor] = id.split('#');
            used.add('CrossLink');
            return `<CrossLink pageId="${pageId}" anchor="${anchor}" go={go}>${inner}</CrossLink>`;
          }
          used.add('InternalLink');
          return `<InternalLink id="${id}" go={go}>${inner}</InternalLink>`;
        }
        case 'annotation': {
          used.add('Annotation');
          const note = mark.attrs?.note ?? '';
          return `<Annotation note="${escapeJsx(note)}">${inner}</Annotation>`;
        }
        default: return inner;
      }
    }, text);
  }).join('');
}

function escapeJsx(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
