# Routes

**Router:** `react-router-dom` with `BrowserRouter`

**File:** `src/App.tsx`

```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './hooks/useScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Tarieven } from './pages/Tarieven';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { ExterneVertrouwenspersoon } from './pages/ExterneVertrouwenspersoon';
import { VoorMedewerkers } from './pages/VoorMedewerkers';
import { OverOns } from './pages/OverOns';
import { InterneVsExterneVP } from './pages/InterneVsExterneVP';
import { PreventieOngewenstGedrag } from './pages/PreventieOngewenstGedrag';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/externe-vertrouwenspersoon" element={<ExterneVertrouwenspersoon />} />
            <Route path="/voor-medewerkers" element={<VoorMedewerkers />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/interne-vs-externe-vp" element={<InterneVsExterneVP />} />
            <Route path="/preventie-ongewenst-gedrag" element={<PreventieOngewenstGedrag />} />
            <Route path="/tarieven" element={<Tarieven />} />
            <Route path="/kennisbank" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

---

## Route Table

| Path | Component | File |
|---|---|---|
| `/` | `<Home />` | `src/pages/Home.tsx` |
| `/externe-vertrouwenspersoon` | `<ExterneVertrouwenspersoon />` | `src/pages/ExterneVertrouwenspersoon.tsx` |
| `/voor-medewerkers` | `<VoorMedewerkers />` | `src/pages/VoorMedewerkers.tsx` |
| `/over-ons` | `<OverOns />` | `src/pages/OverOns.tsx` |
| `/interne-vs-externe-vp` | `<InterneVsExterneVP />` | `src/pages/InterneVsExterneVP.tsx` |
| `/preventie-ongewenst-gedrag` | `<PreventieOngewenstGedrag />` | `src/pages/PreventieOngewenstGedrag.tsx` |
| `/tarieven` | `<Tarieven />` | `src/pages/Tarieven.tsx` |
| `/kennisbank` | `<Blog />` | `src/pages/Blog.tsx` |
| `/contact` | `<Contact />` | `src/pages/Contact.tsx` |

---

## Layout Structure

All pages share the same layout wrapper defined in `App.tsx`:

```
<Router>
  <ScrollToTop />           ← scrolls to top on route change
  <div min-h-screen flex flex-col>
    <Header />              ← fixed, always visible
    <main flex-grow>
      <Routes>...</Routes>  ← page content
    </main>
    <Footer />              ← always visible
  </div>
</Router>
```

All page components add `pt-28` on their root div to account for the fixed header height.
