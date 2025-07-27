import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt, FaHeart } from 'react-icons/fa';

const Infos: React.FC = () => {
  const pricingTiers = [
    {
      id: 1,
      name: "Consultation",
      price: "Gratuite",
      description: "Rencontre et création du design personnalisé",
      details: ["Échange sur vos idées", "Esquisse préliminaire", "Devis détaillé", "Conseils personnalisés"]
    },
    {
      id: 2,
      name: "Tatouage Simple",
      price: "150€ - 300€",
      description: "Motifs de petite à moyenne taille",
      details: ["Jusqu'à 10cm", "Session 2-4h", "Retouches incluses", "Soins premium"]
    },
    {
      id: 3,
      name: "Œuvre Complexe",
      price: "400€+",
      description: "Créations élaborées et grandes pièces",
      details: ["Taille illimitée", "Plusieurs sessions", "Art personnalisé", "Suivi complet"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "Rencontre pour discuter de vos idées et créer le design parfait ensemble.",
      kanji: "相"
    },
    {
      step: 2,
      title: "Préparation",
      description: "Stérilisation du matériel et préparation de l'espace selon les normes les plus strictes.",
      kanji: "準"
    },
    {
      step: 3,
      title: "Création",
      description: "Réalisation de votre tatouage avec passion, précision et respect de l'art japonais.",
      kanji: "創"
    },
    {
      step: 4,
      title: "Soins",
      description: "Instructions détaillées et suivi pour une cicatrisation parfaite de votre œuvre.",
      kanji: "癒"
    }
  ];

  return (
    <section id="infos" className="py-20 bg-karasu-950 japanese-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-gold">情報</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              JŌHŌ · INFORMATIONS PRATIQUES
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            Tarifs & <span className="text-primary brush-stroke">Démarche</span>
          </h2>
        </div>

        {/* Tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className="glass-card p-8 hover-lift group">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-accent text-bone mb-2">{tier.name}</h3>
                <div className="text-3xl kanji-style text-primary mb-2">{tier.price}</div>
                <p className="text-karasu-300 text-sm">{tier.description}</p>
              </div>
              
              <ul className="space-y-3">
                {tier.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-karasu-200">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-body text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Processus */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-accent text-bone mb-4">
              Notre <span className="text-primary">Démarche</span>
            </h3>
            <p className="text-karasu-300 max-w-2xl mx-auto font-body">
              Un processus respectueux et professionnel pour créer votre tatouage parfait
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-karasu-800 border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <span className="text-2xl kanji-style text-bone">{process.kanji}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-bone font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h4 className="text-xl font-accent text-bone mb-3">{process.title}</h4>
                <p className="text-karasu-300 text-sm leading-relaxed font-body">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Informations Pratiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Localisation & Horaires */}
          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-primary text-2xl mr-4" />
              <h3 className="text-2xl font-accent text-bone">Studio Karasu</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-bone font-accent mb-2 flex items-center">
                  <FaMapMarkerAlt className="text-primary mr-2" />
                  Adresse
                </h4>
                <p className="text-karasu-200 font-body ml-6">
                  42 Rue de la Paix<br />
                  75001 Paris, France
                </p>
              </div>
              
              <div>
                <h4 className="text-bone font-accent mb-2 flex items-center">
                  <FaClock className="text-primary mr-2" />
                  Horaires
                </h4>
                <div className="text-karasu-200 font-body ml-6 space-y-1">
                  <p>Mardi - Vendredi: 10h - 19h</p>
                  <p>Samedi: 10h - 18h</p>
                  <p className="text-primary">Dimanche - Lundi: Fermé</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-bone font-accent mb-2 flex items-center">
                  <FaPhoneAlt className="text-primary mr-2" />
                  Contact
                </h4>
                <p className="text-karasu-200 font-body ml-6">
                  +33 1 42 86 87 88
                </p>
              </div>
            </div>
          </div>

          {/* Conditions & Hygiène */}
          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-primary text-2xl mr-4" />
              <h3 className="text-2xl font-accent text-bone">Hygiène & Sécurité</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-bone font-accent text-sm mb-1">Matériel stérilisé</h4>
                  <p className="text-karasu-300 text-sm font-body">
                    Aiguilles à usage unique, matériel autoclavé selon les normes européennes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-bone font-accent text-sm mb-1">Encres certifiées</h4>
                  <p className="text-karasu-300 text-sm font-body">
                    Encres de qualité professionnelle, testées et approuvées
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-bone font-accent text-sm mb-1">Âge minimum</h4>
                  <p className="text-karasu-300 text-sm font-body">
                    18 ans révolus avec pièce d'identité valide
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-bone font-accent text-sm mb-1">Suivi post-tatouage</h4>
                  <p className="text-karasu-300 text-sm font-body">
                    Conseils personnalisés et retouches gratuites si nécessaire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note importante */}
        <div className="mt-16 text-center">
          <div className="glass-card p-6 max-w-4xl mx-auto border border-primary/30">
            <div className="flex items-center justify-center mb-4">
              <FaHeart className="text-primary text-xl mr-3" />
              <span className="text-xl kanji-style text-bone">心</span>
              <FaHeart className="text-primary text-xl ml-3" />
            </div>
            <p className="text-karasu-200 font-body leading-relaxed">
              <strong className="text-bone">Acompte de 100€ requis</strong> pour confirmer votre rendez-vous. 
              Cet acompte sera déduit du montant total. 
              <br />
              <span className="text-primary font-accent">每個紋身都是獨一無二的藝術品</span>
              <br />
              <em className="text-karasu-400">Chaque tatouage est une œuvre d'art unique</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infos;