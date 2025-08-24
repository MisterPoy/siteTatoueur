import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artist';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Infos from './components/Infos';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import MentionsLegales from './components/MentionsLegales';
import Footer from './components/Footer';

function App() {
  const [showMentions, setShowMentions] = useState(false);

  const handleShowMentions = () => {
    setShowMentions(true);
    window.scrollTo(0, 0);
  };

  const handleBackToSite = () => {
    setShowMentions(false);
    window.scrollTo(0, 0);
  };

  if (showMentions) {
    return (
      <div className="min-h-screen">
        <MentionsLegales onBack={handleBackToSite} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <Artists />
        <CallToAction />
        <Gallery />
        <CallToAction />
        <Infos />
        <Testimonials />
        <Contact />
      </main>
      <Footer onShowMentions={handleShowMentions} />
    </div>
  );
}

export default App;