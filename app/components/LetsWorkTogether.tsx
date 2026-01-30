"use client";

import Link from "next/link";
import { Section } from "./Section";

export function LetsWorkTogether() {
  return (
    <Section
      id="lets-work"
      className="bg-bg-alt"
      padding="py-20 md:py-28"
    >
      <div className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-text md:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-lg text-text-muted">
          Ready to transform your space? Get in touch for a consultation or to
          discuss your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hello@amnashahid.com"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email me
          </a>
          <Link
            href="#hero"
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-text transition-all duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Back to top
          </Link>
        </div>
      </div>
    </Section>
  );
}
