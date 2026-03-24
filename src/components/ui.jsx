import React from 'react';

export function Callout({ type = "info", label, children }) {
  const colors = {
    info: { border: "var(--link)", bg: "rgba(58,138,114,.08)", labelColor: "var(--link)" },
    warn: { border: "#c98b00", bg: "rgba(201,139,0,.08)", labelColor: "#c98b00" },
    tip:  { border: "var(--accent)", bg: "var(--accent-bg)", labelColor: "var(--accent)" },
  };
  const c = colors[type] || colors.info;
  return (
    <div style={{ borderLeft: `3px solid ${c.border}`, background: c.bg, borderRadius: "0 8px 8px 0", padding: "12px 16px", margin: "16px 0", fontSize: 14 }}>
      {label && <div style={{ fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.07em", color: c.labelColor, marginBottom: 4 }}>{label}</div>}
      <div style={{ color: "var(--text)", lineHeight: 1.65 }}>{children}</div>
    </div>
  );
}

export function Blockquote({ children }) {
  return (
    <blockquote style={{ borderLeft: "3px solid var(--accent)", background: "var(--block-bg)", borderRadius: "0 6px 6px 0", padding: "10px 16px", margin: "12px 0", fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
      {children}
    </blockquote>
  );
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
      <span style={{ color:"var(--hint)", fontSize:12 }}>›</span>
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

export function Breadcrumb({ crumbs, go }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap", fontSize:12, color:"var(--hint)", marginBottom:26 }}>
      {crumbs.map((c, i) => (
        <span key={i} style={{ display:"flex", alignItems:"center", gap:6 }}>
          {i > 0 && <span>›</span>}
          <span onClick={c.id ? ()=>go(c.id) : undefined}
            style={{ cursor: c.id ? "pointer" : "default", color: c.id ? "var(--muted)" : "var(--hint)" }}
            onMouseEnter={e=>{ if(c.id) e.target.style.color="var(--accent)"; }}
            onMouseLeave={e=>{ if(c.id) e.target.style.color="var(--muted)"; }}>
            {c.label}
          </span>
        </span>
      ))}
    </div>
  );
}

export function H1({ children }) {
  return <h1 style={{ fontFamily:"'Lora',Georgia,serif", fontSize:28, fontWeight:700, color:"var(--text)", lineHeight:1.3, marginBottom:12, letterSpacing:"-0.02em" }}>{children}</h1>;
}

export function H2({ id, children }) {
  return <h2 id={id} style={{ fontFamily:"'Lora',Georgia,serif", fontSize:19, fontWeight:600, color:"var(--text)", marginTop:40, marginBottom:10, paddingBottom:8, borderBottom:"1px solid var(--border)" }}>{children}</h2>;
}

export function H3({ id, children }) {
  return <h3 id={id} style={{ fontSize:15, fontWeight:600, color:"var(--text)", marginTop:24, marginBottom:6 }}>{children}</h3>;
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

export function LI({ children }) {
  return <li style={{ marginBottom:5, color:"var(--text)", lineHeight:1.7 }}>{children}</li>;
}

export function OL({ children }) {
  return <ol style={{ paddingLeft:20, marginBottom:14 }}>{children}</ol>;
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

export function HR() {
  return <hr style={{ border:"none", borderTop:"1px solid var(--border)", margin:"28px 0" }} />;
}
