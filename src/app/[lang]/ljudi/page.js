import PersonCard from '../../../components/ljudi/PersonCard';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries/getDictionary';
import Link from 'next/link';

export default async function PeoplePage({ params }) {
  const dict = await getDictionary(params.lang);
  const { people } = dict;

  return (
    <div className="relative min-h-screen">
      
      {/* FIKSNA POZADINSKA SLIKA (Od ivice do ivice, izbeljena) */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image 
          src="/featured-ljudi.jpg" 
          alt={people.imgAlt} 
          fill
          className="object-cover"
          quality={100}
        />
        {/* Beli premaz (overlay) koji "izbeljuje" sliku - prilagodi opacity (85%) po potrebi */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* BRUTALIST GEOMETRIC HEADER */}
      <section className="pt-8 md:pt-12 relative z-10">
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

      {/* TIM - 2 PO 2 GRID */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {people.team.map((person) => (
              /* Omotač koji garantuje čitljivost kartice preko pozadinske slike */
              <div key={person.id} className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-xl">
                <PersonCard 
                  name={person.name}
                  role={person.role}
                  imagePlaceholder={person.imagePlaceholder}
                />
              </div>
            ))}

          </div>
        </div>
      </section>
      
      {/* CTA (POZIV NA AKCIJU) */}
      <section className="bg-black text-white py-24 relative z-10">
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
      
    </div>
  );
}