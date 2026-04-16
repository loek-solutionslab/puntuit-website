# Pages — Dependency Trees

Each page component's full source and import dependencies.

---

## 1. Home (`/`)

**File:** `src/pages/Home.tsx`
**Export:** `export function Home()`

### Imports

```
react-router-dom        → Link
lucide-react            → ArrowRight, Shield, Clock, Eye, Award, Scale, Smartphone,
                          FileText, Package, Headphones, BarChart3, CheckCircle,
                          Quote, BookOpen, Users
../components/seo       → SEO
```

### Full Source

```tsx
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
  CheckCircle,
  Quote,
  BookOpen,
  Users,
} from 'lucide-react';
import { SEO } from '../components/seo';

const features = [
  { icon: Shield, title: 'Onafhankelijkheid', text: 'Buiten jouw organisatie. Geen loyaliteitsconflict. Geen hiërarchie. Altijd neutraal.' },
  { icon: Clock, title: '24/7 bereikbaar', text: 'Dag en nacht beschikbaar. Via telefoon, e-mail en WhatsApp. Ook in het weekend.' },
  { icon: Eye, title: 'Vroegtijdig signaleren', text: 'Problemen vóórdat ze escaleren. De Early Awareness Tool detecteert gedragspatronen vroeg.' },
  { icon: Award, title: 'LVV-gecertificeerd', text: 'Erkende kwaliteit. Alle vertrouwenspersonen zijn LVV-gecertificeerd en continu bijgeschoold.' },
  { icon: Scale, title: 'Wettelijk in orde', text: 'Voldoe aan de Arbowet. Artikel 13a verplicht een vertrouwenspersoon bij 10+ medewerkers.' },
  { icon: Smartphone, title: 'Laagdrempelig platform', text: 'Medewerkers regelen het zelf. Via praatuit.nl: artikelen, tips en een eigen afsprakenplanner.' },
];

const steps = [
  { num: '01', icon: FileText, title: 'Offerte', text: 'Vraag een vrijblijvende offerte aan. Je ontvangt binnen één werkdag een voorstel.' },
  { num: '02', icon: Package, title: 'Welkomstpakket', text: 'Je ontvangt een kant-en-klaar communicatiepakket. Posters, NFC-sticker en interne templates inbegrepen.' },
  { num: '03', icon: Headphones, title: 'Direct beschikbaar', text: 'Jouw medewerkers kunnen direct contact opnemen. Via telefoon, e-mail of WhatsApp — ook buiten kantooruren.' },
  { num: '04', icon: BarChart3, title: 'Rapportage', text: 'Elk jaar ontvang je een geanonimiseerde rapportage. Je ziet wat er speelt in je organisatie — zonder namen.' },
];

const articles = [
  { tag: 'Juridisch', title: 'Is een vertrouwenspersoon verplicht?', desc: 'Ja, voor organisaties met meer dan 10 medewerkers. Lees wat de wet precies zegt.', to: '/kennisbank' },
  { tag: 'Werkgever', title: 'Interne vs. externe vertrouwenspersoon: wat werkt beter?', desc: 'Medewerkers melden liever extern. Dit zijn de vijf belangrijkste redenen.', to: '/interne-vs-externe-vp' },
  { tag: 'Preventie', title: 'Ongewenst gedrag: hoe signaleer je het vroeg?', desc: 'Wachten op een melding is al te laat. Zo pak je het preventief aan.', to: '/preventie-ongewenst-gedrag' },
];

export function Home() {
  return (
    <>
      <SEO
        title="PuntUit | Externe Vertrouwenspersoon"
        description="PuntUit is de externe vertrouwenspersoon voor jouw organisatie. Onafhankelijk, 24/7 bereikbaar en laagdrempelig voor elke medewerker."
        canonicalUrl="/"
      />
      <div className="pt-28">

        {/* ── HERO ── */}
        <section className="bg-[#0284c7] text-white overflow-hidden">
          <div className="container py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-white/70 tracking-wide mb-5">
                  Externe Vertrouwenspersoon · LVV-gecertificeerd · 500+ organisaties
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
                  Jouw medewerkers melden liever buiten HR.
                </h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
                  PuntUit is de externe vertrouwenspersoon voor jouw organisatie. Onafhankelijk, 24/7 bereikbaar en laagdrempelig voor elke medewerker.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="btn-primary text-center text-base px-7 py-3.5 inline-flex items-center justify-center gap-2"
                  >
                    Vraag vrijblijvend offerte aan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/voor-medewerkers"
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/25 px-7 py-3.5 rounded-lg font-medium text-center text-base hover:bg-white/20 transition-colors"
                  >
                    Medewerker? Ga naar het hulpplatform
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center px-8">
                      <Users className="w-16 h-16 text-white/40 mx-auto mb-4" />
                      <p className="text-white/50 text-sm">Hier komt een afbeelding</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-3 text-[#0284c7]">
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-xs text-gray-500">organisaties</p>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-5 py-3 text-[#0284c7]">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs text-gray-500">bereikbaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#0284c7]" />500+ organisaties</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#0284c7]" />LVV-gecertificeerd</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#0284c7]" />24/7 bereikbaar</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#0284c7]" />Vanaf €475/jaar</span>
            </div>
          </div>
        </div>

        {/* ── LOGO BAR ── */}
        <section className="py-10 bg-white">
          <div className="container">
            <p className="text-center text-sm text-gray-400 mb-1">Vertrouwd door organisaties van 10 tot 3.500 medewerkers.</p>
          </div>
        </section>

        {/* ── DUAL AUDIENCE ── */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-widest mb-8">Voor wie is PuntUit?</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-[#0284c7]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Je bent HR-professional of manager.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Je wil ongewenst gedrag aanpakken. Maar medewerkers zien HR als onderdeel van de organisatie. Dat maakt jou — hoe neutraal je ook bent — nooit echt veilig voor hen.
                </p>
                <p className="text-gray-700 font-medium mb-6">PuntUit staat volledig buiten jouw organisatie. Dat maakt het verschil.</p>
                <Link
                  to="/externe-vertrouwenspersoon"
                  className="inline-flex items-center gap-1.5 text-[#0284c7] font-semibold group-hover:gap-2.5 transition-all"
                >
                  Bekijk onze diensten
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-[#E85D56]/10 flex items-center justify-center mb-5">
                  <Scale className="w-5 h-5 text-[#E85D56]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Je bent eigenaar of directeur.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Meer dan 10 medewerkers? Dan ben je wettelijk verplicht. Geen HR-afdeling om op terug te vallen? Geen probleem. PuntUit regelt het voor je.
                </p>
                <p className="text-gray-700 font-medium mb-6">Eenvoudig. Betaalbaar. Compleet.</p>
                <Link
                  to="/tarieven"
                  className="inline-flex items-center gap-1.5 text-[#E85D56] font-semibold group-hover:gap-2.5 transition-all"
                >
                  Bekijk tarieven
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section-padding bg-white">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-widest mb-2">Hoe werkt het?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">In vier stappen geregeld.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="relative bg-gray-50 rounded-2xl p-6 group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-200">
                  <span className="text-5xl font-bold text-gray-100 group-hover:text-[#0284c7]/10 transition-colors absolute top-4 right-5">{step.num}</span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-[#0284c7]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Vraag vrijblijvende offerte aan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-widest mb-2">Waarom PuntUit?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Wat krijg je precies?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#0284c7]/20 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center mb-4 group-hover:bg-[#0284c7] transition-colors">
                    <Icon className="w-5 h-5 text-[#0284c7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section-padding bg-white">
          <div className="container">
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-widest mb-2">Social proof</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Wat anderen zeggen.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: 'PuntUit helpt ons een open en veilige werkomgeving te creëren.', author: 'HR Manager', org: 'Beveiligingsbedrijf, 320 medewerkers' },
                { quote: '[Citaat van eigenaar kleine organisatie — te vervangen door klantinput]', author: 'Eigenaar', org: 'Kinderopvang, 18 medewerkers' },
                { quote: '[Citaat mix zorg of non-profit — te vervangen door klantinput]', author: 'Directeur', org: 'Thuiszorgorganisatie, 30 medewerkers' },
              ].map((t, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 flex flex-col">
                  <Quote className="w-8 h-8 text-[#0284c7]/20 mb-4 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed flex-grow italic mb-6">"{t.quote}"</p>
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
            <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-widest mb-2">Kennisbank</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Handig om te weten.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((a) => (
                <Link
                  key={a.title}
                  to={a.to}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#0284c7]/20 hover:shadow-md transition-all group block"
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide bg-[#0284c7]/10 text-[#0284c7] px-2.5 py-1 rounded-full mb-4">{a.tag}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0284c7] transition-colors">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#0284c7] font-medium text-sm group-hover:gap-2 transition-all">
                    <BookOpen className="w-4 h-4" />
                    Lees artikel
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="section-padding bg-[#0284c7]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om het te regelen?</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Meer dan 500 organisaties gingen je voor. Klein bedrijf of grote organisatie — PuntUit werkt voor iedereen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-[#0284c7] px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Vraag vrijblijvende offerte aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-6 text-white/60 text-sm">Liever eerst bellen? 085 – 107 12 56</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
```

### Sections

1. **Hero** — blue bg, 2-col grid, CTA + image placeholder, floating stat badges
2. **Trust Strip** — gray bar with checkmarks
3. **Logo Bar** — placeholder for client logos
4. **Dual Audience** — 2-col cards (HR vs Owner)
5. **How It Works** — 4-step numbered cards
6. **Features** — 6 feature cards in 3-col grid
7. **Testimonials** — 3 quote cards
8. **Kennisbank Highlights** — 3 article cards
9. **Closing CTA** — blue bg, centered

---

## 2. Externe Vertrouwenspersoon (`/externe-vertrouwenspersoon`)

**File:** `src/pages/ExterneVertrouwenspersoon.tsx`
**Export:** `export function ExterneVertrouwenspersoon()`

### Imports

```
react-router-dom        → Link
../components/seo       → SEO
```

### Full Source

```tsx
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

export function ExterneVertrouwenspersoon() {
  return (
    <>
      <SEO title="Externe Vertrouwenspersoon" description="Als HR ben je nooit echt neutraal. PuntUit wel." canonicalUrl="/externe-vertrouwenspersoon" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-4xl">
            <p className="text-sm mb-4">Voor werkgevers &amp; HR professionals</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Als HR ben je nooit echt neutraal. PuntUit wel.</h1>
            <p className="text-xl text-primary-100 mb-8">PuntUit levert een externe vertrouwenspersoon die volledig buiten jouw organisatie staat. LVV-gecertificeerd, 24/7 beschikbaar en laagdrempelig voor elke medewerker.</p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="btn-primary">Vraag offerte aan</Link>
              <Link to="/tarieven" className="bg-white text-[#0284c7] px-6 py-3 rounded-lg font-medium">Bekijk tarieven</Link>
            </div>
          </div>
        </section>
        <section className="section-padding bg-white"><div className="container max-w-4xl space-y-5 text-gray-700">
          <h2 className="text-3xl font-bold">Medewerkers melden liever niet bij HR.</h2>
          <p>Bijna de helft van alle medewerkers die iets ervaart, zegt er niets van. Niet omdat ze niet durven. Maar omdat ze HR niet als veilig zien.</p>
          <p>Dat is geen verwijt. Het is hoe mensen organisaties beleven.</p>
          <p>HR staat tussen medewerker en management. En dat gevoel - hoe onterecht ook - verdwijnt niet vanzelf.</p>
          <p>Een externe vertrouwenspersoon staat buiten die hiërarchie. Volledig. Altijd.</p>
        </div></section>
        <section className="section-padding bg-gray-50"><div className="container max-w-4xl space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Begeleiding. Geen beslissing.</h2>
          <p>De vertrouwenspersoon luistert. Helpt de medewerker om zelf een stap te zetten. Lost het probleem niet op - maar geeft richting en steun.</p>
          <p>Geen mediator. Geen arbodienst. Geen klachtencommissie. Wel een professionele, onafhankelijke gesprekspartner.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Luistert vertrouwelijk naar de medewerker</li>
            <li>Bespreekt welke stappen mogelijk zijn</li>
            <li>Begeleidt bij een eventuele formele melding</li>
            <li>Signaleert patronen - anoniem - via de rapportage</li>
          </ul>
        </div></section>
        <section className="section-padding bg-white"><div className="container max-w-4xl space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Alles wat je nodig hebt. Niets wat je niet gebruikt.</h2>
          <ul className="space-y-2">
            <li>✓ Gratis spreekuur voor medewerkers Bij verdere hulpbehoefte: €84 per uur (per kwartier verrekend)</li>
            <li>✓ 24/7 bereikbaar Telefoon, e-mail en WhatsApp - ook buiten kantooruren</li>
            <li>✓ Hulpvraagplatform praatuit.nl Artikelen, tips en een afsprakenplanner voor medewerkers</li>
            <li>✓ Early Awareness Tool Detecteert gedragspatronen voordat er een melding is</li>
            <li>✓ Jaarlijkse geanonimiseerde rapportage Plus een kwartaalvideo over trending topics in jouw sector</li>
            <li>✓ Gratis communicatiekit Folders, NFC-sticker en interne communicatietemplates</li>
            <li>✓ LVV-gecertificeerde professionals Continue bijscholing via gezamenlijke casusbesprekingen</li>
          </ul>
        </div></section>
      </div>
    </>
  );
}
```

---

## 3. Voor Medewerkers (`/voor-medewerkers`)

**File:** `src/pages/VoorMedewerkers.tsx`
**Export:** `export function VoorMedewerkers()`

### Imports

```
../components/seo       → SEO
```

### Full Source

```tsx
import { SEO } from '../components/seo';

export function VoorMedewerkers() {
  return (
    <>
      <SEO title="Voor Medewerkers" description="Je hoeft dit niet alleen op te lossen." canonicalUrl="/voor-medewerkers" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Je hoeft dit niet alleen op te lossen.</h1>
            <p className="text-xl text-primary-100 mb-3">Jouw werkgever is aangesloten bij PuntUit. Je kunt ons direct bellen, mailen of appen - vertrouwelijk en kosteloos.</p>
            <p className="text-sm text-primary-100">Jouw leidinggevende weet niet dat je contact opneemt.</p>
          </div>
        </section>
        <section className="section-padding bg-white"><div className="container max-w-4xl space-y-3 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Kies wat voor jou prettig is.</h2>
          <p>Bellen [Telefoonnummer] Wij nemen op. Altijd.</p>
          <p>Mailen [E-mailadres] We reageren binnen één werkdag.</p>
          <p>WhatsApp [WhatsApp-link] Stuur een bericht. Wij nemen contact op.</p>
          <p>Afspraak plannen Via praatuit.nl plan je zelf een gesprek. Op een moment dat jou uitkomt.</p>
        </div></section>
        <section className="section-padding bg-gray-50"><div className="container max-w-4xl space-y-2 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Dit zijn de spelregels.</h2>
          <p>- Alles wat je vertelt blijft vertrouwelijk</p>
          <p>- Je werkgever hoort niets zonder jouw toestemming</p>
          <p>- Je hebt geen toestemming nodig van je leidinggevende</p>
          <p>- We lossen het niet voor je op - maar we helpen je verder</p>
          <p>- Je beslist zelf welke stap je neemt</p>
        </div></section>
      </div>
    </>
  );
}
```

---

## 4. Over Ons (`/over-ons`)

**File:** `src/pages/OverOns.tsx`
**Export:** `export function OverOns()`

### Imports

```
../components/seo       → SEO
```

### Full Source

```tsx
import { SEO } from '../components/seo';

export function OverOns() {
  return (
    <>
      <SEO title="Over Ons" description="Mensen die begrijpen wat er speelt." canonicalUrl="/over-ons" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mensen die begrijpen wat er speelt.</h1>
            <p className="text-xl text-primary-100">PuntUit bestaat uit LVV-gecertificeerde vertrouwenspersonen. Geen bureau. Geen anoniem loket. Echte mensen met echte expertise.</p>
          </div>
        </section>
        <section className="section-padding bg-white"><div className="container max-w-4xl space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Het begon met één inzicht.</h2>
          <p>Medewerkers melden liever niet intern. Niet omdat ze het niet willen. Maar omdat de drempel te hoog is.</p>
          <p>PuntUit is opgericht om die drempel weg te nemen. Onafhankelijk, professioneel en altijd van buitenaf.</p>
          <p>Niet als bijbaantje of extra taak. Als volwaardige dienst.</p>
        </div></section>
        <section className="section-padding bg-gray-50"><div className="container max-w-4xl text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Twee pijlers. Één doel.</h2>
          <p><strong>Externe Vertrouwenspersoon</strong> Medewerkers krijgen een veilig, onafhankelijk aanspreekpunt. Buiten de organisatie. Vertrouwelijk. Altijd bereikbaar.</p>
          <p className="mt-3"><strong>Preventie Ongewenst Gedrag</strong> Problemen aanpakken voordat ze groot worden. Via de Early Awareness Tool en bewustwordingsprogramma's.</p>
        </div></section>
      </div>
    </>
  );
}
```

---

## 5. Interne vs Externe VP (`/interne-vs-externe-vp`)

**File:** `src/pages/InterneVsExterneVP.tsx`
**Export:** `export function InterneVsExterneVP()`

### Imports

```
../components/seo       → SEO
```

### Full Source

```tsx
import { SEO } from '../components/seo';

export function InterneVsExterneVP() {
  return (
    <>
      <SEO title="Interne vs. Externe Vertrouwenspersoon" description="Interne of externe vertrouwenspersoon: wat werkt echt?" canonicalUrl="/interne-vs-externe-vp" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Interne of externe vertrouwenspersoon: wat werkt echt?</h1>
            <p className="text-xl text-primary-100">Veel organisaties kiezen voor intern - totdat ze zien waarom medewerkers niet bellen.</p>
          </div>
        </section>
        <section className="section-padding bg-white"><div className="container max-w-5xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3"></th>
                <th className="p-3">Interne VP</th>
                <th className="p-3">Externe VP (PuntUit)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-3 font-semibold">Onafhankelijkheid</td><td className="p-3">Beperkt - deel van de organisatie</td><td className="p-3">Volledig onafhankelijk</td></tr>
              <tr className="border-b"><td className="p-3 font-semibold">Vertrouwen medewerker</td><td className="p-3">Lager - zien HR als "van de baas"</td><td className="p-3">Hoger - staat buiten de hiërarchie</td></tr>
              <tr className="border-b"><td className="p-3 font-semibold">Bereikbaarheid</td><td className="p-3">Kantooruren</td><td className="p-3">24/7 via telefoon, mail, WhatsApp</td></tr>
              <tr className="border-b"><td className="p-3 font-semibold">Kosten</td><td className="p-3">Interne uren + opleiding</td><td className="p-3">Vanaf €475/jaar all-in</td></tr>
            </tbody>
          </table>
        </div></section>
      </div>
    </>
  );
}
```

---

## 6. Preventie Ongewenst Gedrag (`/preventie-ongewenst-gedrag`)

**File:** `src/pages/PreventieOngewenstGedrag.tsx`
**Export:** `export function PreventieOngewenstGedrag()`

### Imports

```
react-router-dom        → Link
../components/seo       → SEO
```

### Full Source

```tsx
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

export function PreventieOngewenstGedrag() {
  return (
    <>
      <SEO title="Preventie Ongewenst Gedrag" description="Een melding is al te laat. Voorkom het." canonicalUrl="/preventie-ongewenst-gedrag" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Een melding is al te laat. Voorkom het.</h1>
            <p className="text-xl text-primary-100 mb-8">PuntUit helpt je ongewenst gedrag te signaleren voordat het escaleert. Bewustwording, preventie en een vroeg-waarschuwingssysteem.</p>
            <Link className="btn-primary" to="/contact">Vraag offerte aan</Link>
          </div>
        </section>
        <section className="section-padding bg-white"><div className="container max-w-4xl space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Eerder ingrijpen. Minder schade.</h2>
          <p>Ongewenst gedrag begint zelden met een grote incident. Het groeit. Langzaam. Onzichtbaar.</p>
          <p>PuntUit signaleert het vroeg. Niet via verplichte meldingen - maar via gedragspatronen op het platform.</p>
        </div></section>
        <section className="section-padding bg-gray-50"><div className="container max-w-4xl space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold">Je ziet het voordat iemand iets zegt.</h2>
          <p>De Early Awareness Tool analyseert gebruikersgedrag op praatuit.nl. Welke artikelen worden gelezen? Hoe vaak? Door wie - anoniem - in welke afdeling?</p>
          <p>Dat geeft jou als werkgever een eerder signaal. Zodat je kunt handelen voordat iemand een formele melding doet.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Early Awareness Tool (inbegrepen bij abonnement)</li>
            <li>Gratis communicatiekit: folders, NFC-sticker, interne templates</li>
            <li>Kwartaalvideo over trending topics in jouw sector</li>
            <li>Jaarlijkse geanonimiseerde rapportage</li>
          </ul>
        </div></section>
      </div>
    </>
  );
}
```

---

## 7. Tarieven (`/tarieven`)

**File:** `src/pages/Tarieven.tsx`
**Export:** `export function Tarieven()`

### Imports

```
react-router-dom        → Link
../components/seo       → SEO
```

### Full Source

```tsx
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

export function Tarieven() {
  return (
    <>
      <SEO title="Tarieven | PuntUit" description="Geregeld voor minder dan €40 per maand." canonicalUrl="/tarieven" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Geregeld voor minder dan €40 per maand.</h1>
            <p className="text-xl text-primary-100">Een jaarabonnement. Alles inbegrepen. Geen verrassingen. Geen verborgen kosten.</p>
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
```

---

## 8. Kennisbank / Blog (`/kennisbank`)

**File:** `src/pages/Blog.tsx`
**Export:** `export function Blog()`

### Imports

```
../components/seo       → SEO
lucide-react            → ArrowRight, BookOpen, Search, Tag
```

### Full Source

```tsx
import { SEO } from '../components/seo';
import { ArrowRight, BookOpen, Search, Tag } from 'lucide-react';

const articles = [
  '🏷 Juridisch Is een vertrouwenspersoon verplicht in 2025 en 2026? Leestijd: 4 min',
  '🏷 Werkgever Interne vs. externe vertrouwenspersoon: 5 redenen voor extern Leestijd: 5 min',
  '🏷 Werkgever Wat kost een externe vertrouwenspersoon? Leestijd: 3 min',
  '🏷 Preventie Ongewenst gedrag herkennen voordat het escaleert Leestijd: 6 min',
  '🏷 Medewerker Wat doet een vertrouwenspersoon precies? Leestijd: 4 min',
  '🏷 Basis Wat is het verschil tussen een vertrouwenspersoon en een mediator? Leestijd: 3 min',
];

export function Blog() {
  return (
    <>
      <SEO
        title="Kennisbank | PuntUit"
        description="Alles wat je moet weten over de vertrouwenspersoon."
        canonicalUrl="/kennisbank"
      />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alles wat je moet weten over de vertrouwenspersoon.</h1>
            <p className="text-xl text-primary-100">Artikelen voor werkgevers, HR-professionals en medewerkers.</p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container max-w-5xl">
            <div className="flex flex-wrap gap-2 mb-6 text-sm text-gray-700">
              {['Alle artikelen', 'Juridisch', 'Voor Werkgevers', 'Voor Medewerkers', 'Preventie', 'Basis'].map((filter) => (
                <span key={filter} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                  <Tag className="w-3.5 h-3.5 mr-1" />
                  {filter}
                </span>
              ))}
            </div>
            <div className="relative mb-8">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3" placeholder="Zoek een artikel..." />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {articles.map((article) => (
                <article key={article} className="p-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800">{article}</p>
                      <button className="mt-3 inline-flex items-center text-primary-700 font-semibold">
                        Lees artikel
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
```

---

## 9. Contact (`/contact`)

**File:** `src/pages/Contact.tsx`
**Export:** `export function Contact()`

### Imports

```
../components/seo       → SEO
lucide-react            → Mail, MessageCircle, Phone
```

### Full Source

```tsx
import { SEO } from '../components/seo';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  return (
    <>
      <SEO title="Contact | PuntUit" description="Stel je vraag. We reageren snel." canonicalUrl="/contact" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-20 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Stel je vraag. We reageren snel.</h1>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-4xl grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <Phone className="w-5 h-5 text-primary-700 mb-3" />
              <p className="font-semibold">Bellen</p>
              <p className="text-gray-600 text-sm">[Telefoonnummer] Bereikbaar op werkdagen van 09:00 tot 17:00.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <Mail className="w-5 h-5 text-primary-700 mb-3" />
              <p className="font-semibold">Mailen</p>
              <p className="text-gray-600 text-sm">info@puntuit.nl Reactie binnen één werkdag.</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <MessageCircle className="w-5 h-5 text-primary-700 mb-3" />
              <p className="font-semibold">WhatsApp</p>
              <p className="text-gray-600 text-sm">[WhatsApp-link] Stuur een bericht. We nemen contact op.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Contactformulier</h2>
            <form className="space-y-4 bg-white p-8 rounded-2xl border">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Jouw naam</label>
                <input id="name" className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="Jouw naam" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Jouw e-mailadres</label>
                <input id="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="Jouw e-mailadres" />
              </div>
              <div>
                <label htmlFor="question" className="block text-sm font-medium mb-1 text-gray-700">Jouw vraag of situatie</label>
                <textarea id="question" className="w-full px-4 py-3 border border-gray-300 rounded-xl min-h-36" placeholder="Jouw vraag of situatie" />
              </div>
              <button className="btn-primary" type="button">Verstuur</button>
              <p className="text-sm text-gray-500">Je gegevens worden vertrouwelijk behandeld. Zie onze privacyverklaring.</p>
            </form>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-3">Vestiging / Factuurgegevens</h2>
            <p className="text-gray-700">(Adres, KvK, BTW - voor zakelijke verificatie)</p>
          </div>
        </section>
      </div>
    </>
  );
}
```

---

## Dependency Summary

| Page | `Link` | `SEO` | lucide-react icons | `COMPANY` / constants |
|---|---|---|---|---|
| Home | ✓ | ✓ | 14 icons | — |
| ExterneVertrouwenspersoon | ✓ | ✓ | — | — |
| VoorMedewerkers | — | ✓ | — | — |
| OverOns | — | ✓ | — | — |
| InterneVsExterneVP | — | ✓ | — | — |
| PreventieOngewenstGedrag | ✓ | ✓ | — | — |
| Tarieven | ✓ | ✓ | — | — |
| Blog | — | ✓ | ArrowRight, BookOpen, Search, Tag | — |
| Contact | — | ✓ | Mail, MessageCircle, Phone | — |
