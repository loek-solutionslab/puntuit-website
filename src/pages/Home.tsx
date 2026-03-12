import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle, Shield, Users, Clock, Award } from 'lucide-react';
import { SERVICES, BENEFITS, FAQS, TESTIMONIALS, CLIENT_LOGOS } from '../lib/constants';

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-[#0284c7] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">LVV Gecertificeerd</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Externe Vertrouwenspersonen met{' '}
              <span className="text-white/80">unieke aanpak</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Wij hebben een unieke aanpak gericht op bewustwording, preventie en laagdrempelige bereikbaarheid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center text-lg">
                Plan een afspraak
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </Link>
              <Link to="/tarieven" className="bg-white text-[#0284c7] px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/90 text-center text-lg">
                Bekijk tarieven
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-white/70" />
                <span className="text-sm">500+ organisaties</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-white/70" />
                <span className="text-sm">24/7 beschikbaar</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-white/70" />
                <span className="text-sm">LVV Gecertificeerd</span>
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white">
        <div className="container">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
            Vertrouwd door meer dan 500 organisaties
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8 items-center opacity-60">
            {CLIENT_LOGOS.slice(0, 8).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Klant logo"
                className="h-8 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Onze Service</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Wat regelt PuntUit voor jou?
            </h2>
            <p className="text-gray-600 text-lg">
              Jaarabonnement voor €475 excl. BTW. Wat kan je allemaal van ons verwachten?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {service.link && (
                  <a
                    href={`https://${service.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 font-medium mt-4 hover:gap-2 transition-all"
                  >
                    Bezoek {service.link}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Waarom PuntUit</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Preventief werken aan een fijnere omgeving
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              De meest gestelde vragen
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-200 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Wat klanten van ons vinden
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.slice(0, 4).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="font-semibold">{testimonial.name}</h4>
                </div>
                <p className="text-primary-100 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plan een afspraak!
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Plan een afspraak voor een online gesprek met ons, waarin we u kunnen vertellen hoe we samen het verschil kunnen maken met een veilige werkomgeving voor uw mensen!
            </p>
            
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Plan nu een afspraak
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
