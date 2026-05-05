import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-rose-900 text-rose-50">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] text-rose-50/10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div>
          <span className="ornament text-champagne-200">Prendre rendez-vous</span>
          <h2 className="h-display mt-4 text-3xl md:text-5xl">
            Réservez votre <em className="not-italic text-champagne-200">moment</em>.
          </h2>
          <p className="mt-4 text-rose-50/75 leading-relaxed max-w-prose">
            Sur rendez-vous uniquement. Je vous réponds sous 2 h en journée — par
            téléphone ou DM Instagram.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="card-lift block rounded-2xl bg-champagne-200 text-rose-900 p-5 text-center font-medium"
            >
              Appeler {SITE.phoneDisplay}
            </a>
            {SITE.bookingUrl && (
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener"
                className="card-lift block rounded-2xl bg-rose-50 text-rose-900 p-5 text-center font-medium"
              >
                Réserver en ligne
              </a>
            )}
          </div>

          <div className="mt-6 flex gap-3 text-sm">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener"
              className="text-champagne-200 hover:text-rose-50 underline underline-offset-4"
            >
              Instagram
            </a>
            <span className="text-rose-50/30">·</span>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener"
              className="text-champagne-200 hover:text-rose-50 underline underline-offset-4"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-rose-50/5 backdrop-blur border border-rose-50/15 p-7 space-y-5 text-sm">
          <div>
            <h3 className="h-display text-2xl text-champagne-200 mb-3">Horaires</h3>
            <ul className="space-y-2">
              {SITE.hours.map((h) => (
                <li
                  key={h.d}
                  className="flex justify-between border-b border-rose-50/10 pb-2 last:border-0"
                >
                  <span className="text-rose-50/85">{h.d}</span>
                  <span className="text-rose-50">{h.h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-rose-50/15">
            <p className="text-rose-50/85">
              <span className="font-medium text-rose-50">{SITE.city}</span> ({SITE.postalCode})
            </p>
            <p className="text-xs text-rose-50/60 mt-1">
              Adresse exacte communiquée à la confirmation du RDV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
