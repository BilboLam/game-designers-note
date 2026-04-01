import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { FigureNodeView } from '../nodeviews/FigureNodeView.jsx';

export const FigureExtension = Node.create({
  name: 'figure',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      src:     { default: '' },
      caption: { default: '' },
    };
  },

  parseHTML() {
    return [{ tag: 'figure[data-src]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['figure', mergeAttributes(HTMLAttributes, { 'data-src': HTMLAttributes.src })];
  },

  addNodeView() {
    return ReactNodeViewRenderer(FigureNodeView);
  },
});
