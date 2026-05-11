import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, Mail, GitBranch, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Link,
    label: "LinkedIn",
    handle: "https://www.linkedin.com/in/adithya-rao-2411a32a5/",
    href: "https://www.linkedin.com/in/adithya-rao-2411a32a5/",
    color: "#0ea5e9",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "raoadithya2203@gmail.com",
    href: "mailto:raoadithya2203@gmail.com",
    color: "#34d399",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    handle: "https://github.com/Adithya2203",
    href: "https://github.com/Adithya2203",
    color: "#cbd5e1",
  },
];

const extraDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
  },
  {
    icon: Link,
    label: "Availability",
    value: "Open for internships, collaborations and full-time work",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        className="blob blob-blue"
        style={{
          width: "450px",
          height: "450px",
          bottom: "-100px",
          right: "-100px",
          opacity: 0.12,
        }}
      />
      <div
        className="blob blob-purple"
        style={{
          width: "350px",
          height: "350px",
          top: "-50px",
          left: "-80px",
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
          style={{ marginBottom: "48px" }}
        >
          <p
            className="mono text-sm mb-3"
            style={{ color: "var(--neon-blue)", letterSpacing: "0.1em" }}
          >
            06. CONTACT
          </p>
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ display: "grid", gap: "20px", maxWidth: "680px" }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.05 }}
              whileHover={{ x: 4 }}
              className="glass-card"
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "14px",
                  background: `${contact.color}15`,
                  border: `1px solid ${contact.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <contact.icon size={18} style={{ color: contact.color }} />
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {contact.label}
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    wordBreak: "break-all",
                  }}
                >
                  {contact.handle}
                </p>
              </div>
            </motion.a>
          ))}

          <div
            className="glass-card"
            style={{
              padding: "24px",
              display: "grid",
              gap: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {extraDetails.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <item.icon size={18} style={{ color: "var(--neon-blue)" }} />
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
