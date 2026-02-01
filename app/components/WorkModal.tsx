"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type WorkProjectImage = {
  src: string;
  alt?: string;
};

export type WorkProject = {
  title: string;
  category?: string;
  /** First image used for card thumbnail */
  imageSrc: string;
  imageAlt?: string;
  /** All images shown in the modal gallery */
  images: WorkProjectImage[];
  description?: string;
  /** Optional: PDF model — shown first in modal, opens on click */
  pdfUrl?: string;
};

type WorkModalProps = {
  project: WorkProject | null;
  onClose: () => void;
};

export function WorkModal({ project, onClose }: WorkModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-bg shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg-alt text-text hover:bg-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Header: category + title */}
              <div className="sticky top-0 z-[1] border-b border-border bg-bg/95 backdrop-blur-sm px-6 py-4 md:px-8">
                {project.category ? (
                  <span className="text-xs uppercase tracking-wider text-text-muted">
                    {project.category}
                  </span>
                ) : null}
                <h2
                  id="work-modal-title"
                  className="font-[family-name:var(--font-playfair)] mt-0.5 text-xl font-medium text-text md:text-2xl"
                >
                  {project.title}
                </h2>
              </div>
              {/* PDF model — first, opens on click */}
              {project.pdfUrl ? (
                <div className="p-4 md:p-6 border-b border-border">
                  <a
                    href={encodeURI(project.pdfUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    title="Open model (PDF)"
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View model (PDF)
                  </a>
                </div>
              ) : null}
              {/* Image gallery — interior-specific shots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 md:gap-4 md:p-6">
                {project.images.map((img, i) => (
                  <motion.div
                    key={img.src}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-bg-alt"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt ?? `${project.title} — view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </motion.div>
                ))}
              </div>
              {project.description ? (
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <p className="text-text-muted leading-relaxed">{project.description}</p>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
