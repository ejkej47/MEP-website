import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* HERO SEKCIJA */}
      <section className="relative pt-8 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
              Inženjerska preciznost.<br />
              <span className="text-neutral-500">Integrisano elektro-projektovanje.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10 font-medium">
              Napredno projektovanje, BIM modelovanje i tehnička koordinacija elektroinstalacija za složene komercijalne, industrijske, obrazovne i "Life Science" komplekse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/usluge" className="bg-black text-white px-8 py-4 text-sm font-bold flex justify-center items-center gap-2 hover:bg-neutral-800 transition-colors">
                Istraži usluge
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/projekti" className="bg-white text-black px-8 py-4 text-sm font-bold flex justify-center items-center border-2 border-black hover:bg-neutral-50 transition-colors">
                Vidi projekte
              </Link>
            </div>

          </div>

          {/* Vizuelni Blok Placeholder */}
          <div className="w-full aspect-video border border-neutral-200 relative overflow-hidden bg-neutral-100">
            <Image 
              src="/hero-slika-v3.jpg" 
              alt="3D BIM model elektroinstalacija" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VERTIKALNI STATEMENTS SA SLIKAMA */}
      <section className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          
          {/* 01: O Nama */}
          <Link href="/o-nama" className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">01</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">O nama</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">Bez praznih reči. Samo inženjerska suština i pouzdanost.</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden  transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
                [Placeholder: Ethos / Office / Team Image]
              </span>
            </div>
          </Link>

          {/* 02: Usluge */}
          <Link href="/usluge" className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">02</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">Usluge</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">Integrisani sistemi, BIM modelovanje i koordinacija.</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden  transition-all duration-500">
              <Image 
              src="/landing-usluge-v2.jpg" 
              alt="3D BIM model elektroinstalacija" 
              fill
              priority
              className="object-cover"
            />
            </div>
          </Link>

          {/* 03: Projekti */}
          <Link href="/projekti" className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">03</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">Projekti</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">Dokazana izvodljivost kroz kompleksne objekte.</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden  transition-all duration-500">
              <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden  transition-all duration-500">
              <Image 
                src="/landing-projekti.jpg" 
                alt="2D Osnova CAD" 
                fill
                className="object-cover"
              />
            </div>
            </div>
          </Link>

          {/* 04: Ljudi */}
          <Link href="/ljudi" className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">04</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">Ljudi</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">Stručnjaci koji razumeju širu sliku gradilišta.</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden  transition-all duration-500">
              <Image 
                src="/featured-ljudi.jpg" 
                alt="2D Osnova CAD" 
                fill
                className="object-cover"
              />
            </div>
          </Link>

        </div>
      </section>

      {/* FAQ SEKCIJA */}
      <section className="py-24 border-b border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Često postavljana pitanja (FAQ)
            </h2>
          </div>

          <div className="border-t-2 border-black">
            {/* Pitanje 1 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold tracking-tight pr-4">Šta tačno obuhvata vaše MEP projektovanje?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4"/></svg>
                  <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 text-sm md:text-base leading-relaxed">
                HyperMEP pruža sveobuhvatne usluge projektovanja elektro, mašinskih i hidrotehničkih instalacija. To uključuje energetski efikasne sisteme (HVAC), kompletne instalacije jake i slabe struje, kao i održive hidrotehničke sisteme za distribuciju i upravljanje vodom.
              </div>
            </details>

            {/* Pitanje 2 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold tracking-tight pr-4">Kako koristite BIM tehnologiju u projektima?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4"/></svg>
                  <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 text-sm md:text-base leading-relaxed">
                Koristimo alate poput Autodesk Revit i Navisworks za razvoj visoko preciznih 3D modela. Naš glavni fokus je napredna detekcija kolizija (Clash Detection) sa arhitekturom i konstrukcijom, čime rešavamo potencijalne probleme pre nego što se oni pojave na samom gradilištu.
              </div>
            </details>

            {/* Pitanje 3 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold tracking-tight pr-4">Za koje vrste objekata radite tehničku dokumentaciju?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4"/></svg>
                  <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 text-sm md:text-base leading-relaxed">
                Naše usluge pokrivaju širok spektar složenih struktura. Najčešće radimo na komercijalnim poslovnim zgradama, industrijskim postrojenjima, zdravstvenim i obrazovnim ustanovama, data centrima, kao i objektima mešovite namene.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}