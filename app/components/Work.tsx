"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { WorkCard } from "./WorkCard";
import { WorkModal, type WorkProject } from "./WorkModal";

const cardStagger = {
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.28 } },
  hidden: {},
};
const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] as const } },
};

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

// 4 working interior images per project (Unsplash)
const projects: WorkProject[] = [
  {
    title: "Residential — Living Room",
    category: "Residential",
    imageSrc: U("1600607687939-ce8a6c25118c", 1200),
    imageAlt: "Modern living room with natural light",
    description:
      "A light-filled living space with clean lines and warm materials. Designed for comfort and everyday living.",
    images: [
      { src: U("1600607687939-ce8a6c25118c"), alt: "Living room with sofa and natural light" },
      { src: U("1600585154340-be6161a56a0c"), alt: "Interior with large windows" },
      { src: U("1600566753190-17f0baa2a6c3"), alt: "Cozy living area with plants" },
      { src: U("1600210492486-724fe5c67fb0"), alt: "Minimal living room" },
    ],
  },
  {
    title: "Commercial — Café",
    category: "Commercial",
    imageSrc: U("1554118811-1e0d58224f24", 1200),
    imageAlt: "Interior of a cozy café",
    description:
      "Warm, inviting café interior with a focus on atmosphere and flow for both guests and staff.",
    images: [
      { src: U("1554118811-1e0d58224f24"), alt: "Café interior with seating" },
      { src: U("1442512595331-e89e73853f31"), alt: "Café with wooden tables" },
      { src: U("1495474472287-4d71bcdd2085"), alt: "Coffee shop interior" },
      { src: U("1517248135467-4c7edcad34c4"), alt: "Restaurant interior design" },
    ],
  },
  {
    title: "Residential — Bedroom",
    category: "Residential",
    imageSrc: U("1616594039964-ae9021a400a0", 1200),
    imageAlt: "Serene bedroom with soft lighting",
    description:
      "A restful bedroom retreat with soft textures and a calm palette for better sleep and relaxation.",
    images: [
      { src: U("1616594039964-ae9021a400a0"), alt: "Bedroom with soft bedding" },
      { src: U("1617325247661-675ab4b64dbb"), alt: "Minimal bedroom interior" },
      { src: U("1600210492486-724fe5c67fb0"), alt: "Bedroom with natural light" },
      { src: U("1600566753190-17f0baa2a6c3"), alt: "Cozy bedroom design" },
    ],
  },
  {
    title: "Office — Workspace",
    category: "Commercial",
    imageSrc: U("1497366216548-37526070297c", 1200),
    imageAlt: "Modern office workspace",
    description:
      "Functional and inspiring workspace design that balances collaboration areas with focused work zones.",
    images: [
      { src: U("1497366216548-37526070297c"), alt: "Open plan office" },
      { src: U("1497366753455-68768de92193"), alt: "Office desk and seating" },
      { src: U("1524758631624-e2822e304c36"), alt: "Modern workspace interior" },
      { src: U("1497366753455-68768de92193"), alt: "Collaborative workspace" },
    ],
  },
];

export function Work() {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );

  return (
    <Section id="work" padding="py-14 md:py-20" className="section-divider">
      <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
        Selected work
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] mt-1 text-3xl font-medium text-text md:text-4xl">
        Work
      </h2>
      <p className="mt-3 text-text-muted max-w-2xl">
        A selection of recent projects — residential and commercial.
      </p>
      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px", amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardItem}>
            <WorkCard
              title={project.title}
              category={project.category}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>
      <WorkModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
