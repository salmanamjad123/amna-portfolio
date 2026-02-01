"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#study", label: "Study" },
  { href: "#lets-work", label: "Let's work" },
];

const CV_PATH = "/CV.pdf";

function ResumeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(248, 246, 243, 0)", "rgba(248, 246, 243, 0.92)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(224, 219, 212, 0)", "rgba(224, 219, 212, 0.8)"]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: navBg,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderColor: navBorder,
      }}
    >
      <nav
        className="section-container flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          onClick={closeMenu}
          className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
        >
          Amina Shahid
        </Link>

        {/* Desktop: inline links + resume */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-transparent px-4 py-2 text-sm font-medium text-text transition-all duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            title="Open resume (PDF)"
          >
            <ResumeIcon className="h-4 w-4 shrink-0 resume-icon-spin" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile: hamburger button */}
        <motion.button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-text hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span
            className={`block w-5 h-0.5 rounded-full bg-current transition-transform duration-300 ease-out ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 rounded-full bg-current my-1 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 rounded-full bg-current transition-transform duration-300 ease-out ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </motion.button>
      </nav>

      {/* Mobile menu panel — smooth open/close, includes Resume */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden overflow-hidden bg-bg border-b border-border"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 400, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="section-container flex flex-col gap-1 py-4 pb-6">
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.05 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="block py-3 text-base text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{
                  duration: 0.25,
                  delay: 0.05 * navLinks.length,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href={CV_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 py-3 text-base text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                  title="Open resume (PDF)"
                >
                  <ResumeIcon className="h-5 w-5 shrink-0 resume-icon-spin" />
                  <span>Resume</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
