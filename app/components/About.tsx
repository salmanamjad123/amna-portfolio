"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { AboutParticles } from "./AboutParticles";

const CURSOR_STRENGTH = 0.04;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1] as const,
      when: "beforeChildren",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const aboutContent = `I am an Interior Design graduate with hands-on experience in residential, commercial, and conceptual design projects. My academic and professional work reflects a strong command over spatial planning, technical drawings, and material sensibility. I am particularly interested in creating functional yet expressive interiors through thoughtful detailing, lighting, and user-oriented design. I am currently seeking an entry-level position where I can grow professionally and contribute creatively to real-world projects.`;

export function About() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({
        x: x * 100 * CURSOR_STRENGTH,
        y: y * 100 * CURSOR_STRENGTH,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <motion.section
      id="about"
      className="section-divider relative py-20 md:py-28 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      variants={sectionVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AboutParticles offset={offset} />
      <div className="section-container relative z-10">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
          Who I am
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] mt-1 text-3xl font-medium text-text md:text-4xl">
          About
        </h2>
        <motion.div
          className="mt-6 md:mt-8 max-w-3xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          custom={0}
        >
          <p className="text-text-muted leading-relaxed">{aboutContent}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
