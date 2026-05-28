import PersonCard from '../../components/ljudi/PersonCard';

// Ovdje definišemo podatke o timu (kasnije ovo lako prevodimo)
const teamMembers = [
  {
    id: 1,
    name: "[Ime Prezime 1]",
    role: "Lead MEP Engineer",
    imagePlaceholder: "[Slika: Osoba 1]"
  },
  {
    id: 2,
    name: "[Ime Prezime 2]",
    role: "BIM Manager",
    imagePlaceholder: "[Slika: Osoba 2]"
  },
  {
    id: 3,
    name: "[Ime Prezime 3]",
    role: "Senior Electrical Engineer",
    imagePlaceholder: "[Slika: Osoba 3]"
  },
  {
    id: 4,
    name: "[Ime Prezime 4]",
    role: "Electrical Engineer",
    imagePlaceholder: "[Slika: Osoba 4]"
  }
];

export default function PeoplePage() {
  return (
    <>
      {/* BRUTALIST GEOMETRIC HEADER */}
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              04
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Ljudi
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* GLAVNA SLIKA TIMA (Kolaž) */}
      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <span className="relative z-10 text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
              [Placeholder: Velika grupna slika celog tima / Kolaž]
            </span>
          </div>
        </div>
      </section>

      {/* TIM - 2 PO 2 GRID (Dinamičko iscrtavanje) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Ovdje prolazimo kroz niz teamMembers i za svakog iscrtavamo PersonCard */}
            {teamMembers.map((person) => (
              <PersonCard 
                key={person.id}
                name={person.name}
                role={person.role}
                description={person.description}
                imagePlaceholder={person.imagePlaceholder}
              />
            ))}

          </div>
        </div>
      </section>
    </>
  );
}