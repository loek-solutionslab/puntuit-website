import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Search, Tag } from 'lucide-react';
import { SEO } from '../components/seo';

export const ARTICLES = [
  { slug: 'vertrouwenspersoon-verplicht', tag: 'Juridisch', title: 'Is een vertrouwenspersoon verplicht in 2025 en 2026?', desc: 'Een vertrouwenspersoon is op dit moment niet wettelijk verplicht, maar in de praktijk wordt het steeds vaker verwacht. Lees hoe het juridisch zit.', readTime: 4 },
  { slug: 'interne-vs-externe-vertrouwenspersoon', tag: 'Werkgever', title: 'Interne vs. externe vertrouwenspersoon: 5 redenen voor extern', desc: 'Medewerkers melden liever extern. Dit zijn de vijf belangrijkste redenen waarom een externe vertrouwenspersoon effectiever is.', readTime: 5 },
  { slug: 'wat-kost-een-externe-vertrouwenspersoon', tag: 'Werkgever', title: 'Wat kost een externe vertrouwenspersoon?', desc: 'Een compleet abonnement vanaf €475 per jaar. Wat zit er in en hoe verhoudt het zich tot de kosten van een interne oplossing?', readTime: 3 },
  { slug: 'ongewenst-gedrag-herkennen', tag: 'Preventie', title: 'Ongewenst gedrag herkennen vóórdat het escaleert', desc: 'Wachten op een melding is al te laat. Zo pak je het preventief aan met vroegsignalering en de juiste tools.', readTime: 6 },
  { slug: 'wat-doet-een-vertrouwenspersoon', tag: 'Medewerker', title: 'Wat doet een vertrouwenspersoon precies?', desc: 'De vertrouwenspersoon luistert, begeleidt en signaleert. Maar lost het probleem niet op. Wat kun je precies verwachten?', readTime: 4 },
  { slug: 'verschil-vertrouwenspersoon-mediator', tag: 'Basis', title: 'Wat is het verschil tussen een vertrouwenspersoon en een mediator?', desc: 'Twee verschillende rollen die vaak worden verward. Een heldere uitleg over wat ze wel en niet doen.', readTime: 3 },
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
          <div className="container py-24 md:py-32 max-w-4xl">
            <p className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-6">Kennisbank</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alles wat je moet weten over de vertrouwenspersoon.</h1>
            <p className="text-xl text-white/85">Artikelen voor werkgevers, HR-professionals en medewerkers.</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-5xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {['Alle artikelen', 'Juridisch', 'Voor Werkgevers', 'Voor Medewerkers', 'Preventie', 'Basis'].map((filter) => (
                <span key={filter} className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200 cursor-pointer hover:bg-[#0284c7]/5 hover:text-[#0284c7] hover:border-[#0284c7]/20 transition-colors">
                  <Tag className="w-3 h-3 mr-1.5" />
                  {filter}
                </span>
              ))}
            </div>
            <div className="relative mb-10">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-sm" placeholder="Zoek een artikel..." />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  to={`/kennisbank/${article.slug}`}
                  className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all group block overflow-hidden"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#0284c7]/5 text-[#0284c7] px-3 py-1.5 rounded-md">{article.tag}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {article.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0284c7] transition-colors leading-snug">{article.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{article.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-[#0284c7] font-bold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
                      <BookOpen className="w-3.5 h-3.5" />
                      Lees artikel
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
