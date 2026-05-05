import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import MouseHalo from "@/components/MouseHalo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://db-ongles.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Db Ongles — Prothésiste ongulaire à Villeneuve-Tolosane (31270)",
    template: "%s | Db Ongles",
  },
  description:
    "Pose gel, semi-permanent, nail art à Villeneuve-Tolosane et alentours (Cugnaux, Frouzins, Roques). Prenez RDV en ligne ou par téléphone.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Db Ongles — Prothésiste ongulaire à Villeneuve-Tolosane",
    description:
      "Pose gel, semi-permanent, nail art. Produits sans HEMA, sans TPO. Villeneuve-Tolosane (31270).",
    siteName: "Db Ongles",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#business`,
  name: "Db Ongles",
  image: [
    `${SITE_URL}/og/db-ongles-1x1.jpg`,
    `${SITE_URL}/og/db-ongles-4x3.jpg`,
    `${SITE_URL}/og/db-ongles-16x9.jpg`,
  ],
  url: SITE_URL,
  telephone: "+33XXXXXXXXX",
  email: "contact@db-ongles.fr",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ADRESSE_EXACTE",
    addressLocality: "Villeneuve-Tolosane",
    postalCode: "31270",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 0, longitude: 0 },
  areaServed: [
    { "@type": "City", name: "Villeneuve-Tolosane" },
    { "@type": "City", name: "Cugnaux" },
    { "@type": "City", name: "Roques" },
    { "@type": "City", name: "Frouzins" },
    { "@type": "City", name: "Portet-sur-Garonne" },
    { "@type": "City", name: "Toulouse" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/db.ongles",
    "https://www.facebook.com/dbongles",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <MouseHalo />
        {children}
      </body>
    </html>
  );
}
