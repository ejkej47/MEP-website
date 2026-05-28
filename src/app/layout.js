import "../styles/globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Globalni SEO parametri spremni za Google pretragu
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
    url: "https://www.hyper-mep.pro", // Zameniće se pravim domenom kada klijent kupi
    title: "HYPER MEP | Electrical Design & BIM Modeling",
    description: "Integrisano elektro-projektovanje i inženjering sa fokusom na preciznost i BIM koordinaciju.",
    siteName: "HYPER MEP",
  },
  // Priprema za višejezični SEO (Alternates)
  alternates: {
    canonical: "/",
    languages: {
      "sr-RS": "/sr",
      "en-US": "/en",
      "de-DE": "/de",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className="flex flex-col min-h-screen">
        {/* Navigacija se renderuje na vrhu svake stranice */}
        <Navbar />
        
        {/* Glavni sadržaj koji se menja u zavisnosti od rute */}
        <main>
          {children}
        </main>

        {/* Footer sa kontakt podacima sa slike na dnu */}
        <Footer />
      </body>
    </html>
  );
}