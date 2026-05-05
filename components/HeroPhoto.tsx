"use client";

export default function HeroPhoto({ src }: { src: string }) {
  return (
    <div
      className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-glow bg-rose-100 hero-float"
      style={{
        backgroundImage: `url('${src}'), linear-gradient(135deg, #f3ece1 0%, #f5cdbf 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[2rem]" />
    </div>
  );
}
