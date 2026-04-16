import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { MapPin, Users, ImageIcon } from 'lucide-react';

const teamMembers = [
  {
    name: 'Erik',
    role: 'Vertrouwenspersoon',
    bio: 'LVV-gecertificeerd vertrouwenspersoon, woonachtig in Den Haag met een passie voor reizen.',
    image: '/images/team/erik.webp',
  },
  {
    name: 'Charlotte',
    role: 'Vertrouwenspersoon',
    bio: 'LVV-gecertificeerd vertrouwenspersoon, woonachtig in Haarlem met een passie voor kiten.',
    image: '/images/team/charlotte.webp',
  },
  {
    name: 'Eva',
    role: 'Vertrouwenspersoon',
    bio: 'LVV-gecertificeerd vertrouwenspersoon, woonachtig in Amsterdam met een passie voor yoga.',
    image: '/images/team/eva.webp',
  },
  {
    name: 'Paul',
    role: 'Founder',
    bio: 'Founder van Punt Uit, woonachtig in Haarlem met een passie voor tennis.',
    image: '/images/team/paul.webp',
  },
];

export function OverOns() {
  return (
    <>
      <SEO title="Over Ons" description="Mensen die begrijpen wat er speelt." canonicalUrl="/over-ons" />
      <div className="pt-28">
        <section className="bg-[#0284c7] text-white">
          <div className="container py-24 md:py-32 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mensen die begrijpen wat er speelt.</h1>
            <p className="text-xl text-primary-100">PuntUit bestaat uit LVV-gecertificeerde vertrouwenspersonen. Geen bureau. Geen anoniem loket. Echte mensen met echte expertise.</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Het team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">De mensen achter PuntUit.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Aandacht en zorg, dat is wat ons motiveert. Wij zijn er voor uw werknemers en dus voor u.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-36 h-36 rounded-full mx-auto mb-5 overflow-hidden bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-10 h-10 text-gray-300" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-[#0284c7] font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="space-y-4 text-gray-700">
                <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em]">Ons verhaal</p>
                <h2 className="text-3xl font-bold text-gray-900">Het begon met één inzicht.</h2>
                <p>Medewerkers melden liever niet intern. Niet omdat ze het niet willen. Maar omdat de drempel te hoog is.</p>
                <p>PuntUit is opgericht om die drempel weg te nemen. Onafhankelijk, professioneel en altijd van buitenaf.</p>
                <p className="font-medium text-gray-900">Niet als bijbaantje of extra taak. Als volwaardige dienst.</p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Twee pijlers. Één doel.</h2>
                <div className="bg-white border-l-4 border-l-[#0284c7] rounded-r-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Externe Vertrouwenspersoon</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Medewerkers krijgen een veilig, onafhankelijk aanspreekpunt. Buiten de organisatie. Vertrouwelijk. Altijd bereikbaar.</p>
                </div>
                <div className="bg-white border-l-4 border-l-[#E85D56] rounded-r-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Preventie Ongewenst Gedrag</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Problemen aanpakken voordat ze groot worden. Via de Early Awareness Tool en bewustwordingsprogramma's.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0284c7]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0284c7]" />
                  </div>
                  <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em]">Landelijke dekking</p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Overal in Nederland beschikbaar.</h2>
                <p className="text-gray-700 mb-4">PuntUit biedt landelijke dekking. Of je nu in Amsterdam, Maastricht of Groningen zit — wij zijn er voor jouw organisatie.</p>
                <p className="text-gray-700 mb-4">Gesprekken kunnen plaatsvinden op de locatie van jouw voorkeur: bij jou op kantoor, op één van onze eigen kantoren, of digitaal via een videogesprek.</p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mt-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#0284c7] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Op locatie of op afstand</p>
                      <p className="text-gray-600 text-sm">Desgewenst komen we naar jouw kantoor of spreken we af op een neutrale locatie. Medewerkers kiezen zelf wat het prettigst voelt.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl aspect-square overflow-hidden">
                <img
                  src="/images/120923-05.jpg"
                  alt="PuntUit team op locatie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0284c7] text-white">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Maak kennis met ons team.</h2>
            <p className="text-white/80 text-lg mb-8">Vraag een vrijblijvend kennismakingsgesprek aan. Wij vertellen je graag meer over onze aanpak.</p>
            <Link to="/contact" className="bg-white text-[#0284c7] px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors">Neem contact op</Link>
          </div>
        </section>
      </div>
    </>
  );
}
