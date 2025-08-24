import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(
    null
  );
  const headerRef = useScrollReveal();
  const carouselRef = useScrollReveal();

  // Images du portfolio général "en vrac"
  const portfolioImages: PortfolioImage[] = [
    {
      id: 1,
      src: "./images/gallery/grue-japonaise.webp",
      alt: "Grue Japonaise Traditionnelle",
      description: "Grue authentique avec fleurs délicates dans l'art japonais",
    },
    {
      id: 2,
      src: "./images/gallery/allef-vinicius.webp",
      alt: "Processus Créatif",
      description: "Création de motifs géométriques en cours de réalisation",
    },
    {
      id: 3,
      src: "./images/gallery/benjamin-lehman.webp",
      alt: "Techniques Avancées",
      description:
        "Maîtrise technique dans l'art du tatouage traditionnel japonais",
    },
    {
      id: 4,
      src: "./images/gallery/collins-lesulie-PWK6CeCJtJw-unsplash.webp",
      alt: "Précision Artistique",
      description: "Précision et minutie dans chaque trait et détail",
    },
    {
      id: 5,
      src: "./images/gallery/eduardo-vaccari-pIltvcnqsfU-unsplash.webp",
      alt: "Réalisme Floral",
      description: "Composition florale black & grey aux détails saisissants",
    },
    {
      id: 6,
      src: "./images/gallery/jasmin-chew-WbWOF8z_NGQ-unsplash.webp",
      alt: "Maîtrise Ornementale",
      description: "Création complexe mêlant motifs floraux et ornementaux",
    },
    {
      id: 7,
      src: "./images/gallery/jj-jordan-eenumTwM6Ec-unsplash.webp",
      alt: "Géométrie Sacrée",
      description: "Mandala aux motifs géométriques parfaitement équilibrés",
    },
    {
      id: 8,
      src: "./images/gallery/matheus-ferrero-RBsrv4yV5KY-unsplash.webp",
      alt: "Style Traditional",
      description: "Hommage au tatouage old-school américain authentique",
    },
    {
      id: 9,
      src: "./images/gallery/pexels-photo-2183131.webp",
      alt: "Manche Irezumi Complète",
      description:
        "Réalisation d'une manche japonaise traditionnelle authentique",
    },
    {
      id: 10,
      src: "./images/gallery/pexels-photo-8767196.jpeg",
      alt: "Art Japonais Contemporain",
      description: "Fusion moderne de l'art traditionnel japonais",
    },
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
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const openModal = (image: PortfolioImage) => {
    setSelectedImage(image);
    // Sauvegarder l'état original du body
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.setAttribute("data-original-overflow", originalStyle);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restaurer l'état original ou auto par défaut
    const originalOverflow =
      document.body.getAttribute("data-original-overflow") || "auto";
    document.body.style.overflow = originalOverflow;
    document.body.removeAttribute("data-original-overflow");

    // Force le navigateur à recalculer le scroll
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 50);
  };

  // Navigation clavier pour le modal
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setCurrentIndex((i) => (i + 1) % portfolioImages.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex(
          (i) => (i - 1 + portfolioImages.length) % portfolioImages.length
        );
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, portfolioImages.length]);

  // Cleanup au démontage du composant
  useEffect(() => {
    return () => {
      // S'assurer que le scroll est restauré si le composant se démonte avec modal ouverte
      if (selectedImage) {
        document.body.style.overflow = "";
        document.body.removeAttribute("data-original-overflow");
      }
    };
  }, [selectedImage]);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-karasu-900 via-karasu-950 to-karasu-900 relative overflow-hidden"
    >
      {/* Kanji géants d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="kanji-giant kanji-giant-colossal kanji-sans text-primary absolute -top-40 -right-48 kanji-float-1"
          style={{ "--rotation": "12deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-xs kanji-serif text-karasu-400 absolute bottom-40 left-20 kanji-float-2"
          style={{ "--rotation": "-8deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-sm kanji-sans text-gold absolute top-3/4 right-16 kanji-float-4"
          style={{ "--rotation": "-15deg" } as React.CSSProperties}
        >
          鴉
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 scroll-reveal">
          <div className="mb-4">
            <span className="text-3xl kanji-style text-gold">雑</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              ZATSU · RÉALISATIONS EN VRAC
            </div>
          </div>
          <p className="text-lg text-karasu-400 max-w-2xl mx-auto leading-relaxed font-body">
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
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
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
                      <p className="text-karasu-400 font-body leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* Bouton zoom */}
                  <button
                    onClick={() => openModal(image)}
                    className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone  opacity-35 hover:opacity-65 hover:scale-120 cursor-pointer transition-all duration-300 hover-lift "
                  >
                    <FaExpand size={38} />
                  </button>
                </div>
              ))}
            </div>

            {/* Contrôles de navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift cursor-pointer"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-karasu-800/80 hover:bg-primary border border-karasu-600 rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift cursor-pointer"
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
                      ? "bg-primary scale-125"
                      : "bg-karasu-600 hover:bg-karasu-400"
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
                    ? "border-primary scale-105"
                    : "border-karasu-600 hover:border-karasu-400"
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
            if (e.key === "Escape") setSelectedImage(null);
            if (e.key === "ArrowRight")
              setCurrentIndex((i) => (i + 1) % portfolioImages.length);
            if (e.key === "ArrowLeft")
              setCurrentIndex(
                (i) => (i - 1 + portfolioImages.length) % portfolioImages.length
              );
          }}
          tabIndex={-1}
        >
          <button
            className="absolute top-4 right-4 text-bone"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer"
          >
            ✕
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
