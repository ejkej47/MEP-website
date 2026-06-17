// Ukloni 'use client' i hooks, dodaj async
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

      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
              {dict.placeholder}
            </span>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest text-neutral-400 mb-2">{dict.office}</h3>
              <p className="text-lg font-medium">HYPERMEP DOO</p>
              <p className="text-neutral-600">Ulica i broj, Grad, Srbija</p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest text-neutral-400 mb-2">{dict.contactTitle}</h3>
              <p className="text-lg font-medium">+381 XX XXXXXXX</p>
              <p className="text-lg font-medium">office@kompanija.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">{dict.formTitle}</h2>
          {/* Form mora biti Client Component zbog onSubmit */}
          <ContactForm dict={dict.form} />
        </div>
      </section>
    </>
  );
}