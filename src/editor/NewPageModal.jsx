import { useState, useCallback } from 'react';
import styles from './NewPageModal.module.css';

function toKebabCase(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getNodePath(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node.path ?? '';
    if (node.children) {
      const found = getNodePath(node.children, id);
      if (found !== null) return found;
    }
  }
  return null;
}

function flattenForSelect(nodes, depth = 0) {
  const result = [];
  for (const node of nodes) {
    if (node.id === 'home') continue;
    result.push({ id: node.id, label: node.label, depth });
    if (node.children) result.push(...flattenForSelect(node.children, depth + 1));
  }
  return result;
}

export function NewPageModal({ navData, defaultParentId, onClose, onCreated }) {
  const [label, setLabel] = useState('');
  const [id, setId] = useState('');
  const [parentId, setParentId] = useState(defaultParentId ?? '');
  const [icon, setIcon] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const autoId = id || toKebabCase(label);

  const parentPath = parentId ? getNodePath(navData, parentId) : null;
  const autoPath = parentPath !== null ? `${parentPath}/${autoId}` : autoId;

  const options = flattenForSelect(navData);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!label.trim()) { setError('Title is required'); return; }
    setSaving(true);
    setError('');
    try {
      const resp = await fetch('/api/editor/page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: autoId, label: label.trim(), path: autoPath, parentId: parentId || null, icon: icon || undefined }),
      });
      const data = await resp.json();
      if (data.ok) {
        onCreated(autoId);
      } else {
        setError(data.error ?? 'Create failed');
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setSaving(false);
    }
  }, [label, autoId, autoPath, parentId, icon, onCreated]);

  return (
    <div className={styles.backdrop} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.modal}>
        <h2 className={styles.title}>New Page</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>Title *</span>
            <input
              autoFocus
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Game Loop"
            />
          </label>
          <label className={styles.field}>
            <span>ID <small>(auto-generated from title)</small></span>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={toKebabCase(label) || 'page-id'}
            />
          </label>
          <label className={styles.field}>
            <span>Parent</span>
            <select value={parentId} onChange={(e) => setParentId(e.target.value)}>
              <option value="">— Root —</option>
              {options.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {'　'.repeat(opt.depth)}{opt.label}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Path <small>(auto-generated)</small></span>
            <input value={autoPath} readOnly style={{ color: '#888' }} />
          </label>
          <label className={styles.field}>
            <span>Icon <small>(FontAwesome name, optional)</small></span>
            <input value={icon} onChange={(e) => setIcon(e.target.value)} placeholder="e.g. gamepad" />
          </label>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.actions}>
            <button type="button" className={styles.cancel} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.create} disabled={saving}>
              {saving ? 'Creating…' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
