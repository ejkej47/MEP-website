import PersonCard from '../../../components/ljudi/PersonCard';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';
import Link from 'next/link';

export default async function PeoplePage({ params }) {
  const dict = await getDictionary(params.lang);
  const { people } = dict;

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
              {people.title}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* GLAVNA SLIKA TIMA (Kolaž) */}
      <section className="py-12 md:py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden transition-all duration-700">
            <Image 
              src="/featured-ljudi.jpg" 
              alt={people.imgAlt} 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* SAKRIVENI SADRŽAJ (TIM I CTA) */}
          {/* TIM - 2 PO 2 GRID (Dinamičko iscrtavanje) */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                
                {/* Ovdje prolazimo kroz niz iz rečnika i za svakog iscrtavamo PersonCard */}
                {people.team.map((person) => (
                  <PersonCard 
                    key={person.id}
                    name={person.name}
                    role={person.role}
                    imagePlaceholder={person.imagePlaceholder}
                  />
                ))}

              </div>
            </div>
          </section>
          
          {/* CTA (POZIV NA AKCIJU) - ZA STRANICU LJUDI */}
          <section className="bg-black text-white py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                {people.cta.title}
              </h2>
              <p className="text-neutral-400 text-lg mb-10">
                {people.cta.desc}
              </p>
              <Link 
                href="/projekti" 
                className="inline-flex bg-white text-black px-8 py-4 text-sm font-bold items-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                {people.cta.btn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </section>
        </>
  );
}