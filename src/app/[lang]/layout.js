import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"; 
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
  // Apsolutna putanja do tvoje slike iz public foldera
  const ogImageUrl = `${baseUrl}/og-image.png`; 

  // Prošireni SEO podaci sa ključnim rečima specifičnim za jezik
  const seoData = {
    en: {
      title: "EE&C MEP | Electrical Design & BIM Modeling",
      description: "Comprehensive Electrical Design, BIM modeling, and coordination for commercial, industrial, and residential projects.",
      keywords: ["electrical design", "BIM modeling", "MEP engineering", "BIM coordination", "Serbia"],
    },
    sr: {
      title: "EE&C MEP | Elektro projektovanje i BIM modelovanje",
      description: "Projektovanje elektroinstalacija, BIM modelovanje i koordinacija za komercijalne, industrijske i stambene objekte.",
      keywords: ["elektro projektovanje", "BIM modelovanje", "MEP inženjering", "BIM koordinacija", "Srbija"],
    },
    de: {
      title: "EE&C MEP | Elektroplanung & BIM-Modellierung",
      description: "Umfassende Elektroplanung, BIM-Modellierung und Koordination für Gewerbe-, Industrie- und Wohnprojekte.",
      keywords: ["Elektroplanung", "BIM-Modellierung", "MEP-Engineering", "BIM-Koordination", "Serbien"],
    }
  };

  const currentSeo = seoData[params.lang] || seoData.en;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: currentSeo.title,
      template: "%s | EE&C MEP"
    },
    description: currentSeo.description,
    keywords: currentSeo.keywords,
    authors: [{ name: "EE&C MEP" }],
    creator: "EE&C MEP",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: localeMap[params.lang] ?? "en_US",
      url: `${baseUrl}/${params.lang}`,
      title: currentSeo.title,
      description: currentSeo.description,
      siteName: "EE&C MEP",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: currentSeo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentSeo.title,
      description: currentSeo.description,
      images: [ogImageUrl],
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

  // Definišemo trenutni SEO opis za JSON-LD u zavisnosti od jezika
  const seoDescriptions = {
    en: "Comprehensive Electrical Design, BIM modeling, and coordination.",
    sr: "Sveobuhvatno elektro projektovanje, BIM modelovanje i koordinacija.",
    de: "Umfassende Elektroplanung, BIM-Modellierung und Koordination."
  };
  const currentDesc = seoDescriptions[params.lang] || seoDescriptions.en;

  // JSON-LD Schema za Gugl
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EngineeringBusiness",
    "name": "EE&C MEP",
    "url": "https://eecmep.com",
    "logo": "https://eecmep.com/logo.svg",
    "image": "https://eecmep.com/og-image.png",
    "description": currentDesc,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RS"
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
        <Script 
          src="https://cloud.umami.is/script.js" 
          data-website-id="1c3218bb-6c96-46f8-98bf-57764abaaf5f" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}