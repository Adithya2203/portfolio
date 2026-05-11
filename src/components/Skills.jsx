import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    label: 'Frontend',
    color: '#00d4ff',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    label: 'Backend',
    color: '#9d4edd',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 82 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    label: 'Programming',
    color: '#34d399',
    icon: '💻',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 78 },
    ],
  },
  {
    label: 'VLSI / Core',
    color: '#fb923c',
    icon: '🔬',
    skills: [
      { name: 'Verilog HDL', level: 80 },
      { name: 'FPGA Design', level: 72 },
      { name: 'IoT / Arduino', level: 85 },
      { name: 'ESP32', level: 80 },
    ],
  },
  {
    label: 'Tools',
    color: '#f472b6',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Xilinx Vivado', level: 74 },
      { name: 'VS Code', level: 92 },
      { name: 'Figma', level: 65 },
    ],
  },
];

function SkillBar({ name, level, color, inView }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.78rem', color: color, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)`, boxShadow: `0 0 10px ${color}50` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState(0);

  const techIcons = [
    { name: 'React', bg: '#00d4ff15', border: '#00d4ff30', color: '#00d4ff', emoji: '⚛️' },
    { name: 'Node.js', bg: '#34d39915', border: '#34d39930', color: '#34d399', emoji: '🟢' },
    { name: 'Verilog', bg: '#fb923c15', border: '#fb923c30', color: '#fb923c', emoji: '🔌' },
    { name: 'Arduino', bg: '#00d4ff15', border: '#00d4ff30', color: '#00d4ff', emoji: '🤖' },
    { name: 'Python', bg: '#9d4edd15', border: '#9d4edd30', color: '#9d4edd', emoji: '🐍' },
    { name: 'Git', bg: '#f4727215', border: '#f4727230', color: '#f47272', emoji: '📂' },
    { name: 'Java', bg: '#fb923c15', border: '#fb923c30', color: '#fb923c', emoji: '☕' },
    { name: 'MongoDB', bg: '#34d39915', border: '#34d39930', color: '#34d399', emoji: '🍃' },
    { name: 'Vivado', bg: '#9d4edd15', border: '#9d4edd30', color: '#9d4edd', emoji: '💡' },
    { name: 'Tailwind', bg: '#00d4ff15', border: '#00d4ff30', color: '#00d4ff', emoji: '🎨' },
  ];

  return (
    <section id="skills" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="blob blob-blue" style={{ width: '350px', height: '350px', top: '20%', right: '-80px', opacity: 0.12 }} />

      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <p className="mono text-sm mb-3" style={{ color: 'var(--neon-blue)', letterSpacing: '0.1em' }}>02. SKILLS</p>
          <h2 className="section-title">Tech Arsenal</h2>
          <div className="section-divider" />
          <p className="section-subtitle" style={{ marginTop: '16px' }}>Technologies I work with across hardware and software domains.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: '7px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                    fontWeight: 600, fontSize: '0.8rem', fontFamily: 'Inter',
                    transition: 'all 0.25s ease',
                    background: activeTab === i ? `${cat.color}20` : 'rgba(13,31,60,0.5)',
                    color: activeTab === i ? cat.color : 'var(--text-secondary)',
                    borderWidth: '1px', borderStyle: 'solid',
                    borderColor: activeTab === i ? `${cat.color}50` : 'rgba(255,255,255,0.06)',
                  }}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-card"
              style={{ padding: '28px' }}
            >
              <h3 style={{ fontWeight: 700, marginBottom: '24px', color: skillCategories[activeTab].color, fontSize: '1rem' }}>
                {skillCategories[activeTab].icon} {skillCategories[activeTab].label} Skills
              </h3>
              {skillCategories[activeTab].skills.map(skill => (
                <SkillBar key={skill.name} {...skill} color={skillCategories[activeTab].color} inView={inView} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px', fontWeight: 500 }}>ALL TECHNOLOGIES</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {techIcons.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  style={{
                    padding: '16px 20px',
                    background: tech.bg,
                    border: `1px solid ${tech.border}`,
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    cursor: 'default',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{tech.emoji}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: tech.color }}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
