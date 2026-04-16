const services = [
  {
    image: '/images/gratis-spreekuur.png',
    title: 'Gratis spreekuur',
    text: 'Werknemers kunnen gratis gebruik maken van ons spreekuur. Bij verdere ondersteuning bedraagt het uurtarief €84, berekend per kwartier.',
  },
  {
    image: '/images/hulpvraag-platform.webp',
    title: 'Hulpvraag platform',
    text: 'Een eigen website voor jouw medewerkers met artikelen, tips en een afsprakenplanner. Kijk op bedrijf.praatuit.nl.',
  },
  {
    image: '/images/24-7-beschikbaar.webp',
    title: '24/7 beschikbaar',
    text: 'Ons platform is dag en nacht bereikbaar. Via telefoon, mail of WhatsApp.',
  },
  {
    image: '/images/early-awareness-tool.webp',
    title: 'Early Awareness Tool',
    text: 'Detecteert gedragspatronen voordat er een melding is. Helpt potentieel onuitgesproken gedrag voor te zijn.',
  },
  {
    image: '/images/jaarlijkse-raportage.webp',
    title: 'Jaarlijkse rapportage',
    text: 'Een geanonimiseerd jaarrapport plus ieder kwartaal een informatievideo over een trending topic.',
  },
  {
    image: '/images/gratis-communicatie-kit.webp',
    title: 'Gratis communicatie kit',
    text: 'Folders, interne communicatietemplates en een gepersonaliseerde NFC-sticker zodat medewerkers ons makkelijk vinden.',
  },
  {
    image: '/images/lvv-gecertificeerd.webp',
    title: 'LVV gecertificeerd',
    text: 'Alle vertrouwenspersonen zijn LVV-gecertificeerd met continue bijscholing en gezamenlijke casusbesprekingen.',
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-[#0284c7] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Wat krijg je?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Alles inbegrepen bij jouw abonnement.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ image, title, text }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/2] overflow-hidden bg-gray-50">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
