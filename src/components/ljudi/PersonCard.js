import Image from 'next/image';

export default function PersonCard({ name, role, imagePlaceholder, image }) {
  return (
    <div className="flex flex-col">
      {/* Slika Osobe - Promenjeno u kvadratni format (aspect-square)[cite: 2] */}
      <div className="w-full aspect-square bg-neutral-200 border border-neutral-300 relative mb-4 flex items-center justify-center overflow-hidden transition-all duration-500">
         {image ? (
           <Image 
             src={image} 
             alt={name} 
             fill
             className="object-cover"
             sizes="(max-width: 768px) 100vw, 50vw"
           />
         ) : (
           <>
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
             <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-3 py-1 border border-neutral-300 shadow-sm text-center">
               {imagePlaceholder}
             </span>
           </>
         )}
      </div>
      
      {/* Info - Zadržano samo ime i pozicija[cite: 2] */}
      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{name}</h3>
      <p className="text-neutral-500 font-mono text-sm mt-1">{role}</p>
    </div>
  );
}