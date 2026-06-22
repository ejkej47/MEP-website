import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';
import ProjectCard from '../../../components/projects/ProjectCard';
import { projectsData } from '../../../data/projects';

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

      {/* ISTAKNUTI PROJEKAT (FEATURED) 
      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">{projects.featured.label}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">{projects.featured.title}</h3>
          </div>

          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-100 border border-neutral-300 relative flex items-center justify-center overflow-hidden mb-8">
            <Image 
              src="/featured-projekat.jpg" 
              alt={projects.featured.imgAlt} 
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

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
      </section>*/}

      {/* ARHIVA PROJEKATA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Promenjen grid ispod: dodato lg:grid-cols-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                labels={projects.archive.labels} 
              />
            ))}
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