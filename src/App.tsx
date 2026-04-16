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
import { Article } from './pages/Article';
import { AlgemeneVoorwaarden } from './pages/AlgemeneVoorwaarden';

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
            <Route path="/kennisbank/:slug" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
