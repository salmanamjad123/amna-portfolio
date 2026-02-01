"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

/* ——— Software icons (professional, minimal) ——— */
const softwareIcons: Record<string, React.ReactNode> = {
  AutoCAD: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 21h18M5 5v14h14V5H5z" />
      <path d="M9 9h2v6H9zM13 9h2v4h-2zM9 13h6" />
    </svg>
  ),
  SketchUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "3ds Max": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 2L2 8l10 6 10-6-10-6z" />
      <path d="M2 16l10 6 10-6" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  "Corona Renderer": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  Photoshop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8v8M12 12c1.5 0 2.5-1 2.5-2.5S13.5 7 12 7H8v10h4" />
      <path d="M16 10c.5 0 1 .5 1 1.5s-.5 1.5-1 1.5" />
    </svg>
  ),
  Enscape: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 2c0 4-2 8-2 10s1 4 2 4 2-2 2-4-2-6-2-10z" />
      <path d="M12 20c-2 0-4-2-4-6 0-2 1-4 2-6M12 8c1 2 2 4 2 6 0 4-2 6-4 6" />
      <path d="M8 12c-2-1-4-1-6 0" />
      <path d="M16 12c2-1 4-1 6 0" />
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
};

/* ——— Technical skill icons ——— */
const technicalIcons: Record<string, React.ReactNode> = {
  "Space planning": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  "Working drawings": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6M9 9h2" />
    </svg>
  ),
  "Electrical layouts": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "Plumbing layouts": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 8h16v2l-2 4v6H6v-6l-2-4V8z" />
      <path d="M8 8V6a2 2 0 0 1 4 0v2" />
    </svg>
  ),
  "Furniture detailing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 18v3M20 18v3M4 14h16v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2z" />
      <path d="M4 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
    </svg>
  ),
  "Material selection": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  ),
  "Ceiling & flooring plans": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l9-6 9 6v12H3V9z" />
      <path d="M12 3v18M3 9h18" />
    </svg>
  ),
};

const softwareSkills = [
  "AutoCAD",
  "SketchUp",
  "3ds Max",
  "Corona Renderer",
  "Photoshop",
  "Enscape",
  "Canva",
];

const technicalSkills = [
  "Space planning",
  "Working drawings",
  "Electrical layouts",
  "Plumbing layouts",
  "Furniture detailing",
  "Material selection",
  "Ceiling & flooring plans",
];

const cardStagger = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  hidden: {},
};
const cardItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Skills() {
  return (
    <Section id="skills" className="section-divider">
      <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
        Tools & expertise
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] mt-1 text-3xl font-medium text-text md:text-4xl">
        Skills
      </h2>
      <p className="mt-3 text-text-muted max-w-2xl">
        Software and technical capabilities for interior design and spatial planning.
      </p>

      {/* A. Software */}
      <div className="mt-12">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text md:text-xl">
          Software
        </h3>
        <motion.ul
          className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px", amount: 0.2 }}
        >
          {softwareSkills.map((name) => (
            <motion.li key={name} variants={cardItem}>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-bg-alt/50 p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-accent" aria-hidden>
                  {softwareIcons[name]}
                </span>
                <span className="text-center text-sm font-medium text-text">{name}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* B. Technical skills */}
      <div className="mt-14">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text md:text-xl">
          Technical skills
        </h3>
        <motion.ul
          className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px", amount: 0.2 }}
        >
          {technicalSkills.map((name) => (
            <motion.li key={name} variants={cardItem}>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-alt/50 px-4 py-3 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent" aria-hidden>
                  {technicalIcons[name]}
                </span>
                <span className="text-sm font-medium text-text">{name}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
