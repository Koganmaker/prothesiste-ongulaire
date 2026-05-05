"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [index, setIndex] = useState(-1);
  const [broken, setBroken] = useState<Set<number>>(new Set());

  const visible = photos.filter((_, i) => !broken.has(i));

  if (visible.length === 0) {
    return (
      <p className="text-center text-rose-900/60 py-12">
        Galerie en cours de mise à jour. Suivez-moi sur Instagram pour les
        dernières réalisations.
      </p>
    );
  }

  return (
    <>
      {/* Grille magazine — mobile-first :
         · 2 col par défaut (mobile)
         · 3 col ≥ sm (640px)
         · 4 col ≥ lg (1024px)
         La 1ʳᵉ photo prend 2×2 dès sm pour casser la régularité. */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[1fr] gap-2.5 sm:gap-3 md:gap-4">
        {photos.map((p, i) =>
          broken.has(i) ? null : (
            <li
              key={p.src + i}
              className={[
                "group relative overflow-hidden rounded-3xl",
                "bg-white/25 backdrop-blur-xl",
                "ring-1 ring-white/40 ring-inset",
                "shadow-[0_8px_30px_-12px_rgba(90,47,35,0.25),inset_0_1px_0_rgba(255,255,255,0.6)]",
                i === 0 ? "col-span-2 row-span-2" : "",
              ].join(" ")}
              style={{ aspectRatio: i === 0 ? "1 / 1" : "4 / 5" }}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ouvrir : ${p.alt}`}
                className="block w-full h-full text-left p-1.5 sm:p-2"
              >
                <span className="relative block w-full h-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    onError={() =>
                      setBroken((prev) => {
                        const n = new Set(prev);
                        n.add(i);
                        return n;
                      })
                    }
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                  {/* Glass top sheen */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"
                  />
                  {/* Hover dark frosted overlay */}
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-rose-900/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </span>

                {/* Glass number badge */}
                <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 inline-flex items-center justify-center rounded-full bg-white/35 backdrop-blur-md text-rose-900 text-[10px] font-semibold tracking-widest px-2.5 py-1 ring-1 ring-white/55 shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Glass caption (hover) */}
                <span className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl bg-white/20 backdrop-blur-md ring-1 ring-white/40 px-3 py-2 text-rose-50 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                  {p.alt}
                </span>
              </button>
            </li>
          )
        )}
      </ul>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={visible.map((p) => ({ src: p.src, alt: p.alt }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
