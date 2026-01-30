"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    title: "Education & training",
    text: "Bachelor's degree from Lahore College for Women University. Formal training in interior design and ongoing study in materials, lighting, and spatial planning.",
  },
  {
    title: "How I work",
    text: "Discovery first — we talk about how you live and what you love. Then concept, materials, and execution, with clear communication at every step.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Study() {
  return (
    <Section id="study" className="section-divider">
      <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
        Qualifications
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] mt-1 text-3xl font-medium text-text md:text-4xl">
        Study & approach
      </h2>
      <p className="mt-3 text-text-muted max-w-2xl">
        The way I approach each project.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        {items.map(({ title, text }, i) => (
          <motion.div
            key={title}
            className="rounded-xl border border-border bg-bg-alt/50 p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text md:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
