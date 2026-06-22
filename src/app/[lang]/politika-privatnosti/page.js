import { getDictionary } from '../../../dictionaries/getDictionary';

export default async function PrivacyPolicy({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const { privacyPage } = dict;

  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{privacyPage.title}</h1>
      <div className="space-y-4 text-gray-700">
        <p>{privacyPage.p1}</p>
        <p>{privacyPage.p2}</p>
        <p>{privacyPage.p3}</p>
      </div>
    </main>
  );
}