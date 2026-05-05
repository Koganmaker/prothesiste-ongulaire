import { SITE } from "@/lib/site";

const HERO_IMG = "/hero.png";

export default function Hero() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappTemplate)}`;
  const target = SITE.bookingUrl || wa;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden md:min-h-[92svh] md:flex"
    >
      {/* Photo full-bleed en fond — visible UNIQUEMENT desktop */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 -z-10 bg-cover bg-right hero-bg-pan"
        style={{ backgroundImage: `url('${HERO_IMG}')` }}
      />
      {/* Voile de lecture desktop */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 -z-10 bg-gradient-to-r from-sand-50/75 via-sand-50/30 to-transparent"
      />

      {/* Ornement cercles en haut-droite */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] text-rose-200/50 hidden md:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="125" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Fade vers la section suivante */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rose-900/20 to-transparent hidden md:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 pt-10 pb-12 md:pt-28 md:pb-16 flex flex-col gap-8 md:justify-between md:gap-10">
        {/* Bloc texte */}
        <div className="animate-fade-up max-w-2xl">
          <span className="ornament">{SITE.city} · 31270</span>
          <h1 className="h-display mt-4 md:mt-5 text-[2.1rem] sm:text-5xl md:text-[5rem] leading-[1.05] md:leading-[0.95] text-rose-900">
            Des ongles soignés,
            <br />
            <em className="not-italic text-champagne-600">au plus près de chez vous.</em>
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-rose-900/75 max-w-prose leading-relaxed">
            Pose gel, semi-permanent, nail art à Villeneuve-Tolosane.
            Produits sans HEMA et sans TPO, hygiène stricte, finitions sur-mesure.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
            <a
              href={target}
              target={SITE.bookingUrl ? "_blank" : undefined}
              rel="noopener"
              className="rounded-full bg-rose-600 hover:bg-rose-700 transition text-white px-6 md:px-7 py-3.5 font-medium shadow-glow text-sm md:text-base"
            >
              Prendre rendez-vous
            </a>
            <a
              href={`tel:${SITE.phoneE164}`}
              className="rounded-full border border-rose-600/70 hover:border-rose-600 hover:bg-white/60 backdrop-blur transition text-rose-900 px-6 md:px-7 py-3.5 font-medium text-sm md:text-base"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Photo en card — UNIQUEMENT mobile */}
        <div className="md:hidden relative animate-fade-in">
          <div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glow bg-rose-100"
            style={{
              backgroundImage: `url('${HERO_IMG}'), linear-gradient(135deg, #f3ece1 0%, #f5cdbf 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-3xl" />
          </div>
          <div className="absolute -bottom-3 -right-3 rounded-full bg-champagne-200 text-rose-900 text-xs px-4 py-2 shadow-soft font-medium ring-1 ring-white/40">
            ★ 4,9 / 5 — Avis Google
          </div>
        </div>

        {/* Pied du hero — USP en ligne */}
        <div className="animate-fade-up flex flex-wrap items-end justify-between gap-5">
          <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full sm:w-auto sm:flex sm:flex-wrap text-xs text-rose-900/80">
            {[
              { t: "Sans HEMA", s: "Sans TPO" },
              { t: "Hygiène", s: "Stricte" },
              { t: "Réponse", s: "Sous 2 h" },
            ].map((u) => (
              <li
                key={u.t}
                className="rounded-2xl border border-rose-200/70 bg-white/55 backdrop-blur px-3 py-2.5 sm:px-4 text-center sm:text-left"
              >
                <p className="font-medium text-rose-900 leading-tight">{u.t}</p>
                <p className="text-[0.7rem] text-rose-900/55 mt-0.5">{u.s}</p>
              </li>
            ))}
          </ul>
          {/* Badge avis — desktop only (mobile a déjà le badge sur la card) */}
          <div className="hidden md:block rounded-full bg-champagne-200/95 backdrop-blur text-rose-900 text-sm px-5 py-2.5 shadow-soft font-medium ring-1 ring-white/40">
            ★ 4,9 / 5 — Avis Google
          </div>
        </div>
      </div>
    </section>
  );
}
