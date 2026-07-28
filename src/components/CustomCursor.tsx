"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — a smooth trailing cursor using requestAnimationFrame + lerp.
 *
 * Architecture:
 *  - Mouse position is stored in a ref (no setState → no re-renders on mouse move)
 *  - A single rAF loop interpolates rendered position toward the target each frame
 *  - Hover state (scale + color change) uses a separate boolean ref
 *  - The DOM node is mutated directly via the ref for maximum performance
 *  - Disabled on touch-primary devices via pointer media query check
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Raw mouse target position
  const mousePos = useRef({ x: -100, y: -100 });
  // Smoothed (lerped) rendered position
  const pos = useRef({ x: -100, y: -100 });
  // Whether cursor is hovering an interactive element
  const isHovering = useRef(false);
  // Whether cursor is visible (has entered window)
  const isVisible = useRef(false);
  // rAF handle for cleanup
  const rafId = useRef<number>(0);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-primary devices — bail out entirely if so
    const touchCheck = window.matchMedia("(pointer: coarse)");
    if (touchCheck.matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // LERP factor — lower = more lag/spring feel (0.08–0.15 is sweet spot)
    const LERP = 0.12;

    // Selectors that trigger the enlarged hover state
    const HOVER_SELECTORS =
      "a, button, [role='button'], article, .project-card, input, textarea, label[for], select";

    /** Mark hover state on entering an interactive element */
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVER_SELECTORS)) {
        isHovering.current = true;
      }
    };

    /** Clear hover state when leaving */
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(HOVER_SELECTORS)) {
        isHovering.current = false;
      }
    };

    /** Update raw target position only — no DOM writes here */
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible.current) {
        // Teleport the rendered position on first move to avoid a sweep across the screen
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        isVisible.current = true;
        cursor.style.opacity = "1";
        dot.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      cursor.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      cursor.style.opacity = "1";
      dot.style.opacity = "1";
    };

    /** The animation loop — runs every frame via rAF */
    const tick = () => {
      // Lerp the rendered position toward the mouse target
      pos.current.x += (mousePos.current.x - pos.current.x) * LERP;
      pos.current.y += (mousePos.current.y - pos.current.y) * LERP;

      const x = pos.current.x;
      const y = pos.current.y;

      // Write to DOM — translate is GPU-composited (no layout reflow)
      cursor.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0) scale(${isHovering.current ? 1.8 : 1})`;
      dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;

      // Color toggle
      if (isHovering.current) {
        cursor.style.borderColor = "#4FA8F5";
        cursor.style.backgroundColor = "rgba(79, 168, 245, 0.1)";
      } else {
        cursor.style.borderColor = "rgba(255, 255, 255, 0.7)";
        cursor.style.backgroundColor = "transparent";
      }

      rafId.current = requestAnimationFrame(tick);
    };

    // Attach event listeners
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Hide the native cursor globally
    document.documentElement.style.cursor = "none";

    // Start the rAF loop
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.style.cursor = "";
    };
  }, []);

  // Render nothing on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.7)",
          backgroundColor: "transparent",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 99999,
          transition: "border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease",
          willChange: "transform",
        }}
      />
      {/* Inner dot (instant, sits exactly on cursor) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#4FA8F5",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
        }}
      />
    </>
  );
}
