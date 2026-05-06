"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "#book", label: "Le book" },
  { href: "#services", label: "Tarifs" },
  { href: "#process", label: "Déroulé" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappTemplate)}`;
  const target = SITE.bookingUrl || wa;
  const [open, setOpen] = useState(false);

  // Bloque le scroll quand le drawer est ouvert + ferme à Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-sand-50/85 backdrop-blur-md border-b border-rose-100/70">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="h-display text-2xl tracking-wide text-rose-900 leading-none"
          >
            Prothésiste ongulaire
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-rose-900/80">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-rose-600 transition">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="text-sm font-medium text-rose-900 hidden lg:inline tabular-nums"
              aria-label={`Appeler ${SITE.phoneDisplay}`}
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={target}
              target={SITE.bookingUrl ? "_blank" : undefined}
              rel="noopener"
              className="hidden md:inline rounded-full bg-rose-600 hover:bg-rose-700 transition text-white px-5 py-2 text-sm font-medium"
            >
              Prendre RDV
            </a>

            {/* Burger mobile */}
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-rose-200/70 bg-white/70 backdrop-blur text-rose-900 active:scale-95 transition"
            >
              <span className="relative block w-5 h-3.5">
                <span
                  className="absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300"
                  style={{
                    top: open ? "50%" : "0",
                    transform: open ? "translateY(-50%) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-current transition-opacity duration-200"
                  style={{
                    transform: "translateY(-50%)",
                    opacity: open ? 0 : 1,
                  }}
                />
                <span
                  className="absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300"
                  style={{
                    bottom: open ? "auto" : "0",
                    top: open ? "50%" : "auto",
                    transform: open ? "translateY(-50%) rotate(-45deg)" : "none",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer plein écran mobile */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-rose-900/40 backdrop-blur-sm"
        />
        {/* Panel */}
        <div
          className={`absolute top-16 inset-x-3 rounded-3xl bg-sand-50/95 backdrop-blur-xl ring-1 ring-rose-100 shadow-glow p-5 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-rose-900 text-lg font-medium border-b border-rose-100/70 last:border-0"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <a
              href={`tel:${SITE.phoneE164}`}
              onClick={() => setOpen(false)}
              className="rounded-full border border-rose-600/60 text-rose-900 px-4 py-3 text-center font-medium text-sm"
            >
              Appeler
            </a>
            <a
              href={target}
              target={SITE.bookingUrl ? "_blank" : undefined}
              rel="noopener"
              onClick={() => setOpen(false)}
              className="rounded-full bg-rose-600 text-white px-4 py-3 text-center font-medium text-sm"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
