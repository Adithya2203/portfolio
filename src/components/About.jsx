import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Zap, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Building end-to-end web applications with React, Node.js, and modern APIs.",
    color: "#00d4ff",
  },
  {
    icon: Cpu,
    title: "VLSI & Digital Design",
    desc: "Designing hardware systems in Verilog on Xilinx Vivado for FPGAs.",
    color: "#9d4edd",
  },
  {
    icon: Zap,
    title: "IoT Systems",
    desc: "Integrating sensors and microcontrollers (Arduino/ESP32) with cloud platforms.",
    color: "#34d399",
  },
  {
    icon: Target,
    title: "Hybrid Engineer Vision",
    desc: "Aiming to bridge hardware and software to build intelligent embedded systems.",
    color: "#fb923c",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        className="blob blob-violet"
        style={{
          width: "400px",
          height: "400px",
          top: "50%",
          left: "60%",
          transform: "translate(-50%,-50%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: "64px" }}
        >
          <p
            className="mono text-sm mb-3"
            style={{ color: "var(--neon-blue)", letterSpacing: "0.1em" }}
          >
            01. ABOUT ME
          </p>
          <h2 className="section-title">Who Am I?</h2>
          <div className="section-divider" style={{ marginBottom: "0" }} />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.15 }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              I'm{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Adithya Rao
              </span>
              , a 3rd Year Electronics and Communication Engineering student
              with a genuine passion for both hardware and software. I believe
              the most powerful solutions live at the intersection of these two
              worlds.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              On the software side, I build full-stack web applications using{" "}
              <span style={{ color: "var(--neon-blue)" }}>
                React, Node.js, and modern APIs
              </span>
              . On the hardware side, I work with{" "}
              <span style={{ color: "#9d4edd" }}>
                VLSI design, Verilog, FPGAs
              </span>
              , and{" "}
              <span style={{ color: "#34d399" }}>
                IoT systems using Arduino and ESP32
              </span>
              .
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                marginBottom: "32px",
              }}
            >
              My career goal is to become a{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                hybrid engineer
              </span>{" "}
              — someone who understands silicon, firmware, and cloud services
              well enough to build truly intelligent embedded systems.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "ECE Student",
                "Full Stack Dev",
                "VLSI Design",
                "IoT Systems",
                "Problem Solver",
                "Lifelong Learner",
              ].map((tag) => (
                <span key={tag} className="tag tag-blue">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: i * 0.1 },
                  },
                }}
                className="glass-card"
                style={{ padding: "24px 20px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${h.color}18`,
                    border: `1px solid ${h.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <h.icon size={20} style={{ color: h.color }} />
                </div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    marginBottom: "8px",
                    color: "var(--text-primary)",
                  }}
                >
                  {h.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
