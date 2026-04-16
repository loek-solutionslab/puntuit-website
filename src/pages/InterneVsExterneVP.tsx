import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { ArrowRight, ImageIcon, ShieldCheck, Users } from 'lucide-react';

function PlaceholderImage({ label }: { label?: string }) {
  return (
    <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
      <div className="text-center">
        <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-2" />
        <p className="text-gray-400 text-sm">{label || 'Placeholder afbeelding'}</p>
      </div>
    </div>
  );
}

export function InterneVsExterneVP() {
  return (
    <>
      <SEO title="Interne vs. Externe Vertrouwenspersoon" description="Interne of externe vertrouwenspersoon: wat werkt echt?" canonicalUrl="/interne-vs-externe-vp" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Interne of externe vertrouwenspersoon: wat werkt echt?</h1>
            <p className="text-xl text-primary-100">Veel organisaties kiezen voor intern - totdat ze zien waarom medewerkers niet bellen.</p>
          </div>
        </section>

        {/* Section 1 — text left, image right */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-4 text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900">Het verschil in de praktijk.</h2>
                <p>Op papier lijken een interne en externe vertrouwenspersoon op elkaar. Beide luisteren, begeleiden en signaleren. Maar in de praktijk is er een groot verschil: <strong>de drempel om contact op te nemen</strong>.</p>
                <p>Een interne vertrouwenspersoon is een collega. Iemand die je in de kantine tegenkomt. Iemand die — hoe professioneel ook — deel uitmaakt van dezelfde organisatie. Voor veel medewerkers is dat genoeg reden om niet te bellen.</p>
                <p>Een externe vertrouwenspersoon staat volledig buiten de organisatie. Geen loyaliteitsconflict. Geen ongemakkelijk moment bij de koffieautomaat. Dat maakt het verschil tussen wél en niet melden.</p>
              </div>
              <PlaceholderImage label="Medewerker in gesprek" />
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-5xl overflow-x-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vergelijking op een rij.</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-100 bg-gray-50/50">
                    <th className="p-5 text-gray-500 font-medium"></th>
                    <th className="p-5 font-semibold text-gray-700">Interne VP</th>
                    <th className="p-5 font-semibold text-[#0284c7]">Externe VP (PuntUit)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-5 font-semibold">Onafhankelijkheid</td><td className="p-5 text-gray-500">Beperkt — deel van de organisatie</td><td className="p-5 text-gray-800 font-medium">Volledig onafhankelijk</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/30"><td className="p-5 font-semibold">Vertrouwen medewerker</td><td className="p-5 text-gray-500">Lager — zien HR als "van de baas"</td><td className="p-5 text-gray-800 font-medium">Hoger — staat buiten de hiërarchie</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-5 font-semibold">Bereikbaarheid</td><td className="p-5 text-gray-500">Kantooruren</td><td className="p-5 text-gray-800 font-medium">24/7 via telefoon, mail, WhatsApp</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/30"><td className="p-5 font-semibold">Kosten</td><td className="p-5 text-gray-500">Interne uren + opleiding</td><td className="p-5 text-gray-800 font-medium">Vanaf €475/jaar all-in</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-5 font-semibold">Professionaliteit</td><td className="p-5 text-gray-500">Afhankelijk van training en ervaring</td><td className="p-5 text-gray-800 font-medium">LVV-gecertificeerd met continue bijscholing</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/30"><td className="p-5 font-semibold">Signalering</td><td className="p-5 text-gray-500">Beperkt tot eigen waarneming</td><td className="p-5 text-gray-800 font-medium">Early Awareness Tool + jaarrapportage</td></tr>
                  <tr><td className="p-5 font-semibold">Laagdrempeligheid</td><td className="p-5 text-gray-500">Contactgegevens via HR</td><td className="p-5 text-gray-800 font-medium">Eigen hulpplatform, NFC-sticker, direct bereikbaar</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2 — image left, text right */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <PlaceholderImage label="Vertrouwelijk gesprek" />
              </div>
              <div className="space-y-4 text-gray-700 order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900">Waarom medewerkers liever extern melden.</h2>
                <p>Onderzoek laat zien dat bijna de helft van de medewerkers die iets ongewensts ervaart, er niets mee doet. De belangrijkste reden? <strong>Ze vertrouwen het interne kanaal niet genoeg.</strong></p>
                <p>HR staat per definitie tussen medewerker en management. Die positie — hoe neutraal je ook bent — maakt je nooit volledig "veilig" in de ogen van een medewerker.</p>
                <p>Een externe partij heeft geen belang bij de organisatie. Geen loyaliteitsconflict. Geen dubbelrol. Dat verlaagt de drempel om te spreken.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — two-column cards */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Intern én extern: de ideale combinatie.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interne vertrouwenspersoon</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Waardevol als eerste aanspreekpunt voor alledaagse vragen en het bevorderen van een open cultuur.</p>
                <p className="text-gray-500 text-sm">Maar voor serieuze kwesties — grensoverschrijdend gedrag, pesten, discriminatie — kiest de meerderheid van medewerkers voor een extern kanaal.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-[#0284c7]/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0284c7] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">Aanbevolen</div>
                <div className="w-12 h-12 rounded-xl bg-[#0284c7]/10 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Externe vertrouwenspersoon (PuntUit)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Een onafhankelijk vangnet voor alles wat gevoeliger ligt. Volledig buiten de organisatie, 24/7 bereikbaar.</p>
                <p className="text-gray-500 text-sm">Zo dek je het hele spectrum af. En geef je élke medewerker een kanaal dat bij hem of haar past.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — text left, image right */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-4 text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900">Wat levert het jouw organisatie op?</h2>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3"><span className="text-[#E85D56] font-bold mt-0.5">✓</span><span><strong>Meer meldingen, minder escalaties</strong> — medewerkers spreken eerder, waardoor problemen kleiner blijven</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E85D56] font-bold mt-0.5">✓</span><span><strong>Lagere kosten</strong> — voorkom dure juridische procedures en langdurig verzuim</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E85D56] font-bold mt-0.5">✓</span><span><strong>Loop vooruit op wetgeving</strong> — een vertrouwenspersoon wordt via de RI&E en de Arbeidsinspectie steeds vaker verwacht</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E85D56] font-bold mt-0.5">✓</span><span><strong>Jaarlijks inzicht</strong> — geanonimiseerde rapportage laat zien wat er leeft in je organisatie</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E85D56] font-bold mt-0.5">✓</span><span><strong>Bewustwording</strong> — kwartaalvideo's en communicatiemateriaal houden het onderwerp levend</span></li>
                </ul>
              </div>
              <PlaceholderImage label="Resultaten dashboard" />
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0284c7] text-white">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Klaar om het verschil te zien?</h2>
            <p className="text-white/80 text-lg mb-8">Ontdek wat een externe vertrouwenspersoon voor jouw organisatie kan betekenen.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-[#0284c7] px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                Vraag offerte aan <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/tarieven" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:border-white/60 transition-colors">
                Bekijk tarieven
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
