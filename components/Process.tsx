const STEPS = [
  {
    n: "01",
    t: "Prise de RDV",
    d: "Par téléphone, WhatsApp ou en ligne. Réponse sous 2 h en journée.",
  },
  {
    n: "02",
    t: "Diagnostic",
    d: "Analyse de l'ongle, choix de la technique adaptée, conseils personnalisés.",
  },
  {
    n: "03",
    t: "Pose soignée",
    d: "Produits sans HEMA / TPO, finitions au pinceau, hygiène irréprochable.",
  },
  {
    n: "04",
    t: "Suivi",
    d: "Conseils d'entretien, rappel de remplissage, programme de fidélité.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center mb-12">
        <span className="ornament">Comment ça se passe</span>
        <h2 className="h-display mt-4 text-3xl md:text-4xl text-rose-900">
          Une expérience pensée pour vous
        </h2>
      </div>
      <ol className="grid md:grid-cols-4 gap-5">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="card-lift relative rounded-3xl border border-rose-100 bg-white p-6 pt-10"
          >
            <span className="absolute -top-5 left-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-champagne-200 text-rose-900 font-display text-lg shadow-soft">
              {s.n}
            </span>
            <h3 className="font-medium text-rose-900 text-lg">{s.t}</h3>
            <p className="mt-2 text-sm text-rose-900/70 leading-relaxed">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
