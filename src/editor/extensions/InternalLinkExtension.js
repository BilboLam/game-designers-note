import { Mark, mergeAttributes } from '@tiptap/core';

export const InternalLinkExtension = Mark.create({
  name: 'internalLink',
  inclusive: false,

  addAttributes() {
    return {
      id: { default: '' },
    };
  },

  parseHTML() {
    return [{ tag: 'span[data-internal-link]', getAttrs: (el) => ({ id: el.getAttribute('data-internal-link') }) }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, {
      'data-internal-link': HTMLAttributes.id,
      style: 'color: var(--color-link, #3a8a72); text-decoration: underline; cursor: pointer;',
    }), 0];
  },
});
