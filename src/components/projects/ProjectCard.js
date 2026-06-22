import Image from 'next/image';

export default function ProjectCard({ project, labels }) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-[4/3] bg-neutral-200 relative mb-6 flex items-center justify-center border border-neutral-300 overflow-hidden group">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, 50vw" 
          />
        ) : (
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        )}
      </div>
      
      <h3 className="text-2xl font-extrabold tracking-tight mb-4 uppercase">{project.title}</h3>
      <div className="space-y-2 text-sm text-neutral-800 leading-relaxed">
        <p><span className="font-bold">{labels?.location || 'Location:'}</span> {project.location}</p>
        <p><span className="font-bold">{labels?.year || 'Year:'}</span> {project.year}</p>
        <p className="mt-4"><span className="font-bold">{labels?.scope || 'Project tasks:'}</span> {project.tasks}</p>
      </div>
    </div>
  );
}