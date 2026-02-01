"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "./Section";

const btnClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const primaryBtn = `${btnClass} bg-accent text-white hover:bg-accent-hover hover:scale-[1.02] hover:shadow-md`;
const secondaryBtn = `${btnClass} border border-border bg-transparent text-text hover:border-accent hover:text-accent hover:scale-[1.02] hover:shadow-sm`;

export function LetsWorkTogether() {
  return (
    <Section
      id="lets-work"
      className="bg-bg-alt section-divider"
      padding="py-20 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
          Get in touch
        </p>
        <motion.h2
          className="font-[family-name:var(--font-playfair)] mt-1 text-3xl font-medium text-text md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px", amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s work together
        </motion.h2>
        <p className="mt-4 text-lg text-text-muted">
          Ready to transform your space? Get in touch for a consultation or to
          discuss your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="mailto:aminashahid2681@gmail.com" className={primaryBtn}>
            Email me
          </a>
          <Link href="#hero" className={secondaryBtn}>
            Back to top
          </Link>
        </div>
      </div>
    </Section>
  );
}
