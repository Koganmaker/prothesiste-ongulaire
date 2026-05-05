import { SERVICES } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-sand-50 via-sand-100 to-sand-50 border-y border-rose-100"
    >
      {/* Voiles décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-rose-200/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-[460px] h-[460px] rounded-full bg-champagne-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="ornament">Carte des prestations</span>
          <h2 className="h-display mt-4 text-3xl md:text-5xl text-rose-900">
            Prestations & tarifs
          </h2>
          <p className="mt-3 text-rose-900/65 max-w-xl mx-auto">
            Tarifs indicatifs. Le devis précis est défini lors du rendez-vous,
            selon la longueur souhaitée et le nail art.
          </p>
        </div>

        {/* Conteneur glassmorphism */}
        <div
          className="rounded-3xl bg-white/45 backdrop-blur-xl ring-1 ring-white/55 ring-inset px-5 sm:px-9 py-3 sm:py-5
                     shadow-[0_12px_40px_-15px_rgba(90,47,35,0.18),inset_0_1px_0_rgba(255,255,255,0.7)]"
        >
          <div className="divide-y divide-rose-100/60">
            {SERVICES.map((s, i) => (
              <details
                key={s.name}
                className="group py-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-baseline justify-between cursor-pointer list-none gap-4 select-none">
                  <span className="flex items-baseline gap-3">
                    <span className="text-champagne-600 font-display text-sm tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-rose-900 text-base md:text-lg">
                      {s.name}
                    </span>
                  </span>
                  <span className="flex items-baseline gap-4 text-sm text-rose-900/70 whitespace-nowrap">
                    <span className="hidden sm:inline">{s.duration}</span>
                    <span className="font-semibold text-rose-600 text-base">
                      {s.price}
                    </span>
                    <span className="transition group-open:rotate-45 text-champagne-600 text-lg">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 ml-9 text-rose-900/70 text-sm leading-relaxed max-w-prose">
                  {s.desc}
                </p>
                <p className="mt-2 ml-9 text-xs text-rose-900/50 sm:hidden">
                  Durée · {s.duration}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
