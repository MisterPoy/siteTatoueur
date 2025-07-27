import Header from './components/Header';
import Hero from './components/Hero';
import Artist from './components/Artist';
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
        <Artist />
        <Gallery />
        <Infos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;