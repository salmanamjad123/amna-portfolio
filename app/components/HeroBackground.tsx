"use client";

import { motion } from "framer-motion";

const easeSmooth = [0.16, 1, 0.3, 1] as const;
const tBase = { duration: 1, ease: easeSmooth };

export function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Soft gradient base — keep as-is */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, var(--border) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 20% 80%, var(--accent) 0%, transparent 40%)",
        }}
      />

      {/* Left / center: subtle interior strokes — hidden on mobile */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14] hidden md:block"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M200 400 Q200 200 400 200 Q600 200 600 400 L600 900 L200 900 Z"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ ...tBase, duration: 1.2, delay: 0.2 }}
        />
        <motion.line
          x1="0"
          y1="520"
          x2="500"
          y2="520"
          stroke="var(--border)"
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ ...tBase, delay: 0.5 }}
        />
        <motion.circle
          cx="720"
          cy="340"
          r="80"
          stroke="var(--border)"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ ...tBase, duration: 0.8, delay: 0.3 }}
        />
      </svg>

      {/* Right-side interior scene — window, plant, chair, lamp (animated) — hidden on mobile */}
      <svg
        className="absolute top-0 right-0 w-full h-full min-w-[600px] max-w-[55vw] opacity-90 hidden md:block"
        viewBox="0 0 600 900"
        fill="none"
        preserveAspectRatio="xMaxYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-window-light" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--border)" stopOpacity="0.25" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-plant-fill" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--border)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Large window frame with light */}
        <motion.rect
          x="120"
          y="80"
          width="380"
          height="420"
          rx="8"
          stroke="var(--border)"
          strokeWidth="2"
          fill="url(#hero-window-light)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeSmooth }}
        />
        <motion.rect
          x="300"
          y="80"
          width="20"
          height="420"
          stroke="var(--border)"
          strokeWidth="1"
          fill="none"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeSmooth }}
          style={{ transformOrigin: "300px 80px" }}
        />
        {/* Window light rays — gentle pulse */}
        <motion.rect
          x="140"
          y="100"
          width="160"
          height="180"
          fill="var(--border)"
          fillOpacity={0.06}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="320"
          y="100"
          width="160"
          height="200"
          fill="var(--accent)"
          fillOpacity={0.05}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Potted plant — leaves sway */}
        <g transform="translate(200 520)">
          <motion.g
            style={{ transformOrigin: "0 60px" }}
            animate={{ rotate: [-1.2, 1.2, -1.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
          <motion.ellipse
            cx="0"
            cy="40"
            rx="55"
            ry="22"
            fill="url(#hero-plant-fill)"
            stroke="var(--border)"
            strokeWidth="1.2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeSmooth }}
          />
          <motion.path
            d="M-30 20 Q-35 -15 -20 -50 Q0 -75 22 -50 Q38 -18 32 22"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.6, ease: easeSmooth }}
          />
          <motion.path
            d="M-15 15 Q-25 -30 0 -55 Q25 -75 35 -40 Q40 -10 25 18"
            stroke="var(--border)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{ duration: 1, delay: 0.7, ease: easeSmooth }}
          />
          <motion.path
            d="M10 18 Q5 -25 25 -50 Q45 -60 38 -25 Q32 5 18 20"
            stroke="var(--accent)"
            strokeWidth="1.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.8, ease: easeSmooth }}
          />
          </motion.g>
          <motion.rect
            x="-25"
            y="55"
            width="50"
            height="28"
            rx="4"
            fill="var(--border)"
            fillOpacity={0.25}
            stroke="var(--border)"
            strokeWidth="1"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: easeSmooth }}
          />
        </g>

        {/* Armchair silhouette */}
        <motion.g transform="translate(380 580)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7, ease: easeSmooth }}>
          <path
            d="M0 120 L0 80 Q0 0 50 0 L150 0 Q200 0 200 50 L200 120 L180 200 L20 200 Z"
            fill="var(--border)"
            fillOpacity="0.12"
            stroke="var(--border)"
            strokeWidth="1.5"
          />
          <motion.rect
            x="30"
            y="90"
            width="140"
            height="95"
            rx="8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.5"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.g>

        {/* Side table */}
        <motion.g transform="translate(340 680)" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9, ease: easeSmooth }}>
          <rect x="0" y="0" width="100" height="12" rx="2" fill="var(--border)" fillOpacity="0.2" stroke="var(--border)" strokeWidth="1" />
          <line x1="15" y1="12" x2="15" y2="45" stroke="var(--border)" strokeWidth="1.2" opacity="0.6" />
          <line x1="85" y1="12" x2="85" y2="45" stroke="var(--border)" strokeWidth="1.2" opacity="0.6" />
        </motion.g>

        {/* Pendant lamp — subtle swing */}
        <motion.g transform="translate(310 120)">
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="80"
            stroke="var(--border)"
            strokeWidth="1.5"
            opacity="0.6"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="0"
            cy="100"
            rx="42"
            ry="18"
            fill="var(--border)"
            fillOpacity="0.15"
            stroke="var(--accent)"
            strokeWidth="1"
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Floating shelf with small vase */}
        <motion.g transform="translate(180 460)" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8, ease: easeSmooth }}>
          <line x1="0" y1="0" x2="120" y2="0" stroke="var(--border)" strokeWidth="2" opacity="0.5" />
          <ellipse cx="60" cy="-25" rx="18" ry="28" fill="var(--border)" fillOpacity="0.12" stroke="var(--border)" strokeWidth="1" />
        </motion.g>
      </svg>

      {/* Subtle floating blur orbs — hidden on mobile */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 hidden md:block"
        style={{ background: "var(--accent)", filter: "blur(80px)" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.2,
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          scale: { duration: 1.2, delay: 0.2 },
          opacity: { duration: 1, delay: 0.2 },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full opacity-15 hidden md:block"
        style={{ background: "var(--border)", filter: "blur(60px)" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.15,
          x: [0, -10, 0],
        }}
        transition={{
          scale: { duration: 1, delay: 0.4 },
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
