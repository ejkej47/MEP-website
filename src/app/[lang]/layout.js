import { Analytics } from "@vercel/analytics/next"
import "../../styles/globals.css";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CookieBanner from "../../components/common/CookieBanner";
import { getDictionary } from "../../dictionaries/getDictionary";

export async function generateMetadata({ params }) {
  const localeMap = {
    en: "en_US",
    sr: "sr_RS",
    de: "de_DE",
  };

  const baseUrl = "https://eecmep.com";

  // Podešavanje SEO tekstova za svaki jezik ponaosob
  const seoData = {
    en: {
      title: "EE&C MEP | Electrical Design & BIM Modeling",
      description: "Comprehensive Electrical Design, BIM modeling, and coordination for commercial, industrial, and residential projects.",
    },
    sr: {
      title: "EE&C MEP | Elektro projektovanje i BIM modelovanje",
      description: "Projektovanje elektroinstalacija (Electrical Design), BIM modelovanje i koordinacija za komercijalne, industrijske i stambene objekte.",
    },
    de: {
      title: "EE&C MEP | Elektroplanung & BIM-Modellierung",
      description: "Umfassende Elektroplanung, BIM-Modellierung und Koordination für Gewerbe-, Industrie- und Wohnprojekte.",
    }
  };

  // Ako iz nekog razloga jezik nije prepoznat, uvek povlači engleski
  const currentSeo = seoData[params.lang] || seoData.en;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: currentSeo.title,
      template: "%s | EE&C MEP"
    },
    description: currentSeo.description,
    keywords: ["electrical design", "BIM modeling", "MEP engineering", "elektro projektovanje", "BIM koordinacija", "Serbia"],
    authors: [{ name: "EE&C MEP" }],
    creator: "EE&C MEP",
    openGraph: {
      type: "website",
      locale: localeMap[params.lang] ?? "en_US",
      url: `${baseUrl}/${params.lang}`,
      title: currentSeo.title,
      description: currentSeo.description,
      siteName: "EE&C MEP",
    },
    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        "en": `${baseUrl}/en`,
        "sr": `${baseUrl}/sr`,
        "de": `${baseUrl}/de`,
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.lang);

  // JSON-LD Schema za Gugl
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EngineeringBusiness",
    "name": "EE&C MEP",
    "url": "https://eecmep.com",
    "logo": "https://eecmep.com/logo.svg",
    "description": "Comprehensive Electrical Design, BIM modeling, and coordination.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RS" // Ostavljamo RS da bi te Gugl i dalje pronalazio klijentima koji traže firme u Srbiji
    },
    "knowsAbout": [
      "Electrical Design",
      "BIM Modeling",
      "MEP Engineering",
      "Electrical Engineering"
    ]
  };

  return (
    <html lang={params.lang}>
      <body className="flex flex-col min-h-screen">
        {/* Ubacivanje Schema Markupa za SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar lang={params.lang} dict={dict.navbar} />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer lang={params.lang} dict={dict.footer} />
        <CookieBanner dict={dict.cookieConsent} />
        <Analytics />
      </body>
    </html>
  );
}