import { SITE } from "@/lib/site";

export default function StickyCTA() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappTemplate)}`;
  const target = SITE.bookingUrl || wa;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-rose-100 px-4 py-3 flex gap-2">
      <a
        href={`tel:${SITE.phoneE164}`}
        className="flex-1 text-center rounded-full border border-rose-600 text-rose-900 py-3 font-medium"
        aria-label="Appeler Db Ongles"
      >
        Appeler
      </a>
      <a
        href={target}
        target={SITE.bookingUrl ? "_blank" : undefined}
        rel="noopener"
        className="flex-1 text-center rounded-full bg-rose-600 text-white py-3 font-medium"
      >
        Prendre RDV
      </a>
    </div>
  );
}
