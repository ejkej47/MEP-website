import Link from 'next/link';
import Image from 'next/image';

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

      {/* O KOMPANIJI I FILOZOFIJA - 2 Kolone */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Kolona 1 */}
            <div>
              <span className="text-neutral-300 font-mono text-xl md:text-2xl block mb-4">/01</span>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">O kompaniji</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                HyperMEP je nezavisna inženjerska konsultantska kompanija specijalizovana za projektovanje MEP sistema (Mechanical, Electrical & Public Health Engineering), BIM modelovanje i multidisciplinarnu tehničku koordinaciju.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Osnovana 2023. godine u Pančevu, kompanija je nastala sa ciljem da objedini savremeno inženjerstvo, digitalne tehnologije i visok nivo tehničke ekspertize kako bi klijentima pružila pouzdana, održiva i efikasna projektantska rešenja.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Kompaniju je osnovao Uroš Milenković, vođen vizijom da kreira inženjerski biro sposoban da odgovori na izazove savremenog građevinskog sektora kroz integrisani pristup projektovanju, BIM koordinaciji i optimizaciji performansi objekata.
              </p>
            </div>

            {/* Kolona 2 */}
            <div>
              <span className="text-neutral-300 font-mono text-xl md:text-2xl block mb-4">/02</span>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">Naša filozofija</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Verujemo da vrhunski projekti nastaju kada se inženjerska preciznost, inovacije i saradnja objedine u jedinstven proces. Zato svakom projektu pristupamo sa fokusom na:
              </p>
              <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed mb-4 space-y-1">
                <li>tehničku izvrsnost,</li>
                <li>funkcionalnost i pouzdanost sistema,</li>
                <li>energetsku efikasnost,</li>
                <li>održivost i dugoročnu vrednost,</li>
                <li>koordinaciju svih projektnih disciplina,</li>
                <li>optimizaciju investicionih i operativnih troškova.</li>
              </ul>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Naš cilj nije samo izrada projektne dokumentacije, već kreiranje inteligentnih tehničkih rešenja koja unapređuju performanse objekata tokom celog njihovog životnog ciklusa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VIZIJA I MISIJA - Asimetrični prelom */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* Vizija blok */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 py-8 flex justify-center items-center">
                <h2 className="text-black font-black uppercase text-4xl md:text-5xl tracking-tighter mb-0">Vizija</h2>
              </div>
              <div className="md:col-span-8 border-l-4 border-black pl-6 md:pl-8 py-4">
                <p className="text-2xl md:text-4xl font-medium leading-tight text-black tracking-tight">
                  Da postanemo vodeći regionalni partner za integrisano MEP projektovanje i BIM koordinaciju, prepoznat po tehničkoj izvrsnosti, inovativnim rešenjima i profesionalnom pristupu.
                </p>
              </div>
            </div>

            {/* Misija blok */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 py-8 flex justify-center items-center">
                <h2 className="text-black font-black uppercase text-4xl md:text-5xl tracking-tighter mb-0">Misija</h2>
              </div>
              <div className="md:col-span-8 border-l-4 border-black pl-6 md:pl-8 py-4">
                <p className="text-2xl md:text-4xl font-medium leading-tight text-black tracking-tight">
                  Da kroz vrhunsko inženjerstvo, digitalne tehnologije i multidisciplinarnu saradnju kreiramo održive, efikasne i budućnosti prilagođene objekte koji stvaraju dugoročnu vrednost za naše klijente.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIZUELNI DOKAZ - Fieldwork */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden mb-8 transition-all duration-700">
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

      {/* ZAVRŠNA PORUKA (CITAT) */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-black italic">
            "HyperMEP spaja inženjersko znanje, BIM tehnologiju i strateško razmišljanje kako bi svaki projekat bio realizovan sa maksimalnom efikasnošću, pouzdanošću i kvalitetom."
          </p>
        </div>
      </section>
    </>
  );
}