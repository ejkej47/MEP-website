import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      {/* HEADER SEKCIJA */}
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              02
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Usluge
            </h1>
          </div>
        </div>
        {/* Ultra-debela linija od ivice do ivice */}
        <div className="w-full border-b-8 border-black mt-8"></div>
      </section>

      {/* UVODNA SEKCIJA */}
      <section className="py-12 md:py-16 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-neutral-800 text-lg md:text-xl leading-relaxed font-medium max-w-4xl mx-auto">
            HyperMEP pruža sveobuhvatne usluge projektovanja elektro, mašinskih i hidrotehničkih instalacija, kombinujući tehničku ekspertizu, BIM metodologiju i praktična inženjerska rešenja. Naš cilj je razvoj efikasnih, održivih i pouzdanih sistema koji zadovoljavaju najviše tehničke i regulatorne standarde.
          </p>
        </div>
      </section>

      {/* 1. MAŠINSKE INSTALACIJE */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-neutral-300 font-mono text-lg block mb-4">/01</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              Mašinske instalacije (Mechanical Engineering)
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Projektujemo energetski efikasne sisteme koji obezbeđuju optimalan komfor, funkcionalnost i dugoročnu pouzdanost objekata.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi grejanja</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Ventilacioni sistemi</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Klimatizacioni sistemi (HVAC)</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Rashladni sistemi</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi odimljavanja i kontrole dima</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi obnovljivih izvora energije</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Toplotne pumpe i sistemi rekuperacije</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Energetsko modelovanje</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Analiza termičkog komfora</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> CFD simulacije</li>
              <li className="flex items-start gap-3 col-span-1 md:col-span-2"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Optimizacija energetske efikasnosti i životnog ciklusa sistema (LCC)</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Galerija</div>
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm text-center">
                [Placeholder: Mašinske Instalacije / HVAC]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEKTRO INSTALACIJE */}
      <section className="py-16 md:py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="lg:order-2">
            <span className="text-neutral-300 font-mono text-lg block mb-4">/02</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              Elektro instalacije (Electrical Engineering)
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Razvijamo sigurne, pouzdane i skalabilne elektroenergetske sisteme prilagođene savremenim zahtevima objekata.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> VN i NN sistemi</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Unutrašnje i spoljno osvetljenje</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Panik i evakuaciona rasveta</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi dojave požara</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Telekomunikacione i ICT instalacije</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Rezervno i neprekidno napajanje</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> UPS i agregatska postrojenja</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Proračuni opterećenja i kratkog spoja</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi uzemljenja i gromobrani</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> DALI i pametni sistemi rasvete</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> BMS integracija</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> EV Charging infrastruktura</li>
            </ul>
          </div>
          <div className="relative group lg:order-1">
            <div className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Galerija</div>
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/usluge-1.jpg" 
                alt="Elektro instalacije MEP" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIDROTEHNIČKE INSTALACIJE */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-neutral-300 font-mono text-lg block mb-4">/03</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              Hidrotehničke instalacije (Public Health Engineering)
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Projektujemo održive sisteme za distribuciju i upravljanje vodom uz maksimalnu efikasnost i usklađenost sa standardima.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi sanitarne vode</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Priprema potrošne tople vode</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Kanalizacioni sistemi</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Odvođenje otpadnih voda</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Protivpožarni sistemi</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Gasne instalacije</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Hidraulički proračuni</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Analiza potrošnje i pritisaka</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Reciklaža sive vode</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Sistemi za korišćenje kišnice</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Galerija</div>
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm text-center">
                [Placeholder: Hidrotehničke instalacije]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BIM MODELOVANJE I KOORDINACIJA */}
      <section className="py-16 md:py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="lg:order-2">
            <span className="text-neutral-300 font-mono text-lg block mb-4">/04</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              BIM modelovanje i koordinacija
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Koristimo Autodesk Revit, Navisworks i napredne interne alate za razvoj koordinisanih BIM modela koji unapređuju kvalitet projektovanja i smanjuju rizike tokom izgradnje.
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> BIM modelovanje svih disciplina</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Detekcija i rešavanje kolizija (Clash Detection)</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Koordinacija arhitekture, konstrukcije i MEP sistema</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Optimizacija trasa instalacija</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> 3D, 4D i 5D BIM podrška</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Generisanje projektne i izvođačke dokumentacije</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> As-built modeli i Digital Twin podrška</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> BIM standardizacija i kontrola kvaliteta modela</li>
            </ul>
          </div>
          <div className="relative group lg:order-1">
            <div className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Galerija</div>
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/usluge-2.jpg" 
                alt="BIM Koordinacija" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ODRŽIVOST */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-neutral-300 font-mono text-lg block mb-4">/05</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              Održivost i energetska efikasnost
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Pomažemo investitorima da ostvare maksimalne performanse objekata uz smanjenje potrošnje energije i operativnih troškova.
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Energetske analize i simulacije</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Studije energetske efikasnosti</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Net Zero strategije i ESG podrška</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Analiza ugljeničnog otiska (Carbon Footprint)</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> LEED, BREEAM i WELL konsultantske usluge</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Analiza životnog ciklusa objekta (LCA)</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm text-center">
                [Placeholder: Analiza Energetske Efikasnosti]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMISSIONING */}
      <section className="py-16 md:py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="lg:order-2">
            <span className="text-neutral-300 font-mono text-lg block mb-4">/06</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              Commissioning i tehnička verifikacija
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Obezbeđujemo da projektovani sistemi funkcionišu u skladu sa projektovanim parametrima i zahtevima investitora.
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Commissioning planovi i procedure</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Funkcionalna ispitivanja sistema</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Testiranje i puštanje sistema u rad</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Verifikacija performansi</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Podrška tokom primopredaje objekta</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Obuka krajnjih korisnika i tehničkog osoblja</li>
            </ul>
          </div>
          <div className="relative group lg:order-1">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm text-center">
                [Placeholder: Tehnička Verifikacija / Commissioning]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROJEKTNI MENADŽMENT */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-neutral-300 font-mono text-lg block mb-4">/07</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              Projektni menadžment i tehnička podrška
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Pratimo projekat kroz sve faze razvoja – od ideje do realizacije.
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Studije izvodljivosti i konceptualna rešenja</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Idejni, glavni i izvedbeni projekti</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Tehničke specifikacije i tenderska dokumentacija</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Koordinacija projektnih disciplina</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Tehnička podrška tokom izvođenja radova</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Kontrola kvaliteta dokumentacije i Value Engineering</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> Podrška tokom dobijanja dozvola i odobrenja</li>
            </ul>
          </div>
          <div className="relative group">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm text-center">
                [Placeholder: Projektni menadžment]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA: PROGRAMI / ALATI (Sa prostorom za ikonice/logoe) */}
      <section className="py-24 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-16 uppercase">Softveri i Alati</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Alat 1 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 bg-neutral-300 flex items-center justify-center text-xs text-neutral-500 font-mono">
                [Logo]
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">Autodesk Revit</span>
            </div>
            {/* Alat 2 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 bg-neutral-300 flex items-center justify-center text-xs text-neutral-500 font-mono">
                [Logo]
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">Navisworks</span>
            </div>
            {/* Alat 3 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 bg-neutral-300 flex items-center justify-center text-xs text-neutral-500 font-mono">
                [Logo]
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">AutoCAD</span>
            </div>
            {/* Alat 4 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 bg-neutral-300 flex items-center justify-center text-xs text-neutral-500 font-mono">
                [Logo]
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">BIM Interni alati</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA: SEKTORI U KOJIMA POSLUJEMO (Grupisano sa prostorom za ikonice) */}
      <section className="py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 uppercase">Sektori u kojima poslujemo</h2>
          <p className="text-neutral-600 mb-16 max-w-2xl mx-auto">
            Naše usluge pružamo za širok spektar objekata i industrija, obezbeđujući skalabilna rešenja prilagođena specifičnim zahtevima svake namene.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Grupa 1: Komercijalni i Javni */}
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-neutral-200 mb-6 flex items-center justify-center text-[10px] text-neutral-500 font-mono">[Ikona]</div>
              <h3 className="font-black uppercase text-xl mb-4 border-b border-neutral-100 w-full pb-2">Komercijalni objekti</h3>
              <ul className="space-y-3 w-full text-neutral-600 text-sm font-medium">
                <li>Poslovne zgrade</li>
                <li>Tržni i logistički centri</li>
                <li>Hoteli i ugostiteljstvo</li>
                <li>Objekti mešovite namene</li>
              </ul>
            </div>

            {/* Grupa 2: Industrija i Infrastruktura */}
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-neutral-200 mb-6 flex items-center justify-center text-[10px] text-neutral-500 font-mono">[Ikona]</div>
              <h3 className="font-black uppercase text-xl mb-4 border-b border-neutral-100 w-full pb-2">Industrija i Transport</h3>
              <ul className="space-y-3 w-full text-neutral-600 text-sm font-medium">
                <li>Industrijska postrojenja</li>
                <li>Data centri</li>
                <li>Aerodromi / Transport</li>
              </ul>
            </div>

            {/* Grupa 3: Specijalizovani objekti */}
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-neutral-200 mb-6 flex items-center justify-center text-[10px] text-neutral-500 font-mono">[Ikona]</div>
              <h3 className="font-black uppercase text-xl mb-4 border-b border-neutral-100 w-full pb-2">Specijalizovani objekti</h3>
              <ul className="space-y-3 w-full text-neutral-600 text-sm font-medium">
                <li>Zdravstvene ustanove</li>
                <li>Stambeni kompleksi</li>
                <li>Obrazovne ustanove</li>
                <li>Sportski objekti</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA (POZIV NA AKCIJU) */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Spremni za tehničku razradu vašeg projekta?
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            Kontaktirajte nas za konsultacije u vezi sa vašim sledećim komercijalnim ili industrijskim objektom.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex bg-white text-black px-8 py-4 text-sm font-bold items-center gap-2 hover:bg-neutral-200 transition-colors"
          >
            Započni projekat
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}