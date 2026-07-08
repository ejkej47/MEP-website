import PersonCard from '../../../components/ljudi/PersonCard';
import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function PeoplePage({ params }) {
  const dict = await getDictionary(params.lang);
  const { people } = dict;

  // Koristimo novu strukturu iz JSON-a
  const departments = people.departments || {};

  return (
    <div className="bg-white min-h-screen">
      
      {/* BRUTALIST GEOMETRIC HEADER */}
      <section className="bg-white pt-8 md:pt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0 shadow-lg">
              04
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black drop-shadow-sm">
              {people.title}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* TIM PO SEKTORIMA */}
      <section className="py-16 md:py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {Object.entries(departments).map(([key, dept]) => (
            <div key={key} className="mb-24 last:mb-0">
              
              {/* Naslov Sekcije (npr. Elektro struka) */}
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-10 border-b-2 border-neutral-200 pb-4 inline-block">
                {dept.title}
              </h2>
              
              {/* Grid za kartice tima */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {dept.members.map((person) => (
                  <div key={person.id} className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-xl">
                    <PersonCard 
                      name={person.name}
                      role={person.role}
                      imagePlaceholder={person.imagePlaceholder}
                      image={person.image} 
                    />
                  </div>
                ))}
              </div>
              
            </div>
          ))}

        </div>
      </section>
      
    </div>
  );
}