import { getDictionary } from '../../../dictionaries/getDictionary';
import ContactForm from '../../../components/contact/ContactForm';

export default async function ContactPage({ params }) {
  const dict = (await getDictionary(params.lang)).contact;

  return (
    <>
      {/* BRUTALIST GEOMETRIC HEADER */}
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              05
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {dict.title}
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* KONTAKT INFO I FORMA (25/75 Split) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-start">
          
          {/* LEVA STRANA: INFORMACIJE O KOMPANIJI (Zauzima 1/4 prostora na velikim ekranima) */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest text-neutral-400 mb-3">
                {dict.office || "Kancelarija"}
              </h3>
              <p className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">
                HYPERMEP
              </p>
              <p className="text-neutral-600 font-medium text-base md:text-lg leading-relaxed">
                Oslobođenja 25V/11<br />
                26000 Pančevo, Serbia
              </p>
            </div>
            
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest text-neutral-400 mb-3">
                {dict.contactTitle || "Kontakt podaci"}
              </h3>
              <div className="space-y-3">
                <p>
                  <a href="tel:+381641187381" className="text-base md:text-lg font-medium hover:text-neutral-500 transition-colors">
                    +381 64 1187381
                  </a>
                </p>
                <p>
                  <a href="mailto:office@hypermep.com" className="text-base md:text-lg font-medium hover:text-neutral-500 transition-colors">
                    office@hypermep.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* DESNA STRANA: FORMA (Zauzima 3/4 prostora na velikim ekranima) */}
          <div className="lg:col-span-3 bg-neutral-50 p-8 md:p-10 border border-neutral-200 shadow-sm">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-8 border-b border-neutral-200 pb-4">
              {dict.formTitle}
            </h2>
            {/* Form mora biti Client Component zbog onSubmit */}
            <ContactForm dict={dict.form} />
          </div>

        </div>
      </section>
    </>
  );
}