const VALUES = [
  { t: "Sans HEMA", d: "Conforme à la réglementation européenne sept. 2025." },
  { t: "Sans TPO", d: "Photo-initiateur de nouvelle génération, plus sûr." },
  { t: "Hygiène stricte", d: "Instruments désinfectés, lime à usage unique." },
  { t: "Sur rendez-vous", d: "Pas d'attente, votre créneau vous est dédié." },
];

export default function About() {
  return (
    <section id="about" className="relative bg-sand-100 border-y border-rose-100">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
        <div className="relative">
          <div
            className="aspect-[4/5] rounded-3xl bg-cover bg-center shadow-soft"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80')",
            }}
          />
          <div className="absolute -bottom-5 -right-3 md:-right-5 rounded-2xl bg-white shadow-soft px-5 py-4 text-sm">
            <p className="h-display text-2xl text-rose-900">4 ans</p>
            <p className="text-xs text-rose-900/60 uppercase tracking-widest">
              d'expertise
            </p>
          </div>
        </div>

        <div>
          <span className="ornament">À propos</span>
          <h2 className="h-display mt-4 text-3xl md:text-5xl text-rose-900">
            Une approche <em className="not-italic text-champagne-600">soignée</em> et personnalisée.
          </h2>
          <p className="mt-5 text-rose-900/80 leading-relaxed">
            Bonjour, je suis <strong>Db</strong>, prothésiste ongulaire installée
            à Villeneuve-Tolosane. Mon objectif : des poses durables, esthétiques,
            qui respectent l'ongle naturel — avec une hygiène irréprochable et
            des produits de dernière génération.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {VALUES.map((v) => (
              <li
                key={v.t}
                className="rounded-2xl border border-rose-200/70 bg-white/70 px-4 py-3"
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
