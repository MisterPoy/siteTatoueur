import React, { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  artist: string;
  style: string;
  duration: string;
  avatar: string;
  highlight: string;
}

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const [isPaused, setIsPaused] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<number | null>(null);
  const scrollPositionRef = React.useRef(0);

  const testimonials: Testimonial[] = [
    {
      name: "Alex M.",
      text: "Akira a réalisé un portrait réaliste qui dépasse mes attentes. Détails incroyables, hygiène irréprochable et suivi parfait. 3 mois après, les couleurs éclatent toujours !",
      rating: 5,
      artist: "Akira",
      style: "Réalisme",
      duration: "4h",
      avatar: "A",
      highlight: "Hygiène irréprochable",
    },
    {
      name: "Sarah L.",
      text: "Premier tatouage avec Hiro, expérience magique ! Adaptation parfaite en style japonais. Studio ultra propre, matériel stérilisé devant moi. Je recommande !",
      rating: 5,
      artist: "Hiro",
      style: "Japonais traditionnel",
      duration: "6h",
      avatar: "S",
      highlight: "Premier tatouage réussi",
    },
    {
      name: "Marc D.",
      text: "Cover-up transformé en chef-d'œuvre par Akira ! Vieux tattoo raté devenu pièce dont je suis fier. Professionnel, à l'écoute, résultat bluffant.",
      rating: 5,
      artist: "Akira",
      style: "Cover-up réalisme",
      duration: "8h",
      avatar: "M",
      highlight: "Transformation réussie",
    },
    {
      name: "Émilie R.",
      text: "Floral délicat sur avant-bras. Hiro a compris et sublimé ma vision. Technique ligne fine impressionnante, douleur supportable. Cicatrisation parfaite !",
      rating: 5,
      artist: "Hiro",
      style: "Floral ligne fine",
      duration: "3h",
      avatar: "E",
      highlight: "Technique exceptionnelle",
    },
    {
      name: "Thomas B.",
      text: "Manche japonaise en cours depuis 1 an. Chaque séance un plaisir, design parfaitement cohérent. Studio zen, artiste passionné qui explique tout.",
      rating: 5,
      artist: "Hiro",
      style: "Manche japonaise",
      duration: "Sessions multiples",
      avatar: "T",
      highlight: "Projet long terme",
    },
    {
      name: "Léa K.",
      text: "Memento black & grey d'une finesse inouïe par Akira. Il a traduit mes émotions avec sensibilité. Résultat : larmes de joie, tattoo qui raconte mon histoire.",
      rating: 5,
      artist: "Akira",
      style: "Black & Grey",
      duration: "5h",
      avatar: "L",
      highlight: "Émotion capturée",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? "text-gold" : "text-karasu-600"}`}
      />
    ));
  };

  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Double pour boucle
  const cardWidth = 326; // width + gap
  const resetPoint = testimonials.length * cardWidth;

  // Animation continue
  useEffect(() => {
    if (!containerRef.current) return;

    const scrollSpeed = 0.5; // pixels par frame

    const animate = () => {
      if (!isPaused && !isManualControl && containerRef.current) {
        scrollPositionRef.current += scrollSpeed;

        // Reset invisible à la fin du premier set
        if (scrollPositionRef.current >= resetPoint) {
          scrollPositionRef.current = 0;
        }

        containerRef.current.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isManualControl, resetPoint]);

  // Contrôles manuels avec boucle infinie
  const scrollNext = () => {
    if (!containerRef.current) return;
    setIsManualControl(true);

    let newPosition = scrollPositionRef.current + cardWidth;

    // Si on dépasse la fin, on recommence au début (boucle infinie)
    if (newPosition >= resetPoint) {
      newPosition = 0;
    }

    scrollPositionRef.current = newPosition;
    containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });

    // Reprendre l'auto-scroll après 5 secondes
    setTimeout(() => setIsManualControl(false), 5000);
  };

  const scrollPrev = () => {
    if (!containerRef.current) return;
    setIsManualControl(true);

    let newPosition = scrollPositionRef.current - cardWidth;

    // Si on va avant le début, on va à la fin (boucle infinie)
    if (newPosition < 0) {
      newPosition = resetPoint - cardWidth;
    }

    scrollPositionRef.current = newPosition;
    containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });

    // Reprendre l'auto-scroll après 5 secondes
    setTimeout(() => setIsManualControl(false), 5000);
  };

  const toggleAutoScroll = () => {
    setIsPaused(!isPaused);
    setIsManualControl(false);
  };

  // Pause au hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    if (!isManualControl) setIsPaused(false);
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-karasu-900 to-karasu-800 relative overflow-hidden"
    >
      {/* Kanji géants d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="kanji-giant kanji-giant-colossal kanji-serif text-primary absolute top-1/4 -right-48 kanji-float-4"
          style={{ "--rotation": "20deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-xs kanji-sans text-primary absolute top-20 left-20 kanji-float-1"
          style={{ "--rotation": "-10deg" } as React.CSSProperties}
        >
          鴉
        </div>
        <div
          className="kanji-giant kanji-giant-lg kanji-decorative text-gold absolute -bottom-32 left-1/4 kanji-float-5"
          style={{ "--rotation": "16deg" } as React.CSSProperties}
        >
          鴉
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header avec kanji */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-gold animate-float">
              評
            </span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              HYŌKA · TÉMOIGNAGES
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-accent text-bone mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-karasu-400 max-w-2xl mx-auto">
            Plus de 500 tatouages réalisés, des clients satisfaits qui partagent
            leur expérience unique chez Ink Ritual Tattoo
          </p>
        </div>

        {/* Testimonials carousel */}
        <div ref={testimonialsRef} className="scroll-reveal">
          {/* Contrôles */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="témoignage précédent"
              className="w-12 h-12 bg-karasu-800 hover:bg-primary border border-karasu-600 hover:border-primary rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift group cursor-pointer"
            >
              <FaChevronLeft
                size={16}
                className="group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
            </button>

            {/* Pagination dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsManualControl(true);
                    const targetPosition = i * cardWidth;
                    scrollPositionRef.current = targetPosition;
                    if (containerRef.current) {
                      containerRef.current.scrollTo({
                        left: targetPosition,
                        behavior: "smooth",
                      });
                    }
                    setTimeout(() => setIsManualControl(false), 5000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    Math.round(scrollPositionRef.current / cardWidth) === i
                      ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                      : "bg-karasu-600 hover:bg-karasu-400"
                  }`}
                  aria-label={`Aller au témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={toggleAutoScroll}
              className="w-12 h-12 bg-karasu-800 hover:bg-gold border border-karasu-600 hover:border-gold rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift group cursor-pointer"
              aria-label={
                isPaused
                  ? "Reprendre le défilement automatique"
                  : "Mettre en pause le défilement automatique"
              }
            >
              {isPaused ? <FaPlay size={14} /> : <FaPause size={14} />}
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Témoignage suivant"
              className="w-12 h-12 bg-karasu-800 hover:bg-primary border border-karasu-600 hover:border-primary rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift group cursor-pointer"
            >
              <FaChevronRight
                size={16}
                className="group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Scroll container avec padding pour hover */}
          <div
            className="relative px-4"
            style={{ paddingTop: "16px", paddingBottom: "16px" }}
          >
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-hidden scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                marginTop: "-16px",
                marginBottom: "-16px",
                paddingTop: "16px",
                paddingBottom: "16px",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {duplicatedTestimonials.map((testimonial, idx) => (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className="glass-card p-5 hover-lift transition-all duration-300 group border-l-3 border-primary flex-shrink-0 w-80 cursor-context-menu"
                  style={{ minWidth: "320px" }}
                >
                  {/* Header compact */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple rounded-full flex items-center justify-center text-bone font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-accent text-bone text-sm">
                          {testimonial.name}
                        </p>
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-accent text-primary uppercase tracking-wide">
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Citation compacte */}
                  <blockquote className="text-karasu-400 leading-relaxed mb-3 group-hover:text-karasu-400 transition-colors duration-500 text-sm">
                    <span className="text-lg text-primary/40 kanji-style opacity-60">
                      "
                    </span>
                    <span className="group-hover:text-bone transition-colors duration-500">
                      {testimonial.text}
                    </span>
                    <span className="text-lg text-primary/40 kanji-style opacity-60">
                      "
                    </span>
                  </blockquote>

                  {/* Détails optimisés */}
                  <div className="flex justify-between items-center pt-3 border-t border-karasu-600 text-xs">
                    <div className="flex items-center space-x-3">
                      <div>
                        <span className="text-karasu-400">Par </span>
                        <span className="font-accent text-primary">
                          {testimonial.artist}
                        </span>
                      </div>
                      <div className="text-karasu-400">
                        {testimonial.duration}
                      </div>
                    </div>
                    <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-primary kanji-style animate-pulse">
                        ✓
                      </span>
                      <span className="text-primary ml-1 font-medium">
                        Recommande
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll masking gradients */}
            <div className="absolute left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-karasu-800 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-karasu-800 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-karasu-400 mb-6">
            Rejoignez nos clients satisfaits et vivez l'expérience Ink Ritual
            Tattoo
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl px-8 py-4 bg-gradient-to-r from-primary to-purple text-bone font-accent uppercase tracking-wider transition-all duration-300 hover-lift primary-glow"
          >
            <span className="kanji-style mr-3">予</span>
            Réserver votre consultation
          </a>
        </div>
      </div>
    </section>
  );
}
