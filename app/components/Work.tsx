"use client";

import { Section } from "./Section";
import { WorkCard } from "./WorkCard";

const projects = [
  { title: "Residential — Living Room", category: "Residential" },
  { title: "Commercial — Café", category: "Commercial" },
  { title: "Residential — Bedroom", category: "Residential" },
  { title: "Office — Workspace", category: "Commercial" },
];

export function Work() {
  return (
    <Section id="work">
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-text md:text-4xl">
        Work
      </h2>
      <p className="mt-3 text-text-muted max-w-2xl">
        A selection of recent projects — residential and commercial.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <WorkCard
            key={p.title}
            title={p.title}
            category={p.category}
          />
        ))}
      </div>
    </Section>
  );
}
