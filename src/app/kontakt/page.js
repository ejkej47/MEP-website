'use client'

export default function ContactPage() {
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
              Kontakt
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      {/* WHERE TO FIND US & INFO */}
      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Slika lokacije kao u image_e63663.png */}
          <div className="w-full aspect-video bg-neutral-200 border border-neutral-300 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <span className="relative z-10 text-neutral-500 font-mono text-xs uppercase tracking-widest bg-white/90 px-4 py-2 border border-neutral-300 shadow-sm">
              [Placeholder: Slika Kancelarije / Lokacije]
            </span>
          </div>

          {/* Podaci */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest text-neutral-400 mb-2">Head Office</h3>
              <p className="text-lg font-medium">IME KOMPANIJE DOO</p>
              <p className="text-neutral-600">Ulica i broj, Grad, Srbija</p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm tracking-widest text-neutral-400 mb-2">Kontakt</h3>
              <p className="text-lg font-medium">+381 XX XXXXXXX</p>
              <p className="text-lg font-medium">office@kompanija.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Let's talk about your project!</h2>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input type="text" placeholder="Name*" className="w-full p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black" />
              <input type="email" placeholder="Email*" className="w-full p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black" />
              <input type="text" placeholder="Subject*" className="w-full p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black" />
            </div>
            <div>
              <textarea placeholder="Message*" className="w-full h-full min-h-[200px] p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black resize-none"></textarea>
            </div>
            <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}