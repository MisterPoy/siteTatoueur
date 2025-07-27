import Header from './components/Header';
import Hero from './components/Hero';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import Infos from './components/Infos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Artists />
        <Gallery />
        <Infos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;