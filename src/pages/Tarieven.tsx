import { Link } from 'react-router-dom';
import { SEO, SchemaMarkup } from '../components/seo';

export function Tarieven() {
  return (
    <>
      <SEO title="Tarieven | PuntUit" description="Tarieven voor een externe vertrouwenspersoon bij PuntUit: vanaf €475 per jaar voor organisaties tot 250 medewerkers. Alles inbegrepen, geen verborgen kosten." canonicalUrl="/tarieven" />
      <SchemaMarkup
        type="service"
        pageUrl="https://puntuit.nl/tarieven"
        pageTitle="Tarieven — PuntUit"
        pageDescription="Tarieven voor een externe vertrouwenspersoon bij PuntUit: vanaf €475 per jaar voor organisaties tot 250 medewerkers."
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Tarieven', url: '/tarieven' },
        ]}
      />
      <SchemaMarkup
        type="faqPage"
        faqItems={[
          { question: 'Wat als een medewerker meerdere gesprekken nodig heeft?', answer: 'Het eerste spreekuur is gratis. Daarna rekenen we €84 per uur, per kwartier verrekend. Je ontvangt vooraf altijd inzicht in de kosten.' },
          { question: 'Zijn er opstartkosten?', answer: 'Nee. Je betaalt alleen het jaarabonnement. De communicatiekit en het onboarding-pakket zijn inbegrepen.' },
          { question: 'Kan ik opzeggen?', answer: 'Ja. Het abonnement loopt per jaar en is jaarlijks opzegbaar.' },
          { question: 'Wat als ik meer dan één vestiging heb?', answer: 'Neem contact op. We maken een passend voorstel op maat.' },
        ]}
      />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Geregeld voor minder dan €40 per maand.</h1>
            <p className="text-xl text-primary-100 mb-4">Een jaarabonnement. Alles inbegrepen. Geen verrassingen. Geen verborgen kosten.</p>
            <p className="text-xs text-white/50">Laatst bijgewerkt: april 2026</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="border border-primary-200 rounded-2xl p-8 shadow-sm">
              <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-primary-100 text-primary-700 px-3 py-1 rounded-full mb-4">Meest gekozen</span>
              <h2 className="text-2xl font-bold mb-2">Abonnement - Standaard</h2>
              <p className="text-3xl font-bold mb-6">€475 excl. BTW / jaar</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>- Gratis spreekuur voor medewerkers</li>
                <li>- 24/7 bereikbaarheid (telefoon, e-mail, WhatsApp)</li>
                <li>- Hulpvraagplatform praatuit.nl</li>
                <li>- Early Awareness Tool</li>
                <li>- Jaarlijkse geanonimiseerde rapportage</li>
                <li>- Kwartaalvideo trending topics</li>
                <li>- Gratis communicatiekit</li>
                <li>- LVV-gecertificeerde vertrouwenspersonen</li>
              </ul>
              <Link to="/contact" className="btn-primary">Vraag offerte aan</Link>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2">Instapvariant</h2>
              <p className="text-3xl font-bold mb-6">Prijs op aanvraag</p>
              <p className="text-gray-700 mb-6">Voor organisaties die klein willen beginnen. Neem contact op voor de mogelijkheden.</p>
              <Link to="/contact" className="btn-primary">Neem contact op</Link>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">Bij verdere hulpbehoefte betaal je €84 per uur. Per kwartier verrekend. Geen startkosten. Geen opzegkosten. Gewoon opzeggen per jaar.</p>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Veelgestelde vragen over kosten</h2>
            <div className="space-y-5 text-gray-700">
              <p><strong>Wat als een medewerker meerdere gesprekken nodig heeft?</strong> Het eerste spreekuur is gratis. Daarna rekenen we €84 per uur, per kwartier verrekend. Je ontvangt vooraf altijd inzicht in de kosten.</p>
              <p><strong>Zijn er opstartkosten?</strong> Nee. Je betaalt alleen het jaarabonnement. De communicatiekit en het onboarding-pakket zijn inbegrepen.</p>
              <p><strong>Kan ik opzeggen?</strong> Ja. Het abonnement loopt per jaar en is jaarlijks opzegbaar.</p>
              <p><strong>Wat als ik meer dan één vestiging heb?</strong> Neem contact op. We maken een passend voorstel op maat.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary-700 text-white">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Eén beslissing. Jarenlang geregeld.</h2>
            <p className="text-primary-100 mb-8">Meer dan 500 organisaties deden je al voor. Vraag vandaag een vrijblijvende offerte aan.</p>
            <Link to="/contact" className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold">Vraag offerte aan</Link>
          </div>
        </section>
      </div>
    </>
  );
}
