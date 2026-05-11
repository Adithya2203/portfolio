import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Apex Planet',
    location: 'Remote',
    duration: 'Jun 2024 — Aug 2024',
    type: 'Internship',
    description: 'Contributed to real-world full-stack development projects, building responsive web interfaces and RESTful APIs as part of an agile team.',
    contributions: [
      'Developed responsive React components for client-facing dashboards with dynamic data visualization.',
      'Built and integrated REST APIs using Node.js and Express with MongoDB for data persistence.',
      'Implemented JWT-based authentication and role-based access control for the application.',
      'Collaborated in agile sprints, participated in code reviews, and maintained Git workflow.',
      'Optimized frontend performance, reducing initial load time by 35% through lazy loading and code splitting.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Git', 'REST APIs'],
    accentColor: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(157,78,221,0.04))',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="blob blob-blue" style={{ width: '350px', height: '350px', top: '30%', right: '-60px', opacity: 0.1 }} />

      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <p className="mono text-sm mb-3" style={{ color: 'var(--neon-blue)', letterSpacing: '0.1em' }}>04. EXPERIENCE</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ maxWidth: '860px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                background: exp.gradient,
                border: `1px solid ${exp.accentColor}25`,
                borderRadius: '20px',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: '3px',
                background: `linear-gradient(180deg, ${exp.accentColor}, transparent)`,
                borderRadius: '3px 0 0 3px',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: `${exp.accentColor}15`, border: `1px solid ${exp.accentColor}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Briefcase size={18} style={{ color: exp.accentColor }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: exp.accentColor, fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                  <span className="tag tag-blue" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={10} /> {exp.duration}
                  </span>
                  <span className="tag" style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={10} /> {exp.location}
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '24px' }}>
                {exp.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '14px', letterSpacing: '0.05em' }}>KEY CONTRIBUTIONS</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.contributions.map((c, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + j * 0.08 }}
                      style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                    >
                      <CheckCircle size={15} style={{ color: exp.accentColor, marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65 }}>{c}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '10px', letterSpacing: '0.05em' }}>TECH USED</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {exp.tech.map(t => (
                    <span key={t} className="tag tag-blue" style={{ fontSize: '0.72rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
