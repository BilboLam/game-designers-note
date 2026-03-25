import React, { useId } from 'react';
import styles from './Annotation.module.css';

/** Inline term with hover/focus popover annotation (glossary-style). */
export function Annotation({ children, note }) {
  const tipId = useId();
  return (
    <span className={styles.hit} tabIndex={0} aria-describedby={tipId}>
      <span className={styles.inner}>
        <span className={styles.trigger}>{children}</span>
        <span id={tipId} className={styles.popover} role="tooltip">
          {note}
        </span>
      </span>
    </span>
  );
}
