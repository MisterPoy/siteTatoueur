import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artist';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Infos from './components/Infos';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main">
        <Hero />
        <Artists />
        <Portfolio />
        <CallToAction />
        <Gallery />
        <CallToAction />
        <Infos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;