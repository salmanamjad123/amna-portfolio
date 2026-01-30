"use client";

import { motion } from "framer-motion";

const defaultVariants = {
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

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Optional: no scroll-in animation (e.g. for Hero) */
  noAnimation?: boolean;
  /** Optional: custom padding (default py-20 md:py-28) */
  padding?: string;
};

export function Section({
  id,
  children,
  className = "",
  noAnimation = false,
  padding = "py-20 md:py-28",
}: SectionProps) {
  const Wrapper = noAnimation ? "section" : motion.section;

  const wrapperProps = noAnimation
    ? { id, className: `${padding} ${className}`.trim() }
    : {
        id,
        className: `${padding} ${className}`.trim(),
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-60px", amount: 0.2 },
        variants: defaultVariants,
      };

  return (
    <Wrapper {...wrapperProps}>
      <div className="section-container">{children}</div>
    </Wrapper>
  );
}
