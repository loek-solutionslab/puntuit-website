import { SEO } from '../components/seo';

export function VoorMedewerkers() {
  return (
    <>
      <SEO title="Voor Medewerkers" description="Je hoeft dit niet alleen op te lossen." canonicalUrl="/voor-medewerkers" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Je hoeft dit niet alleen op te lossen.</h1>
            <p className="text-xl text-primary-100 mb-3">Jouw werkgever is aangesloten bij PuntUit. Je kunt ons direct bellen, mailen of appen - vertrouwelijk en kosteloos.</p>
            <p className="text-sm text-primary-100">Jouw leidinggevende weet niet dat je contact opneemt.</p>
          </div>
        </section>
        <section className="section-padding bg-white"><div className="container max-w-4xl space-y-3 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Kies wat voor jou prettig is.</h2>
          <p>Bellen [Telefoonnummer] Wij nemen op. Altijd.</p>
          <p>Mailen [E-mailadres] We reageren binnen één werkdag.</p>
          <p>WhatsApp [WhatsApp-link] Stuur een bericht. Wij nemen contact op.</p>
          <p>Afspraak plannen Via praatuit.nl plan je zelf een gesprek. Op een moment dat jou uitkomt.</p>
        </div></section>
        <section className="section-padding bg-gray-50"><div className="container max-w-4xl space-y-2 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Dit zijn de spelregels.</h2>
          <p>- Alles wat je vertelt blijft vertrouwelijk</p>
          <p>- Je werkgever hoort niets zonder jouw toestemming</p>
          <p>- Je hebt geen toestemming nodig van je leidinggevende</p>
          <p>- We lossen het niet voor je op - maar we helpen je verder</p>
          <p>- Je beslist zelf welke stap je neemt</p>
        </div></section>
      </div>
    </>
  );
}
