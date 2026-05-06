# Prothésiste ongulaire — Site

Site vitrine Next.js 15 pour Prothésiste ongulaire, prothésiste ongulaire. Stack 100 % gratuite.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Structure

```
app/
 layout.tsx # SEO + JSON-LD BeautySalon
 page.tsx # Home long-scroll
 mentions-legales/page.tsx
 politique-confidentialite/page.tsx
 sitemap.ts
 robots.ts
components/
 Header.tsx, Hero.tsx, Gallery.tsx, Services.tsx,
 About.tsx, Reviews.tsx, Contact.tsx, Footer.tsx, StickyCTA.tsx
lib/
 site.ts # Constantes (téléphone, horaires, etc.)
 gallery.ts # Lecture content/gallery/*.md
public/
 admin/index.html, admin/config.yml # Decap CMS
 photos/ # Images uploadées via Decap
content/
 gallery/ # Fichiers .md générés par Decap
```

## À faire avant déploiement (recherche / remplacer)

| Placeholder | Fichier | Valeur attendue |
|---|---|---|
| `+33XXXXXXXXX` | `lib/site.ts`, `app/layout.tsx` | Numéro E.164 réel |
| `06 XX XX XX XX` | `lib/site.ts` | Numéro affiché |
| `33XXXXXXXXX` | `lib/site.ts` | Numéro WhatsApp sans `+` |
| `ADRESSE_EXACTE` | `app/layout.tsx` | Adresse postale |
| `latitude: 0, longitude: 0` | `app/layout.tsx` | Coordonnées GPS Maps |
| `SIRET : XXX...` | `app/mentions-legales/page.tsx` | SIRET réel |
| `REMPLACER_PAR/prothesiste-ongulaire` | `public/admin/config.yml` | `user/repo` GitHub |
| `cid=XXXXXXXXX` | `app/layout.tsx`, `components/Reviews.tsx` | CID GBP |
| `bookingUrl: ""` | `lib/site.ts` | URL Planity / Booksy si dispo |

## Déploiement (gratuit)

1. **GitHub** : créer un repo privé, push.
2. **Vercel** : import du repo, région **`cdg1` (Paris)**, déploiement auto. Plan Hobby (gratuit).
3. **Domaine** : acheter `prothesiste-ongulaire.fr` (~10 €/an chez OVH/Gandi), brancher dans Vercel → Settings → Domains.
4. **Decap CMS** : configurer l'auth GitHub OAuth (cf. https://decapcms.org/docs/github-backend/). Méthode la plus simple : Netlify Identity en proxy gratuit, ou fonction Vercel custom.
5. **Google Business Profile** : créer la fiche, catégorie principale **« Salon de manucure »**, 10 photos minimum, NAP exact.
6. **Search Console** : ajouter la propriété `prothesiste-ongulaire.fr`, soumettre `/sitemap.xml`.
7. **Analytics** : créer un site Umami Cloud (free), ajouter le snippet dans `app/layout.tsx`.

## Performance budget

- LCP mobile 4G : < 2.0 s
- CLS : < 0.1
- INP : < 200 ms
- JS galerie : < 100 kB gzipped
- Lighthouse mobile : ≥ 90

## Workflow CMS pour Db

1. Aller sur `prothesiste-ongulaire.fr/admin`
2. Se connecter avec son compte GitHub
3. Cliquer **Le book → Nouveau**
4. Glisser-déposer la photo, écrire la description (alt SEO), valider
5. Vercel rebuilt le site automatiquement (~1 min)

## Licences

- Code : propriétaire Prothésiste ongulaire
- Photos : © Prothésiste ongulaire
