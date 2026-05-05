"use client";

import { useEffect, useRef } from "react";

/**
 * Halo blanc qui suit la souris.
 * - Désactivé sur tactile (@media hover:none) → pas de surcoût mobile.
 * - rAF + translate3d → 60 fps, ne déclenche pas de reflow.
 * - pointer-events: none → ne bloque jamais le clic.
 * - Respecte prefers-reduced-motion.
 */
export default function MouseHalo() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (raf.current == null) raf.current = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      target.current.x = -9999;
      target.current.y = -9999;
    };

    function loop() {
      raf.current = null;
      const c = current.current;
      const t = target.current;
      // lissage (0.18 = un peu de retard moelleux)
      c.x += (t.x - c.x) * 0.18;
      c.y += (t.y - c.y) * 0.18;
      const el = ref.current;
      if (el) el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) translate(-50%, -50%)`;
      if (Math.abs(t.x - c.x) > 0.5 || Math.abs(t.y - c.y) > 0.5) {
        raf.current = requestAnimationFrame(loop);
      }
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
      style={{
        width: "520px",
        height: "520px",
        transform: "translate3d(-9999px, -9999px, 0)",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,247,238,0.18) 35%, transparent 65%)",
        mixBlendMode: "soft-light",
        filter: "blur(8px)",
        willChange: "transform",
      }}
    />
  );
}
