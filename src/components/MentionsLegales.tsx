import React from 'react';
import { FaArrowLeft, FaGithub, FaLinkedin } from 'react-icons/fa';

interface MentionsLegalesProps {
  onBack: () => void;
}

const MentionsLegales: React.FC<MentionsLegalesProps> = ({ onBack }) => {
  return (
    <section id="mentions-legales" className="py-20 bg-gradient-to-br from-karasu-950 via-karasu-900 to-karasu-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-primary">法</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              HŌ · MENTIONS LÉGALES
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            Mentions <span className="text-primary brush-stroke">Légales</span>
          </h1>
        </div>

        {/* Contenu */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 mb-8">
            
            {/* Nature du site */}
            <div className="mb-8">
              <h2 className="text-2xl font-accent text-bone mb-4 flex items-center">
                <span className="text-gold kanji-style mr-3">警</span>
                Nature du site
              </h2>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
                <p className="text-bone font-body leading-relaxed">
                  <strong>⚠️ IMPORTANT :</strong> Ce site est une <strong className="text-primary">démo</strong> de template vitrine destiné aux salons de tatouage.
                  <br />
                  Il ne représente pas un établissement réel et toutes les informations sont fictives.
                </p>
              </div>
            </div>

            {/* Éditeur du site */}
            <div className="mb-8">
              <h2 className="text-2xl font-accent text-bone mb-4 flex items-center">
                <span className="text-gold kanji-style mr-3">編</span>
                Éditeur du site
              </h2>
              <div className="text-karasu-400 space-y-2 font-body">
                <p><strong className="text-bone">Nom :</strong> Gregory Poupaux</p>
                <p><strong className="text-bone">Activité :</strong> Développeur web freelance</p>
                <p><strong className="text-bone">Contact professionnel :</strong> 
                  <a href="https://www.linkedin.com/in/grégory-poupaux" target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:text-gold transition-colors duration-300 ml-2">
                    LinkedIn - Gregory Poupaux
                  </a>
                </p>
                <p><strong className="text-bone">Portfolio :</strong> 
                  <a href="https://misterpoy.github.io/GregDev-PortFolio/" target="_blank" rel="noopener noreferrer"
                     className="text-primary hover:text-gold transition-colors duration-300 ml-2">
                    GregDev Portfolio
                  </a>
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-8">
              <h2 className="text-2xl font-accent text-bone mb-4 flex items-center">
                <span className="text-gold kanji-style mr-3">宿</span>
                Hébergement
              </h2>
              <div className="text-karasu-400 font-body">
                <p><strong className="text-bone">GitHub Pages</strong></p>
                <p>GitHub, Inc. – 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA</p>
                <p className="mt-2">
                  <strong className="text-bone">URL du site :</strong> 
                  <a href="https://misterpoy.github.io/siteTatoueur/" target="_blank" rel="noopener noreferrer"
                     className="text-primary hover:text-gold transition-colors duration-300 ml-2">
                    https://misterpoy.github.io/siteTatoueur/
                  </a>
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-8">
              <h2 className="text-2xl font-accent text-bone mb-4 flex items-center">
                <span className="text-gold kanji-style mr-3">著</span>
                Propriété intellectuelle
              </h2>
              <div className="bg-karasu-800/30 border border-gold/30 rounded-lg p-4">
                <div className="text-karasu-400 space-y-3 font-body">
                  <p>
                    <strong className="text-bone">L'ensemble du contenu</strong> (design, code source, textes, images de démonstration, animations) 
                    est protégé par le droit d'auteur et appartient à Gregory Poupaux.
                  </p>
                  <p>
                    <strong className="text-primary">⚠️ Toute reproduction, diffusion, modification ou utilisation</strong> sans autorisation écrite préalable est strictement interdite.
                  </p>
                  <p>
                    Ce template n'est <strong className="text-bone">pas open source</strong>. 
                    Il est disponible uniquement dans le cadre d'une prestation commerciale personnalisée.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact et demandes */}
            <div className="mb-8">
              <h2 className="text-2xl font-accent text-bone mb-4 flex items-center">
                <span className="text-gold kanji-style mr-3">連</span>
                Projets personnalisés
              </h2>
              <div className="text-karasu-400 font-body">
                <p className="mb-4">
                  <strong className="text-bone">Intéressé par ce template ou un projet similaire ?</strong>
                </p>
                <p className="mb-6">
                  Contactez-moi directement pour discuter de vos besoins et obtenir un devis personnalisé.
                  Je réalise des sites vitrines sur-mesure pour professionnels.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.linkedin.com/in/grégory-poupaux" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 px-4 py-2 bg-primary/20 hover:bg-primary border border-primary rounded-lg text-bone transition-all duration-300 hover-lift">
                    <FaLinkedin />
                    <span className="font-accent">Contact LinkedIn</span>
                  </a>
                  <a href="https://misterpoy.github.io/GregDev-PortFolio/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 px-4 py-2 bg-gold/20 hover:bg-gold hover:text-karasu-950 border border-gold rounded-lg text-bone transition-all duration-300 hover-lift">
                    <FaGithub />
                    <span className="font-accent">Voir Portfolio</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Données fictives */}
            <div className="bg-karasu-800/50 border border-karasu-600 rounded-lg p-4">
              <h3 className="text-lg font-accent text-bone mb-3 flex items-center">
                <span className="text-purple kanji-style mr-2">虚</span>
                Données fictives utilisées
              </h3>
              <div className="text-xs text-karasu-400 space-y-1 font-body">
                <p>• <strong>Salon :</strong> "Ink Ritual Tattoo" (nom fictif)</p>
                <p>• <strong>Artistes :</strong> "Akira" et "Hiro" (personnages fictifs)</p>
                <p>• <strong>SIRET :</strong> 01234567890123 (numéro fictif commençant par 01)</p>
                <p>• <strong>Adresses et téléphones :</strong> Informations factices</p>
                <p>• <strong>Réseaux sociaux :</strong> Liens de démonstration</p>
              </div>
            </div>

          </div>
        </div>

        {/* Retour */}
        <div className="text-center mt-12">
          <button 
            onClick={onBack}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/20 hover:bg-primary border border-primary rounded-lg text-bone transition-all duration-300 hover-lift"
          >
            <FaArrowLeft />
            <span className="font-accent">Retour au site</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default MentionsLegales;