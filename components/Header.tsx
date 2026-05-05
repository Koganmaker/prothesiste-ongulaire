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

  // Ferme le menu si on passe en desktop ou si on touche Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-sand-50/85 backdrop-blur-md border-b border-rose-100/70">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="h-display text-2xl tracking-wide text-rose-900 leading-none"
        >
          Db <span className="text-champagne-600">·</span> Ongles
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
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-rose-200/70 bg-white/60 backdrop-blur text-rose-900"
          >
            <span className="relative block w-4 h-3">
              <span
                className={`absolute left-0 right-0 h-[1.5px] bg-current transition-transform duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[1.5px] bg-current top-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[1.5px] bg-current transition-transform duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-5 pt-2 flex flex-col gap-1 border-t border-rose-100/70 bg-sand-50/95 backdrop-blur-md">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-rose-900 text-base border-b border-rose-100/50 last:border-0"
            >
              {n.label}
            </a>
          ))}
          <a
            href={target}
            target={SITE.bookingUrl ? "_blank" : undefined}
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-full bg-rose-600 text-white px-5 py-3 text-center font-medium"
          >
            Prendre RDV
          </a>
          <a
            href={`tel:${SITE.phoneE164}`}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-rose-600/60 text-rose-900 px-5 py-3 text-center font-medium"
          >
            Appeler {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
