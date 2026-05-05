import { SITE } from "@/lib/site";

export default function Header() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappTemplate)}`;
  const target = SITE.bookingUrl || wa;
  return (
    <header className="sticky top-0 z-30 bg-sand-50/85 backdrop-blur-md border-b border-rose-100/70">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="h-display text-2xl tracking-wide text-rose-900 leading-none"
        >
          Db <span className="text-champagne-600">·</span> Ongles
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-rose-900/80">
          <a href="#book" className="hover:text-rose-600 transition">Le book</a>
          <a href="#services" className="hover:text-rose-600 transition">Prestations</a>
          <a href="#process" className="hover:text-rose-600 transition">Déroulé</a>
          <a href="#about" className="hover:text-rose-600 transition">À propos</a>
          <a href="#contact" className="hover:text-rose-600 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneE164}`}
            className="text-sm font-medium text-rose-900 hidden sm:inline tabular-nums"
            aria-label={`Appeler ${SITE.phoneDisplay}`}
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={target}
            target={SITE.bookingUrl ? "_blank" : undefined}
            rel="noopener"
            className="hidden md:inline rounded-full bg-rose-600 hover:bg-rose-700 transition text-white px-5 py-2 text-sm font-medium"
          >
            Prendre RDV
          </a>
        </div>
      </div>
    </header>
  );
}
