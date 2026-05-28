import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      {/* HEADER SEKCIJA - Skraćena i svedena */}
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              03
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Projekti
            </h1>
          </div>
        </div>
        {/* Ultra-debela linija od ivice do ivice */}
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* ISTAKNUTI PROJEKAT (FEATURED) - Dominantan fokus */}
      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Istaknuti projekat</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">[Insert Featured Project]</h3>
          </div>

          {/* Velika Slika Placeholder */}
          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-100 border border-neutral-300 relative flex items-center justify-center overflow-hidden mb-8">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
              [Placeholder: Glavni Render 21:9]
            </span>
          </div>

          {/* Tehnički Podaci */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-neutral-200 pt-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Lokacija</p>
              <p className="font-medium text-sm">[Insert City, Country]</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Površina</p>
              <p className="font-medium text-sm">[Insert SQM] m²</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Sektor</p>
              <p className="font-medium text-sm">[Insert Sector]</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Faze</p>
              <p className="font-medium text-sm">LPH 1-8, BIM LOD 400</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARHIVA PROJEKATA - Grid sa detaljima (Po ugledu na poslati primer) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* PROJEKAT 1 */}
            <div className="flex flex-col">
              {/* Slika */}
              <div className="w-full aspect-[4/3] bg-neutral-200 relative mb-6 flex items-center justify-center border border-neutral-300">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-3 py-1 border border-neutral-300">
                  [Slika Projekta 4:3]
                </span>
              </div>
              
              {/* Informacije */}
              <h3 className="text-2xl font-extrabold tracking-tight mb-4 uppercase">Alpha kompleks</h3>
              <div className="space-y-2 text-sm text-neutral-800 leading-relaxed">
                <p><span className="font-bold">Location:</span> Beograd, Srbija</p>
                <p><span className="font-bold">Year:</span> 2024</p>
                <p><span className="font-bold">Client:</span> [Ime Klijenta]</p>
                <p className="mt-4"><span className="font-bold">Sistemi:</span> Transformatorske stanice; SN razvod; Inteligentno osvetljenje (DALI); Protivpožarni sistemi; Rezervno napajanje (UPS)</p>
                <p className="mt-2"><span className="font-bold">MEP Scope:</span> Koncept i Idejno rešenje; PGD i PZI; BIM Koordinacija (LOD 400); Nadzor na gradilištu</p>
              </div>
            </div>

            {/* PROJEKAT 2 */}
            <div className="flex flex-col">
              {/* Slika */}
              <div className="w-full aspect-[4/3] bg-neutral-200 relative mb-6 flex items-center justify-center border border-neutral-300">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-3 py-1 border border-neutral-300">
                  [Slika Projekta 4:3]
                </span>
              </div>
              
              {/* Informacije */}
              <h3 className="text-2xl font-extrabold tracking-tight mb-4 uppercase">Beta Life Science</h3>
              <div className="space-y-2 text-sm text-neutral-800 leading-relaxed">
                <p><span className="font-bold">Location:</span> Novi Sad, Srbija</p>
                <p><span className="font-bold">Year:</span> 2023</p>
                <p><span className="font-bold">Client:</span> Confidential</p>
                <p className="mt-4"><span className="font-bold">Sistemi:</span> Čiste sobe (Cleanrooms); Specijalni gasovi; IT infrastruktura; Sigurnosni sistemi i kontrola pristupa</p>
                <p className="mt-2"><span className="font-bold">MEP Scope:</span> Detaljno projektovanje; 3D Modelovanje i Detekcija kolizija; Izrada As-Built dokumentacije</p>
              </div>
            </div>

            {/* Možeš samo iskopirati gornje blokove ispod za treći, četvrti projekat itd. */}

          </div>
        </div>
      </section>
    </>
  );
}