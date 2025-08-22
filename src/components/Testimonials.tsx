import { useScrollReveal } from '../hooks/useScrollReveal';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Alex M.",
      text: "Akira a réalisé un portrait réaliste qui dépasse mes attentes. Détails incroyables, hygiène irréprochable et suivi parfait. 3 mois après, les couleurs éclatent toujours !",
      rating: 5,
      artist: "Akira",
      style: "Réalisme",
      duration: "4h",
      avatar: "A",
      highlight: "Hygiène irréprochable"
    },
    {
      name: "Sarah L.",
      text: "Premier tatouage avec Hiro, expérience magique ! Adaptation parfaite en style japonais. Studio ultra propre, matériel stérilisé devant moi. Je recommande !",
      rating: 5,
      artist: "Hiro", 
      style: "Japonais traditionnel",
      duration: "6h",
      avatar: "S",
      highlight: "Premier tatouage réussi"
    },
    {
      name: "Marc D.",
      text: "Cover-up transformé en chef-d'œuvre par Akira ! Vieux tattoo raté devenu pièce dont je suis fier. Professionnel, à l'écoute, résultat bluffant.",
      rating: 5,
      artist: "Akira",
      style: "Cover-up réalisme", 
      duration: "8h",
      avatar: "M",
      highlight: "Transformation réussie"
    },
    {
      name: "Émilie R.",
      text: "Floral délicat sur avant-bras. Hiro a compris et sublimé ma vision. Technique ligne fine impressionnante, douleur supportable. Cicatrisation parfaite !",
      rating: 5,
      artist: "Hiro",
      style: "Floral ligne fine",
      duration: "3h",
      avatar: "E", 
      highlight: "Technique exceptionnelle"
    },
    {
      name: "Thomas B.",
      text: "Manche japonaise en cours depuis 1 an. Chaque séance un plaisir, design parfaitement cohérent. Studio zen, artiste passionné qui explique tout.",
      rating: 5,
      artist: "Hiro",
      style: "Manche japonaise",
      duration: "Sessions multiples",
      avatar: "T",
      highlight: "Projet long terme"
    },
    {
      name: "Léa K.",
      text: "Memento black & grey d'une finesse inouïe par Akira. Il a traduit mes émotions avec sensibilité. Résultat : larmes de joie, tattoo qui raconte mon histoire.",
      rating: 5,
      artist: "Akira",
      style: "Black & Grey",
      duration: "5h",
      avatar: "L",
      highlight: "Émotion capturée"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-sm ${i < rating ? 'text-gold' : 'text-karasu-600'}`}
      />
    ));
  };

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1);
  };

  const getVisibleTestimonials = () => {
    // Affiche 3 témoignages consécutifs en carousel infini
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % totalSlides]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-karasu-900 to-karasu-800 japanese-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec kanji */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-gold animate-float">評</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              HYŌKA · TÉMOIGNAGES
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-accent text-bone mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-karasu-300 max-w-2xl mx-auto">
            Plus de 500 tatouages réalisés, des clients satisfaits qui partagent leur expérience unique chez Ink Ritual Tattoo
          </p>
        </div>

        {/* Testimonials carousel */}
        <div ref={testimonialsRef} className="scroll-reveal">
          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-karasu-800 hover:bg-primary border border-karasu-600 hover:border-primary rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaChevronLeft size={16} />
            </button>
            
            {/* Pagination dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-primary scale-125' : 'bg-karasu-600 hover:bg-karasu-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-karasu-800 hover:bg-primary border border-karasu-600 hover:border-primary rounded-full flex items-center justify-center text-bone transition-all duration-300 hover-lift"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          {/* Carousel container */}
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="glass-card p-5 hover-lift transition-all duration-300 group border-l-3 border-primary animate-fadeIn max-w-sm mx-auto"
                >
                {/* Header compact */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple rounded-full flex items-center justify-center text-bone font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-accent text-bone text-sm">{testimonial.name}</h4>
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
                <blockquote className="text-karasu-200 leading-relaxed mb-3 group-hover:text-karasu-100 transition-colors duration-300 text-sm">
                  <span className="text-lg text-primary/40 kanji-style">"</span>
                  {testimonial.text}
                  <span className="text-lg text-primary/40 kanji-style">"</span>
                </blockquote>

                {/* Détails optimisés */}
                <div className="flex justify-between items-center pt-3 border-t border-karasu-700 text-xs">
                  <div className="flex items-center space-x-3">
                    <div>
                      <span className="text-karasu-400">Par </span>
                      <span className="font-accent text-primary">{testimonial.artist}</span>
                    </div>
                    <div className="text-karasu-300">{testimonial.duration}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald kanji-style">✓</span>
                    <span className="text-emerald ml-1">Recommande</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-karasu-300 mb-6">
            Rejoignez nos clients satisfaits et vivez l'expérience Ink Ritual Tattoo
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