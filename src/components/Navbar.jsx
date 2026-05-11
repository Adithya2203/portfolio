import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
      className={scrolled ? 'nav-blur' : ''}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <motion.a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            style={{ textDecoration: 'none' }}
            whileHover={{ scale: 1.04 }}
          >
            <span className="mono font-bold text-lg neon-text">&lt;AA /&gt;</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                className={`nav-link ${active === link.href.replace('#','') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '9px 20px', fontSize: '0.82rem' }}
          >
            <span>Resume</span>
          </a>

          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'var(--neon-blue)', cursor: 'pointer' }}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(5,11,21,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(0,212,255,0.08)' }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  style={{ padding: '12px 0', color: active === link.href.replace('#','') ? 'var(--neon-blue)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  {link.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
