import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Clock,
  Eye,
  Award,
  Scale,
  Smartphone,
  FileText,
  Package,
  Headphones,
  BarChart3,
  BookOpen,
  ChevronRight,
  Download,
  Play,
} from 'lucide-react';
import { SEO, SchemaMarkup } from '../components/seo';
import { LogoTicker } from '../components/LogoTicker';

const features = [
  { icon: Shield, title: 'Onafhankelijkheid', text: 'Buiten jouw organisatie. Geen loyaliteitsconflict. Geen hiërarchie. Altijd neutraal.' },
  { icon: Clock, title: '24/7 bereikbaar', text: 'Dag en nacht beschikbaar. Via telefoon, e-mail en WhatsApp. Ook in het weekend.' },
  { icon: Eye, title: 'Vroegtijdig signaleren', text: 'Problemen vóórdat ze escaleren. De Early Awareness Tool detecteert gedragspatronen vroeg.' },
  { icon: Award, title: 'LVV-gecertificeerd', text: 'Erkende kwaliteit. Alle vertrouwenspersonen zijn LVV-gecertificeerd en continu bijgeschoold.' },
  { icon: Scale, title: 'Goed werkgeverschap', text: 'Loop vooruit op wetgeving. Een vertrouwenspersoon wordt steeds vaker verwacht — via de RI&E en de Arbeidsinspectie.' },
  { icon: Smartphone, title: 'Laagdrempelig platform', text: 'Medewerkers regelen het zelf. Via praatuit.nl: artikelen, tips en een eigen afsprakenplanner.' },
];

const steps = [
  { icon: FileText, title: 'Offerte', text: 'Vraag een vrijblijvende offerte aan. Je ontvangt binnen één werkdag een voorstel.' },
  { icon: Package, title: 'Welkomstpakket', text: 'Je ontvangt een kant-en-klaar communicatiepakket. Posters, NFC-sticker en interne templates inbegrepen.' },
  { icon: Headphones, title: 'Direct beschikbaar', text: 'Jouw medewerkers kunnen direct contact opnemen. Via telefoon, e-mail of WhatsApp — ook buiten kantooruren.' },
  { icon: BarChart3, title: 'Rapportage', text: 'Elk jaar ontvang je een geanonimiseerde rapportage. Je ziet wat er speelt in je organisatie — zonder namen.' },
];

const articles = [
  { tag: 'Juridisch', title: 'Is een vertrouwenspersoon verplicht?', desc: 'Niet wettelijk — maar in de praktijk wordt het steeds vaker verwacht. Lees hoe het zit.', to: '/kennisbank' },
  { tag: 'Werkgever', title: 'Interne vs. externe vertrouwenspersoon: wat werkt beter?', desc: 'Medewerkers melden liever extern. Dit zijn de vijf belangrijkste redenen.', to: '/interne-vs-externe-vp' },
  { tag: 'Preventie', title: 'Ongewenst gedrag: hoe signaleer je het vroeg?', desc: 'Wachten op een melding is al te laat. Zo pak je het preventief aan.', to: '/preventie-ongewenst-gedrag' },
];

function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="hidden lg:block">
      <div className="aspect-[3/3] rounded-[2rem] overflow-hidden ring-1 ring-white/20 shadow-2xl relative">
        {playing ? (
          <video
            src="/video/b6378e44-771a9a75.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="w-full h-full relative group cursor-pointer"
          >
            <img
              src="/images/extern-vertrouwenspersoon.jpg"
              alt="Bekijk de PuntUit video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-[#0284c7] ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <SEO
        title="PuntUit | Externe Vertrouwenspersoon"
        description="PuntUit is de externe vertrouwenspersoon voor jouw organisatie. Onafhankelijk, 24/7 bereikbaar en laagdrempelig voor elke medewerker."
        canonicalUrl="/"
      />
      <SchemaMarkup type="organization" />
      <SchemaMarkup
        type="website"
        breadcrumb={[{ name: 'Home', url: '/' }]}
      />
      <div className="pt-28">

        {/* ── HERO ── */}
        <section className="bg-[#0284c7] text-white overflow-hidden">
          <div className="container py-20 md:py-32">
            <div className="grid lg:grid-cols-[50%_1fr] gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-6">
                  LVV-gecertificeerde Externe Vertrouwenspersonen
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.15] mb-8">
                  Jouw medewerkers melden issues liever buiten HR om.
                </h1>
                <p className="text-xl text-white/85 leading-relaxed mb-10 max-w-lg">
                  PuntUit is de externe vertrouwenspersoon voor jouw organisatie. Onafhankelijk, 24/7 bereikbaar en laagdrempelig voor elke medewerker.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    to="/contact"
                    className="btn-primary text-base px-8 py-4"
                  >
                    Vraag vrijblijvend offerte aan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="/Brochure-Punt-Uit.pdf"
                    download
                    className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl font-semibold bg-white text-[#0284c7] hover:bg-gray-100 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download onze brochure
                  </a>
                </div>
                <Link
                  to="/voor-medewerkers"
                  className="inline-block mt-6 text-white/90 hover:text-white font-medium underline underline-offset-8 decoration-white/30 hover:decoration-white transition-all"
                >
                  Medewerker? Ga naar het hulpplatform
                </Link>
              </div>

              <HeroVideo />
            </div>
          </div>
        </section>

        {/* ── LOGO TICKER ── */}
        <LogoTicker />

        {/* ── DUAL AUDIENCE ── */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-10">Voor wie is PuntUit?</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-10 border-l-4 border-l-[#0284c7] shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Je bent HR-professional of manager.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Je wil ongewenst gedrag aanpakken. Maar medewerkers zien HR als onderdeel van de organisatie. Dat maakt jou — hoe neutraal je ook bent — nooit echt veilig voor hen.
                </p>
                <p className="text-gray-800 font-medium mb-6">PuntUit staat volledig buiten jouw organisatie. Dat maakt het verschil.</p>
                <Link
                  to="/externe-vertrouwenspersoon"
                  className="inline-flex items-center gap-1.5 text-[#0284c7] font-semibold group-hover:gap-2.5 transition-all mt-auto"
                >
                  Bekijk onze diensten <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-10 border-l-4 border-l-[#E85D56] shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Je bent eigenaar of directeur.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Je wil het goed regelen voor je mensen, maar je hebt geen HR-afdeling. PuntUit levert een complete externe vertrouwenspersoon — professioneel, betaalbaar en direct beschikbaar.
                </p>
                <p className="text-gray-800 font-medium mb-6">Eenvoudig. Betaalbaar. Compleet.</p>
                <Link
                  to="/tarieven"
                  className="inline-flex items-center gap-1.5 text-[#E85D56] font-semibold group-hover:gap-2.5 transition-all mt-auto"
                >
                  Bekijk tarieven <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section-padding bg-white">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Hoe werkt het?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">In vier stappen geregeld.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#0284c7] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="hidden lg:block flex-grow h-px bg-gray-200" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/contact" className="btn-primary">
                Vraag vrijblijvende offerte aan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Waarom PuntUit?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Wat krijg je precies?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0284c7]/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#0284c7]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section-padding bg-white">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Van onze klanten</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Wat anderen zeggen.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: 'PuntUit helpt ons een open en veilige werkomgeving te creëren.', author: 'HR Manager', org: 'Beveiligingsbedrijf, 320 medewerkers' },
                { quote: '[Citaat van eigenaar kleine organisatie — te vervangen door klantinput]', author: 'Eigenaar', org: 'Kinderopvang, 18 medewerkers' },
                { quote: '[Citaat mix zorg of non-profit — te vervangen door klantinput]', author: 'Directeur', org: 'Thuiszorgorganisatie, 30 medewerkers' },
              ].map((t, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col">
                  <span className="text-6xl leading-none text-[#E85D56] font-serif mb-4">"</span>
                  <p className="text-gray-700 leading-relaxed flex-grow mb-6">{t.quote}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs">{t.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KENNISBANK HIGHLIGHTS ── */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Kennisbank</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Handig om te weten.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((a) => (
                <Link
                  key={a.title}
                  to={a.to}
                  className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all group block overflow-hidden"
                >
                  <div className="p-8">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#0284c7]/5 text-[#0284c7] px-3 py-1.5 rounded-md mb-6">{a.tag}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0284c7] transition-colors leading-tight">{a.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{a.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-[#0284c7] font-bold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
                      <BookOpen className="w-3.5 h-3.5" />
                      Lees artikel
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="section-padding bg-[#0284c7]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Klaar om het te regelen?</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Meer dan 500 organisaties gingen je voor. Klein bedrijf of grote organisatie — PuntUit werkt voor iedereen.
              </p>
              <Link
                to="/contact"
                className="bg-white text-[#0284c7] px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 hover:text-[#0284c7] transition-all inline-flex items-center gap-3 ring-4 ring-white/20 whitespace-nowrap"
              >
                Vraag vrijblijvende offerte aan
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-10 text-white/60 text-sm">Liever eerst bellen? <a href="tel:0851071256" className="text-white underline decoration-white/30">085 – 107 12 56</a></p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
