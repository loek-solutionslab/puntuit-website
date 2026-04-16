const logos = [
  { src: "/images/logo's/nhwonen.png", alt: 'NH Wonen' },
  { src: "/images/logo's/rotterdam.png", alt: 'Rotterdam' },
  { src: "/images/logo's/shared-logo.png", alt: 'Shared' },
  { src: "/images/logo's/vastgoed-unie.png", alt: 'Vastgoed Unie' },
  { src: "/images/logo's/osapa.png", alt: 'Osapa' },
  { src: "/images/logo's/unnamed-1.png", alt: 'Partner' },
  { src: "/images/logo's/Unknown.png", alt: 'Partner' },
];

export function LogoTicker() {
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="container mb-6">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
          Vertrouwd door organisaties in heel Nederland
        </p>
      </div>

      <div className="logo-ticker">
        <div className="logo-ticker-track">
          {repeated.map((logo, i) => (
            <div key={i} className="logo-ticker-item">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-8 md:h-10 w-auto max-w-[140px] object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
