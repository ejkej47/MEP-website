import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* HEADER SEKCIJA - Uvodni manifest */}
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              01
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              O nama
            </h1>
          </div>
        </div>
        {/* Ultra-debela linija od ivice do ivice */}
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* NAŠ PRISTUP - 3 Stuba */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            {/* Stub 1 */}
            <div>
              <span className="text-neutral-300 font-mono text-xl md:text-2xl block mb-4">/01</span>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">Preciznost i Norme</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Elektroinstalacije ne trpe improvizaciju. Naši projekti su strogo usklađeni sa važećim lokalnim i međunarodnim standardima. Vršimo rigorozne provere proračuna kako bismo garantovali bezbednost i dugovečnost svakog sistema.
              </p>
            </div>

            {/* Stub 2 */}
            <div>
              <span className="text-neutral-300 font-mono text-xl md:text-2xl block mb-4">/02</span>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">BIM Integracija</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Tehnologiju ne koristimo radi prezentacije, već radi smanjenja rizika. Kroz napredno 3D modelovanje i detekciju kolizija, rešavamo potencijalne probleme na ekranu, pre nego što oni postanu skupi zastoji na samom gradilištu.
              </p>
            </div>

            {/* Stub 3 */}
            <div>
              <span className="text-neutral-300 font-mono text-xl md:text-2xl block mb-4">/03</span>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">Apsolutna Izvodljivost</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Najbolji projekat je onaj koji zapravo može efikasno da se izgradi. Naši inženjeri poseduju duboko razumevanje izvođačkih procesa, materijala i rokova, obezbeđujući glatku tranziciju iz tehničke dokumentacije u fizički objekat.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VIZUELNI DOKAZ - Fieldwork */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
              [Placeholder: Slika tima / Fieldwork / Gradilište]
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-neutral-200 pt-6">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4 md:mb-0">
              Praksa na terenu
            </p>
            <Link href="/projekti" className="text-sm font-bold border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              Pogledajte naše izvedene objekte ➔
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}