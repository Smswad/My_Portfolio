"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  /** Delay before the animation starts, in seconds. Use to stagger siblings. */
  delay?: number;
  /** Slide direction: "up" (default), "down", "left", "right", or "none" */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Extra className forwarded to the motion wrapper */
  className?: string;
  /** Distance in px the element slides from. Default 24. */
  distance?: number;
}

/**
 * FadeIn — wraps children in a scroll-triggered fade + slide animation.
 *
 * Uses `useInView` with `once: true` so the animation fires only the first
 * time the element enters the viewport and never replays on scroll-back.
 * `amount: 0.1` means we trigger as soon as 10% of the element is visible.
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 24,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const offsets = {
    up:    { x: 0,         y: distance  },
    down:  { x: 0,         y: -distance },
    left:  { x: distance,  y: 0         },
    right: { x: -distance, y: 0         },
    none:  { x: 0,         y: 0         },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // custom ease-out-quart — snappy but smooth
      }}
    >
      {children}
    </motion.div>
  );
}
