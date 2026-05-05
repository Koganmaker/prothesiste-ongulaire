const reviews = [
  {
    name: "Camille D.",
    when: "il y a 2 semaines",
    text: "Super accueillante, pose impeccable, mes ongles tiennent 4 semaines facile. Db prend le temps de bien faire.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    when: "il y a 1 mois",
    text: "Le nail art babyboomer est sublime, finition parfaite et matériel ultra propre. Je recommande à 100%.",
    stars: 5,
  },
  {
    name: "Léa P.",
    when: "il y a 1 mois",
    text: "Très soigneuse, hygiène parfaite, je ne vais plus ailleurs. Mention spéciale pour les conseils d'entretien.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="ornament">Témoignages</span>
          <h2 className="h-display mt-4 text-3xl md:text-5xl text-rose-900">
            Elles ont adopté la pose
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-rose-900/70">
            <span className="text-champagne-600">★★★★★</span>
            <span>4,9 / 5 — sur Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="card-lift bg-sand-50 rounded-3xl p-6 border border-rose-100"
            >
              <div className="text-champagne-600 text-lg mb-3" aria-label={`${r.stars} étoiles`}>
                {"★".repeat(r.stars)}
              </div>
              <blockquote className="text-rose-900/85 leading-relaxed">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-xs">
                <span className="font-medium text-rose-900">— {r.name}</span>
                <span className="text-rose-900/55">{r.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps?cid=XXXXXXXXX"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-rose-600 hover:text-rose-700 underline underline-offset-4"
          >
            Lire tous les avis Google →
          </a>
        </div>
      </div>
    </section>
  );
}
