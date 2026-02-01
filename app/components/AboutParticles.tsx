"use client";

import { useMemo } from "react";

const DOT_COUNT = 52;
const ORB_COUNT = 5;

type AboutParticlesProps = {
  offset: { x: number; y: number };
};

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  factor: number;
  shape: "circle" | "square" | "dot";
  color: "accent" | "border" | "muted";
};

export function AboutParticles({ offset }: AboutParticlesProps) {
  const dots = useMemo(() => {
    return Array.from({ length: DOT_COUNT }, (_, i) => {
      const left = (i * 19 + 7) % 96 + 2;
      const top = (i * 23 + 13) % 92 + 3;
      const size = 3 + (i % 4);
      const opacity = 0.18 + (i % 6) * 0.05;
      const factor = 0.8 + (i % 4) * 0.4;
      const shape: Particle["shape"] =
        i % 8 === 0 ? "square" : i % 5 === 0 ? "dot" : "circle";
      const color: Particle["color"] =
        i % 7 === 0 ? "border" : i % 11 === 0 ? "muted" : "accent";
      return {
        id: i,
        left,
        top,
        size,
        opacity,
        factor,
        shape,
        color,
      };
    });
  }, []);

  const orbs = useMemo(() => {
    return Array.from({ length: ORB_COUNT }, (_, i) => ({
      id: `orb-${i}`,
      left: [12, 78, 45, 88, 22][i],
      top: [18, 72, 45, 35, 82][i],
      size: 80 + i * 40,
      opacity: 0.06 + i * 0.02,
      factor: 0.3 + i * 0.2,
    }));
  }, []);

  const colorClass = (color: Particle["color"]) => {
    switch (color) {
      case "accent":
        return "bg-accent";
      case "border":
        return "bg-border";
      case "muted":
        return "bg-text-muted";
      default:
        return "bg-accent";
    }
  };

  const shapeClass = (shape: Particle["shape"]) => {
    switch (shape) {
      case "square":
        return "rounded-[4px]";
      case "dot":
        return "rounded-full";
      case "circle":
      default:
        return "rounded-full";
    }
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Soft orbs — interior “light” feel, move slightly with cursor */}
      {orbs.map((o, i) => (
        <span
          key={o.id}
          className="absolute rounded-full"
          style={{
            left: `${o.left}%`,
            top: `${o.top}%`,
            transform: `translate(-50%, -50%) translate(${offset.x * o.factor}px, ${offset.y * o.factor}px)`,
            transition: "transform 0.35s ease-out",
          }}
        >
          <span
            className="absolute left-0 top-0 rounded-full bg-accent animate-[particle-float_12s_ease-in-out_infinite]"
            style={{
              width: o.size,
              height: o.size,
              opacity: o.opacity,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        </span>
      ))}

      {/* Dots and small shapes — cursor + auto-float */}
      {dots.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            transform: `translate(${offset.x * p.factor}px, ${offset.y * p.factor}px)`,
            transition: "transform 0.28s ease-out",
          }}
        >
          <span
            className={`absolute left-0 top-0 ${colorClass(p.color)} ${shapeClass(p.shape)} animate-[particle-float_14s_ease-in-out_infinite]`}
            style={{
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${10 + (p.id % 9)}s`,
              animationDelay: `${p.id * 0.2}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
