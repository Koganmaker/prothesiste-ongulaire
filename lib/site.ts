export const SITE = {
  name: "Prothésiste ongulaire",
  city: "",
  postalCode: "",
  phoneDisplay: "06 XX XX XX XX",
  phoneE164: "+33XXXXXXXXX",
  whatsapp: "33XXXXXXXXX",
  whatsappTemplate: "Bonjour Db, j'aimerais prendre RDV pour",
  instagram: "https://www.instagram.com/prothesiste.ongulaire",
  facebook: "https://www.facebook.com/prothesisteongulaire",
  bookingUrl: "https://www.planity.com/", // démo — à remplacer par l'URL profil exact
  email: "contact@prothesiste-ongulaire.fr",
  hours: [
    { d: "Mardi — Vendredi", h: "9h — 19h" },
    { d: "Samedi", h: "9h — 17h" },
    { d: "Dimanche / Lundi", h: "Fermé" },
  ],
  cities: ["Cugnaux", "Roques", "Frouzins", "Portet", "Toulouse"],
};

export const SERVICES = [
  { name: "Pose complète gel + capsules", duration: "1h45", price: "55 €", desc: "Forme et longueur sur-mesure, finition gloss ou mat." },
  { name: "Remplissage gel", duration: "1h30", price: "45 €", desc: "Toutes les 3-4 semaines pour entretenir la pose." },
  { name: "Vernis semi-permanent mains", duration: "45 min", price: "30 €", desc: "Tenue 2 à 3 semaines, large choix de couleurs." },
  { name: "Beauté des pieds + semi-permanent", duration: "1h", price: "40 €", desc: "Soin complet, ponçage, cuticules, pose." },
  { name: "Nail art personnalisé", duration: "+15 à 30 min", price: "+5 à 20 €", desc: "French, babyboomer, marbré, chrome, dessins libres." },
  { name: "Pose américaine (Gel X)", duration: "1h30", price: "55 €", desc: "Capsules pré-formées soft gel, ultra légères." },
  { name: "Dépose complète", duration: "30 min", price: "15 €", desc: "Sans agression de l'ongle naturel." },
];
