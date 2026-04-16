import { Link } from 'react-router-dom';
import { SEO, SchemaMarkup } from '../components/seo';
import { ServicesGrid } from '../components/ServicesGrid';

export function ExterneVertrouwenspersoon() {
  return (
    <>
      <SEO title="Externe Vertrouwenspersoon" description="Wat doet een externe vertrouwenspersoon? PuntUit biedt onafhankelijke, LVV-gecertificeerde vertrouwenspersonen die 24/7 beschikbaar zijn voor jouw medewerkers." canonicalUrl="/externe-vertrouwenspersoon" />
      <SchemaMarkup
        type="service"
        pageUrl="https://puntuit.nl/externe-vertrouwenspersoon"
        pageTitle="Externe Vertrouwenspersoon"
        pageDescription="Wat doet een externe vertrouwenspersoon? PuntUit biedt onafhankelijke, LVV-gecertificeerde vertrouwenspersonen die 24/7 beschikbaar zijn voor jouw medewerkers."
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Externe Vertrouwenspersoon', url: '/externe-vertrouwenspersoon' },
        ]}
      />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-4xl">
            <p className="text-sm mb-4">Voor werkgevers &amp; HR professionals</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Als HR ben je nooit echt neutraal. PuntUit wel.</h1>
            <p className="text-xl text-primary-100 mb-4">PuntUit levert een externe vertrouwenspersoon die volledig buiten jouw organisatie staat. LVV-gecertificeerd, 24/7 beschikbaar en laagdrempelig voor elke medewerker.</p>
            <p className="text-xs text-white/50 mb-6">Laatst bijgewerkt: april 2026</p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="btn-primary">Vraag offerte aan</Link>
              <Link to="/tarieven" className="bg-white text-[#0284c7] px-6 py-3 rounded-lg font-medium">Bekijk tarieven</Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5 text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900">Medewerkers melden liever niet bij HR.</h2>
                <p>Bijna de helft van alle medewerkers die iets ervaart, zegt er niets van. Niet omdat ze niet durven. Maar omdat ze HR niet als veilig zien.</p>
                <p>Dat is geen verwijt. Het is hoe mensen organisaties beleven.</p>
                <p>HR staat tussen medewerker en management. En dat gevoel - hoe onterecht ook - verdwijnt niet vanzelf.</p>
                <p className="font-medium text-gray-900">Een externe vertrouwenspersoon staat buiten die hiërarchie. Volledig. Altijd.</p>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50">
                <img
                  src="/images/gratis-spreekuur.png"
                  alt="Gratis spreekuur voor medewerkers"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50">
                  <img
                    src="/images/early-awareness-tool.webp"
                    alt="Early Awareness Tool voor vroegtijdige signalering"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4 text-gray-700 order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900">Begeleiding. Geen beslissing.</h2>
                <p>De vertrouwenspersoon luistert. Helpt de medewerker om zelf een stap te zetten. Lost het probleem niet op - maar geeft richting en steun.</p>
                <p>Geen mediator. Geen arbodienst. Geen klachtencommissie. Wel een professionele, onafhankelijke gesprekspartner.</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Luistert vertrouwelijk naar de medewerker</li>
                  <li>Bespreekt welke stappen mogelijk zijn</li>
                  <li>Begeleidt bij een eventuele formele melding</li>
                  <li>Signaleert patronen - anoniem - via de rapportage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid />
      </div>
    </>
  );
}
