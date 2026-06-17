import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function ProjectsPage({ params }) {
  const dict = await getDictionary(params.lang);
  const { projects } = dict;

  return (
    <>
      {/* HEADER SEKCIJA */}
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              03
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {projects.title}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* ISTAKNUTI PROJEKAT (FEATURED) */}
      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">{projects.featured.label}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">{projects.featured.title}</h3>
          </div>

          {/* Velika Slika Placeholder */}
          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-100 border border-neutral-300 relative flex items-center justify-center overflow-hidden mb-8">
            <Image 
              src="/featured-projekat.jpg" 
              alt={projects.featured.imgAlt} 
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Tehnički Podaci */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-neutral-200 pt-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">{projects.featured.specs.location}</p>
              <p className="font-medium text-sm">{projects.featured.specs.locationVal}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">{projects.featured.specs.area}</p>
              <p className="font-medium text-sm">{projects.featured.specs.areaVal}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">{projects.featured.specs.sector}</p>
              <p className="font-medium text-sm">{projects.featured.specs.sectorVal}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">{projects.featured.specs.phases}</p>
              <p className="font-medium text-sm">{projects.featured.specs.phasesVal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARHIVA PROJEKATA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* PROJEKAT 1 */}
            <div className="flex flex-col">
              <div className="w-full aspect-[4/3] bg-neutral-200 relative mb-6 flex items-center justify-center border border-neutral-300">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-3 py-1 border border-neutral-300">
                  {projects.archive.imgPlaceholder}
                </span>
              </div>
              
              <h3 className="text-2xl font-extrabold tracking-tight mb-4 uppercase">{projects.archive.p1.title}</h3>
              <div className="space-y-2 text-sm text-neutral-800 leading-relaxed">
                <p><span className="font-bold">{projects.archive.labels.location}</span> {projects.archive.p1.loc}</p>
                <p><span className="font-bold">{projects.archive.labels.year}</span> {projects.archive.p1.year}</p>
                <p><span className="font-bold">{projects.archive.labels.client}</span> {projects.archive.p1.client}</p>
                <p className="mt-4"><span className="font-bold">{projects.archive.labels.systems}</span> {projects.archive.p1.sys}</p>
                <p className="mt-2"><span className="font-bold">{projects.archive.labels.scope}</span> {projects.archive.p1.scope}</p>
              </div>
            </div>

            {/* PROJEKAT 2 */}
            <div className="flex flex-col">
              <div className="w-full aspect-[4/3] bg-neutral-200 relative mb-6 flex items-center justify-center border border-neutral-300">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-3 py-1 border border-neutral-300">
                  {projects.archive.imgPlaceholder}
                </span>
              </div>
              
              <h3 className="text-2xl font-extrabold tracking-tight mb-4 uppercase">{projects.archive.p2.title}</h3>
              <div className="space-y-2 text-sm text-neutral-800 leading-relaxed">
                <p><span className="font-bold">{projects.archive.labels.location}</span> {projects.archive.p2.loc}</p>
                <p><span className="font-bold">{projects.archive.labels.year}</span> {projects.archive.p2.year}</p>
                <p><span className="font-bold">{projects.archive.labels.client}</span> {projects.archive.p2.client}</p>
                <p className="mt-4"><span className="font-bold">{projects.archive.labels.systems}</span> {projects.archive.p2.sys}</p>
                <p className="mt-2"><span className="font-bold">{projects.archive.labels.scope}</span> {projects.archive.p2.scope}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA (POZIV NA AKCIJU) */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {projects.cta.title}
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            {projects.cta.desc}
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex bg-white text-black px-8 py-4 text-sm font-bold items-center gap-2 hover:bg-neutral-200 transition-colors"
          >
            {projects.cta.btn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}