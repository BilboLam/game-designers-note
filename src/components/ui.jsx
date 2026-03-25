import React from 'react';
import { Icon } from '@/components/Icon.jsx';
import { usePageChrome } from '@/context/PageChromeContext.jsx';
import uiStyles from './ui.module.css';

const CALLOUT_ICONS = { info: 'circle-question', warn: 'triangle-exclamation', tip: 'lightbulb', alarm: 'circle-exclamation' };
const CALLOUT_BG = { alarm: 'rgba(192,120,64,.13)' };
const CALLOUT_ICON_COLOR = { alarm: 'var(--accent)' };

export function Callout({ type = "info", label, children }) {
  const icon = CALLOUT_ICONS[type] || CALLOUT_ICONS.info;
  const bg = CALLOUT_BG[type] || 'var(--callout-bg)';
  const iconColor = CALLOUT_ICON_COLOR[type] || 'var(--muted)';
  return (
    <div style={{ background: bg, borderRadius: 8, padding: "12px 16px", margin: "16px 0", display: "flex", gap: 10, alignItems: "flex-start" }}>
      <Icon name={icon} style={{ marginTop: 3, color: iconColor, flexShrink: 0 }} />
      <div style={{ color: "var(--text)", lineHeight: 1.65 }}>
        {label && <span style={{ marginRight: 6 }}>{label}</span>}
        {children}
      </div>
    </div>
  );
}

export function Blockquote({ children }) {
  let content = children;
  if (typeof children === 'string') {
    const lines = children.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 0 && lines.every(l => l.startsWith('- ')))
      content = <ul>{lines.map((l, i) => <li key={i}><span style={{ color: 'var(--text)' }}>{l.slice(2)}</span></li>)}</ul>;
  }
  return <blockquote className={uiStyles.blockquote}>{content}</blockquote>;
}

export function Code({ children }) {
  return <code style={{ fontFamily: "monospace", fontSize: "0.875em", background: "var(--code-bg)", padding: "2px 5px", borderRadius: 4, color: "var(--accent)" }}>{children}</code>;
}

export function Pre({ children }) {
  return (
    <pre style={{ background: "var(--code-bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px", overflowX: "auto", margin: "16px 0", fontSize: 13, fontFamily: "monospace", color: "var(--text)", lineHeight: 1.6 }}>
      {children}
    </pre>
  );
}

export function LinkedItem({ label, desc, onClick }) {
  return (
    <div onClick={onClick} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 16px", border:"1px solid var(--border)", borderRadius:8, cursor:"pointer", marginBottom:8, transition:"all .15s" }}
      onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.background="var(--accent-bg)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.background="transparent"; }}>
      <div>
        <div style={{ fontWeight:500, fontSize:14, color:"var(--text)" }}>{label}</div>
        {desc && <div style={{ fontSize:12.5, color:"var(--muted)", marginTop:2 }}>{desc}</div>}
      </div>
      <Icon name="chevron-right" style={{ color: 'var(--hint)', fontSize: 12, flexShrink: 0 }} />
    </div>
  );
}

export function PageNav({ prev, prevLabel, next, nextLabel, go }) {
  return (
    <div style={{ display:"flex", gap:14, marginTop:56, paddingTop:22, borderTop:"1px solid var(--border)" }}>
      {prev ? (
        <div onClick={()=>go(prev)} style={{ flex:1, padding:"13px 16px", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:9, cursor:"pointer", transition:"all .15s" }}
          onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text)"; }}>
          <div style={{ fontSize:10.5, color:"var(--hint)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:3 }}>Previous</div>
          <div style={{ fontWeight:500, fontSize:13.5, color:"inherit" }}>← {prevLabel}</div>
        </div>
      ) : <div style={{ flex:1 }} />}
      {next ? (
        <div onClick={()=>go(next)} style={{ flex:1, padding:"13px 16px", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:9, cursor:"pointer", textAlign:"right", transition:"all .15s" }}
          onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.color="var(--accent)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text)"; }}>
          <div style={{ fontSize:10.5, color:"var(--hint)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:3 }}>Next</div>
          <div style={{ fontWeight:500, fontSize:13.5, color:"inherit" }}>{nextLabel} →</div>
        </div>
      ) : <div style={{ flex:1 }} />}
    </div>
  );
}

export function Breadcrumb({ crumbs, go, auto }) {
  const chrome = usePageChrome();
  const list = auto ? (chrome?.breadcrumbCrumbs ?? []) : (crumbs ?? []);
  if (!list.length) return null;
  return (
    <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap", fontSize:14, marginBottom:26 }}>
      {list.map((c, i) => (
        <span key={c.id ?? i} style={{ display:"flex", alignItems:"center", gap:6 }}>
          {i > 0 && <span aria-hidden style={{ color:"var(--hint)" }}>›</span>}
          {c.id ? (
            <button
              type="button"
              onClick={() => go(c.id)}
              style={{
                margin:0, padding:0, border:"none", background:"none", cursor:"pointer",
                font:"inherit", color:"var(--color-link)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-link)"; }}
            >
              {c.label}
            </button>
          ) : (
            <span style={{ color:"var(--hint)" }}>{c.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export function H1({ children }) {
  const chrome = usePageChrome();
  const iconName = chrome?.titleIconName ?? null;
  return (
    <h1 className={uiStyles.h1Row}>
      {iconName ? (
        <span className={uiStyles.h1LeadCol}>
          <Icon name={iconName} className={uiStyles.h1Icon} />
        </span>
      ) : null}
      <span className={uiStyles.h1Text}>{children}</span>
    </h1>
  );
}

export function H2({ id, children }) {
  return <h2 id={id} style={{ fontSize:22, fontWeight:600, color:"var(--text)", marginTop:44, marginBottom:12, paddingBottom:8, borderBottom:"1px solid var(--border)" }}>{children}</h2>;
}

export function H3({ id, children }) {
  return <h3 id={id} style={{ fontSize:17, fontWeight:600, color:"var(--text)", marginTop:28, marginBottom:8 }}>{children}</h3>;
}

export function H4({ id, children }) {
  return <h4 id={id} style={{ fontSize:15, fontWeight:600, color:"var(--text)", marginTop:20, marginBottom:6 }}>{children}</h4>;
}

export function P({ children }) {
  return <p style={{ color:"var(--text)", marginBottom:12, lineHeight:1.75 }}>{children}</p>;
}

export function Subtitle({ children }) {
  return <p style={{ fontSize:15.5, color:"var(--muted)", marginBottom:28, lineHeight:1.65 }}>{children}</p>;
}

export function UL({ children }) {
  return <ul style={{ paddingLeft:20, marginBottom:14 }}>{children}</ul>;
}

export function LI({ children, color }) {
  return (
    <li style={{ marginBottom:5, color:"var(--muted)", lineHeight:1.7 }}>
      <span className={color ? uiStyles[color] : undefined} style={color ? undefined : { color:"var(--text)" }}>{children}</span>
    </li>
  );
}

export function OL({ children }) {
  return <ol style={{ paddingLeft:20, marginBottom:14 }}>{children}</ol>;
}

export function CheckList({ children }) {
  return <ul style={{ listStyle:'none', paddingLeft:0, marginBottom:14 }}>{children}</ul>;
}

export function CheckItem({ checked, children }) {
  return (
    <li style={{ marginBottom:6, color:'var(--text)', lineHeight:1.7, display:'flex', gap:8, alignItems:'flex-start' }}>
      <input type="checkbox" disabled defaultChecked={!!checked} style={{ marginTop:4, flexShrink:0 }} />
      <span>{children}</span>
    </li>
  );
}

export function ExtLink({ href, children }) {
  return <a href={href} target="_blank" rel="noreferrer" style={{ color:"var(--link)", textDecoration:"none" }}
    onMouseEnter={e=>e.target.style.textDecoration="underline"}
    onMouseLeave={e=>e.target.style.textDecoration="none"}>{children}</a>;
}

export function InternalLink({ id, children, go }) {
  return <span onClick={()=>go(id)} style={{ color:"var(--link)", cursor:"pointer", textDecoration:"none" }}
    onMouseEnter={e=>e.target.style.textDecoration="underline"}
    onMouseLeave={e=>e.target.style.textDecoration="none"}>{children}</span>;
}

export function CrossLink({ pageId, anchor, children, go }) {
  return <span onClick={()=>go(pageId, anchor)} style={{ color:"var(--link)", cursor:"pointer", textDecoration:"none" }}
    onMouseEnter={e=>e.target.style.textDecoration="underline"}
    onMouseLeave={e=>e.target.style.textDecoration="none"}>{children}</span>;
}

// Show a fullscreen preview for content images.
export function ZoomableImage({ src, alt, width, loading = 'lazy' }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onClick={() => setOpen(true)}
        style={{ maxWidth: width ?? '480px', width: '100%', borderRadius: 8, cursor: 'zoom-in', display: 'block' }}
      />
      {open && (
        <div
          role="button"
          tabIndex={-1}
          aria-label="Close image preview"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.82)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            zIndex: 1000,
          }}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            style={{
              position: 'fixed',
              top: 18,
              right: 18,
              width: 38,
              height: 38,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 999,
              background: 'rgba(0, 0, 0, 0.48)',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            <Icon name="xmark" style={{ fontSize: 15 }} />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 'min(92vw, 1400px)', maxHeight: '88vh', borderRadius: 12, boxShadow: '0 18px 60px rgba(0, 0, 0, 0.45)' }}
          />
        </div>
      )}
    </>
  );
}

// Render images with caption and click-to-zoom preview.
export function Figure({ src, caption, width }) {
  const label = caption ?? src.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
  return (
    <figure style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ZoomableImage src={src} alt={label} width={width} />
      <figcaption style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, textAlign: 'center' }}>{label}</figcaption>
    </figure>
  );
}

export function HR() {
  return <hr style={{ border:"none", borderTop:"1px solid var(--border)", margin:"28px 0" }} />;
}

export { Annotation } from './Annotation.jsx';
