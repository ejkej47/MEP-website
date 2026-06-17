import Link from 'next/link';

export default function CareersPage() {
  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="bg-black text-white w-14 h-14 md:w-20 md:h-20 flex items-center justify-center font-mono text-xl md:text-3xl font-bold flex-shrink-0">
              04
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Karijere
            </h1>
          </div>
        </div>
        <div className="w-full border-b-8 border-black"></div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold uppercase mb-6">Pridružite se timu koji projektuje budućnost</h2>
          <p className="text-neutral-600 text-base leading-relaxed mb-4">
            U HyperMEP-u verujemo da vrhunski projekti nastaju zahvaljujući vrhunskim ljudima. Zato kontinuirano ulažemo u razvoj stručnjaka koji dele našu strast prema inženjerstvu, inovacijama i kvalitetu.
          </p>
          <p className="text-neutral-600 text-base leading-relaxed">
            Tražimo ambiciozne i posvećene profesionalce koji žele da rade na izazovnim projektima, usavršavaju svoje veštine i budu deo modernog inženjerskog okruženja zasnovanog na saradnji, znanju i tehnologiji.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold uppercase mb-12 text-center">Otvorene pozicije</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold uppercase mb-4 border-b border-neutral-100 pb-4">Elektro projektant</h3>
              <p className="font-semibold text-sm mb-2">Od kandidata očekujemo:</p>
              <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed space-y-1">
                <li>Iskustvo u projektovanju elektro instalacija</li>
                <li>Poznavanje relevantnih standarda i propisa</li>
                <li>Rad u AutoCAD-u i/ili Revit-u</li>
                <li>Sposobnost samostalnog rada i tehničke koordinacije</li>
                <li>Odgovornost, preciznost i profesionalan pristup</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold uppercase mb-4 border-b border-neutral-100 pb-4">Projektant mašinskih instalacija</h3>
              <p className="font-semibold text-sm mb-2">Od kandidata očekujemo:</p>
              <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed space-y-1">
                <li>Iskustvo u projektovanju HVAC i drugih mašinskih sistema</li>
                <li>Poznavanje tehničkih propisa i standarda</li>
                <li>Rad u AutoCAD-u i/ili Revit-u</li>
                <li>Razumevanje BIM procesa predstavlja prednost</li>
                <li>Analitičnost i sposobnost rešavanja tehničkih izazova</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-extrabold uppercase mb-6">Šta nudimo</h2>
            <p className="text-neutral-900 font-semibold mb-4">Fleksibilnost koja prati savremeni način rada</p>
            <p className="text-neutral-600 text-sm mb-4">Verujemo da vrhunski rezultati ne zavise od lokacije, već od znanja, odgovornosti i posvećenosti. Zato našim zaposlenima nudimo:</p>
            <ul className="list-disc pl-5 text-neutral-600 text-sm leading-relaxed space-y-1">
              <li>Mogućnost rada od kuće (Remote Work)</li>
              <li>Fleksibilno radno vreme</li>
              <li>Rad na domaćim i međunarodnim projektima</li>
              <li>Kontinuirano stručno usavršavanje</li>
              <li>Razvoj BIM veština i rad sa savremenim alatima</li>
              <li>Profesionalno i podsticajno radno okruženje</li>
              <li>Dugoročnu saradnju i mogućnost napredovanja</li>
              <li>Učešće u projektima različitih namena i složenosti</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold uppercase mb-6">Zašto HyperMEP?</h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Kod nas nećete biti samo deo tima – bićete deo kompanije koja raste, razvija se i gradi reputaciju kroz kvalitet svog rada.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              Tražimo ljude koji žele da preuzmu odgovornost, razvijaju svoje znanje i ostave trag na projektima koji oblikuju prostor u kome živimo i radimo.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed mb-8">
              Ako želite da radite u okruženju koje vrednuje stručnost, inicijativu i profesionalni razvoj, HyperMEP je pravo mesto za vas.
            </p>
            
            <div className="bg-neutral-100 p-6 border-l-4 border-black">
              <p className="font-bold uppercase text-sm mb-2">Prijavite se</p>
              <p className="text-sm text-neutral-600 mb-2">Pošaljite svoj CV i kratko predstavljanje na:</p>
              <a href="mailto:karijera@hypermep.com" className="text-lg font-bold hover:underline">karijera@hypermep.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}