# Layouts

The app uses a single layout: `Header` + `<main>` + `Footer`, defined in `App.tsx`. There are no nested layouts or layout components beyond this.

---

## Header

**File:** `src/components/Header.tsx`
**Export:** `export function Header()`

```tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY, EMPLOYER_DROPDOWN_LINKS, NAV_LINKS } from '../lib/constants';

function Logo() {
  return (
    <svg viewBox="0 0 855.08 294.17" className="h-10 md:h-12 w-auto">
      <g>
        <g>
          <path fill="#1a1a1a" d="M273.14,130.16q.78,10.72,1.37,21.45C276,178.23,261.26,192.84,231,193l-14.31.18q.72,28.53.1,57.09l-30.27-2.17a1170.81,1170.81,0,0,0-5.86-144.92l44.17-6.85C254.8,91.52,271.19,103.58,273.14,130.16Zm-60.43-10q2.19,25.63,3.28,51.34l14.29-.65c9.61-.42,14.72-4.27,14.12-15.6q-.65-11.88-1.52-23.73c-.84-11.32-6.38-14.29-15.94-13.1Z"></path>
          <path fill="#1a1a1a" d="M312.13,82.83Q319,150,319.49,217.65c.07,12.48,6.06,17.25,15.71,17.68s15.75-4,15.68-17Q350.4,148,343.21,78l28.36-4.4q7.35,71.48,7.92,143.37c.21,30.39-15.82,46.5-45.49,44.06s-44.62-19-44.8-45.68q-.51-64.06-7.07-127.87Z"></path>
          <path fill="#1a1a1a" d="M424,121l-.55,0q4.92,72,3.37,144.34l-27.25-2a1558.32,1558.32,0,0,0-7.8-193l37.63-5.84q21.31,57.77,38.42,120h.55q-1.75-62.48-8.15-124.73l26.72-4.14a1732.6,1732.6,0,0,1,8.68,214.65l-31.1-2.24A1471.82,1471.82,0,0,0,424,121Z"></path>
          <path fill="#1a1a1a" d="M499.73,53.73,846.08,0q2.16,21.11,4,42.24l-285.86,35a1868.76,1868.76,0,0,1,6.27,198.55l-30.27-2.18A1814.14,1814.14,0,0,0,534.1,80.88l-31.46,3.85Q501.32,69.22,499.73,53.73Z"></path>
          <path fill="#1a1a1a" d="M636.33,93.58q4.73,65.21,5.16,130.6c.1,17.67,6.06,24.31,15.71,24.74s15.77-5.87,15.67-24.1q-.45-67.24-5.3-134.34l28.5-2.82q4.88,67.46,5.42,135.12c.28,42-16,64.79-45.64,62.35s-44.4-25.61-44.66-64q-.5-62.35-5-124.58Z"></path>
          <path fill="#1a1a1a" d="M716.62,85.62l30.14-3Q754.2,185.52,752,288.81l-30.27-2.18Q723.88,186,716.62,85.62Z"></path>
          <path fill="#1a1a1a" d="M759.23,81.39l93.16-9.24q1.53,21.15,2.69,42.32l-31.58,2.11q4.83,88.68,2.91,177.59L796.14,292q1.88-86.74-2.84-173.4l-31.58,2.11Q760.66,101,759.23,81.39Z"></path>
          <rect fill="#E85D56" y="117.37" width="120.65" height="120.65" rx="60.32" transform="translate(127.64 352.86) rotate(177.73)"></rect>
        </g>
      </g>
    </svg>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white'
      }`}
    >
      {/* Top bar - accent color rood */}
      <div className="bg-[#E85D56] text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1 !text-white/90 hover:!text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{COMPANY.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1 !text-white/90 hover:!text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{COMPANY.email}</span>
            </a>
          </div>
          <div className="text-white/80 text-xs">
            Meer dan 500 organisaties vertrouwen ons
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-[#0284c7] transition-colors inline-flex items-center gap-1">
                Voor Werkgevers
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                <div className="w-72 bg-white border border-gray-100 rounded-xl shadow-lg p-2">
                  {EMPLOYER_DROPDOWN_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E85D56] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.href)
                    ? 'text-[#E85D56]'
                    : 'text-gray-700 hover:text-[#0284c7]'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E85D56] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Vraag offerte aan
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#E85D56] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <p className="px-4 py-2 text-xs uppercase tracking-wide text-gray-400">Voor Werkgevers</p>
            {EMPLOYER_DROPDOWN_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#FEF2F2] text-[#E85D56] font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#FEF2F2] text-[#E85D56] font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary block text-center mt-4"
            >
              Vraag offerte aan
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
```

### Header behavior

- **Fixed position**: `fixed top-0 left-0 right-0 z-50`
- **Scroll effect**: After 20px scroll, adds `bg-white/95 backdrop-blur-md shadow-lg`
- **Top bar**: Red (`#E85D56`) strip with phone + email + trust statement
- **Desktop nav** (`lg:` breakpoint): "Voor Werkgevers" dropdown (hover) + flat links from `NAV_LINKS` + CTA button
- **Mobile nav** (`< lg`): Hamburger toggle → collapsible panel with all links
- **Active state**: Red text + underline indicator
- **Logo**: Inline SVG, dark fill (`#1a1a1a`), red dot accent

---

## Footer

**File:** `src/components/Footer.tsx`
**Export:** `export function Footer()`

```tsx
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { COMPANY, EMPLOYER_DROPDOWN_LINKS } from '../lib/constants';

function Logo() {
  return (
    <svg viewBox="0 0 855.08 294.17" className="h-12 w-auto">
      <g>
        <g>
          <path fill="#ffffff" d="M273.14,130.16q.78,10.72,1.37,21.45C276,178.23,261.26,192.84,231,193l-14.31.18q.72,28.53.1,57.09l-30.27-2.17a1170.81,1170.81,0,0,0-5.86-144.92l44.17-6.85C254.8,91.52,271.19,103.58,273.14,130.16Zm-60.43-10q2.19,25.63,3.28,51.34l14.29-.65c9.61-.42,14.72-4.27,14.12-15.6q-.65-11.88-1.52-23.73c-.84-11.32-6.38-14.29-15.94-13.1Z"></path>
          <path fill="#ffffff" d="M312.13,82.83Q319,150,319.49,217.65c.07,12.48,6.06,17.25,15.71,17.68s15.75-4,15.68-17Q350.4,148,343.21,78l28.36-4.4q7.35,71.48,7.92,143.37c.21,30.39-15.82,46.5-45.49,44.06s-44.62-19-44.8-45.68q-.51-64.06-7.07-127.87Z"></path>
          <path fill="#ffffff" d="M424,121l-.55,0q4.92,72,3.37,144.34l-27.25-2a1558.32,1558.32,0,0,0-7.8-193l37.63-5.84q21.31,57.77,38.42,120h.55q-1.75-62.48-8.15-124.73l26.72-4.14a1732.6,1732.6,0,0,1,8.68,214.65l-31.1-2.24A1471.82,1471.82,0,0,0,424,121Z"></path>
          <path fill="#ffffff" d="M499.73,53.73,846.08,0q2.16,21.11,4,42.24l-285.86,35a1868.76,1868.76,0,0,1,6.27,198.55l-30.27-2.18A1814.14,1814.14,0,0,0,534.1,80.88l-31.46,3.85Q501.32,69.22,499.73,53.73Z"></path>
          <path fill="#ffffff" d="M636.33,93.58q4.73,65.21,5.16,130.6c.1,17.67,6.06,24.31,15.71,24.74s15.77-5.87,15.67-24.1q-.45-67.24-5.3-134.34l28.5-2.82q4.88,67.46,5.42,135.12c.28,42-16,64.79-45.64,62.35s-44.4-25.61-44.66-64q-.5-62.35-5-124.58Z"></path>
          <path fill="#ffffff" d="M716.62,85.62l30.14-3Q754.2,185.52,752,288.81l-30.27-2.18Q723.88,186,716.62,85.62Z"></path>
          <path fill="#ffffff" d="M759.23,81.39l93.16-9.24q1.53,21.15,2.69,42.32l-31.58,2.11q4.83,88.68,2.91,177.59L796.14,292q1.88-86.74-2.84-173.4l-31.58,2.11Q760.66,101,759.23,81.39Z"></path>
          <rect fill="#E85D56" y="117.37" width="120.65" height="120.65" rx="60.32" transform="translate(127.64 352.86) rotate(177.73)"></rect>
        </g>
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed">
              Externe Vertrouwenspersoon voor Nederland. LVV-gecertificeerd · Lid van de LVV
            </p>
            <img
              src="https://puntuit.nl/wp-content/uploads/2024/01/lvv-register-vertrouwenspersoon.png"
              alt="LVV Gecertificeerd"
              className="h-16 w-auto"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Diensten</h3>
            <ul className="space-y-3">
              {EMPLOYER_DROPDOWN_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Informatie</h3>
            <ul className="space-y-3">
              <li><Link to="/over-ons" className="text-gray-400 hover:text-white transition-colors">Over Ons</Link></li>
              <li><Link to="/over-ons" className="text-gray-400 hover:text-white transition-colors">Team & Vertrouwenspersonen</Link></li>
              <li><Link to="/kennisbank" className="text-gray-400 hover:text-white transition-colors">Kennisbank</Link></li>
              <li><Link to="/tarieven" className="text-gray-400 hover:text-white transition-colors">Veelgestelde vragen</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-[#0284c7]" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-[#0284c7]" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 text-[#0284c7]" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacyverklaring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Algemene voorwaarden</a></li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">KvK: {COMPANY.kvk}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {COMPANY.year} {COMPANY.name} |</p>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors">Alle rechten voorbehouden</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### Footer structure

- **Background**: `bg-gray-900` (dark)
- **Logo**: White fill variant of inline SVG
- **5-column grid** on `lg:`, 2-col on `md:`, 1-col on mobile
- Columns: Brand + LVV badge | Diensten | Informatie | Contact | Legal
- **Copyright bar**: Separated by `border-t border-gray-800`
- Uses `COMPANY` and `EMPLOYER_DROPDOWN_LINKS` from constants
