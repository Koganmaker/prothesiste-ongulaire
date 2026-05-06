const VALUES = [
  { t: "Sans HEMA", d: "Conforme à la réglementation européenne sept. 2025." },
  { t: "Sans TPO", d: "Photo-initiateur de nouvelle génération, plus sûr." },
  { t: "Hygiène stricte", d: "Instruments désinfectés, lime à usage unique." },
  { t: "Sur rendez-vous", d: "Pas d'attente, votre créneau vous est dédié." },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-sand-50 via-sand-100 to-sand-50 border-y border-rose-100 overflow-hidden"
    >
      {/* Voiles décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-champagne-200/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-rose-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
        {/* Photo en cadre glass */}
        <div className="relative">
          <div
            className="rounded-3xl bg-white/35 backdrop-blur-xl ring-1 ring-white/55 ring-inset p-2
                       shadow-[0_15px_45px_-18px_rgba(90,47,35,0.25),inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            <div
              className="aspect-[4/5] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80')",
              }}
            />
          </div>
          {/* Badge années en glass */}
          <div className="absolute -bottom-5 -right-3 md:-right-5 rounded-2xl bg-white/55 backdrop-blur-xl ring-1 ring-white/65 shadow-soft px-5 py-4 text-sm">
            <p className="h-display text-2xl text-rose-900">4 ans</p>
            <p className="text-xs text-rose-900/60 uppercase tracking-widest">
              d'expertise
            </p>
          </div>
        </div>

        {/* Bloc texte en cadre glass */}
        <div
          className="rounded-3xl bg-white/45 backdrop-blur-xl ring-1 ring-white/55 ring-inset p-6 sm:p-8 md:p-10
                     shadow-[0_15px_45px_-18px_rgba(90,47,35,0.18),inset_0_1px_0_rgba(255,255,255,0.7)]"
        >
          <span className="ornament">À propos</span>
          <h2 className="h-display mt-4 text-3xl md:text-5xl text-rose-900">
            Une approche <em className="not-italic text-champagne-600">soignée</em> et personnalisée.
          </h2>
          <p className="mt-5 text-rose-900/80 leading-relaxed">
            Bonjour, je suis <strong>Db</strong>, prothésiste ongulaire.
            Mon objectif : des poses durables, esthétiques,
            qui respectent l'ongle naturel — avec une hygiène irréprochable et
            des produits de dernière génération.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <li
                key={v.t}
                className="rounded-2xl bg-white/55 backdrop-blur-md ring-1 ring-white/60 ring-inset px-4 py-3"
              >
                <p className="font-medium text-rose-900">{v.t}</p>
                <p className="text-xs text-rose-900/65 mt-1">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
