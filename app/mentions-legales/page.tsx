import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 prose prose-rose">
        <h1 className="font-display text-4xl text-rose-900">Mentions légales</h1>
        <h2>Éditrice du site</h2>
        <p>
          {SITE.name}<br />
          Statut : auto-entrepreneur (à compléter)<br />
          SIRET : XXX XXX XXX XXXXX<br />
          Adresse : {SITE.city} ({SITE.postalCode})<br />
          Téléphone : <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a><br />
          Email : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <h2>Directrice de la publication</h2>
        <p>Db (à compléter avec nom et prénom complets).</p>
        <h2>Hébergement</h2>
        <p>
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, photos, logos)
          est la propriété exclusive de {SITE.name}, sauf mention contraire.
          Toute reproduction sans autorisation écrite préalable est interdite.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Voir la <a href="/politique-confidentialite">politique de confidentialité</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
