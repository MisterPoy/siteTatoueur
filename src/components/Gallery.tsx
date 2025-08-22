import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  artist: string;
  description: string;
  style: string;
  height: number; // Pour la masonry
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "./images/gallery/grue-japonaise.jpg",
      alt: "Dragon Manga",
      category: "manga",
      artist: "Hiro",
      description: "Dragon stylisé inspiré du manga japonais",
      style: "Style manga moderne",
      height: 300
    },
    {
      id: 2,
      src: "./images/gallery/tatouage-1.jpg",
      alt: "Sakura Minimaliste",
      category: "floral",
      artist: "Hiro",
      description: "Branche de cerisier délicate et épurée",
      style: "Floral japonais",
      height: 250
    },
    {
      id: 3,
      src: "./images/gallery/tatouage-2.jpg",
      alt: "Carpe Koi",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Koi nageant dans les vagues traditionnelles",
      style: "Neo-japonais traditionnel",
      height: 350
    },
    {
      id: 4,
      src: "./images/gallery/tatouage-3.jpg",
      alt: "Personnage Pop-Culture",
      category: "pop-culture",
      artist: "Hiro",
      description: "Personnage emblématique de la pop-culture japonaise",
      style: "Style pop moderne",
      height: 200
    },
    {
      id: 5,
      src: "./images/gallery/allef-vinicius.jpg",
      alt: "Yokai Moderne",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Créature mythologique style manga",
      style: "Neo-japonais",
      height: 325
    },
    {
      id: 6,
      src: "./images/gallery/benjamin-lehman.jpg",
      alt: "Calligraphie Artistique",
      category: "pop-culture",
      artist: "Hiro",
      description: "Caractères japonais stylisés",
      style: "Pop-culture japonaise",
      height: 225
    },
    {
      id: 7,
      src: "./images/gallery/collins-lesulie-PWK6CeCJtJw-unsplash.jpg",
      alt: "Oni Traditionnel",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Masque de démon japonais coloré",
      style: "Neo-japonais coloré",
      height: 275
    },
    {
      id: 8,
      src: "./images/gallery/eduardo-vaccari-pIltvcnqsfU-unsplash.jpg",
      alt: "Héros Manga",
      category: "manga",
      artist: "Hiro",
      description: "Héros de manga dans un style moderne et dynamique",
      style: "Style manga moderne",
      height: 250
    },
    {
      id: 9,
      src: "./images/gallery/jasmin-chew-WbWOF8z_NGQ-unsplash.jpg",
      alt: "Héros Manga",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Personnage d'animation stylisé",
      style: "Neo-japonais contemporain",
      height: 300
    },
    {
      id: 10,
      src: "./images/gallery/jj-jordan-eenumTwM6Ec-unsplash.jpg",
      alt: "Lotus Zen",
      category: "floral",
      artist: "Hiro",
      description: "Fleur de lotus en trait unique",
      style: "Floral minimaliste",
      height: 200
    },
    {
      id: 11,
      src: "./images/gallery/matheus-ferrero-RBsrv4yV5KY-unsplash.jpg",
      alt: "Phoenix Irezumi",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Oiseau légendaire aux couleurs vives",
      style: "Neo-japonais majestueux",
      height: 375
    },
    {
      id: 12,
      src: "./images/gallery/pexels-photo-2183131.jpeg",
      alt: "Mandala Japonais",
      category: "floral",
      artist: "Hiro",
      description: "Motifs circulaires traditionnels",
      style: "Floral géométrique",
      height: 175
    },
    // Styles d'Akira - Réalisme et Black & White
    {
      id: 13,
      src: "./images/gallery/pexels-photo-8767196.jpeg",
      alt: "Portrait Réaliste",
      category: "realisme",
      artist: "Akira",
      description: "Portrait réaliste aux détails saisissants",
      style: "Réalisme photographique",
      height: 300
    },
    {
      id: 14,
      src: "./images/gallery/Tatouage_d'une_grue_dans_le_style_japonais_par_l'artiste_tatoueur_Nico_Tatuto_basé_à_Bordeaux.jpg",
      alt: "Tatouage Black & White",
      category: "black-white",
      artist: "Akira",
      description: "Création en noir et blanc aux contrastes parfaits",
      style: "Black & White artistique",
      height: 250
    },
    {
      id: 15,
      src: "./images/gallery/tatouage-1.jpg",
      alt: "Portrait Expressif",
      category: "realisme",
      artist: "Akira",
      description: "Portrait capturant l'émotion avec précision",
      style: "Réalisme expressif",
      height: 200
    },
    {
      id: 16,
      src: "./images/gallery/tatouage-2.jpg",
      alt: "Graphisme Noir & Blanc",
      category: "black-white",
      artist: "Akira",
      description: "Design graphique en monochrome",
      style: "Graphisme B&W",
      height: 275
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous', kanji: '全', color: 'text-bone' },
    { id: 'manga', name: 'Manga', kanji: '漫', color: 'text-primary' },
    { id: 'neo-japonais', name: 'Neo-Japonais', kanji: '新', color: 'text-purple' },
    { id: 'pop-culture', name: 'Pop-Culture', kanji: '流', color: 'text-teal' },
    { id: 'floral', name: 'Floral', kanji: '花', color: 'text-emerald' },
    { id: 'realisme', name: 'Réalisme', kanji: '実', color: 'text-purple' },
    { id: 'black-white', name: 'Black & White', kanji: '白黒', color: 'text-karasu-300' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Effet clavier pour navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-karasu-800 japanese-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-gold">作品</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              SAKUHIN · MES SPÉCIALITÉS
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            Nos <span className="text-primary brush-stroke">Spécialités</span>
          </h2>
          <p className="text-lg text-karasu-300 max-w-3xl mx-auto leading-relaxed font-body mb-8">
            Découvrez les styles maîtrisés par nos artistes. Hiro excelle dans l'art japonais, 
            Akira dans le réalisme et le black & white.
          </p>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-full font-accent text-sm tracking-wider uppercase transition-all duration-300 hover-tilt ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r from-primary to-purple text-bone soft-glow`
                    : 'bg-karasu-700/50 text-karasu-300 hover:bg-gradient-to-r hover:from-karasu-600 hover:to-karasu-500 hover:text-bone border border-karasu-600'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span className={`kanji-style text-lg transition-colors duration-300 ${
                    selectedCategory === category.id ? 'text-bone' : category.color
                  }`}>{category.kanji}</span>
                  <span>{category.name}</span>
                </span>
                {selectedCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-teal/20 to-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grille Masonry */}
        <div className="masonry-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="masonry-item group cursor-pointer"
              onClick={() => openModal(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg border border-karasu-600 hover-lift bg-karasu-900">
                <div 
                  className="relative overflow-hidden"
                  style={{ height: `${image.height}px` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay avec effet */}
                  <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaExpand className="text-bone text-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Infos de l'image */}
                <div className="p-4 bg-karasu-900/80 backdrop-blur-sm">
                  <h3 className="text-bone font-accent text-lg mb-1">{image.alt}</h3>
                  <p className="text-primary text-sm font-body mb-2">{image.style}</p>
                  <p className="text-karasu-300 text-xs">Par {image.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-20 scroll-reveal">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="mb-4">
              <span className="text-3xl kanji-style text-primary">夢</span>
              <div className="text-sm font-accent text-karasu-400 tracking-widest mt-1">
                YUME · RÉALISEZ VOS RÊVES
              </div>
            </div>
            <p className="text-karasu-200 mb-6 font-body">
              Vous avez un projet de tatouage en tête ? 
              Nos artistes sont là pour donner vie à vos idées.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary via-purple to-emerald hover:from-emerald hover:via-purple hover:to-primary text-bone font-accent text-lg tracking-wider uppercase transition-all duration-500 hover-lift soft-glow overflow-hidden"
            >
              <span className="relative z-10">Commencer votre projet</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-karasu-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Boutons de contrôle */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button
                onClick={closeModal}
                className="w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Navigation */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaChevronLeft size={16} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Contenu du modal */}
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Image */}
                <div className="lg:col-span-2">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-[60vh] lg:h-[70vh] object-cover"
                  />
                </div>
                
                {/* Informations */}
                <div className="p-8 bg-karasu-900 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-accent text-bone mb-3">{selectedImage.alt}</h3>
                    <p className="text-primary font-body text-lg mb-2">{selectedImage.style}</p>
                    <p className="text-karasu-300 font-body">Artiste : {selectedImage.artist}</p>
                  </div>
                  
                  <p className="text-karasu-200 leading-relaxed font-body mb-6">
                    {selectedImage.description}
                  </p>
                  
                  <div className="border-t border-karasu-700 pt-4">
                    <div className="flex items-center justify-between text-sm text-karasu-400">
                      <span>Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}</span>
                      <span className="font-accent tracking-wider">ESC pour fermer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;