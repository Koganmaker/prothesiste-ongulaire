import { SITE } from "@/lib/site";
import HeroPhoto from "./HeroPhoto";

// Pour remplacer la photo : enregistre ton image en /public/hero.jpg
// (ratio portrait conseillé, ~1200 × 1800 ou plus, < 500 ko après compression).
const HERO_IMG = "/hero.png";

export default function Hero() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappTemplate)}`;
  const target = SITE.bookingUrl || wa;

  return (
    <section id="top" className="relative overflow-hidden bg-sand-grain">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[560px] h-[560px] text-rose-200/55"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="125" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand-100/80 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
        <div className="animate-fade-up order-2 md:order-1">
          <span className="ornament">{SITE.city} · 31270</span>
          <h1 className="h-display mt-5 text-[2.5rem] sm:text-5xl md:text-[4.2rem] text-rose-900">
            Des ongles soignés,
            <br />
            <em className="not-italic text-champagne-600">au plus près de chez vous.</em>
          </h1>
          <p className="mt-6 text-lg text-rose-900/75 max-w-prose leading-relaxed">
            Pose gel, semi-permanent, nail art à Villeneuve-Tolosane.
            Produits sans HEMA et sans TPO, hygiène stricte, finitions sur-mesure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={target}
              target={SITE.bookingUrl ? "_blank" : undefined}
              rel="noopener"
              className="rounded-full bg-rose-600 hover:bg-rose-700 transition text-white px-7 py-3.5 font-medium shadow-glow"
            >
              Prendre rendez-vous
            </a>
            <a
              href={`tel:${SITE.phoneE164}`}
              className="rounded-full border border-rose-600/60 hover:border-rose-600 hover:bg-white/60 transition text-rose-900 px-7 py-3.5 font-medium"
            >
              {SITE.phoneDisplay}
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-3 max-w-md text-xs text-rose-900/80">
            {[
              { t: "Sans HEMA", s: "Sans TPO" },
              { t: "Hygiène", s: "Stricte" },
              { t: "Réponse", s: "Sous 2 h" },
            ].map((u) => (
              <li
                key={u.t}
                className="rounded-2xl border border-rose-200/70 bg-white/60 backdrop-blur px-3 py-3 text-center"
              >
                <p className="font-medium text-rose-900">{u.t}</p>
                <p className="text-[0.7rem] text-rose-900/55 mt-0.5">{u.s}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero photo : single image, full bleed, format portrait, tilt au hover */}
        <div className="order-1 md:order-2 relative animate-fade-in [perspective:1200px]">
          <HeroPhoto src={HERO_IMG} />
          <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 rounded-full bg-champagne-200 text-rose-900 text-sm px-5 py-2.5 shadow-soft font-medium">
            ★ 4,9 / 5 — Avis Google
          </div>
        </div>
      </div>
    </section>
  );
}
