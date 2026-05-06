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

const SITE_URL = "https://prothesiste-ongulaire.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Prothésiste ongulaire",
    template: "%s | Prothésiste ongulaire",
  },
  description:
    "Pose gel, semi-permanent, nail art. Prenez RDV en ligne ou par téléphone.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Prothésiste ongulaire",
    description:
      "Pose gel, semi-permanent, nail art. Produits sans HEMA, sans TPO.",
    siteName: "Prothésiste ongulaire",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#business`,
  name: "Prothésiste ongulaire",
  image: [
    `${SITE_URL}/og/prothesiste-ongulaire-1x1.jpg`,
    `${SITE_URL}/og/prothesiste-ongulaire-4x3.jpg`,
    `${SITE_URL}/og/prothesiste-ongulaire-16x9.jpg`,
  ],
  url: SITE_URL,
  telephone: "+33XXXXXXXXX",
  email: "contact@prothesiste-ongulaire.fr",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  areaServed: [
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
    "https://www.instagram.com/prothesiste.ongulaire",
    "https://www.facebook.com/prothesisteongulaire",
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
