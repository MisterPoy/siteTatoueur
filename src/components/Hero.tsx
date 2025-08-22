import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToArtist = () => {
    const element = document.getElementById('artists');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden karasu-gradient japanese-texture flex items-center justify-center"
    >
      {/* Fond avec texture japonaise */}
      <div className="absolute inset-0">
        {/* Motifs japonais subtils */}
        <div className="absolute top-20 left-20 w-64 h-64 opacity-5">
          <div className="w-full h-full rounded-full border-2 border-primary"></div>
        </div>
        <div className="absolute bottom-32 right-16 w-48 h-48 opacity-5">
          <div className="w-full h-full rounded-full border border-primary"></div>
        </div>
        
        {/* Particules flottantes colorées */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-1 sm:h-1 bg-primary rounded-full animate-float opacity-80 sm:opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 sm:w-2 sm:h-2 bg-purple rounded-full animate-float opacity-70 sm:opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 sm:w-1 sm:h-1 bg-teal rounded-full animate-float opacity-80 sm:opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 sm:w-1 sm:h-1 bg-emerald rounded-full animate-float opacity-75 sm:opacity-45" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-2/3 w-4 h-4 sm:w-2 sm:h-2 bg-gold rounded-full animate-float opacity-65 sm:opacity-35" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 sm:w-1 sm:h-1 bg-indigo rounded-full animate-float opacity-70 sm:opacity-30" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Titre principal style Kanji */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Caractère japonais principal - KARASU */}
            <div className="mb-8">
              <span className="text-7xl sm:text-9xl md:text-[12rem] kanji-style text-primary text-shadow-primary animate-reveal leading-none">
                墨
              </span>
              <div className="text-lg font-accent text-primary tracking-widest mt-4 mb-2">
                SUMI · L'ENCRE
              </div>
              <div className="text-sm font-accent text-karasu-400 tracking-widest">
                L'IDENTITÉ DE L'ARTISTE
              </div>
            </div>

            {/* Titre français */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-accent text-bone mb-6 text-shadow-dark">
              <span className="block mb-2">Ink Ritual Tattoo</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-primary brush-stroke">
                L'art de l'encre sacrée
              </span>
            </h1>

            {/* Accroche orientée client */}
            <p className="max-w-2xl mx-auto mt-4 text-karasu-300">
              Un tatouage unique, pensé pour vous, réalisé avec exigence et hygiène irréprochable.
            </p>

            {/* Double CTA */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#gallery" className="rounded-xl px-5 py-3 bg-primary text-karasu-950 font-accent uppercase tracking-wider">
                Voir nos créations
              </a>
              <a href="#contact" className="rounded-xl px-5 py-3 border border-primary text-bone hover:bg-primary/10 font-accent uppercase tracking-wider">
                Réserver un créneau
              </a>
            </div>
          </div>

          {/* Éléments décoratifs japonais - KARASU en vedette */}
          <div className="absolute top-1/4 left-4 sm:left-8">
            <div className="text-lg sm:text-2xl lg:text-3xl kanji-style text-primary/60 sm:text-primary/40 animate-float">墨</div>
          </div>
          <div className="absolute top-1/3 right-4 sm:right-12">
            <div className="text-base sm:text-xl lg:text-2xl kanji-style text-primary/50 sm:text-primary/30 animate-float" style={{ animationDelay: '1s' }}>墨</div>
          </div>
          <div className="absolute bottom-1/4 left-1/4">
            <div className="text-sm sm:text-lg lg:text-xl kanji-style text-gold/60 sm:text-gold/40 animate-float" style={{ animationDelay: '2s' }}>墨</div>
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <div className="text-xs sm:text-base lg:text-lg kanji-style text-primary/45 sm:text-primary/25 animate-float" style={{ animationDelay: '3s' }}>墨</div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2 text-karasu-400">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary"></div>
          <FaChevronDown className="animate-pulse" />
        </div>
      </div>

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/80 via-transparent to-karasu-950/60 pointer-events-none"></div>
    </section>
  );
};

export default Hero;