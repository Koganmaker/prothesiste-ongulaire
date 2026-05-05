import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-50 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-display text-xl mb-2">{SITE.name}</p>
          <p>{SITE.city} ({SITE.postalCode})</p>
          <p>
            <a href={`tel:${SITE.phoneE164}`} className="underline">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-medium mb-2">Liens</p>
          <ul className="space-y-1">
            <li><a href="#book" className="hover:underline">Le book</a></li>
            <li><a href="#services" className="hover:underline">Prestations</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
            <li><a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Suivez-moi</p>
          <ul className="space-y-1">
            <li><a href={SITE.instagram} target="_blank" rel="noopener" className="hover:underline">Instagram</a></li>
            <li><a href={SITE.facebook} target="_blank" rel="noopener" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rose-50/10 py-4 text-center text-xs text-rose-50/70">
        © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
