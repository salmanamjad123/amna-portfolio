"use client";

import { useMemo } from "react";

const PARTICLE_COUNT = 48;
const SNOWFLAKE_COUNT = 28;

/** Deterministic "random" for consistent SSR/client */
function seeded(i: number, max: number, min = 0) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return min + (Math.abs(x - Math.floor(x)) * (max - min));
}

/** Simple 6-point snowflake / snow flower SVG */
function SnowflakeIcon({
  size,
  className,
  style,
}: {
  size: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden
    >
      {/* 6 arms: vertical, ±60°, ±120° */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="12" x2="5" y2="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="12" x2="19" y2="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="12" x2="5" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="12" x2="19" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Small branches on each arm for flower look */}
      <line x1="12" y1="6" x2="10" y2="5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="12" y1="6" x2="14" y2="5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="12" y1="18" x2="10" y2="19" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="12" y1="18" x2="14" y2="19" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="8.5" y1="8.5" x2="7.5" y2="7" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="8.5" y1="8.5" x2="8" y2="10" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="15.5" y1="8.5" x2="16.5" y2="7" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="15.5" y1="8.5" x2="16" y2="10" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="8.5" y1="15.5" x2="7.5" y2="17" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="8.5" y1="15.5" x2="8" y2="14" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="15.5" y1="15.5" x2="16.5" y2="17" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="15.5" y1="15.5" x2="16" y2="14" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export function HeroParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const left = seeded(i * 3, 98, 1);
      const duration = 14 + seeded(i * 7, 16);
      const delay = -seeded(i * 11, 20);
      const driftX = (seeded(i * 13, 80, 0) - 40) * (i % 3 === 0 ? 1.4 : 1);
      const opacity = 0.2 + seeded(i * 17, 35, 0) / 100;
      const size = 3 + (i % 3);
      const color =
        i % 9 === 0 ? "border" : i % 7 === 0 ? "muted" : "accent";
      return {
        id: i,
        left,
        duration,
        delay,
        driftX,
        opacity,
        size,
        color,
      };
    });
  }, []);

  const snowflakes = useMemo(() => {
    return Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => {
      const left = seeded(i * 19 + 100, 97, 2);
      const duration = 16 + seeded(i * 23, 14);
      const delay = -seeded(i * 31, 25);
      const driftX = (seeded(i * 41, 100, 0) - 50) * 1.2;
      const opacity = 0.25 + seeded(i * 47, 30, 0) / 100;
      const size = 10 + (i % 5) * 2;
      const color =
        i % 8 === 0 ? "border" : i % 6 === 0 ? "muted" : "accent";
      return {
        id: `flake-${i}`,
        left,
        duration,
        delay,
        driftX,
        opacity,
        size,
        color,
      };
    });
  }, []);

  const colorClass = (color: string) => {
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

  const textColorClass = (color: string) => {
    switch (color) {
      case "accent":
        return "text-accent";
      case "border":
        return "text-border";
      case "muted":
        return "text-text-muted";
      default:
        return "text-accent";
    }
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden
    >
      {/* Dot particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full hero-particle-fall ${colorClass(p.color)}`}
          style={{
            left: `${p.left}%`,
            top: 0,
            width: p.size,
            height: p.size,
            ["--drift-x" as string]: `${p.driftX}px`,
            ["--particle-opacity" as string]: String(p.opacity),
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      {/* Snowflake / snow flower particles */}
      {snowflakes.map((p) => (
        <span
          key={p.id}
          className={`absolute hero-particle-fall ${textColorClass(p.color)}`}
          style={{
            left: `${p.left}%`,
            top: 0,
            ["--drift-x" as string]: `${p.driftX}px`,
            ["--particle-opacity" as string]: String(p.opacity),
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <SnowflakeIcon size={p.size} className="block" />
        </span>
      ))}
    </div>
  );
}
