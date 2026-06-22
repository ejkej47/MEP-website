import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function TermsOfService({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const { termsPage } = dict;

  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{termsPage.title}</h1>
      <div className="space-y-4 text-gray-700">
        <p>{termsPage.p1}</p>
        <p>{termsPage.p2}</p>
      </div>
    </main>
  );
}