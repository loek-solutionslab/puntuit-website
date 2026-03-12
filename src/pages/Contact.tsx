import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY } from '../lib/constants';
import { SEO, SchemaMarkup } from '../components/seo';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        employees: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SEO
        title="Contact | Externe Vertrouwenspersoon"
        description="Neem contact op met PuntUit voor een externe vertrouwenspersoon. Bereikbaar via telefoon, mail, WhatsApp of plan een online gesprek."
        keywords="contact vertrouwenspersoon, externe vertrouwenspersoon contact, offerte aanvragen"
        canonicalUrl="/contact"
      />
      <SchemaMarkup
        type="webpage"
        pageUrl="https://puntuit.nl/contact"
        pageTitle="Contact | Externe Vertrouwenspersoon"
        pageDescription="Neem contact op met PuntUit voor een externe vertrouwenspersoon."
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
      />
      <SchemaMarkup type="localBusiness" />

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
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">We helpen je graag</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Kom met ons in contact om meer te horen hoe wij het verschil maken.
            </p>
          </div>
        </div>
        
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
              
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Kom met ons in contact
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                Je kunt ons op verschillende manieren bereiken. Kies wat jou het beste uitkomt.
              </p>
              
              <div className="space-y-6">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Bel ons</p>
                    <p className="text-lg font-semibold text-gray-900">{COMPANY.phone}</p>
                  </div>
                </a>
                
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Mail ons</p>
                    <p className="text-lg font-semibold text-gray-900">{COMPANY.email}</p>
                  </div>
                </a>
                
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                    <p className="text-lg font-semibold text-gray-900">{COMPANY.whatsapp}</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Openingstijden</p>
                    <p className="text-lg font-semibold text-gray-900">Ma-Vr: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Bezoekadres</h3>
                
                <div className="space-y-4">
                  {COMPANY.addresses.map((address, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{address.street}</p>
                        <p className="text-gray-600">{address.city}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="mt-4 text-sm text-gray-500">
                  KvK: {COMPANY.kvk}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Plan een afspraak!</h3>
              
              <p className="text-gray-600 mb-8">
                Plan een afspraak voor een online gesprek met ons, waarin we u kunnen vertellen hoe we samen het verschil kunnen maken met een veilige werkomgeving voor uw mensen!
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Bedankt voor je bericht!</p>
                  <p>We nemen zo snel mogelijk contact met je op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Jouw naam"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="jouw@email.nl"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="06 12345678"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Jouw bedrijf"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aantal medewerkers
                      </label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      >
                        <option value="">Selecteer...</option>
                        <option value="1-50">1-50</option>
                        <option value="51-250">51-250</option>
                        <option value="251-500">251-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Vertel ons meer over je vraag..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                  >
                    Versturen
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700">
        <div className="container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Direct contact?
            </h2>
            
            <p className="text-xl text-primary-100 mb-8">
              We zijn bereikbaar via telefoon, mail, WhatsApp en door het maken van een afspraak bij het online spreekuur.
            </p>
            
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Bel {COMPANY.phone}
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
