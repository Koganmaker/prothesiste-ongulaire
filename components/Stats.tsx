const STATS = [
  { n: "500+", l: "poses réalisées" },
  { n: "4,9 / 5", l: "30+ avis Google" },
  { n: "0 %", l: "HEMA · TPO" },
  { n: "2 h", l: "réponse en journée" },
];

export default function Stats() {
  return (
    <section className="bg-rose-900 text-rose-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">
        {STATS.map((s) => (
          <div key={s.l} className="text-center">
            <p className="h-display text-3xl md:text-4xl text-champagne-200">{s.n}</p>
            <p className="mt-1 text-xs md:text-sm uppercase tracking-widest text-rose-50/70">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
