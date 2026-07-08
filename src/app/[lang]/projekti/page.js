import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';
import ProjectCard from '../../../components/projects/ProjectCard';
import { getProjectsData } from '../../../data/projects';

export default async function ProjectsPage({ params }) {
  const dict = await getDictionary(params.lang);
  const { projects } = dict;

  const projectsData = getProjectsData(params.lang);

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

      {/* ARHIVA PROJEKATA */}
      <section className="py-16 md:py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Promenjen grid ispod: sada su 2 u redu (uklonjeno lg:grid-cols-3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-xl">
                <ProjectCard 
                  project={project} 
                  labels={projects.archive.labels} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}