import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const headerRef = useScrollReveal();
  const carouselRef = useScrollReveal();

  // Images du portfolio général "en vrac"
  const portfolioImages: PortfolioImage[] = [
    {
      id: 1,
      src: "./images/gallery/grue-japonaise.jpg",
      alt: "Grue Japonaise",
      description: "Tatouage d'une grue dans le style japonais traditionnel"
    },
    {
      id: 2,
      src: "./images/gallery/allef-vinicius.jpg",
      alt: "Tatouage Artistique", 
      description: "Création délicate aux détails minutieux"
    },
    {
      id: 3,
      src: "./images/gallery/benjamin-lehman.jpg",
      alt: "Tatouage Complexe",
      description: "Tatouage complexe aux détails minutieux"
    },
    {
      id: 4,
      src: "./images/gallery/collins-lesulie-PWK6CeCJtJw-unsplash.jpg",
      alt: "Style Contemporain",
      description: "Style contemporain avec influences culturelles"
    },
    {
      id: 5,
      src: "./images/gallery/eduardo-vaccari-pIltvcnqsfU-unsplash.jpg",
      alt: "Art Traditionnel",
      description: "Fusion harmonieuse entre art traditionnel et vision moderne"
    },
    {
      id: 6,
      src: "./images/gallery/jasmin-chew-WbWOF8z_NGQ-unsplash.jpg",
      alt: "Création Personnalisée",
      description: "Création personnalisée reflétant l'univers du client"
    },
    {
      id: 7,
      src: "./images/gallery/jj-jordan-eenumTwM6Ec-unsplash.jpg",
      alt: "Œuvre Colorée",
      description: "Œuvre colorée aux techniques mixtes"
    },
    {
      id: 8,
      src: "./images/gallery/matheus-ferrero-RBsrv4yV5KY-unsplash.jpg",
      alt: "Design Dynamique",
      description: "Design dynamique et expression artistique forte"
    },
    {
      id: 9,
      src: "./images/gallery/pexels-photo-2183131.jpeg",
      alt: "Tatouage Réaliste",
      description: "Tatouage hyperréaliste aux détails saisissants"
    },
    {
      id: 10,
      src: "./images/gallery/pexels-photo-8767196.jpeg",
      alt: "Art Corporel",
      description: "Expression artistique sur toile vivante"
    }
  ];

  // Navigation automatique du carrousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [portfolioImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? portfolioImages.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const openModal = (image: PortfolioImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Navigation clavier pour le modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % portfolioImages.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + portfolioImages.length) % portfolioImages.length);
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, portfolioImages.length]);

  return (
    <section id="portfolio" className="py-20 bg-karasu-900 japanese-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 scroll-reveal">
          <div className="mb-4">
            <span className="text-3xl kanji-style text-gold">雑</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              ZATSU · RÉALISATIONS EN VRAC
            </div>
          </div>
          <p className="text-lg text-karasu-300 max-w-2xl mx-auto leading-relaxed font-body">
            Un aperçu de mes diverses créations artistiques
          </p>
        </div>

        {/* Carrousel */}
        <div ref={carouselRef} className="scroll-reveal max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg border border-karasu-600">
            {/* Images principales */}
            <div className="relative h-[500px] md:h-[600px]">
              {portfolioImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-karasu-950/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay avec infos */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-accent text-bone mb-3">
                        {image.alt}
                      </h3>
                      <p className="text-karasu-200 font-body leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* Bouton zoom */}
                  <button
                    onClick={() => openModal(image)}
                    className="absolute top-4 right-4 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
                  >
                    <FaExpand size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Contrôles de navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-karasu-600 hover:bg-karasu-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Miniatures */}
          <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-2">
            {portfolioImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square overflow-hidden rounded border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-primary scale-105' 
                    : 'border-karasu-600 hover:border-karasu-500'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setSelectedImage(null);
            if (e.key === 'ArrowRight') setCurrentIndex((i) => (i + 1) % portfolioImages.length);
            if (e.key === 'ArrowLeft') setCurrentIndex((i) => (i - 1 + portfolioImages.length) % portfolioImages.length);
          }}
          tabIndex={-1}
        >
          <button className="absolute top-4 right-4 text-bone" onClick={() => setSelectedImage(null)} aria-label="Fermer">✕</button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;