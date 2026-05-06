# BRIEF — Prothésiste ongulaire

Site vitrine d'une prothésiste ongulaire. Stack 100 % gratuite, mobile-first, optimisé conversion locale et SEO.

## 1. Objectifs

1. Décrocher le téléphone / le RDV. CTA principal mesurable : appels `tel:`, clics « Prendre RDV », clics WhatsApp.
2. Apparaître en map pack Google sur les requêtes « prothésiste ongulaire », « pose gel », « semi-permanent Cugnaux ».
3. Donner à Db un outil simple pour publier ses réalisations sans toucher au code.

## 2. Stack technique (100 % gratuit)

- **Framework** : Next.js 15 (App Router) + TypeScript + Tailwind CSS.
- **Hébergement** : Vercel Hobby (free) en région `cdg1` (Paris) pour latence FR.
- **Repo** : GitHub (privé, free).
- **Domaine** : `prothesiste-ongulaire.fr` (~10 €/an, seul coût hors « gratuit » — alternative gratuite : sous-domaine Vercel `prothesiste-ongulaire.vercel.app` mais déconseillé pour le SEO local).
- **CMS** : Decap CMS (open source, gratuit à vie, auth GitHub OAuth via Netlify Identity gratuit ou Vercel function maison). Stocke images dans `/public/photos` versionnées Git.
- **Analytics** : Umami Cloud free (10k events/mois) ou auto-hébergé Vercel + Postgres free Neon — RGPD friendly, pas de bandeau cookie requis.
- **Email contact** : Resend free (3 000 emails/mois) ou simple `mailto:`.
- **Booking** : lien externe Planity ou Booksy (free pour le pro débutant) OU bouton WhatsApp template `wa.me/33XXXXXXXXX?text=...`.

## 3. Architecture du site

Une seule page long-scroll mobile-first avec ancres :

1. **Header** : logo + tél `tel:` cliquable + bouton « Prendre RDV ».
2. **Hero** : vidéo loop verticale muette (autoplay, muted, playsinline, 6-8 s) ou image LCP unique. Slogan + CTA.
3. **Le book** (galerie) : `react-photo-album` (RowsPhotoAlbum) + `yet-another-react-lightbox` chargé via `next/dynamic`, alimenté par Decap CMS.
4. **Prestations & tarifs** : accordéons `<details>` (8 prestations max).
5. **À propos** : photo réelle de Db, parcours, valeurs (produits sans HEMA / sans TPO post-interdiction sept. 2025).
6. **Avis Google** : widget embed (rich snippet `aggregateRating` + 3-4 avis verbatim).
7. **Contact / RDV** : sticky CTA bas d'écran + bloc plan + horaires + WhatsApp + Instagram + tél.
8. **Footer** : NAP, mentions légales, RGPD, cookies, SIRET.

## 4. Performance budget (gardes-fou chiffrés)

- LCP mobile 4G : **< 2.0 s**
- CLS : **< 0.1**
- INP : **< 200 ms**
- JS total route galerie (gzipped) : **< 100 kB**
- Lighthouse Performance mobile : **≥ 90**

Vérification CI : GitHub Action `treosh/lighthouse-ci-action` sur chaque PR.

## 5. Images — Next.js Image strict

- `next.config.js` : `formats: ['image/avif','image/webp']`, `deviceSizes` et `imageSizes` par défaut.
- Une seule image en `priority` par route (le hero).
- Toujours `width`/`height` ou import statique.
- Toujours `sizes` déclaré.
- `alt` descriptif local : `"Pose gel babyboomer rose pâle réalisée"`.
- Filigrane discret `@prothesiste.ongulaire` coin bas-droit sur chaque photo (anti-scrape concurrent).

## 6. SEO local — checklist J+0

1. **Google Business Profile** : catégorie principale **« Salon de manucure »** (PAS « Salon de beauté »). 10 photos minimum, NAP exact, horaires.
2. **JSON-LD `BeautySalon`** dans `<head>` (cf. Annexe A) — coordonnées GPS exactes du cabinet (pas génériques).
3. **NAP cohérent** sur GBP, site, Pages Jaunes, Planity, Booksy, Facebook, Instagram.
4. **Title** : `Prothésiste ongulaire — Prothésiste ongulaire` (≤60 car).
5. **Meta description** : `Pose gel, semi-permanent, nail art et alentours (Cugnaux, Frouzins, Roques). Prenez RDV en ligne ou par téléphone.` (~155 car).
6. **H1** : `Prothésiste ongulaire`.
7. **Citations** : Pages Jaunes, Treatwell, Planity, Booksy, StarOfService, Aladom.
8. **Avis Google** : SMS post-RDV avec lien direct GBP. Cible 30+ avis / 6 mois, note ≥ 4.8.
9. **Backlinks locaux** : Mairie (annuaire commerces), partenaires coiffeur/esthéticienne, écoles.
10. **Search Console** + **sitemap.xml** automatique Next.js dès J+0.

## 7. Mentions légales obligatoires (FR)

Page `/mentions-legales` requise par la LCEN. Doit contenir :

- Identité de l'éditrice (nom, prénom, statut auto-entrepreneur ou autre).
- Numéro SIRET.
- Adresse professionnelle.
- Email et téléphone de contact.
- Hébergeur (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA).
- Directeur de publication.

Page `/politique-confidentialite` : RGPD (données collectées, finalité, durée, droits).
Bandeau cookies : non requis si Umami cookieless. Sinon CookieYes free.

## 8. CMS Decap — schéma minimal

`public/admin/config.yml` :

```yaml
backend:
 name: github
 repo: prothesiste-ongulaire/site
 branch: main
media_folder: public/photos
public_folder: /photos
collections:
 - name: gallery
 label: Le book
 folder: content/gallery
 create: true
 slug: "{{slug}}"
 fields:
 - { label: Titre, name: title, widget: string }
 - { label: Photo, name: image, widget: image }
 - { label: Description (alt SEO), name: alt, widget: string }
 - { label: Ordre, name: order, widget: number, default: 100 }
 - { label: Visible, name: published, widget: boolean, default: true }
 - name: services
 label: Prestations
 folder: content/services
 create: true
 fields:
 - { label: Nom, name: name, widget: string }
 - { label: Durée, name: duration, widget: string }
 - { label: Prix, name: price, widget: string }
 - { label: Description, name: description, widget: text }
```

Db accède à `prothesiste-ongulaire.fr/admin`, login GitHub OAuth, drag-drop ses photos, clic Publier → rebuild Vercel auto.

## 9. Code de référence (galerie)

Voir Annexe B (`react-photo-album` + `yet-another-react-lightbox` chargé en `next/dynamic`).

## 10. Roadmap

**Sprint 1 (semaine 1)** : repo, déploiement Vercel, domaine, hero + galerie statique avec 10 photos seed, JSON-LD, mentions légales, GBP créé.

**Sprint 2 (semaine 2)** : Decap CMS branché, accordéons services, avis Google embed, sticky CTA, WhatsApp, lighthouse ≥ 90.

**Sprint 3 (semaine 3)** : citations locales (Pages Jaunes, Planity, Treatwell), première campagne SMS d'avis aux clientes existantes, Search Console + sitemap soumis.

**Post-launch (mois 2-3)** : booking en ligne intégré (Planity ou Booksy), 30+ avis Google, premier audit SEO local.

## 11. À NE PAS faire

- Pages services dupliquées (`/pose-gel`, `/semi-permanent`…) avec boilerplate identique.
- Photos stock Pexels/Unsplash de mains/ongles.
- Demander à Db de toucher Git ou GitHub Desktop.
- Formulaire de contact à 6+ champs.
- `priority` sur plusieurs images.
- `useMediaQuery` pour switcher des composants côté React (CLS hydration).
- Catégorie GBP « Salon de beauté ».
- Sous-domaine Vercel sans domaine `.fr` (perte SEO local).
- Google Analytics 4 (bandeau cookie obligatoire, lourd).

---

## Annexe A — JSON-LD `BeautySalon`

À placer dans `app/layout.tsx`. Remplacer toutes les valeurs `XXX` et coordonnées GPS par les valeurs exactes (vérifier l'adresse exacte sur Google Maps avant déploiement).

```tsx
const jsonLd = {
 "@context": "https://schema.org",
 "@type": "BeautySalon",
 "@id": "https://prothesiste-ongulaire.fr/#business",
 "name": "Prothésiste ongulaire",
 "image": [
 "https://prothesiste-ongulaire.fr/og/prothesiste-ongulaire-1x1.jpg",
 "https://prothesiste-ongulaire.fr/og/prothesiste-ongulaire-4x3.jpg",
 "https://prothesiste-ongulaire.fr/og/prothesiste-ongulaire-16x9.jpg"
 ],
 "url": "https://prothesiste-ongulaire.fr",
 "telephone": "+33XXXXXXXXX",
 "email": "contact@prothesiste-ongulaire.fr",
 "priceRange": "€€",
 "currenciesAccepted": "EUR",
 "paymentAccepted": "Cash, Credit Card",
 "address": {
 "@type": "PostalAddress",
 "streetAddress": "ADRESSE_EXACTE",
 "addressLocality": "",
 "postalCode": "",
 "addressRegion": "Occitanie",
 "addressCountry": "FR"
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": 0.0,
 "longitude": 0.0
 },
 "areaServed": [
 { "@type": "City", "name": "" },
 { "@type": "City", "name": "Cugnaux" },
 { "@type": "City", "name": "Roques" },
 { "@type": "City", "name": "Frouzins" },
 { "@type": "City", "name": "Portet-sur-Garonne" },
 { "@type": "City", "name": "Toulouse" }
 ],
 "openingHoursSpecification": [
 {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"],
 "opens": "09:00", "closes": "19:00"
 },
 {
 "@type": "OpeningHoursSpecification",
 "dayOfWeek": ["Saturday"],
 "opens": "09:00", "closes": "17:00"
 }
 ],
 "sameAs": [
 "https://www.instagram.com/prothesiste.ongulaire",
 "https://www.facebook.com/prothesisteongulaire",
 "https://www.google.com/maps?cid=XXXXXXXXX"
 ]
};

<script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
 }}
/>
```

## Annexe B — Galerie code de référence

`app/galerie/page.tsx` (Server Component) — lit les photos depuis `content/gallery/*.md` (Decap), les passe au Client Component qui gère grille + lightbox. Voir section 3.4 du dossier Research pour le code complet.
