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
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* USLUGA 1: ELEKTRO-PROJEKTOVANJE */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Tekstualni deo */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">Elektro-projektovanje (MEP)</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Izrada kompletne tehničke dokumentacije za instalacije jake i slabe struje. Od idejnog rešenja do izvođačkog projekta (LPH 1-9), osiguravamo usklađenost sa najvišim industrijskim standardima.
            </p>
            <ul className="space-y-4 font-medium text-sm md:text-base border-t border-neutral-200 pt-8">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> Transformatorske stanice i SN razvod</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> Sistemi glavnog i rezervnog napajanja (UPS, DEA)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> Inteligentni sistemi osvetljenja (DALI, KNX)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> Protivpožarni i sigurnosni sistemi</li>
            </ul>
          </div>

          {/* Slajder / Carousel Blok */}
          <div className="relative group">
            {/* Oznaka da je u pitanju galerija */}
            <div className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Galerija
            </div>
            
            {/* Nativni Scroll Container */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide border border-neutral-300">
              
              {/* Slika 1 u slajderu */}
              <div className="w-full flex-none snap-center aspect-video relative overflow-hidden bg-neutral-100">
                <Image 
                  src="/usluge-1.jpg" 
                  alt="2D Osnova CAD" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Slika 2 u slajderu */}
              <div className="w-full flex-none snap-center aspect-video bg-neutral-200 relative flex items-center justify-center border-l border-neutral-300">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <span className="text-neutral-500 font-mono text-sm">[Slika 2: 3D Razvod instalacija]</span>
              </div>

            </div>
            <p className="text-xs text-neutral-400 mt-3 font-mono">⟷ Prelistaj slike za više detalja</p>
          </div>

        </div>
      </section>

      {/* USLUGA 2: BIM MODELOVANJE */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">BIM Koordinacija & 3D Modelovanje</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Ne prepuštamo ništa slučaju na gradilištu. Kreiramo visoko precizne 3D modele elektroinstalacija i vršimo naprednu detekciju kolizija (Clash Detection) sa arhitekturom, konstrukcijom i mašinskim sistemima.
            </p>
            <ul className="space-y-4 font-medium text-sm md:text-base border-t border-neutral-200 pt-8">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> LOD 300 - LOD 500 Modelovanje (Revit)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> Detekcija kolizija (Navisworks)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> Automatsko generisanje predmera i predračuna</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black"></span> As-Built modeli za održavanje objekata (FM)</li>
            </ul>
          </div>

          <div className="relative group lg:order-1">
            <div className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Galerija
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide border border-neutral-300">
              <div className="w-full flex-none snap-center aspect-video relative overflow-hidden bg-neutral-100">
                <Image 
                  src="/usluge-2.jpg" 
                  alt="2D Osnova CAD" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full flex-none snap-center aspect-video bg-neutral-200 relative flex items-center justify-center border-l border-neutral-300">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <span className="text-neutral-500 font-mono text-sm">[Slika 2: Navisworks Clash Report]</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 mt-3 font-mono">⟷ Prelistaj slike za više detalja</p>
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