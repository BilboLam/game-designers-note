import React from 'react';
import { Icon } from '@/components/Icon.jsx';
import styles from './NavItem.module.css';

export function NavItem({ node, currentId, onNavRowClick, depth = 0, expandedIds, toggleExpand }) {
  const isActive = node.id === currentId;
  const hasChildren = node.children && node.children.length > 0;
  const showChildren = hasChildren && expandedIds.has(node.id);
  const indentPx = 16 + depth * 12;
  const rowClass = [
    styles.row,
    depth === 0 && styles.rowDepthRoot,
    isActive ? styles.rowCurrent : styles.rowPlain,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <div
        className={rowClass}
        style={{ paddingLeft: indentPx }}
        onClick={() => onNavRowClick(node.id, hasChildren)}
      >
        {node.icon && <Icon name={node.icon} className={styles.navIcon} />}
        <span className={styles.label}>{node.label}</span>
        {hasChildren && (
          <span
            className={`${styles.expandToggle} ${expandedIds.has(node.id) ? styles.expandToggleOpen : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand(node.id);
            }}
          >
            ▶
          </span>
        )}
      </div>
      {hasChildren && showChildren && (
        <div>
          {node.children.map((child) => (
            <NavItem
              key={child.path ?? child.id}
              node={child}
              currentId={currentId}
              onNavRowClick={onNavRowClick}
              depth={depth + 1}
              expandedIds={expandedIds}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
}
