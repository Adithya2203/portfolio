import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "VLSI Implementation of OFDM Transceiver",
    subtitle: "FPGA-based OFDM Transceiver System",
    description:
      "Complete implementation of an OFDM transceiver in Verilog HDL, including FFT/IFFT blocks, cyclic prefix insertion/removal, channel modeling, and BER analysis. Synthesized and tested on Xilinx Vivado targeting Artix-7 FPGA with timing closure achieved.",
    tags: ["Verilog", "Vivado", "FPGA", "OFDM", "DSP"],
    tagStyle: "orange",
    github: "https://github.com/adithyaakshava",
    live: null,
    category: "VLSI",
    emoji: "🔬",
    image: "https://via.placeholder.com/400x200/FFA500/FFFFFF?text=VLSI+OFDM",
    gradient:
      "linear-gradient(135deg, rgba(251,146,60,0.15), rgba(157,78,221,0.08))",
    borderColor: "rgba(251,146,60,0.25)",
    accentColor: "#fb923c",
    highlights: [
      "FFT/IFFT RTL Design",
      "Cyclic Prefix Handling",
      "BER Analysis",
      "FPGA Synthesis",
    ],
  },
  {
    id: 2,
    title: "IoT Carbon Monoxide Detection System",
    subtitle: "Smart CO Detection & Ventilation Control",
    description:
      "Real-time IoT system for carbon monoxide detection using Arduino and MQ-7 sensors. Features automatic fan control, cloud connectivity, web dashboard for monitoring, and emergency alert system via SMS/email notifications.",
    tags: ["Arduino", "Sensors", "IoT", "MQ-7", "ESP32"],
    tagStyle: "green",
    github: "https://github.com/adithyaakshava",
    live: null,
    category: "IoT",
    emoji: "🤖",
    image:
      "https://via.placeholder.com/400x200/34D399/FFFFFF?text=IoT+CO+Detection",
    gradient:
      "linear-gradient(135deg, rgba(52,211,153,0.12), rgba(0,212,255,0.06))",
    borderColor: "rgba(52,211,153,0.25)",
    accentColor: "#34d399",
    highlights: [
      "Real-time CO Monitoring",
      "Auto Ventilation Control",
      "Web Dashboard",
      "Emergency Alerts",
    ],
  },
  {
    id: 3,
    title: "TUNZ - Music Streaming Application",
    subtitle: "Modern Music Streaming Platform",
    description:
      "A modern music streaming platform with playlist management, audio player UI, search functionality, responsive design, and smooth user experience. Built with React frontend, Node.js backend, MongoDB database, and Express.js for API development.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Music Streaming"],
    tagStyle: "purple",
    github: "https://github.com/adithyaakshava",
    live: null,
    category: "Full Stack",
    emoji: "🎵",
    image:
      "https://via.placeholder.com/400x200/9D4EDD/FFFFFF?text=TUNZ+Music+App",
    gradient:
      "linear-gradient(135deg, rgba(157,78,221,0.15), rgba(0,212,255,0.06))",
    borderColor: "rgba(157,78,221,0.25)",
    accentColor: "#9d4edd",
    highlights: [
      "Playlist Management",
      "Audio Player UI",
      "Search Functionality",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    title: "Advanced Web Development Projects",
    subtitle: "Modern Web Applications Collection",
    description:
      "Collection of advanced web development projects showcasing modern frontend technologies, interactive user interfaces, and responsive design patterns. Built with React, JavaScript, and Tailwind CSS for optimal performance and user experience.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Web Development"],
    tagStyle: "blue",
    github: "https://github.com/adithyaakshava",
    live: null,
    category: "Web Development",
    emoji: "💻",
    image:
      "https://via.placeholder.com/400x200/00D4FF/FFFFFF?text=Web+Dev+Projects",
    gradient:
      "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(123,47,247,0.08))",
    borderColor: "rgba(0,212,255,0.25)",
    accentColor: "#00d4ff",
    highlights: [
      "Interactive UI Components",
      "Responsive Design",
      "Modern JavaScript",
      "Performance Optimization",
    ],
  },
];

const tagStyles = {
  blue: "tag-blue",
  purple: "tag-purple",
  green: "tag-green",
  orange: "tag-orange",
};

const filters = ["All", "VLSI", "IoT", "Full Stack", "Web Development"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        background: "rgba(5,11,21,0.5)",
      }}
    >
      <div
        className="blob blob-purple"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          left: "-80px",
          opacity: 0.12,
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
          style={{ marginBottom: "48px" }}
        >
          <p
            className="mono text-sm mb-3"
            style={{ color: "var(--neon-blue)", letterSpacing: "0.1em" }}
          >
            03. PROJECTS
          </p>
          <h2 className="section-title">Featured Work</h2>
          <div className="section-divider" />
          <p className="section-subtitle" style={{ marginTop: "16px" }}>
            Projects spanning VLSI design, IoT systems, and full-stack
            development.
          </p>
        </motion.div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: "1px solid",
                borderColor:
                  active === f
                    ? "rgba(0,212,255,0.5)"
                    : "rgba(255,255,255,0.08)",
                background:
                  active === f ? "rgba(0,212,255,0.12)" : "transparent",
                color:
                  active === f ? "var(--neon-blue)" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.82rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "Inter",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))",
            gap: "24px",
          }}
          layout
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: project.gradient,
                  border: `1px solid ${hovered === project.id ? project.accentColor + "50" : project.borderColor}`,
                  borderRadius: "20px",
                  padding: "32px",
                  cursor: "default",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  transform:
                    hovered === project.id ? "translateY(-6px)" : "none",
                  boxShadow:
                    hovered === project.id
                      ? `0 16px 48px ${project.accentColor}18`
                      : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    fontSize: "8rem",
                    opacity: hovered === project.id ? 0.1 : 0.06,
                    userSelect: "none",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {project.emoji}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${project.accentColor}18`,
                      border: `1px solid ${project.accentColor}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.6rem",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                  <span
                    className="tag"
                    style={{
                      background: `${project.accentColor}15`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}30`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: "6px",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: project.accentColor,
                    fontSize: "0.8rem",
                    marginBottom: "14px",
                    fontWeight: 500,
                  }}
                >
                  {project.subtitle}
                </p>

                <div
                  style={{
                    marginBottom: "20px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: `1px solid ${project.accentColor}20`,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      marginBottom: "10px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    KEY HIGHLIGHTS
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "6px",
                    }}
                  >
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.78rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <ChevronRight
                          size={12}
                          style={{ color: project.accentColor, flexShrink: 0 }}
                        />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag ${tagStyles[project.tagStyle]}`}
                      style={{ fontSize: "0.7rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "9px 18px",
                      borderRadius: "10px",
                      background: "rgba(13,31,60,0.8)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = project.accentColor;
                      e.currentTarget.style.borderColor =
                        project.accentColor + "40";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    <GitBranch size={14} /> View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "9px 18px",
                        borderRadius: "10px",
                        background: `${project.accentColor}18`,
                        border: `1px solid ${project.accentColor}40`,
                        color: project.accentColor,
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
