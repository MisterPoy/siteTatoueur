import { useScrollReveal } from '../hooks/useScrollReveal';
import { FaStar } from 'react-icons/fa';

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

  const testimonials: Testimonial[] = [
    {
      name: "Alex M.",
      text: "Akira a réalisé un tatouage réaliste de portrait qui dépasse toutes mes attentes. Le niveau de détail est incroyable, l'hygiène irréprochable et l'accompagnement parfait du début à la fin. 3 mois après, les couleurs sont toujours éclatantes !",
      rating: 5,
      artist: "Akira",
      style: "Réalisme",
      duration: "4h",
      avatar: "A",
      highlight: "Hygiène irréprochable"
    },
    {
      name: "Sarah L.",
      text: "Premier tatouage avec Hiro et une expérience magique ! Il a su adapter mon idée en style japonais traditionnel. Studio ultra propre, matériel stérilisé devant moi, et des conseils post-soins au top. Je recommande les yeux fermés !",
      rating: 5,
      artist: "Hiro", 
      style: "Japonais traditionnel",
      duration: "6h",
      avatar: "S",
      highlight: "Premier tatouage réussi"
    },
    {
      name: "Marc D.",
      text: "Cover-up complexe transformé en chef-d'œuvre par Akira. J'avais un vieux tatouage raté, maintenant c'est une pièce dont je suis fier. Professionnel, à l'écoute, et un résultat qui en jette. Le prix en vaut vraiment la chandelle.",
      rating: 5,
      artist: "Akira",
      style: "Cover-up réalisme", 
      duration: "8h",
      avatar: "M",
      highlight: "Transformation réussie"
    },
    {
      name: "Émilie R.",
      text: "Tatouage floral délicat sur l'avant-bras. Hiro a parfaitement compris ma vision et l'a sublimée. Technique ligne fine impressionnante, douleur très supportable grâce à sa douceur. Cicatrisation parfaite grâce à ses conseils précis.",
      rating: 5,
      artist: "Hiro",
      style: "Floral ligne fine",
      duration: "3h",
      avatar: "E", 
      highlight: "Technique exceptionnelle"
    },
    {
      name: "Thomas B.",
      text: "Manche japonaise en cours avec Hiro depuis 1 an. Chaque séance est un plaisir, le design évolue parfaitement et la cohérence est remarquable. Studio accueillant, ambiance zen, et un artiste passionné qui explique chaque détail.",
      rating: 5,
      artist: "Hiro",
      style: "Manche japonaise",
      duration: "Sessions multiples",
      avatar: "T",
      highlight: "Projet long terme"
    },
    {
      name: "Léa K.",
      text: "Tatouage memento en black & grey par Akira d'une finesse inouïe. Il a su traduire mes émotions en art corporel avec une sensibilité rare. Résultat : des larmes de joie et un tatouage qui raconte parfaitement mon histoire personnelle.",
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

        {/* Testimonials grid */}
        <div ref={testimonialsRef} className="scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift transition-all duration-500 group border-l-4 border-primary"
              >
                {/* Header avec avatar et étoiles */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple rounded-full flex items-center justify-center text-bone font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-accent text-bone">{testimonial.name}</h4>
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

                {/* Citation */}
                <blockquote className="text-karasu-200 leading-relaxed mb-4 group-hover:text-karasu-100 transition-colors duration-300">
                  <span className="text-2xl text-primary/40 kanji-style">"</span>
                  {testimonial.text}
                  <span className="text-2xl text-primary/40 kanji-style">"</span>
                </blockquote>

                {/* Détails techniques */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-karasu-700">
                  <div>
                    <div className="text-xs text-karasu-400 uppercase tracking-wide">Artiste</div>
                    <div className="text-sm font-accent text-bone">{testimonial.artist}</div>
                  </div>
                  <div>
                    <div className="text-xs text-karasu-400 uppercase tracking-wide">Style</div>
                    <div className="text-sm text-primary">{testimonial.style}</div>
                  </div>
                  <div>
                    <div className="text-xs text-karasu-400 uppercase tracking-wide">Durée</div>
                    <div className="text-sm text-karasu-300">{testimonial.duration}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-emerald kanji-style">✓</span>
                    <span className="text-xs text-emerald ml-1">Recommande</span>
                  </div>
                </div>
              </div>
            ))}
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