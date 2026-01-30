"use client";

import { Section } from "./Section";

const items = [
  {
    title: "Education & training",
    text: "Formal training in interior design and ongoing study in materials, lighting, and spatial planning.",
  },
  {
    title: "How I work",
    text: "Discovery first — we talk about how you live and what you love. Then concept, materials, and execution, with clear communication at every step.",
  },
];

export function Study() {
  return (
    <Section id="study">
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-text md:text-4xl">
        Study & approach
      </h2>
      <p className="mt-3 text-text-muted max-w-2xl">
        Qualifications and the way I approach each project.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        {items.map(({ title, text }) => (
          <div
            key={title}
            className="rounded-lg border border-border bg-bg-alt/50 p-6 md:p-8 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text md:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
