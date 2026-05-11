import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link, Download, ArrowDown, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "ECE Student",
  "VLSI Enthusiast",
  "IoT Developer",
  "React Developer",
  "Problem Solver",
];

function TypeWriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(
        () => setDisplayed(role.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return <span className="neon-text font-bold blink-cursor">{displayed}</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      <div
        className="blob blob-blue"
        style={{
          width: "600px",
          height: "600px",
          top: "-150px",
          right: "-150px",
        }}
      />
      <div
        className="blob blob-purple"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          left: "-100px",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span
                className="tag tag-blue mono mb-4"
                style={{ display: "inline-flex" }}
              >
                ✦ Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
              }}
            >
              Hi, I'm{" "}
              <span className="animated-gradient-text">Adithya Rao</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                marginBottom: "20px",
                minHeight: "2.2em",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
                I'm a{" "}
              </span>
              <TypeWriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "580px",
                marginBottom: "36px",
              }}
            >
              Building smart digital solutions by combining software,
              electronics, and innovation. 3rd Year ECE student bridging the gap
              between hardware and software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <a href="/resume.pdf" download className="btn-primary">
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                <span>Get In Touch</span>
              </a>
              <div style={{ display: "flex", gap: "12px", marginLeft: "4px" }}>
                <a
                  href="https://github.com/adithyaakshava"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(13,31,60,0.8)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                    e.currentTarget.style.color = "var(--neon-blue)";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(0,212,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <GitBranch size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/adithyaakshava"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(13,31,60,0.8)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(157,78,221,0.5)";
                    e.currentTarget.style.color = "#c084fc";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(157,78,221,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Link size={18} />
                </a>
                <a
                  href="mailto:adithyaakshava@gmail.com"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(13,31,60,0.8)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(52,211,153,0.5)";
                    e.currentTarget.style.color = "#34d399";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(52,211,153,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "56px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {[
                { num: "10+", label: "Projects Built" },
                { num: "2+", label: "Internships" },
                { num: "5+", label: "Certifications" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="neon-text font-bold"
                    style={{
                      fontSize: "1.8rem",
                      fontFamily: "Space Grotesk",
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.8rem",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block floating"
            style={{ position: "relative" }}
          >
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(157,78,221,0.15))",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              className="pulse-glow"
            >
              <div
                style={{
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(157,78,221,0.08))",
                  border: "1px solid rgba(157,78,221,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Space Grotesk",
                  fontSize: "7rem",
                  userSelect: "none",
                }}
              >
                👨‍💻
              </div>
              {[
                { label: "React", color: "#00d4ff", top: "10%", right: "-12%" },
                {
                  label: "VLSI",
                  color: "#9d4edd",
                  bottom: "20%",
                  right: "-14%",
                },
                { label: "IoT", color: "#34d399", bottom: "10%", left: "-10%" },
                {
                  label: "Node.js",
                  color: "#fb923c",
                  top: "20%",
                  left: "-14%",
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  style={{
                    position: "absolute",
                    top: badge.top,
                    bottom: badge.bottom,
                    left: badge.left,
                    right: badge.right,
                    background: "rgba(10,22,40,0.9)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${badge.color}40`,
                    borderRadius: "10px",
                    padding: "8px 14px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: badge.color,
                    fontFamily: "JetBrains Mono",
                    whiteSpace: "nowrap",
                    boxShadow: `0 0 16px ${badge.color}20`,
                  }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--text-secondary)", cursor: "pointer" }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
