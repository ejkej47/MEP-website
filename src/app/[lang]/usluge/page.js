import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function ServicesPage({ params }) {
  const dict = await getDictionary(params.lang);
  const { services } = dict;
  const { lang } = params;

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
              {services.title}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black mt-8"></div>
      </section>

      {/* UVODNA SEKCIJA */}
      <section className="py-12 md:py-16 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-neutral-800 text-lg md:text-xl leading-relaxed font-medium max-w-4xl mx-auto">
            {services.intro}
          </p>
        </div>
      </section>

      {/* 1. MAŠINSKE INSTALACIJE */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <span className="text-neutral-300 font-mono text-lg block mb-4">/01</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 uppercase text-black">
              {services.s1.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s1.desc}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s1.list.map((item, index) => (
                <li key={index} className={`flex items-start gap-3 ${index === services.s1.list.length - 1 ? 'col-span-1 md:col-span-2' : ''}`}>
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/MechanicalEngineering.jpeg" 
                alt={services.s1.title} 
                fill
                className="object-cover"
              />
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
              {services.s2.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s2.desc}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s2.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group lg:order-1">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/usluge-1.jpg" 
                alt={services.s2.alt || services.s2.title} 
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
              {services.s3.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s3.desc}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s3.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/Plumbing.jpeg" 
                alt={services.s3.title} 
                fill
                className="object-cover"
              />
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
              {services.s4.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s4.desc}
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s4.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group lg:order-1">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/BIMModeling.jpeg" 
                alt={services.s4.alt || services.s4.title} 
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
              {services.s5.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s5.desc}
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s5.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/Sustainability.jpeg" 
                alt={services.s5.title} 
                fill
                className="object-cover"
              />
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
              {services.s6.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s6.desc}
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s6.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group lg:order-1">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/Commissioning.jpeg" 
                alt={services.s6.title} 
                fill
                className="object-cover"
              />
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
              {services.s7.title}
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {services.s7.desc}
            </p>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-medium text-sm border-t border-neutral-200 pt-8">
              {services.s7.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <Image 
                src="/ProjectManagement.jpeg" 
                alt={services.s7.title} 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA: PROGRAMI / ALATI */}
      <section className="py-24 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-16 uppercase">{services.tools.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Alat 1 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                  <Image src="/autocad.webp" alt="AutoCAD" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t1}</span>
            </div>
            
            {/* Alat 2 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/navisworks.jpg" alt="Navisworks" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t2}</span>
            </div>
            
            {/* Alat 3 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/revit.jpg" alt="Revit" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t3}</span>
            </div>
            
            {/* Alat 4 */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/tools.jpg" alt="Tools" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t4}</span>
            </div>

            {/* Alat 5: PV Sol */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/pvsol.png" alt="PV Sol" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t5}</span>
            </div>

            {/* Alat 6: HagerCAD */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/hagercad.png" alt="HagerCAD" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t6}</span>
            </div>

            {/* Alat 7: Relux */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/relux.png" alt="Relux" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t7}</span>
            </div>

            {/* Alat 8: Dialux */}
            <div className="flex flex-col items-center gap-4 p-6 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
                <Image src="/dialux.png" alt="Dialux" width={56} height={56} className="object-contain" />
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">{services.tools.t8}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCIJA: SEKTORI U KOJIMA POSLUJEMO */}
      <section className="py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 uppercase">{services.sectors.title}</h2>
          <p className="text-neutral-600 mb-16 max-w-2xl mx-auto">
            {services.sectors.desc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Grupa 1 */}
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-neutral-200 mb-6 flex items-center justify-center text-[10px] text-neutral-500 font-mono">
                <Image src="/commercial-property.webp" alt="" width={48} height={48} className="object-contain" />
              </div>
              <h3 className="font-black uppercase text-xl mb-4 border-b border-neutral-100 w-full pb-2">{services.sectors.g1.title}</h3>
              <ul className="list-disc pl-5 space-y-3 w-full text-neutral-600 text-sm font-medium">
                {services.sectors.g1.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

            {/* Grupa 2 */}
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-neutral-200 mb-6 flex items-center justify-center text-[10px] text-neutral-500 font-mono">
                 <Image src="/transport.jpg" alt="" width={48} height={48} className="object-contain" />
              </div>
              <h3 className="font-black uppercase text-xl mb-4 border-b border-neutral-100 w-full pb-2">{services.sectors.g2.title}</h3>
              <ul className="list-disc pl-5 space-y-3 w-full text-neutral-600 text-sm font-medium">
                {services.sectors.g2.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

            {/* Grupa 3 */}
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-neutral-200 mb-6 flex items-center justify-center text-[10px] text-neutral-500 font-mono">
                <Image src="/facility.jpg" alt="" width={48} height={48} className="object-contain" />
              </div>
              <h3 className="font-black uppercase text-xl mb-4 border-b border-neutral-100 w-full pb-2">{services.sectors.g3.title}</h3>
              <ul className="list-disc pl-5 space-y-3 w-full text-neutral-600 text-sm font-medium">
                {services.sectors.g3.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {services.cta.title}
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            {services.cta.desc}
          </p>
          <Link 
            href={`/${lang}/kontakt`} 
            className="inline-flex bg-white text-black px-8 py-4 text-sm font-bold items-center gap-2 hover:bg-neutral-200 transition-colors"
          >
            {services.cta.btn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}