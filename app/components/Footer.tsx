"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="py-12 md:py-16 border-t border-border"
    >
      <div className="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">
          Amna Shahid
        </p>
        <p className="text-sm text-text-muted">
          © {year} Amna Shahid. All rights reserved.
        </p>
        <nav className="flex gap-6" aria-label="Footer links">
          <a
            href="mailto:aminashahid2681@gmail.com"
            className="text-sm text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
          >
            Email
          </a>
          <Link
            href="#work"
            className="text-sm text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
          >
            Work
          </Link>
          <Link
            href="#lets-work"
            className="text-sm text-text-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
