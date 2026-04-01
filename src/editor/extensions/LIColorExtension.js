import { ListItem } from '@tiptap/extension-list-item';

// Extends the built-in ListItem node with a `color` attribute (green/red/null)
export const LIColorExtension = ListItem.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      color: { default: null },
    };
  },

  renderHTML({ HTMLAttributes }) {
    const { color, ...rest } = HTMLAttributes;
    const colorStyle = color === 'green'
      ? 'color: var(--color-green, #3a8a72);'
      : color === 'red'
        ? 'color: var(--color-red, #c04040);'
        : '';
    return ['li', { ...rest, style: colorStyle || undefined }, 0];
  },
});
