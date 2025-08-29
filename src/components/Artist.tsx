import React, { useState } from 'react';
import { FaInstagram, FaPalette, FaBrush } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Artists: React.FC = () => {
  const headerRef = useScrollReveal();
  const artistsRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [akiraActive, setAkiraActive] = useState(false);
  const [hiroActive, setHiroActive] = useState(false);

  return (
    <section id="artists" className="py-20 bg-gradient-to-tr from-karasu-900 via-karasu-800 to-karasu-950 relative overflow-hidden">
      
      {/* Kanji géants d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="kanji-giant kanji-giant-massive kanji-decorative text-gold absolute -top-32 -left-40 kanji-float-2" style={{ '--rotation': '-15deg' } as React.CSSProperties}>鴉</div>
        <div className="kanji-giant kanji-giant-xs kanji-sans text-primary absolute top-24 right-24 kanji-float-5" style={{ '--rotation': '18deg' } as React.CSSProperties}>鴉</div>
        <div className="kanji-giant kanji-giant-lg kanji-serif text-primary absolute -bottom-28 -right-32 kanji-float-1" style={{ '--rotation': '8deg' } as React.CSSProperties}>鴉</div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-primary">職人</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              SHOKUNIN · LES MAÎTRES ARTISANS
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            Nos <span className="text-primary brush-stroke">Artistes</span>
          </h2>
          <p className="text-lg text-karasu-400 max-w-3xl mx-auto leading-relaxed font-body">
            Deux univers artistiques complémentaires au service de votre expression créative.
          </p>
        </div>

        {/* Artists Profiles */}
        <div ref={artistsRef} className="scroll-reveal">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* THEORA - Grapheur & Réalisme */}
              <div className="group">
                <button 
                  className="relative overflow-hidden rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 mb-6 cursor-context-menu w-full text-left p-0 bg-transparent"
                  onClick={() => setAkiraActive(!akiraActive)}
                  aria-label="Voir plus d'informations sur Akira"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face"
                    alt="Akira - Réalisme"
                    className={`w-full h-[500px] object-cover transition-all duration-500 ${
                      akiraActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0 group-active:grayscale-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge spécialité */}
                  <div className="absolute top-4 right-4 bg-purple/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-bone font-accent text-sm tracking-wider">GRAPHEUR</span>
                  </div>
                  
                  {/* Nom en overlay */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-accent text-bone mb-2">
                      Akira
                    </h3>
                    <div className="flex items-center space-x-3">
                      <FaPalette className="text-purple" />
                      <span className="text-karasu-400 font-body">Grapheur & Tatoueur Réalisme</span>
                    </div>
                  </div>
                </button>

                {/* Informations Akira */}
                <div className="space-y-6">
                  {/* Spécialités */}
                  <div>
                    <h4 className="text-xl font-accent text-bone mb-4 flex items-center">
                      <span className="text-purple kanji-style mr-3">技</span>
                      Spécialités
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="glass-card p-3 text-center">
                        <FaPalette className="text-purple mx-auto mb-2" />
                        <span className="text-sm font-accent text-bone">Réalisme</span>
                      </div>
                      <div className="glass-card p-3 text-center">
                        <FaBrush className="text-purple mx-auto mb-2" />
                        <span className="text-sm font-accent text-bone">Black & White</span>
                      </div>
                    </div>
                  </div>

                  {/* Philosophie */}
                  <div>
                    <h4 className="text-xl font-accent text-bone mb-4 flex items-center">
                      <span className="text-gold kanji-style mr-3">心</span>
                      Approche
                    </h4>
                    <blockquote className="border-l-4 border-purple pl-4 italic text-karasu-400 font-body leading-relaxed text-sm">
                      "Transformer la réalité en art permanent. Chaque tatouage réaliste 
                      capture l'essence et l'émotion avec une précision technique absolue."
                    </blockquote>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col items-center space-y-4">
                    <a
                      href="https://instagram.com/akira_artiste_exemple"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-6 py-3 bg-purple/20 hover:bg-purple border border-purple hover:border-purple rounded-lg text-bone transition-all duration-300 hover-lift group"
                    >
                      <FaInstagram className="group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-accent">@akira_artiste</span>
                    </a>
                    <a
                      href="#gallery"
                      className="inline-flex rounded-lg border border-primary/60 px-3 py-2 text-sm font-accent uppercase tracking-wide"
                    >
                      Voir ses créations
                    </a>
                  </div>
                </div>
              </div>

              {/* KARASU - Japonais */}
              <div className="group">
                <button 
                  className="relative overflow-hidden rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 mb-6 cursor-pointer w-full text-left p-0 bg-transparent"
                  onClick={() => setHiroActive(!hiroActive)}
                  aria-label="Voir plus d'informations sur Hiro"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                    alt="Hiro - Tatoueur Japonais"
                    className={`w-full h-[500px] object-cover transition-all duration-500 ${
                      hiroActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0 group-active:grayscale-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge spécialité */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-bone font-accent text-sm tracking-wider">JAPONAIS</span>
                  </div>
                  
                  {/* Nom en overlay */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-accent text-bone mb-2">
                      Hiro <span className="text-primary kanji-style">龍</span>
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary kanji-style text-xl">鴉</span>
                      <span className="text-karasu-400 font-body">Tatoueur Art Japonais</span>
                    </div>
                  </div>
                </button>

                {/* Informations Hiro */}
                <div className="space-y-6">
                  {/* Spécialités */}
                  <div>
                    <h4 className="text-xl font-accent text-bone mb-4 flex items-center">
                      <span className="text-primary kanji-style mr-3">技</span>
                      Spécialités
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="glass-card p-3 text-center">
                        <span className="text-lg kanji-style text-primary block mb-1">漫</span>
                        <span className="text-sm font-accent text-bone">Manga</span>
                      </div>
                      <div className="glass-card p-3 text-center">
                        <span className="text-lg kanji-style text-purple block mb-1">新</span>
                        <span className="text-sm font-accent text-bone">Neo-Japonais</span>
                      </div>
                      <div className="glass-card p-3 text-center">
                        <span className="text-lg kanji-style text-primary block mb-1">流</span>
                        <span className="text-sm font-accent text-bone">Pop-Culture</span>
                      </div>
                      <div className="glass-card p-3 text-center">
                        <span className="text-lg kanji-style text-gold block mb-1">花</span>
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
                    <blockquote className="border-l-4 border-primary pl-4 italic text-karasu-400 font-body leading-relaxed text-sm">
                      "Fusionner tradition japonaise et modernité. Chaque création raconte 
                      votre histoire à travers l'esthétique intemporelle du Pays du Soleil Levant."
                    </blockquote>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col items-center space-y-4">
                    <a
                      href="https://instagram.com/hiro_artiste_exemple"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-6 py-3 bg-primary/20 hover:bg-primary border border-primary hover:border-primary rounded-lg text-bone transition-all duration-300 hover-lift group"
                    >
                      <FaInstagram className="group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-accent">@hiro_artiste</span>
                    </a>
                    <a
                      href="#gallery"
                      className="inline-flex rounded-lg border border-primary/60 px-3 py-2 text-sm font-accent uppercase tracking-wide"
                    >
                      Voir ses créations
                    </a>
                  </div>
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
                DŌ · NOTRE APPROCHE COMMUNE
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-accent text-bone mb-6">
              Une Méthode <span className="text-primary">Sur-Mesure</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center justify-items-center">
              <div className='flex flex-col items-center'>
                <div className="w-12 h-12 bg-primary border border-primary rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 text-karasu-950 hover:bg-primary/80 hover:text-karasu-950 transition-all duration-300 cursor-context-menu">
                  <span className=" kanji-style text-xl">相</span>
                </div>
                <h4 className="text-bone font-accent mb-2">1. Consultation</h4>
                <p className="text-karasu-400 text-sm font-body">
                  Échange approfondi pour comprendre votre vision et choisir l'artiste adapté.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <div className="w-12 h-12 bg-purple border border-purple rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 text-karasu-950 hover:bg-purple/80 hover:text-karasu-950 transition-all duration-300 cursor-context-menu">
                  <span className=" kanji-style text-xl">創</span>
                </div>
                <h4 className="text-bone font-accent mb-2">2. Création</h4>
                <p className="text-karasu-400 text-sm font-body">
                  Design personnalisé selon le style et l'expertise de votre artiste.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <div className="w-12 h-12 bg-primary border border-primary rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 text-karasu-950 hover:bg-primary/80 hover:text-karasu-950 transition-all duration-300 cursor-context-menu">
                  <span className=" kanji-style text-xl">実</span>
                </div>
                <h4 className="text-bone font-accent mb-2">3. Réalisation</h4>
                <p className="text-karasu-400 text-sm font-body">
                  Tatouage exécuté avec passion, technique et respect de votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;