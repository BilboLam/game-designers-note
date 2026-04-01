import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';

const TYPE_STYLES = {
  info:  { bg: '#e8f4fd', border: '#4a90d9', icon: 'ℹ' },
  warn:  { bg: '#fff8e1', border: '#f0a500', icon: '⚠' },
  tip:   { bg: '#e8f6ee', border: '#3a8a72', icon: '✦' },
  alarm: { bg: '#fdecea', border: '#c04040', icon: '✕' },
};

export function CalloutNodeView({ node, updateAttributes }) {
  const type = node.attrs.calloutType ?? 'info';
  const style = TYPE_STYLES[type] ?? TYPE_STYLES.info;

  return (
    <NodeViewWrapper>
      <div style={{ background: style.bg, borderLeft: `4px solid ${style.border}`, padding: '8px 12px', borderRadius: '4px', margin: '8px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
        <span style={{ color: style.border, fontWeight: 'bold', flexShrink: 0 }}>{style.icon}</span>
        <div style={{ flex: 1 }}>
          <NodeViewContent />
        </div>
        <select
          contentEditable={false}
          value={type}
          onChange={(e) => updateAttributes({ calloutType: e.target.value })}
          style={{ fontSize: '11px', border: 'none', background: 'transparent', cursor: 'pointer', color: style.border }}
        >
          <option value="info">info</option>
          <option value="warn">warn</option>
          <option value="tip">tip</option>
          <option value="alarm">alarm</option>
        </select>
      </div>
    </NodeViewWrapper>
  );
}
