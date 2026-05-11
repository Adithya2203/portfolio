import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "DATA SCIENCE",
    issuer: "ORACLE",
    year: "2024",
    icon: "🏆",
    color: "#00d4ff",
    type: "Certification",
  },
  {
    title: "INTRODUCTION TO JAVA",
    issuer: "NPTEL",
    year: "2024",
    icon: "♨️",
    color: "#fb923c",
    type: "Certification",
  },

  {
    title: "Python",
    issuer: "CISCO",
    year: "2024",
    icon: "🐍",
    color: "#9d4edd",
    type: "Certification",
  },
  {
    title: "Front end Development",
    issuer: "Test Yantra",
    year: "2024",
    icon: "⚛️",
    color: "#00d4ff",
    type: "Certification",
  },
  {
    title: "Oracle SQL",
    issuer: "GUVI",
    year: "2025",
    icon: "⛃",
    color: "#fb923c",
    type: "Course",
  },
];

const achievements = [
  {
    title: "Smart India Hackathon",
    description:
      "Participated in SIH 2024, building an Sentiment Analyzer Tool solution with a team of 6.",
    icon: "🏅",
    color: "#fbbf24",
    type: "Hackathon",
  },
  {
    title: "College Tech Fest Winner",
    description:
      "Won 1st place in the hardware project exhibition for the IoT CO Detection System.",
    icon: "🥇",
    color: "#00d4ff",
    type: "Achievement",
  },

  {
    title: "Panimalar Engineering College",
    description:
      "Electronics and Communication Engineering — CGPA: 8.4 (ongoing).",
    icon: "🎓",
    color: "#34d399",
    type: "Education",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      style={{
        padding: "120px 0",
        position: "relative",
        background: "rgba(5,11,21,0.6)",
      }}
    >
      <div
        className="blob blob-violet"
        style={{
          width: "400px",
          height: "400px",
          top: "20%",
          left: "-100px",
          opacity: 0.1,
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <p
            className="mono text-sm mb-3"
            style={{ color: "var(--neon-blue)", letterSpacing: "0.1em" }}
          >
            05. ACHIEVEMENTS
          </p>
          <h2 className="section-title">Certifications & Wins</h2>
          <div className="section-divider" />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <BookOpen size={18} style={{ color: "var(--neon-blue)" }} />
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                }}
              >
                Certifications & Courses
              </h3>
            </motion.div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="glass-card"
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--text-primary)",
                        marginBottom: "3px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {cert.title}
                    </p>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.78rem",
                      }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "4px",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: cert.color,
                        fontFamily: "JetBrains Mono",
                        fontWeight: 600,
                      }}
                    >
                      {cert.year}
                    </span>
                    <span
                      className="tag"
                      style={{
                        background: `${cert.color}10`,
                        color: cert.color,
                        border: `1px solid ${cert.color}25`,
                        fontSize: "0.65rem",
                        padding: "2px 8px",
                      }}
                    >
                      {cert.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <Trophy size={18} style={{ color: "#fbbf24" }} />
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                }}
              >
                Achievements & Education
              </h3>
            </motion.div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="glass-card"
                  style={{ padding: "22px 24px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: `${ach.color}15`,
                        border: `1px solid ${ach.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                        flexShrink: 0,
                      }}
                    >
                      {ach.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: "8px",
                          marginBottom: "6px",
                        }}
                      >
                        <h4
                          style={{
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          {ach.title}
                        </h4>
                        <span
                          className="tag"
                          style={{
                            background: `${ach.color}10`,
                            color: ach.color,
                            border: `1px solid ${ach.color}25`,
                            fontSize: "0.65rem",
                            flexShrink: 0,
                          }}
                        >
                          {ach.type}
                        </span>
                      </div>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.82rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
