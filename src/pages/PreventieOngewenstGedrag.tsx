import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { ServicesGrid } from '../components/ServicesGrid';
import { TrendingDown, Search, ArrowRight } from 'lucide-react';

export function PreventieOngewenstGedrag() {
  return (
    <>
      <SEO title="Preventie Ongewenst Gedrag" description="Een melding is al te laat. Voorkom het." canonicalUrl="/preventie-ongewenst-gedrag" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Een melding is al te laat. Voorkom het.</h1>
            <p className="text-xl text-primary-100 mb-8">PuntUit helpt je ongewenst gedrag te signaleren voordat het escaleert. Bewustwording, preventie en een vroeg-waarschuwingssysteem.</p>
            <Link className="btn-primary" to="/contact">Vraag offerte aan</Link>
          </div>
        </section>

        <section className="section-padding bg-white overflow-hidden">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E85D56]/10 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-[#E85D56]" />
                  </div>
                  <p className="text-[#E85D56] text-xs font-semibold uppercase tracking-[0.2em]">Preventie</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Eerder ingrijpen.<br />Minder schade.</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">Ongewenst gedrag begint zelden met een groot incident. Het groeit. Langzaam. Onzichtbaar.</p>
                <p className="text-gray-700 text-lg leading-relaxed">PuntUit signaleert het vroeg. Niet via verplichte meldingen — maar via gedragspatronen op het platform.</p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#0284c7]/5 to-[#E85D56]/5 rounded-3xl p-8 md:p-10">
                  <div className="space-y-5">
                    {[
                      { label: 'Signaal', value: 'Gedragspatroon gedetecteerd', color: 'bg-amber-400' },
                      { label: 'Actie', value: 'Informatievideo gedeeld', color: 'bg-[#0284c7]' },
                      { label: 'Resultaat', value: 'Bewustwording zonder melding', color: 'bg-emerald-500' },
                    ].map((step, i) => (
                      <div key={step.label} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${step.color}`} />
                          {i < 2 && <div className="w-px h-8 bg-gray-200" />}
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex-1">
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{step.label}</p>
                          <p className="text-gray-900 font-medium">{step.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center">
                      <Search className="w-5 h-5 text-[#0284c7]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Early Awareness Tool</p>
                      <p className="text-xs text-gray-500">Realtime analyse op praatuit.nl</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { q: 'Welke artikelen worden gelezen?', emphasis: true },
                      { q: 'Hoe vaak worden ze bekeken?', emphasis: false },
                      { q: 'In welke afdeling — anoniem?', emphasis: false },
                      { q: 'Welke thema\'s komen terug?', emphasis: true },
                    ].map((item) => (
                      <div key={item.q} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.emphasis ? 'bg-[#E85D56]' : 'bg-gray-300'}`} />
                        <p className={`text-sm ${item.emphasis ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{item.q}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Je ziet het voordat iemand iets zegt.</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">De Early Awareness Tool analyseert gebruikersgedrag op praatuit.nl. Dat geeft jou als werkgever een eerder signaal.</p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">Zodat je kunt handelen voordat iemand een formele melding doet.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#0284c7] font-semibold hover:gap-3 transition-all">
                  Ontdek hoe het werkt <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid />

        <section className="section-padding bg-[#0284c7] text-white">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Voorkom escalatie. Begin vandaag.</h2>
            <p className="text-white/80 text-lg mb-8">Meer dan 500 organisaties vertrouwen op PuntUit voor preventie en vroegsignalering.</p>
            <Link to="/contact" className="bg-white text-[#0284c7] px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors">Vraag offerte aan</Link>
          </div>
        </section>
      </div>
    </>
  );
}
