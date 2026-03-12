import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Building2, Users2, Building } from 'lucide-react';
import { PRICING, TESTIMONIALS } from '../lib/constants';
import { SEO, SchemaMarkup } from '../components/seo';

export function Tarieven() {
  return (
    <>
      <SEO
        title="Tarieven | Externe Vertrouwenspersoon"
        description="Compleet abonnement voor externe vertrouwenspersonen al vanaf €475 per jaar. Ontdek onze transparante prijzen voor kleine organisaties, MKB en grote bedrijven."
        keywords="vertrouwenspersoon tarieven, externe vertrouwenspersoon kosten, vertrouwenspersoon prijs"
        canonicalUrl="/tarieven"
      />
      <SchemaMarkup 
        type="webpage" 
        pageUrl="https://puntuit.nl/tarieven" 
        pageTitle="Tarieven | Externe Vertrouwenspersoon"
        pageDescription="Compleet abonnement voor externe vertrouwenspersonen al vanaf €475 per jaar."
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Tarieven', url: '/tarieven' }
        ]}
      />
      <SchemaMarkup type="service" />
      <div className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-[#0284c7] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative z-10 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Transparante prijzen</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onze Tarieven
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Compleet abonnement al vanaf €375 per jaar. Ontdek welk pakket het beste bij jouw organisatie past.
            </p>
          </div>
        </div>
        
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white -mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-primary-600 text-white shadow-2xl scale-105 z-10'
                    : 'bg-white text-gray-900 shadow-lg border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#E85D56] text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Meest gekozen
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-white/20' : 'bg-primary-100'
                  }`}>
                    {index === 0 && <Building2 className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary-600'}`} />}
                    {index === 1 && <Users2 className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary-600'}`} />}
                    {index === 2 && <Building className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary-600'}`} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-primary-200' : 'text-primary-600'
                      }`} />
                      <span className={plan.popular ? 'text-primary-50' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                    plan.popular
                      ? 'bg-white text-[#0284c7] hover:bg-gray-100'
                      : 'bg-[#0284c7] text-white hover:bg-[#0369a1]'
                  }`}
                >
                  Offerte aanvragen
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Bij elke 250 medewerkers of vrijwilligers sluiten wij een abonnement af. Elk abonnement kost €475.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Klaar voor PuntUit?</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Vraag een offerte aan!
              </h2>
              
              <p className="text-gray-600 text-lg mb-6">
                We sturen u een offerte die digitaal getekend kan worden. Direct nadat de offerte getekend is kunnen de medewerkers gebruik maken van onze diensten.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-600">Digitaal ondertekenen van offerte</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-600">Direct toegang tot alle diensten</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-600">Welkomstmails voor medewerkers</p>
                </li>
              </ul>
              
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Offerte aanvragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3" />
              <img
                src="https://puntuit.nl/wp-content/uploads/2024/01/lvv-register-vertrouwenspersoon.png"
                alt="LVV Gecertificeerd"
                loading="lazy"
                decoding="async"
                className="relative bg-white rounded-2xl shadow-xl p-8 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Wat klanten zeggen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700">
        <div className="container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plan een afspraak!
            </h2>
            
            <p className="text-xl text-primary-100 mb-8">
              Plan een afspraak voor een online gesprek met ons, waarin we u kunnen vertellen hoe we samen het verschil kunnen maken.
            </p>
            
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Neem contact op
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
