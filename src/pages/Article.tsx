import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Tag, CheckCircle } from 'lucide-react';
import { SEO, SchemaMarkup } from '../components/seo';
import { ARTICLES } from './Blog';

const ARTICLE_CONTENT: Record<string, { intro: string; sections: { heading: string; body: string[] }[]; cta: string }> = {
  'vertrouwenspersoon-verplicht': {
    intro: 'Is een vertrouwenspersoon wettelijk verplicht? Het korte antwoord: nee, op dit moment niet. Maar de praktijk is genuanceerder. Er zijn meerdere wetten en regelingen die het aanstellen van een vertrouwenspersoon sterk aanmoedigen — en in sommige gevallen indirect afdwingen. In dit artikel leggen we de stand van zaken helder uit.',
    sections: [
      {
        heading: 'Het wetsvoorstel: aangenomen door de Tweede Kamer, maar nog niet van kracht',
        body: [
          'In mei 2023 is in de Tweede Kamer een wetsvoorstel aangenomen dat organisaties met meer dan 10 medewerkers verplicht zou stellen een vertrouwenspersoon aan te stellen. Sindsdien ligt het wetsvoorstel bij de Eerste Kamer.',
          'Door de veranderde samenstelling van de Eerste Kamer, de val van het kabinet-Rutte IV en de politieke ontwikkelingen daarna, is het wetsvoorstel op een zijspoor geraakt. Op dit moment is er geen concrete datum waarop de wet in werking treedt.',
        ],
      },
      {
        heading: 'De RI&E: vertrouwenspersoon als onderdeel van goed werkgeverschap',
        body: [
          'Hoewel een vertrouwenspersoon niet wettelijk verplicht is, komt het onderwerp wel terug in de Risico-Inventarisatie en Evaluatie (RI&E). In het deel over psychosociale arbeidsbelasting is er een apart kopje "Vertrouwenspersoon".',
          'Als de Arbeidsinspectie een controle uitvoert en constateert dat er geen vertrouwenspersoon is, kan zij op last van een boete alsnog verplichten er een aan te stellen. De kans op zo\'n controle is in de praktijk klein, maar het risico bestaat.',
        ],
      },
      {
        heading: 'De Wet bescherming klokkenluiders',
        body: [
          'De Wet bescherming klokkenluiders verplicht organisaties met 50 of meer werknemers tot een interne meldregeling. In die meldregeling wordt de vertrouwenspersoon vaak genoemd als aanspreekpunt voor opvang, advies en ondersteuning van medewerkers die misstanden willen melden.',
          'Strikt genomen is de vertrouwenspersoon als functionaris ook hierbij niet wettelijk verplicht. Maar in de praktijk is het lastig om aan de geest van de wet te voldoen zonder er een te hebben.',
        ],
      },
      {
        heading: 'Niet verplicht, wel verstandig',
        body: [
          'De juridische werkelijkheid is dat een vertrouwenspersoon op dit moment niet wettelijk verplicht is. Er is ook geen programma van eisen waaraan een vertrouwenspersoon moet voldoen.',
          'Maar de praktische werkelijkheid is anders. Ongewenst gedrag komt in elke organisatie voor. Zonder laagdrempelig meldpunt escaleert het. Eén geëscaleerde situatie kan leiden tot langdurig verzuim, juridische procedures en reputatieschade. De kosten daarvan overstijgen al snel tien jaar abonnement bij een externe vertrouwenspersoon.',
        ],
      },
      {
        heading: 'Wat kost het om het wél te regelen?',
        body: [
          'Bij PuntUit kost een compleet jaarabonnement €475 exclusief BTW. Dat is minder dan €40 per maand. Inclusief een gratis spreekuur voor medewerkers, 24/7 bereikbaarheid, een hulpvraagplatform, de Early Awareness Tool en een jaarlijkse geanonimiseerde rapportage.',
        ],
      },
    ],
    cta: 'Wil je weten wat PuntUit voor jouw organisatie kan betekenen?',
  },
};

export function Article() {
  const { slug } = useParams<{ slug: string }>();

  const meta = ARTICLES.find((a) => a.slug === slug);
  const content = slug ? ARTICLE_CONTENT[slug] : undefined;

  if (!meta || !content) {
    return <Navigate to="/kennisbank" replace />;
  }

  const currentIndex = ARTICLES.findIndex((a) => a.slug === slug);
  const nextArticle = ARTICLES[currentIndex + 1] || ARTICLES[0];

  return (
    <>
      <SEO title={meta.title} description={meta.desc} canonicalUrl={`/kennisbank/${slug}`} ogType="article" />
      <SchemaMarkup
        type="article"
        articleMeta={{
          headline: meta.title,
          description: meta.desc,
          datePublished: '2026-03-12',
          dateModified: '2026-04-16',
          slug: slug!,
        }}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Kennisbank', url: '/kennisbank' },
          { name: meta.title, url: `/kennisbank/${slug}` },
        ]}
      />
      <div className="pt-28">

        <section className="bg-[#0284c7] text-white">
          <div className="container py-16 md:py-20 max-w-4xl">
            <Link to="/kennisbank" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Terug naar kennisbank
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white/80 px-3 py-1.5 rounded-md">
                <Tag className="w-3 h-3" />
                {meta.tag}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/50">
                <Clock className="w-3 h-3" />
                {meta.readTime} min leestijd
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">{meta.title}</h1>
            <p className="text-xs text-white/50">Laatst bijgewerkt: april 2026</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
              {content.intro}
            </p>

            <div className="space-y-10">
              {content.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-14 bg-[#0284c7] rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-3">{content.cta}</h3>
              <p className="text-white/80 mb-6">Meer dan 500 organisaties gingen je voor. Vraag vandaag een vrijblijvende offerte aan.</p>
              <Link to="/contact" className="btn-primary">
                Vraag offerte aan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-14 border-t border-gray-200 pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Volgende artikel</p>
              <Link
                to={`/kennisbank/${nextArticle.slug}`}
                className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#0284c7]/5 text-[#0284c7] px-2.5 py-1 rounded-md mb-2">{nextArticle.tag}</span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#0284c7] transition-colors">{nextArticle.title}</h4>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0284c7] flex-shrink-0 transition-colors" />
              </Link>
            </div>

            <div className="mt-14 bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Samenvatting</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#0284c7] mt-0.5 flex-shrink-0" />
                  Een vertrouwenspersoon is op dit moment niet wettelijk verplicht. Het wetsvoorstel ligt nog bij de Eerste Kamer.
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#0284c7] mt-0.5 flex-shrink-0" />
                  Via de RI&E en de Arbeidsinspectie kan het aanstellen van een vertrouwenspersoon in de praktijk wel worden afgedwongen.
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#0284c7] mt-0.5 flex-shrink-0" />
                  Eén geëscaleerde situatie kost meer dan tien jaar abonnement bij een externe vertrouwenspersoon.
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#0284c7] mt-0.5 flex-shrink-0" />
                  Een extern abonnement bij PuntUit kost vanaf €475 per jaar — minder dan €40 per maand.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
