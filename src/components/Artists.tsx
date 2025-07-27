import React, { useState } from 'react';
import { FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Artist {
  id: number;
  name: string;
  japanese_name: string;
  specialty: string;
  experience: string;
  description: string;
  philosophy: string;
  image: string;
  instagram: string;
  signature_style: string;
}

const Artists: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const artists: Artist[] = [
    {
      id: 1,
      name: "Hiroshi Tanaka",
      japanese_name: "田中寛",
      specialty: "Irezumi Traditionnel",
      experience: "15 ans d'expérience",
      signature_style: "Dragon & Koi",
      description: "Maître dans l'art de l'irezumi, Hiroshi perpétue la tradition japonaise millénaire du tatouage avec une précision et un respect ancestral.",
      philosophy: "Chaque trait raconte une histoire, chaque ombre porte une âme.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      instagram: "@hiroshi.irezumi"
    },
    {
      id: 2,
      name: "Akira Sato",
      japanese_name: "佐藤明",
      specialty: "Neo-Japonais & Manga",
      experience: "8 ans d'expérience",
      signature_style: "Yokai & Personnages",
      description: "Artiste de la nouvelle génération, Akira fusionne l'esthétique manga moderne avec les codes traditionnels japonais.",
      philosophy: "L'innovation naît du respect des traditions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
      instagram: "@akira.neo.ink"
    },
    {
      id: 3,
      name: "Yuki Nakamura",
      japanese_name: "中村雪",
      specialty: "Fleurs & Minimalisme",
      experience: "10 ans d'expérience",
      signature_style: "Sakura & Calligraphie",
      description: "Spécialiste de la beauté délicate, Yuki crée des œuvres d'une finesse exceptionnelle inspirées de la nature japonaise.",
      philosophy: "Dans la simplicité se trouve la perfection.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=500&h=600&fit=crop&crop=face",
      instagram: "@yuki.sakura.art"
    },
    {
      id: 4,
      name: "Ryu Yamamoto",
      japanese_name: "山本龍",
      specialty: "Blackwork & Géométrie",
      experience: "12 ans d'expérience",
      signature_style: "Motifs Zen & Abstraits",
      description: "Maître du contraste et de l'espace négatif, Ryu explore les frontières entre tradition et modernité avec ses créations épurées.",
      philosophy: "Le vide donne sens au plein, l'ombre révèle la lumière.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=face",
      instagram: "@ryu.blackwork"
    }
  ];

  const nextArtist = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length);
  };

  const prevArtist = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
  };

  const currentArtist = artists[currentIndex];

  return (
    <section id="artists" className="py-20 bg-karasu-900 japanese-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-primary">職人</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              SHOKUNIN · LES MAÎTRES ARTISANS
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            Nos <span className="text-primary brush-stroke">Artistes</span>
          </h2>
          <p className="text-lg text-karasu-300 max-w-3xl mx-auto leading-relaxed font-body">
            Découvrez nos maîtres tatoueurs, chacun porteur d'une vision unique 
            de l'art japonais traditionnel et contemporain.
          </p>
        </div>

        {/* Carrousel Principal */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="glass-card p-8 lg:p-12 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image de l'artiste */}
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-karasu-700 relative group">
                  <img
                    src={currentArtist.image}
                    alt={currentArtist.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/80 via-transparent to-transparent"></div>
                  
                  {/* Nom japonais superposé */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl kanji-style text-bone text-shadow-dark">
                      {currentArtist.japanese_name}
                    </div>
                  </div>
                </div>
                
                {/* Style signature */}
                <div className="mt-4 text-center">
                  <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                    <span className="text-primary font-accent text-sm tracking-wider">
                      {currentArtist.signature_style}
                    </span>
                  </div>
                </div>
              </div>

              {/* Informations de l'artiste */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-accent text-bone mb-2">
                    {currentArtist.name}
                  </h3>
                  <p className="text-primary font-body text-lg mb-1">
                    {currentArtist.specialty}
                  </p>
                  <p className="text-karasu-400 text-sm">
                    {currentArtist.experience}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-karasu-200 leading-relaxed font-body">
                    {currentArtist.description}
                  </p>
                  
                  {/* Philosophie */}
                  <div className="border-l-3 border-primary pl-4 py-2 bg-karasu-800/30">
                    <p className="text-bone italic font-accent text-sm">
                      "{currentArtist.philosophy}"
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${currentArtist.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-karasu-300 hover:text-primary transition-colors duration-300 group"
                >
                  <FaInstagram className="text-xl" />
                  <span className="font-accent tracking-wider">
                    {currentArtist.instagram}
                  </span>
                  <div className="w-0 group-hover:w-8 h-px bg-primary transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevArtist}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone hover:text-bone transition-all duration-300 hover-lift"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextArtist}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone hover:text-bone transition-all duration-300 hover-lift"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Miniatures des autres artistes */}
        <div className="flex justify-center space-x-4">
          {artists.map((artist, index) => (
            <button
              key={artist.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-16 h-20 overflow-hidden rounded border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-primary scale-110'
                  : 'border-karasu-600 hover:border-karasu-400 opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover grayscale"
              />
            </button>
          ))}
        </div>

        {/* Studio Philosophy */}
        <div className="mt-20 text-center scroll-reveal">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-3xl kanji-style text-gold">和</span>
              <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
                WA · HARMONIE & RESPECT
              </div>
            </div>
            <p className="text-karasu-200 text-lg leading-relaxed font-body mb-6">
              Chez Karasu Ink, nous honorons la tradition millénaire du tatouage japonais 
              tout en embrassant l'innovation contemporaine. Chaque artiste apporte sa vision unique, 
              créant un équilibre parfait entre respect ancestral et créativité moderne.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-karasu-400 font-accent tracking-wider">
              <span>尊敬 · Respect</span>
              <span>•</span>
              <span>精密 · Précision</span>
              <span>•</span>
              <span>創造 · Création</span>
              <span>•</span>
              <span>美学 · Esthétique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;