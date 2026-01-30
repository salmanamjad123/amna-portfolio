"use client";

import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="aspect-[4/5] max-w-md rounded-lg bg-bg-alt overflow-hidden">
          {/* Placeholder until amna.jpg is added — use next/image when ready */}
          <div
            className="h-full w-full bg-gradient-to-br from-border to-bg-alt"
            aria-hidden
          />
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-text md:text-4xl">
            About
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            I&apos;m Amna Shahid, an interior designer focused on creating spaces
            that reflect who you are. Every project starts with your story —
            your habits, your taste, your life — and becomes a place you love to
            live in.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            From residential homes to commercial spaces, I bring a consistent
            eye for detail, materiality, and light. Let&apos;s turn your vision
            into reality.
          </p>
        </div>
      </div>
    </Section>
  );
}
