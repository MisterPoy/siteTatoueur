import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Artist: React.FC = () => {
  const headerRef = useScrollReveal();
  const profileRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <section id="artist" className="py-20 bg-karasu-900 japanese-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-primary">職人</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              SHOKUNIN · LE MAÎTRE ARTISAN
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            L'Artiste <span className="text-primary brush-stroke">Karasu</span>
          </h2>
          <p className="text-lg text-karasu-300 max-w-3xl mx-auto leading-relaxed font-body">
            Découvrez l'univers artistique unique d'un maître tatoueur passionné par l'art japonais, 
            le manga et la pop-culture.
          </p>
        </div>

        {/* Artist Profile */}
        <div ref={profileRef} className="scroll-reveal">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo de profil */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                    alt="Tatoueur Karasu"
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge spécialité */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-bone font-accent text-sm tracking-wider">TATOUEUR</span>
                  </div>
                </div>
              </div>

              {/* Informations */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-accent text-bone mb-4">
                    Karasu <span className="text-primary">Tattoo</span>
                  </h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-xl kanji-style text-gold">鴉</span>
                    <span className="text-karasu-300 font-body">Artiste tatoueur passionné</span>
                  </div>
                </div>

                {/* Spécialités */}
                <div>
                  <h4 className="text-xl font-accent text-bone mb-4 flex items-center">
                    <span className="text-primary kanji-style mr-3">技</span>
                    Spécialités
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 text-center">
                      <span className="text-lg kanji-style text-primary block mb-2">漫</span>
                      <span className="text-sm font-accent text-bone">Manga</span>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <span className="text-lg kanji-style text-purple block mb-2">新</span>
                      <span className="text-sm font-accent text-bone">Neo-Japonais</span>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <span className="text-lg kanji-style text-teal block mb-2">流</span>
                      <span className="text-sm font-accent text-bone">Pop-Culture</span>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <span className="text-lg kanji-style text-emerald block mb-2">花</span>
                      <span className="text-sm font-accent text-bone">Floral</span>
                    </div>
                  </div>
                </div>

                {/* Philosophie */}
                <div>
                  <h4 className="text-xl font-accent text-bone mb-4 flex items-center">
                    <span className="text-gold kanji-style mr-3">心</span>
                    Philosophie
                  </h4>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-karasu-200 font-body leading-relaxed">
                    "Chaque tatouage est une œuvre unique qui raconte votre histoire. 
                    Mon approche mêle respect des traditions japonaises et créativité moderne 
                    pour créer des pièces qui vous ressemblent."
                  </blockquote>
                </div>

                {/* Contact */}
                <div className="flex items-center space-x-6">
                  <a
                    href="https://instagram.com/karasutattoo.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-3 bg-primary/20 hover:bg-primary border border-primary hover:border-primary rounded-lg text-bone transition-all duration-300 hover-lift group"
                  >
                    <FaInstagram className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-accent">@karasutattoo.fr</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processus de travail */}
        <div ref={ctaRef} className="mt-20 text-center scroll-reveal">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-3xl kanji-style text-gold">道</span>
              <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
                DŌ · LA VOIE DE L'ARTISTE
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-accent text-bone mb-6">
              Une Approche <span className="text-primary">Sur-Mesure</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="text-primary kanji-style text-xl">相</span>
                </div>
                <h4 className="text-bone font-accent mb-2">1. Consultation</h4>
                <p className="text-karasu-300 text-sm font-body">
                  Discussion approfondie de vos idées, inspirations et attentes.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple/20 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="text-purple kanji-style text-xl">創</span>
                </div>
                <h4 className="text-bone font-accent mb-2">2. Création</h4>
                <p className="text-karasu-300 text-sm font-body">
                  Design personnalisé et devis détaillé selon votre projet.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="text-emerald kanji-style text-xl">実</span>
                </div>
                <h4 className="text-bone font-accent mb-2">3. Réalisation</h4>
                <p className="text-karasu-300 text-sm font-body">
                  Tatouage réalisé dans le respect et la passion de l'art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;