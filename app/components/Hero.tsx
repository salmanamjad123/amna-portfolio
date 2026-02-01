"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroParticles } from "./HeroParticles";

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden"
    >
      <HeroBackground />
      <HeroParticles />
      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted mb-4 md:mb-5"
          >
            Interior Designer
          </motion.p>
          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-playfair)] text-4xl font-medium tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Amna Shahid
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 md:mt-6 text-lg md:text-xl text-text-muted max-w-xl"
          >
            Spaces that tell your story — residential and commercial design.
          </motion.p>
          <motion.div variants={item} className="mt-8 md:mt-10 flex flex-wrap gap-4">
            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View work
            </Link>
            <Link
              href="#lets-work"
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-text transition-all duration-300 hover:border-accent hover:text-accent hover:scale-[1.02] hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Let&apos;s work together
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
