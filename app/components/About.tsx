"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function About() {
  return (
    <Section id="about" className="section-divider">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <motion.div
          className="aspect-[4/5] max-w-md rounded-xl overflow-hidden bg-bg-alt shadow-lg"
          custom={0}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
        >
          <div
            className="h-full w-full bg-gradient-to-br from-border to-bg-alt"
            aria-hidden
          />
        </motion.div>
        <div>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
            Who I am
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] mt-1 text-3xl font-medium text-text md:text-4xl">
            About
          </h2>
          <motion.p
            className="mt-4 text-text-muted leading-relaxed"
            custom={1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          >
            I&apos;m Amna Shahid, an interior designer focused on creating spaces
            that reflect who you are. Every project starts with your story —
            your habits, your taste, your life — and becomes a place you love to
            live in.
          </motion.p>
          <motion.p
            className="mt-4 text-text-muted leading-relaxed"
            custom={2}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          >
            From residential homes to commercial spaces, I bring a consistent
            eye for detail, materiality, and light. Let&apos;s turn your vision
            into reality.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
