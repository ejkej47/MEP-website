import Link from 'next/link';

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
          <div className="w-full aspect-video bg-neutral-100 border border-neutral-200 relative flex items-center justify-center overflow-hidden" aria-label="3D BIM model elektroinstalacija - Placeholder">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10 text-neutral-400 font-mono text-sm uppercase tracking-widest bg-white/80 px-4 py-2 border border-neutral-200">
              [Insert Main Architecture / BIM Render Here]
            </div>
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
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
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
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
                [Placeholder: MEP Systems / BIM Model]
              </span>
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
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
                [Placeholder: Featured Project / Building Render]
              </span>
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
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
                [Placeholder: Engineers at Work / Field Image]
              </span>
            </div>
          </Link>

        </div>
      </section>
    </>
  );
}