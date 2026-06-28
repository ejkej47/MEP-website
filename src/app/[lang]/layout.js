import { Analytics } from "@vercel/analytics/next"
import "../../styles/globals.css";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CookieBanner from "../../components/common/CookieBanner";
import { getDictionary } from "../../dictionaries/getDictionary";

export async function generateMetadata({ params }) {
  const localeMap = {
    sr: "sr_RS",
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: {
      default: "HYPER MEP",
      template: "%s | HYPER MEP"
    },
    description: "Projektovanje elektroinstalacija (Electrical Design), BIM modelovanje i koordinacija za komercijalne, industrijske i stambene objekte.",
    keywords: ["electrical design", "elektro projektovanje", "BIM modeling", "MEP engineering", "projekti", "Srbija"],
    authors: [{ name: "HYPER MEP" }],
    creator: "HYPER MEP",
    openGraph: {
      type: "website",
      locale: localeMap[params.lang] ?? "sr_RS",
      url: `https://mep-website-delta.vercel.app/${params.lang}`,
      title: "HYPER MEP | Electrical Design & BIM Modeling",
      description: "Integrisano elektro-projektovanje i inženjering sa fokusom na preciznost i BIM koordinaciju.",
      siteName: "HYPER MEP",
    },
    alternates: {
      canonical: `https://mep-website-delta.vercel.app/${params.lang}`,
      languages: {
        "sr": "https://mep-website-delta.vercel.app/sr",
        "en": "https://mep-website-delta.vercel.app/en",
        "de": "https://mep-website-delta.vercel.app/de",
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  // Učitavamo rečnik za trenutni jezik
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className="flex flex-col min-h-screen">
        {/* Prosleđujemo jezik i specifičan deo rečnika za Navbar */}
        <Navbar lang={params.lang} dict={dict.navbar} />
        
        <main className="flex-1">
          {children}
        </main>

        {/* Prosleđujemo jezik i specifičan deo rečnika za Footer */}
        <Footer lang={params.lang} dict={dict.footer} />

        <CookieBanner dict={dict.cookieConsent} />

        <Analytics />
      </body>
    </html>
  );
}