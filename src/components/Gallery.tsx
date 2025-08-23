import React, { useState, useEffect } from "react";
import { FaExpand } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filters, setFilters] = useState<{
    category?: string;
    artist?: string;
    style?: string;
  }>({});
  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "./images/gallery/grue-japonaise.jpg",
      alt: "Grue Japonaise",
      category: "neo-japonais",
      artist: "Hiro",
      description:
        "Grue traditionnelle japonaise avec fleurs et motifs délicats",
      style: "Neo-japonais traditionnel",
      height: 300,
    },
    {
      id: 2,
      src: "./images/gallery/tatouage-1.jpg",
      alt: "Sakura Minimaliste",
      category: "floral",
      artist: "Hiro",
      description: "Branche de cerisier délicate et épurée",
      style: "Floral japonais",
      height: 250,
    },
    {
      id: 3,
      src: "./images/gallery/tatouage-2.jpg",
      alt: "Oni Black & Grey",
      category: "black-white",
      artist: "Akira",
      description: "Masques Oni traditionnels avec fleurs en noir et gris",
      style: "Black & Grey japonais",
      height: 350,
    },
    {
      id: 4,
      src: "./images/gallery/tatouage-3.jpg",
      alt: "Personnage Pop-Culture",
      category: "pop-culture",
      artist: "Hiro",
      description: "Personnage emblématique de la pop-culture japonaise",
      style: "Style pop moderne",
      height: 200,
    },
    {
      id: 5,
      src: "./images/gallery/allef-vinicius.jpg",
      alt: "Processus Géométrique",
      category: "process",
      artist: "Akira",
      description: "Artiste en pleine création de motifs géométriques tribaux",
      style: "Géométrique moderne",
      height: 325,
    },
    {
      id: 6,
      src: "./images/gallery/benjamin-lehman.jpg",
      alt: "Processus Neo-Japonais",
      category: "process",
      artist: "Hiro",
      description: "Création en cours de tatouage aux nuages traditionnels",
      style: "Neo-japonais en action",
      height: 225,
    },
    {
      id: 7,
      src: "./images/gallery/collins-lesulie-PWK6CeCJtJw-unsplash.jpg",
      alt: "Processus Ornamental",
      category: "process",
      artist: "Akira",
      description: "Artiste tatouant des motifs floraux et ornementaux",
      style: "Processus créatif",
      height: 275,
    },
    {
      id: 8,
      src: "./images/gallery/eduardo-vaccari-pIltvcnqsfU-unsplash.jpg",
      alt: "Pivoines Black & Grey",
      category: "floral",
      artist: "Akira",
      description: "Composition florale avec pivoines et feuillages détaillés",
      style: "Black & Grey réaliste",
      height: 250,
    },
    {
      id: 9,
      src: "./images/gallery/jasmin-chew-WbWOF8z_NGQ-unsplash.jpg",
      alt: "Pivoine Dragon",
      category: "floral",
      artist: "Akira",
      description:
        "Grande pivoine accompagnée de motifs serpentins ornementaux",
      style: "Réalisme floral complexe",
      height: 300,
    },
    {
      id: 10,
      src: "./images/gallery/jj-jordan-eenumTwM6Ec-unsplash.jpg",
      alt: "Mandala Dorsal",
      category: "floral",
      artist: "Hiro",
      description: "Mandala complexe aux motifs floraux géométriques",
      style: "Géométrique ornamental",
      height: 200,
    },
    {
      id: 11,
      src: "./images/gallery/matheus-ferrero-RBsrv4yV5KY-unsplash.jpg",
      alt: "Traditional Américain",
      category: "traditional",
      artist: "Akira",
      description: "Style old-school avec banderole et couleurs vives",
      style: "Traditional américain",
      height: 375,
    },
    {
      id: 12,
      src: "./images/gallery/pexels-photo-2183131.jpeg",
      alt: "Manche Irezumi",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Manche japonaise complète avec koï, cerisiers et nuages",
      style: "Irezumi traditionnel",
      height: 175,
    },
    // Styles d'Akira - Réalisme et Black & White
    {
      id: 13,
      src: "./images/gallery/pexels-photo-8767196.jpeg",
      alt: "Dos Neo-Japonais",
      category: "neo-japonais",
      artist: "Hiro",
      description: "Tatouage du dos aux motifs japonais sous éclairage coloré",
      style: "Neo-japonais contemporain",
      height: 300,
    },
    {
      id: 14,
      src: "./images/gallery/Tatouage_d'une_grue_dans_le_style_japonais_par_l'artiste_tatoueur_Nico_Tatuto_basé_à_Bordeaux.jpg",
      alt: "Tatouage Black & White",
      category: "black-white",
      artist: "Akira",
      description: "Création en noir et blanc aux contrastes parfaits",
      style: "Black & White artistique",
      height: 250,
    },
    {
      id: 15,
      src: "./images/gallery/tatouage-1.jpg",
      alt: "Portrait Expressif",
      category: "realisme",
      artist: "Akira",
      description: "Portrait capturant l'émotion avec précision",
      style: "Réalisme expressif",
      height: 200,
    },
    {
      id: 16,
      src: "./images/gallery/tatouage-2.jpg",
      alt: "Graphisme Noir & Blanc",
      category: "black-white",
      artist: "Akira",
      description: "Design graphique en monochrome",
      style: "Graphisme B&W",
      height: 275,
    },
  ];

  const categories = [
    { id: "all", name: "Tous", kanji: "全", color: "text-bone" },
    { id: "floral", name: "Floral", kanji: "花", color: "text-emerald" },
    { id: "realisme", name: "Réalisme", kanji: "実", color: "text-purple" },
    { id: "traditional", name: "Traditional", kanji: "古", color: "text-gold" },
    { id: "process", name: "Processus", kanji: "工", color: "text-teal" },
    {
      id: "neo-japonais",
      name: "Neo-Japonais",
      kanji: "新",
      color: "text-primary",
    },
    {
      id: "black-white",
      name: "Black & White",
      kanji: "白黒",
      color: "text-karasu-300",
    },
  ];

  const filteredImages = images.filter(
    (img) =>
      (!filters.category || img.category === filters.category) &&
      (!filters.artist || img.artist === filters.artist) &&
      (!filters.style || img.style === filters.style) &&
      (selectedCategory === "all" || img.category === selectedCategory)
  );

  // Pré-filtrage via hash URL (depuis les liens artistes)
  useEffect(() => {
    const [, query] = window.location.hash.split("?");
    if (!query) return;
    const params = new URLSearchParams(query);
    const artist = params.get("artist") || undefined;
    setFilters((f) => ({ ...f, artist }));
  }, []);

  const openModal = (image: GalleryImage) => {
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

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  // Effet clavier pour navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

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
      id="gallery"
      className="py-20 bg-gradient-to-bl from-karasu-800 via-karasu-900 to-karasu-900 relative overflow-hidden"
    >
      {/* Kanji géants d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="kanji-giant kanji-giant-colossal kanji-sans text-teal absolute top-1/4 -left-48 kanji-float-3"
          style={{ "--rotation": "6deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-xs kanji-decorative text-purple absolute top-20 right-20 kanji-float-1"
          style={{ "--rotation": "-12deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-huge kanji-serif text-gold absolute -bottom-40 right-1/4 kanji-float-4"
          style={{ "--rotation": "25deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-sm kanji-sans text-primary absolute bottom-24 left-1/5 kanji-float-2"
          style={{ "--rotation": "-18deg" } as React.CSSProperties}
        >
          鴉
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Découvrez les styles maîtrisés par nos artistes. Hiro excelle dans
            l'art japonais, Akira dans le réalisme et le black & white.
          </p>

          {/* Filtres avancés */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                className={`px-3 py-1 rounded-full border text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  filters.category === "floral"
                    ? "bg-primary text-karasu-950"
                    : "text-bone border-karasu-700 hover:border-primary"
                }`}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    category: f.category === "floral" ? undefined : "floral",
                  }))
                }
              >
                Floral
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  filters.category === "process"
                    ? "bg-primary text-karasu-950"
                    : "text-bone border-karasu-700 hover:border-primary"
                }`}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    category: f.category === "process" ? undefined : "process",
                  }))
                }
              >
                Processus
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  filters.category === "traditional"
                    ? "bg-primary text-karasu-950"
                    : "text-bone border-karasu-700 hover:border-primary"
                }`}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    category:
                      f.category === "traditional" ? undefined : "traditional",
                  }))
                }
              >
                Traditional
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  filters.artist === "Hiro"
                    ? "bg-primary text-karasu-950"
                    : "text-bone border-karasu-700 hover:border-primary"
                }`}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    artist: f.artist === "Hiro" ? undefined : "Hiro",
                  }))
                }
              >
                Hiro
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  filters.artist === "Akira"
                    ? "bg-primary text-karasu-950"
                    : "text-bone border-karasu-700 hover:border-primary"
                }`}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    artist: f.artist === "Akira" ? undefined : "Akira",
                  }))
                }
              >
                Akira
              </button>
              <button
                className={`px-3 py-1 rounded-full border text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  filters.style === "Réalisme"
                    ? "bg-primary text-karasu-950"
                    : "text-bone border-karasu-700 hover:border-primary"
                }`}
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    style: f.style === "Réalisme" ? undefined : "Réalisme",
                  }))
                }
              >
                Réalisme
              </button>
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-full font-accent text-sm tracking-wider uppercase transition-all duration-300 hover-tilt cursor-pointer
                   ${
                     selectedCategory === category.id
                       ? `bg-gradient-to-r from-primary to-purple text-bone soft-glow`
                       : "bg-karasu-700/50 text-karasu-300 hover:bg-gradient-to-r hover:from-karasu-600 hover:to-karasu-500 hover:text-bone border border-karasu-600"
                   }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span
                    className={`kanji-style text-lg transition-colors duration-300 ${
                      selectedCategory === category.id
                        ? "text-bone"
                        : category.color
                    }`}
                  >
                    {category.kanji}
                  </span>
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                  <h3 className="text-bone font-accent text-lg mb-1">
                    {image.alt}
                  </h3>
                  <p className="text-primary text-sm font-body mb-2">
                    {image.style}
                  </p>
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
              Vous avez un projet de tatouage en tête ? Nos artistes sont là
              pour donner vie à vos idées.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary via-purple to-emerald hover:from-emerald hover:via-purple hover:to-primary text-bone font-accent text-lg tracking-wider uppercase transition-all duration-500 hover-lift soft-glow overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Commencer votre projet</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
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
            if (e.key === "ArrowRight") navigateImage("next");
            if (e.key === "ArrowLeft") navigateImage("prev");
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

export default Gallery;
