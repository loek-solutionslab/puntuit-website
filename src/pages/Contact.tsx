import { useState, type FormEvent } from 'react';
import { SEO, SchemaMarkup } from '../components/seo';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contactformulier: bericht van ${name}`);
    const body = encodeURIComponent(
      `Naam: ${name}\nE-mailadres: ${email}\n\n${question}`
    );
    window.location.href = `mailto:info@puntuit.nl?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <SEO title="Contact | PuntUit" description="Neem contact op met PuntUit voor een vrijblijvend gesprek over een externe vertrouwenspersoon. Bel, mail of WhatsApp — we reageren snel." canonicalUrl="/contact" />
      <SchemaMarkup
        type="localBusiness"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Stel je vraag. We reageren snel.</h1>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Contactformulier</h2>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl border">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Jouw naam</label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  placeholder="Jouw naam"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Jouw e-mailadres</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  placeholder="Jouw e-mailadres"
                />
              </div>
              <div>
                <label htmlFor="question" className="block text-sm font-medium mb-1 text-gray-700">Jouw vraag of situatie</label>
                <textarea
                  id="question"
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl min-h-36"
                  placeholder="Jouw vraag of situatie"
                />
              </div>
              <button className="btn-primary" type="submit">Verstuur</button>
              <p className="text-sm text-gray-500">Je gegevens worden vertrouwelijk behandeld. Zie onze privacyverklaring.</p>
            </form>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-4xl grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <Phone className="w-5 h-5 text-primary-700 mb-3" />
              <p className="font-semibold">Bellen</p>
              <p className="text-gray-600 text-sm">085 - 107 12 56<br />Bereikbaar op werkdagen van 09:00 tot 17:00.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <Mail className="w-5 h-5 text-primary-700 mb-3" />
              <p className="font-semibold">Mailen</p>
              <p className="text-gray-600 text-sm">info@puntuit.nl<br />Reactie binnen één werkdag.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <MessageCircle className="w-5 h-5 text-primary-700 mb-3" />
              <p className="font-semibold">WhatsApp</p>
              <p className="text-gray-600 text-sm">Stuur een bericht. We nemen contact op.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Vestiging / Factuurgegevens</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="font-semibold mb-1">Bezoekadres:</p>
                <p>Stammerhove 3</p>
                <p>1112 VA, Diemen</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Postadres:</p>
                <p>Vleerstraat 78</p>
                <p>2513 VJ, Den Haag</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-gray-700 space-y-1">
              <p>085 - 107 12 56</p>
              <p>info@puntuit.nl</p>
              <p>Kvk: 87786516</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
