import { SEO, SchemaMarkup } from '../components/seo';
import { COMPANY } from '../lib/constants';
import { Phone, Mail, MessageCircle, CalendarCheck, Lock, ShieldCheck, UserX, Handshake, Compass } from 'lucide-react';

const contactOptions = [
  {
    icon: Phone,
    title: 'Bellen',
    detail: COMPANY.phone,
    description: 'Wij nemen op. Altijd.',
    href: `tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`,
    color: '#0284c7',
  },
  {
    icon: Mail,
    title: 'Mailen',
    detail: COMPANY.email,
    description: 'We reageren binnen één werkdag.',
    href: `mailto:${COMPANY.email}`,
    color: '#0284c7',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: COMPANY.whatsapp,
    description: 'Stuur een bericht. Wij nemen contact op.',
    href: `https://wa.me/${COMPANY.whatsapp.replace(/[^+\d]/g, '')}`,
    color: '#25D366',
  },
  {
    icon: CalendarCheck,
    title: 'Afspraak plannen',
    detail: 'praatuit.nl',
    description: 'Plan zelf een gesprek. Op een moment dat jou uitkomt.',
    href: 'https://praatuit.nl',
    color: '#E85D56',
  },
];

const rules = [
  { icon: Lock, text: 'Alles wat je vertelt blijft vertrouwelijk' },
  { icon: ShieldCheck, text: 'Je werkgever hoort niets zonder jouw toestemming' },
  { icon: UserX, text: 'Je hebt geen toestemming nodig van je leidinggevende' },
  { icon: Handshake, text: 'We lossen het niet voor je op — maar we helpen je verder' },
  { icon: Compass, text: 'Je beslist zelf welke stap je neemt' },
];

export function VoorMedewerkers() {
  return (
    <>
      <SEO title="Voor Medewerkers" description="PuntUit is de externe vertrouwenspersoon van jouw werkgever. Neem gratis en vertrouwelijk contact op via telefoon, e-mail, WhatsApp of plan een afspraak." canonicalUrl="/voor-medewerkers" />
      <SchemaMarkup
        type="webpage"
        pageUrl="https://puntuit.nl/voor-medewerkers"
        pageTitle="Voor Medewerkers"
        pageDescription="PuntUit is de externe vertrouwenspersoon van jouw werkgever. Neem gratis en vertrouwelijk contact op via telefoon, e-mail, WhatsApp of plan een afspraak."
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Voor Medewerkers', url: '/voor-medewerkers' },
        ]}
      />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Je hoeft dit niet alleen op te lossen.</h1>
            <p className="text-xl text-primary-100 mb-3">Jouw werkgever is aangesloten bij PuntUit. Je kunt ons direct bellen, mailen of appen — vertrouwelijk en kosteloos.</p>
            <p className="text-sm text-primary-100">Jouw leidinggevende weet niet dat je contact opneemt.</p>
          </div>
        </section>

        {/* ── CONTACT CARDS ── */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Kies wat voor jou prettig is.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {contactOptions.map(({ icon: Icon, title, detail, description, href, color }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-[#0284c7] font-medium mb-2 group-hover:underline">{detail}</p>
                  <p className="text-gray-500 text-sm">{description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPELREGELS ── */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-4xl">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Onze belofte aan jou</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Dit zijn de spelregels.</h2>
            <div className="space-y-4">
              {rules.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 bg-white rounded-xl px-6 py-5 border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#0284c7]" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pt-1.5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
