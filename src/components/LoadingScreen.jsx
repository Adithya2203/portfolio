import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="loader-ring" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                    borderTopColor: "rgba(157,78,221,0.5)",
                  }}
                />
              </motion.div>
            </div>

            <div className="text-center">
              <motion.p
                className="mono text-xs tracking-widest mb-4"
                style={{ color: "var(--neon-blue)" }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                INITIALIZING PORTFOLIO
              </motion.p>
              <div
                style={{
                  width: "200px",
                  height: "2px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, var(--neon-blue), var(--neon-purple))",
                    borderRadius: "999px",
                    boxShadow: "0 0 10px rgba(0,212,255,0.5)",
                  }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p
                className="mono text-xs mt-3"
                style={{ color: "var(--text-secondary)" }}
              >
                {Math.min(Math.round(progress), 100)}%
              </p>
            </div>

            <motion.h1
              className="animated-gradient-text text-2xl font-bold tracking-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Adithya Rao
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
