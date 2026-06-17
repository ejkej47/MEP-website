import Link from 'next/link';
import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function CareersPage({ params }) {
  const dict = await getDictionary(params.lang);
  const { careers } = dict;

  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              05
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {careers.title}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold uppercase mb-6">{careers.intro.title}</h2>
          <p className="text-neutral-600 text-base leading-relaxed mb-4">
            {careers.intro.p1}
          </p>
          <p className="text-neutral-600 text-base leading-relaxed">
            {careers.intro.p2}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold uppercase mb-12 text-center">{careers.positions.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold uppercase mb-4 border-b border-neutral-100 pb-4">{careers.positions.p1.title}</h3>
              <p className="font-semibold text-sm mb-2">{careers.positions.reqLabel}</p>
              <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed space-y-1">
                {careers.positions.p1.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold uppercase mb-4 border-b border-neutral-100 pb-4">{careers.positions.p2.title}</h3>
              <p className="font-semibold text-sm mb-2">{careers.positions.reqLabel}</p>
              <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed space-y-1">
                {careers.positions.p2.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-extrabold uppercase mb-6">{careers.benefits.title}</h2>
            <p className="text-neutral-900 font-semibold mb-4">{careers.benefits.subtitle}</p>
            <p className="text-neutral-600 text-sm mb-4">{careers.benefits.desc}</p>
            <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed space-y-1">
              {careers.benefits.list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase mb-6">{careers.whyUs.title}</h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              {careers.whyUs.p1}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              {careers.whyUs.p2}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-8">
              {careers.whyUs.p3}
            </p>
            
            <div className="bg-neutral-100 p-6 border-l-4 border-black">
              <p className="font-bold uppercase text-sm mb-2">{careers.apply.title}</p>
              <p className="text-sm text-neutral-600 mb-2">{careers.apply.desc}</p>
              <a href={`mailto:${careers.apply.email}`} className="text-lg font-bold hover:underline">{careers.apply.email}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}