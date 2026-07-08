import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function AboutPage({ params }) {
  const dict = await getDictionary(params.lang);
  const { about } = dict;
  const { lang } = params;

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
              {about.title}
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
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">{about.company.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {about.company.p1}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {about.company.p2}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {about.company.p3}
              </p>
            </div>

            {/* Kolona 2 */}
            <div>
              <span className="text-neutral-300 font-mono text-xl md:text-2xl block mb-4">/02</span>
              <h3 className="text-xl font-extrabold tracking-tight mb-4 uppercase">{about.philosophy.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {about.philosophy.p1}
              </p>
              <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed mb-4 space-y-1">
                {about.philosophy.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {about.philosophy.p2}
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
                <h2 className="text-black font-black uppercase text-4xl md:text-5xl tracking-tighter mb-0">{about.vision.title}</h2>
              </div>
              <div className="md:col-span-8 border-l-4 border-black pl-6 md:pl-8 py-4">
                <p className="text-2xl md:text-4xl font-medium leading-tight text-black tracking-tight">
                  {about.vision.text}
                </p>
              </div>
            </div>

            {/* Misija blok */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 py-8 flex justify-center items-center">
                <h2 className="text-black font-black uppercase text-4xl md:text-5xl tracking-tighter mb-0">{about.mission.title}</h2>
              </div>
              <div className="md:col-span-8 border-l-4 border-black pl-6 md:pl-8 py-4">
                <p className="text-2xl md:text-4xl font-medium leading-tight text-black tracking-tight">
                  {about.mission.text}
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
            <Image 
              src="/ljudi.png" 
              alt="Praksa na terenu" 
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-neutral-200 pt-6">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4 md:mb-0">
              {about.fieldwork.title}
            </p>
            <Link href={`/${lang}/projekti`} className="text-sm font-bold border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              {about.fieldwork.link}
            </Link>
          </div>

        </div>
      </section>

      {/* ZAVRŠNA PORUKA (CITAT) */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-black italic">
            {about.quote}
          </p>
        </div>
      </section>
    </>
  );
}