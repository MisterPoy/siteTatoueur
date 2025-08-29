import React from 'react';
import { FaCheck, FaClock, FaPalette, FaHeart } from 'react-icons/fa';

interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      id: 1,
      name: "Flash Tattoo",
      price: "À partir de 120€",
      description: "Tatouages pré-dessinés, rapides et abordables",
      icon: <FaClock className="text-2xl" />,
      features: [
        "Designs pré-conçus",
        "Séance 1-3h maximum",
        "Base 100€/h",
        "Taille jusqu'à 8cm",
        "Retouches incluses"
      ]
    },
    {
      id: 2,
      name: "Design Personnalisé",
      price: "À partir de 250€",
      description: "Création sur-mesure selon vos envies",
      icon: <FaPalette className="text-2xl" />,
      features: [
        "Design 100% personnalisé",
        "Consultation préalable",
        "100€/h + création design",
        "Séance 2-6h",
        "Taille jusqu'à 15cm",
        "Suivi post-tatouage"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Œuvre d'Art",
      price: "À partir de 600€",
      description: "Œuvres complexes et de grande envergure",
      icon: <FaHeart className="text-2xl" />,
      features: [
        "Projet artistique complexe",
        "100-120€/h selon complexité",
        "Plusieurs séances",
        "Taille sans limite",
        "Retouches illimitées",
        "Service VIP"
      ]
    }
  ];

  const additionalServices = [
    {
      service: "Consultation & Design",
      price: "50€",
      description: "Séance de création et conseil (déductible du tatouage)"
    },
    {
      service: "Cover-up",
      price: "Variable",
      description: "Recouvrement d'ancien tatouage (selon complexité)"
    },
    {
      service: "Retouche",
      price: "Gratuit",
      description: "Dans les 3 mois suivant la réalisation"
    },
    {
      service: "Soins premium",
      price: "25€",
      description: "Kit de soins professionnel pour la cicatrisation"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-ink-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
            TARIFS & <span className="text-tattoo-primary">PRESTATIONS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des prix transparents pour tous types de projets. 
            Chaque tatouage est unique, nos tarifs s'adaptent à vos besoins.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative glass-card p-8 hover-glow ${
                tier.popular ? 'ring-2 ring-tattoo-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-tattoo-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-tattoo-primary/20 rounded-full flex items-center justify-center text-tattoo-primary">
                  {tier.icon}
                </div>
              </div>

              {/* Title & Price */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-heading text-tattoo-primary mb-2">
                  {tier.price}
                </div>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <FaCheck className="text-tattoo-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-tattoo-primary hover:bg-tattoo-primary/90 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Réserver une consultation
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-heading text-white text-center mb-8">
            Services Complémentaires
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0">
                <div>
                  <h4 className="text-white font-semibold">{service.service}</h4>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
                <div className="text-tattoo-primary font-bold text-lg ml-4">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-4">Informations Importantes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
              <div>
                <p className="mb-2">
                  <strong className="text-tattoo-primary">• Acompte requis :</strong> 50€ pour réserver votre créneaux (déductible du total)
                </p>
                <p className="mb-2">
                  <strong className="text-tattoo-primary">• Paiement :</strong> Espèces, CB, ou virement bancaire acceptés
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-tattoo-primary">• Âge minimum :</strong> 18 ans avec pièce d'identité
                </p>
                <p className="mb-2">
                  <strong className="text-tattoo-primary">• Devis gratuit :</strong> Estimation précise après consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;