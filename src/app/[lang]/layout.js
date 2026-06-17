import "../../styles/globals.css";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { getDictionary } from "../../dictionaries/getDictionary";

// Globalni SEO parametri
export const metadata = {
  title: {
    default: "HYPER MEP | Electrical Design & BIM Modeling",
    template: "%s | HYPER MEP"
  },
  description: "Projektovanje elektroinstalacija (Electrical Design), BIM modelovanje i koordinacija za komercijalne, industrijske i stambene objekte.",
  keywords: ["electrical design", "elektro projektovanje", "BIM modeling", "MEP engineering", "projekti", "Srbija"],
  authors: [{ name: "HYPER MEP" }],
  creator: "HYPER MEP",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.hyper-mep.pro", 
    title: "HYPER MEP | Electrical Design & BIM Modeling",
    description: "Integrisano elektro-projektovanje i inženjering sa fokusom na preciznost i BIM koordinaciju.",
    siteName: "HYPER MEP",
  },
  alternates: {
    canonical: "/",
    languages: {
      "sr-RS": "/sr",
      "en-US": "/en",
      "de-DE": "/de",
    },
  },
};

export default async function RootLayout({ children, params }) {
  // Učitavamo rečnik za trenutni jezik
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className="flex flex-col min-h-screen">
        {/* Prosleđujemo jezik i specifičan deo rečnika za Navbar */}
        <Navbar lang={params.lang} dict={dict.navbar} />
        
        <main>
          {children}
        </main>

        {/* Prosleđujemo jezik i specifičan deo rečnika za Footer */}
        <Footer lang={params.lang} dict={dict.footer} />
      </body>
    </html>
  );
}