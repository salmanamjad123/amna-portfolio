"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#study", label: "Study" },
  { href: "#lets-work", label: "Let's work" },
];

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
          Amna Shahid
        </Link>

        {/* Desktop: inline links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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

      {/* Mobile menu panel — smooth open/close */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden overflow-hidden bg-bg border-b border-border"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 320, opacity: 1 }}
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
