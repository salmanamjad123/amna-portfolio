"use client";

import { useState, useRef, useCallback, useEffect } from "react";
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

const R = (filename: string) => `/residential/${encodeURIComponent(filename)}`;
const D = (filename: string) => `/duplexModel/${encodeURIComponent(filename)}`;
const C = (filename: string) => `/cafe/${encodeURIComponent(filename)}`;
const M = (filename: string) => `/model/${encodeURIComponent(filename)}`;
const S = (filename: string) => `/stageSet/${encodeURIComponent(filename)}`;
const P = (filename: string) => `/pdfprojects/${encodeURIComponent(filename)}`;

// PDF projects — design & technical documentation (open in new tab)
type PdfProject = { title: string; pdfUrl: string };
const pdfProjects: PdfProject[] = [
  { title: "Mood Board", pdfUrl: P("Mood Board.pdf") },
  { title: "Corridor Redesign Study", pdfUrl: P("Corridor Redesign Study.pdf") },
  { title: "Kitchen Design & Detailing", pdfUrl: P("Kitchen Design & Detailing.pdf") },
  { title: "Residential Planning Series", pdfUrl: P("Residential Planning Series.pdf") },
];

// Residential — Modern Bedroom & Bath Suite (local images + PDF model)
const residentialImages = [
  "WhatsApp Image 2026-01-31 at 5.10.41 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.42 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.42 AM (2).jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.42 AM (3).jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.42 AM (4).jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.42 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.43 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.10.43 AM.jpeg",
];

// Residential — Duplex Unit (local images + PDF model)
const duplexImages = [
  "WhatsApp Image 2026-01-31 at 5.12.08 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (2).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (3).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (4).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (5).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (6).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (7).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (8).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM (9).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.09 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.10 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.12.10 AM.jpeg",
];

// Commercial — Café (layout image + gallery images)
const cafeImages = [
  "WhatsApp Image 2026-01-31 at 5.17.29 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.17.29 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.17.30 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.17.31 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.17.31 AM (2).jpeg",
  "WhatsApp Image 2026-01-31 at 5.17.31 AM.jpeg",
];

// Commercial — Co-working & Lounge (office, lounge pods, cafe/bar)
const modelImages = [
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (2).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (3).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (4).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (5).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (6).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (7).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (8).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM (9).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.47 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.48 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.44.48 AM.jpeg",
];

// Commercial — Stage & Set Design
const stageSetImages = [
  "WhatsApp Image 2026-01-31 at 5.47.40 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.47.40 AM.jpeg",
  "WhatsApp Image 2026-01-31 at 5.47.41 AM (1).jpeg",
  "WhatsApp Image 2026-01-31 at 5.47.41 AM.jpeg",
];

// Residential + Commercial projects (local images + PDF/layout)
const projects: WorkProject[] = [
  {
    title: "Residential — Modern Bedroom & Bath Suite",
    category: "Residential",
    imageSrc: R(residentialImages[0]),
    imageAlt: "Modern bedroom and bath interior",
    description:
      "Contemporary residential suite with modern bathroom, bedrooms, and workspace. Wood paneling, marble vanity, textured wall panels, and a calm neutral palette with dark blue accents.",
    pdfUrl: "/residential/sahi plan single-Model.pdf",
    images: residentialImages.map((name, i) => ({
      src: R(name),
      alt: `Modern Bedroom & Bath Suite — view ${i + 1}`,
    })),
  },
  {
    title: "Residential — Duplex Unit",
    category: "Residential",
    imageSrc: D(duplexImages[0]),
    imageAlt: "Duplex unit interior design",
    description:
      "Two-level residential duplex with full spatial planning, interior layouts, and material detailing. Designed for modern living with clear zoning and flow between levels.",
    pdfUrl: "/duplexModel/sahi plan duplex-Model.pdf",
    images: duplexImages.map((name, i) => ({
      src: D(name),
      alt: `Duplex Unit — view ${i + 1}`,
    })),
  },
  {
    title: "Commercial — Café",
    category: "Commercial",
    imageSrc: C(cafeImages[0]),
    imageAlt: "Café interior design",
    description:
      "Commercial café design with spatial planning and layout. Interior renders and floor plan layout for seating, flow, and atmosphere.",
    pdfUrl: "/cafe/Cafe layout.png",
    images: cafeImages.map((name, i) => ({
      src: C(name),
      alt: `Café — view ${i + 1}`,
    })),
  },
  {
    title: "Commercial — Co-working & Lounge",
    category: "Commercial",
    imageSrc: M(modelImages[0]),
    imageAlt: "Co-working and lounge interior",
    description:
      "Contemporary co-working and lounge design with organic forms, pod seating, and integrated cafe. Open-plan office, futuristic lounge pods, and modern bar area with spatial flow and layered lighting.",
    pdfUrl: "/model/layout done-Model.pdf1.pdf",
    images: modelImages.map((name, i) => ({
      src: M(name),
      alt: `Co-working & Lounge — view ${i + 1}`,
    })),
  },
  {
    title: "Commercial — Stage & Set Design",
    category: "Commercial",
    imageSrc: S(stageSetImages[0]),
    imageAlt: "Stage and set design",
    description:
      "Stage and set design for events, exhibitions, or performance. Spatial planning and visual concept with set plan and interior renders.",
    pdfUrl: "/stageSet/set plan.pdf",
    images: stageSetImages.map((name, i) => ({
      src: S(name),
      alt: `Stage & Set Design — view ${i + 1}`,
    })),
  },
];

export function Work() {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef(0);
  activeSlideRef.current = activeSlide;

  const handleSliderScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const slideEl = el.children[0] as HTMLElement;
    const slideWidth = slideEl?.offsetWidth ?? el.offsetWidth;
    const scrollLeft = el.scrollLeft;
    const index = Math.min(
      Math.round(scrollLeft / slideWidth),
      projects.length - 1
    );
    setActiveSlide(Math.max(0, index));
  }, []);

  const goToSlide = useCallback((index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const slideEl = el.children[0] as HTMLElement;
    const slideWidth = slideEl?.offsetWidth ?? el.offsetWidth;
    el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    setActiveSlide(index);
  }, []);

  const AUTO_ADVANCE_MS = 6000;
  useEffect(() => {
    const id = setInterval(() => {
      const next = (activeSlideRef.current + 1) % projects.length;
      goToSlide(next);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [goToSlide]);

  // PDF projects slider (mobile)
  const [pdfActiveSlide, setPdfActiveSlide] = useState(0);
  const pdfSliderRef = useRef<HTMLDivElement>(null);
  const pdfActiveSlideRef = useRef(0);
  pdfActiveSlideRef.current = pdfActiveSlide;

  const handlePdfSliderScroll = useCallback(() => {
    const el = pdfSliderRef.current;
    if (!el) return;
    const slideEl = el.children[0] as HTMLElement;
    const slideWidth = slideEl?.offsetWidth ?? el.offsetWidth;
    const index = Math.min(
      Math.round(el.scrollLeft / slideWidth),
      pdfProjects.length - 1
    );
    setPdfActiveSlide(Math.max(0, index));
  }, []);

  const goToPdfSlide = useCallback((index: number) => {
    const el = pdfSliderRef.current;
    if (!el) return;
    const slideEl = el.children[0] as HTMLElement;
    const slideWidth = slideEl?.offsetWidth ?? el.offsetWidth;
    el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    setPdfActiveSlide(index);
  }, []);

  const PdfCard = ({ item }: { item: PdfProject }) => (
    <a
      href={item.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-h-[200px] flex-col rounded-xl border border-border bg-bg-alt/50 p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      title={`Open ${item.title} (PDF)`}
    >
      <span className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20" aria-hidden>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </span>
      <h3 className="font-[family-name:var(--font-playfair)] min-h-[2.5rem] flex-1 text-lg font-medium leading-snug text-text transition-colors duration-200 group-hover:text-accent md:min-h-[2.75rem] md:text-xl">
        {item.title}
      </h3>
      <span className="mt-2 shrink-0 text-sm text-text-muted">View PDF</span>
    </a>
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

      {/* Mobile: slider only — one slide at a time, pagination, no scrollbar */}
      <div className="mt-10 md:hidden">
        <div
          ref={sliderRef}
          className="work-slider flex overflow-x-auto overflow-y-hidden pb-4"
          onScroll={handleSliderScroll}
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="work-slider-slide min-w-full shrink-0 px-2"
            >
              <WorkCard
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 pt-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className="h-2 w-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{
                backgroundColor: i === activeSlide ? "var(--accent)" : "var(--border)",
                transform: i === activeSlide ? "scale(1.25)" : "scale(1)",
              }}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeSlide ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <motion.div
        className="mt-10 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4"
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

      {/* Design & technical documentation — PDF projects */}
      <div className="mt-16 md:mt-20 pt-10 md:pt-14 border-t border-border">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-muted">
          Design documentation
        </p>
        <h3 className="font-[family-name:var(--font-playfair)] mt-1 text-2xl font-medium text-text md:text-3xl">
          Design & technical documentation
        </h3>
        <p className="mt-2 text-text-muted max-w-2xl">
          Technical drawings, design studies, and project documentation — from concept through planning. Prepared in AutoCAD and design tools.
        </p>

        {/* Mobile: PDF slider — one slide, pagination, no scrollbar */}
        <div className="mt-8 md:hidden">
          <div
            ref={pdfSliderRef}
            className="work-slider flex overflow-x-auto overflow-y-hidden pb-4"
            onScroll={handlePdfSliderScroll}
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {pdfProjects.map((item) => (
              <div
                key={item.title}
                className="work-slider-slide min-w-full shrink-0 px-2"
              >
                <PdfCard item={item} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 pt-2">
            {pdfProjects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPdfSlide(i)}
                className="h-2 w-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                style={{
                  backgroundColor: i === pdfActiveSlide ? "var(--accent)" : "var(--border)",
                  transform: i === pdfActiveSlide ? "scale(1.25)" : "scale(1)",
                }}
                aria-label={`Go to PDF project ${i + 1}`}
                aria-current={i === pdfActiveSlide ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        {/* Desktop: PDF cards grid */}
        <motion.div
          className="mt-8 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px", amount: 0.2 }}
        >
          {pdfProjects.map((item, i) => (
            <motion.div key={item.title} className="h-full" variants={cardItem}>
              <PdfCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <WorkModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
