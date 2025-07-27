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
      src: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&h=800&fit=crop",
      alt: "Réalisation #1",
      description: "Création artistique unique mêlant tradition et modernité"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=800&fit=crop",
      alt: "Réalisation #2", 
      description: "Œuvre délicate inspirée de l'esthétique japonaise"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop",
      alt: "Réalisation #3",
      description: "Tatouage complexe aux détails minutieux"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=800&fit=crop",
      alt: "Réalisation #4",
      description: "Style contemporain avec influences culturelles"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=800&fit=crop",
      alt: "Réalisation #5",
      description: "Fusion harmonieuse entre art traditionnel et vision moderne"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&h=800&fit=crop",
      alt: "Réalisation #6",
      description: "Création personnalisée reflétant l'univers du client"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1588776814546-daab30c310ce?w=600&h=800&fit=crop",
      alt: "Réalisation #7",
      description: "Œuvre colorée aux techniques mixtes"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1594736797933-d0fce9e2bbf7?w=600&h=800&fit=crop",
      alt: "Réalisation #8",
      description: "Design dynamique et expression artistique forte"
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
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

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
        <div className="fixed inset-0 bg-karasu-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaExpand size={16} className="rotate-45" />
            </button>

            {/* Image */}
            <div className="glass-card overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-karasu-900">
                <h3 className="text-2xl font-accent text-bone mb-2">
                  {selectedImage.alt}
                </h3>
                <p className="text-karasu-200 font-body">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;