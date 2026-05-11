import { GitBranch, Link, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,212,255,0.08)",
        padding: "40px 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <span className="mono font-bold text-lg neon-text">&lt;AA /&gt;</span>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.8rem",
              marginTop: "6px",
            }}
          >
            ECE Student · Full Stack Developer · VLSI Enthusiast
          </p>
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          Designed & Built by{" "}
          <span className="neon-text" style={{ fontWeight: 600 }}>
            Adithya Rao
          </span>{" "}
          · 2024
        </p>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {[
            {
              icon: GitBranch,
              href: "https://github.com/adithyaakshava",
              color: "#e2e8f0",
            },
            {
              icon: Link,
              href: "https://linkedin.com/in/adithyaakshava",
              color: "#0ea5e9",
            },
            {
              icon: Mail,
              href: "mailto:adithyaakshava@gmail.com",
              color: "#34d399",
            },
          ].map(({ icon: Icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(13,31,60,0.6)",
                border: "1px solid rgba(0,212,255,0.12)",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.borderColor = color + "40";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)";
              }}
            >
              <Icon size={15} />
            </a>
          ))}

          <button
            onClick={scrollTop}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "var(--neon-blue)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.1)";
            }}
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
