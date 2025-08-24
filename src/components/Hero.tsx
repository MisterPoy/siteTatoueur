import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Image de fond avec masques artistiques */}
      <div className="absolute inset-0">
        {/* Image de fond avec fallback pour mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: 'url("./images/gallery/imageFond.webp"), url("./images/gallery/grue-japonaise.jpg")',
            filter: 'brightness(0.6) contrast(1.1) saturate(1.1)'
          }}
        />
        
        {/* Masques artistiques plus légers sur mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-karasu-950/50 sm:from-karasu-950/70 via-karasu-900/30 sm:via-karasu-900/50 to-karasu-800/40 sm:to-karasu-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/60 sm:from-karasu-950/80 via-transparent to-karasu-900/20 sm:to-karasu-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-karasu-950/40 sm:from-karasu-950/60 via-transparent to-karasu-950/40 sm:to-karasu-950/60" />
        
        {/* Masque radial responsive */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse 80% 70% at center, transparent 30%, rgba(11, 15, 20, 0.2) 55%, rgba(11, 15, 20, 0.5) 75%, rgba(11, 15, 20, 0.7) 100%)'
          }}
        />
        
        {/* Overlay de texture japonaise */}
        <div className="absolute inset-0 japanese-texture opacity-20" />
        
        {/* Motifs japonais subtils responsive */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 opacity-10 sm:opacity-5 z-10">
          <div className="w-full h-full rounded-full border border-primary sm:border-2"></div>
        </div>
        <div className="absolute bottom-16 sm:bottom-32 right-4 sm:right-16 w-24 sm:w-48 h-24 sm:h-48 opacity-10 sm:opacity-5 z-10">
          <div className="w-full h-full rounded-full border border-primary"></div>
        </div>
        
        {/* Kanji flottants thématiques - Art de l'encre */}
        <div className="absolute top-1/4 left-1/4 text-base sm:text-lg kanji-style text-primary animate-float opacity-80 sm:opacity-60 z-10">墨</div>
        <div className="absolute top-1/3 right-1/3 text-lg sm:text-xl kanji-style text-purple animate-float opacity-70 sm:opacity-40 z-10" style={{ animationDelay: '1s' }}>絵</div>
        <div className="absolute bottom-1/3 left-1/3 text-base sm:text-lg kanji-style text-primary animate-float opacity-80 sm:opacity-50 z-10" style={{ animationDelay: '2s' }}>芸</div>
        <div className="absolute top-2/3 right-1/4 text-base sm:text-lg kanji-style text-gold animate-float opacity-75 sm:opacity-45 z-10" style={{ animationDelay: '3s' }}>筆</div>
        <div className="absolute bottom-1/4 right-2/3 text-lg sm:text-xl kanji-style text-gold animate-float opacity-65 sm:opacity-35 z-10" style={{ animationDelay: '4s' }}>線</div>
        <div className="absolute top-1/2 left-1/6 text-base sm:text-lg kanji-style text-karasu-400 animate-float opacity-70 sm:opacity-30 z-10" style={{ animationDelay: '5s' }}>色</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Titre principal style Kanji */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Caractère japonais principal - KARASU */}
            <div className="mb-8">
              <span className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] kanji-style text-primary text-shadow-primary animate-reveal leading-none block">
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
            <p className="max-w-2xl mx-auto mt-4 text-karasu-400">
              Un tatouage unique, pensé pour vous, réalisé avec exigence et hygiène irréprochable.
            </p>

            {/* Double CTA */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#gallery" className="rounded-xl px-5 py-3 bg-primary text-karasu-950 font-accent uppercase tracking-wider transition-all duration-300 hover-lift primary-glow">
                Voir nos créations
              </a>
              <a href="#contact" className="rounded-xl px-5 py-3 border border-primary text-bone hover:bg-primary/10 font-accent uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
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