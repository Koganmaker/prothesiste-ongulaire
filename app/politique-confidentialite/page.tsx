import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata = { title: "Politique de confidentialité" };

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 prose prose-rose">
        <h1 className="font-display text-4xl text-rose-900">Politique de confidentialité</h1>
        <p>
          Cette page décrit comment {SITE.name} collecte et traite vos données
          personnelles, conformément au Règlement Général sur la Protection des
          Données (RGPD).
        </p>
        <h2>Données collectées</h2>
        <ul>
          <li><strong>Prise de rendez-vous</strong> : prénom, numéro de téléphone, prestation demandée. Conservées 12 mois après le dernier RDV.</li>
          <li><strong>Statistiques de visite</strong> : pages vues et durée, anonymisées via Umami, sans cookie.</li>
        </ul>
        <h2>Finalités</h2>
        <p>
          Les données ne sont utilisées que pour répondre aux demandes de RDV.
          Elles ne sont ni revendues, ni partagées avec des tiers.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement et
          d'opposition. Pour les exercer, écrivez à{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <h2>Cookies</h2>
        <p>
          Le site n'utilise pas de cookies de suivi publicitaire. Aucun
          consentement n'est requis pour la navigation.
        </p>
      </main>
      <Footer />
    </>
  );
}
