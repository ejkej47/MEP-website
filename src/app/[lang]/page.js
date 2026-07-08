import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../dictionaries/getDictionary';

export default async function Home({ params }) {
  // Učitavanje odgovarajućeg rečnika na osnovu jezika
  const dict = await getDictionary(params.lang);
  const { landing } = dict;
  const { lang } = params;

  return (
    <>
      {/* HERO SEKCIJA */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
        
        {/* Pozadinska slika na nivou cele sekcije */}
        <Image 
          src="/landing/hero-slika-v3.jpg" 
          alt={landing.hero.imageAlt}
          fill
          priority
          className="object-cover -z-20"
        />
        
        {/* Blagi tamni sloj (overlay) preko slike da bi se sve bolje uklopilo */}
        <div className="absolute inset-0 bg-black/20 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="w-full xl:w-fit max-w-full bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6 flex flex-col">
              <span className="md:whitespace-nowrap">{landing.hero.title1}</span>
              <span className="text-neutral-500 md:whitespace-nowrap">{landing.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10 font-medium">
              {landing.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${lang}/usluge`} className="bg-black text-white px-8 py-4 text-sm font-bold flex justify-center items-center gap-2 hover:bg-neutral-800 transition-colors w-full sm:w-auto">
                {landing.hero.btnExplore}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href={`/${lang}/projekti`} className="bg-white text-black px-8 py-4 text-sm font-bold flex justify-center items-center border-2 border-black hover:bg-neutral-50 transition-colors w-full sm:w-auto">
                {landing.hero.btnProjects}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* VERTIKALNI STATEMENTS SA SLIKAMA */}
      <section className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          
          {/* 01: O Nama */}
          <Link href={`/${lang}/o-nama`} className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">01</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">{landing.statements.s1.title}</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">{landing.statements.s1.desc}</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden transition-all duration-500">
              <Image 
                src="/landing/ljudi.png" 
                alt={landing.statements.s2.title} 
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>

          {/* 02: Usluge */}
          <Link href={`/${lang}/usluge`} className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">02</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">{landing.statements.s2.title}</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">{landing.statements.s2.desc}</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden transition-all duration-500">
              <Image 
                src="/landing/landing-usluge-v2.png" 
                alt={landing.statements.s2.title} 
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>

          {/* 03: Projekti */}
          <Link href={`/${lang}/projekti`} className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">03</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">{landing.statements.s3.title}</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">{landing.statements.s3.desc}</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden transition-all duration-500">
              <Image 
                src="/landing/landing-projekti.png" 
                alt={landing.statements.s3.title} 
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* 04: Ljudi */}
          <Link href={`/${lang}/ljudi`} className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">04</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">{landing.statements.s4.title}</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">{landing.statements.s4.desc}</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            {/* Velika Slika Placeholder */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden transition-all duration-500">
              <Image 
                src="/landing/featured-ljudi.png" 
                alt={landing.statements.s4.title} 
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* 05: Karijere */}
          <Link href={`/${lang}/karijere`} className="group block px-6 py-12 md:py-16 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
              <div className="flex items-start md:items-center gap-8 md:gap-16">
                <span className="text-neutral-300 font-mono text-2xl md:text-4xl">05</span>
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 group-hover:pl-2 transition-all duration-300">{landing.statements.s5.title}</h2>
                  <p className="text-neutral-500 font-medium group-hover:pl-2 transition-all duration-300 delay-75">{landing.statements.s5.desc}</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-200 border border-neutral-300 relative flex items-center justify-center overflow-hidden transition-all duration-500">
              <Image 
                src="/landing/karijere.png" 
                alt={landing.statements.s5.title} 
                fill
                className="object-cover"
              />
            </div>
          </Link>

        </div>
      </section>

      {/* FAQ SEKCIJA */}
      <section className="py-24 border-b border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {landing.faq.title}
            </h2>
          </div>

          <div className="border-t-2 border-black">
            {/* Pitanje 1 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold tracking-tight pr-4">{landing.faq.q1}</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4"/></svg>
                  <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {landing.faq.a1}
              </div>
            </details>

            {/* Pitanje 2 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold tracking-tight pr-4">{landing.faq.q2}</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4"/></svg>
                  <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {landing.faq.a2}
              </div>
            </details>

            {/* Pitanje 3 */}
            <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-neutral-200 hover:bg-neutral-50 transition-colors cursor-pointer">
              <summary className="flex items-center justify-between p-6">
                <h3 className="text-lg md:text-xl font-bold tracking-tight pr-4">{landing.faq.q3}</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4"/></svg>
                  <svg className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4"/></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-neutral-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {landing.faq.a3}
              </div>
            </details>
          </div>
        </div>
      </section>


      {/* PARTNER LOGO MARQUEE SEKCIJA */}
      <section className="py-16 border-b border-neutral-200 overflow-hidden bg-white">
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee flex items-center gap-16 px-8 whitespace-nowrap">
            {/* Originalni set logoa */}
            <Image src="/landing/elektroplan.jpg" alt="Elektroplan" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/jd.svg" alt="JD" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/mega_modulor.jpg" alt="Mega Modulor" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/archiplan.png" alt="Archiplan" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/go4energy.png" alt="Go4Energy" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/hyper_facade.webp" alt="Hyper Facade" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/tensor.png" alt="Tensor" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/divaro.png" alt="Divaro" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/elektrobull.png" alt="Elektro bull" width={180} height={80} className="object-contain h-12 w-auto" />

            {/* Duplicirani set logoa za beskonacan loop */}
            <Image src="/landing/elektroplan.jpg" alt="Elektroplan" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/jd.svg" alt="JD" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/mega_modulor.jpg" alt="Mega Modulor" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/archiplan.png" alt="Archiplan" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/go4energy.png" alt="Go4Energy" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/hyper_facade.webp" alt="Hyper Facade" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/tensor.png" alt="Tensor" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/divaro.png" alt="Divaro" width={180} height={80} className="object-contain h-12 w-auto" />
            <Image src="/landing/elektrobull.png" alt="Elektro bull" width={180} height={80} className="object-contain h-12 w-auto" />

          </div>
        </div>

        {/* CSS za animaciju u liniji */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>
    </>
  );
}