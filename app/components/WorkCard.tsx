"use client";

import { motion } from "framer-motion";

type WorkCardProps = {
  title: string;
  category?: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
};

export function WorkCard({
  title,
  category,
  imageSrc,
  imageAlt = title,
  onClick,
}: WorkCardProps) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-bg-alt aspect-[4/3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-border to-bg-alt transition-transform duration-300 group-hover:scale-105" />
      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundImage: `url("${imageSrc}")` }}
        />
      ) : null}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
        {category ? (
          <span className="text-xs uppercase tracking-wider text-white/80">
            {category}
          </span>
        ) : null}
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-white md:text-2xl">
          {title}
        </h3>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
          View project
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}
