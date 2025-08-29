import React from 'react';
import { FaInstagram, FaTwitter, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa';

interface FooterProps {
  onShowMentions?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowMentions }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Artistes', href: '#artists' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Infos', href: '#infos' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '#mentions-legales' },
    { name: 'Template sur demande', href: 'https://www.linkedin.com/in/grégory-poupaux' },
    { name: 'Mon Portfolio', href: 'https://misterpoy.github.io/GregDev-PortFolio/' },
    { name: 'Soins & Conseils', href: '#' }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/votre_salon_tattoo", handle: "@votre_salon" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/inkritual_art", handle: "@inkritual_art" },
    { icon: <FaTiktok />, name: "TikTok", url: "https://tiktok.com/@inkritual", handle: "@inkritual" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-karasu-950 border-t border-karasu-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 relative mr-4">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold kanji-style">烏</span>
                </div>
              </div>
              <div className="text-3xl kanji-style text-bone">
                Ink Ritual Tattoo
              </div>
            </div>
            
            <p className="text-karasu-400 mb-6 leading-relaxed font-body">
              Ink Ritual Tattoo - Studio de tatouage d'exception. 
              L'art de l'encre japonais au service de votre expression artistique.
            </p>
            
            <div className="mb-6">
              <div className="text-sm font-accent text-karasu-400 tracking-widest mb-2">
                鴉 · L'ART DE L'ENCRE
              </div>
              <div className="text-lg kanji-style text-primary">
                墨の芸術
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-karasu-800/50 border border-karasu-600 rounded-lg flex items-center justify-center text-bone transition-all duration-300 hover-lift group ${
                    index === 0 ? 'hover:bg-gradient-to-br hover:from-primary hover:to-gold hover:border-gold' :
                    index === 1 ? 'hover:bg-gradient-to-br hover:from-purple hover:to-primary hover:border-primary' :
                    'hover:bg-gradient-to-br hover:from-gold hover:to-primary hover:border-gold'
                  }`}
                  title={social.handle}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-xl kanji-style text-gold mr-3">案</span>
              <h3 className="text-bone font-accent text-lg tracking-wider uppercase">Navigation</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-karasu-400 hover:text-primary transition-colors duration-300 text-left font-body group flex items-center cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-xl kanji-style text-gold mr-3">情</span>
              <h3 className="text-bone font-accent text-lg tracking-wider uppercase">Contact</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start text-karasu-400">
                <FaMapMarkerAlt className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm font-body">Ink Ritual Tattoo<br />123 Rue de l'Art<br />Quartier Créatif<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center text-karasu-400">
                <FaPhone className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+33142868788" className="text-sm hover:text-primary transition-colors duration-300 font-body">
                  +33 1 42 86 87 88
                </a>
              </li>
              <li className="flex items-center text-karasu-400">
                <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:contact@inkritual-tattoo.fr" className="text-sm hover:text-primary transition-colors duration-300 font-body">
                  contact@inkritual-tattoo.fr
                </a>
              </li>
            </ul>
            
            {/* Business Hours */}
            <div className="mt-6 p-4 bg-karasu-800/30 rounded-lg border border-karasu-600/50">
              <p className="text-bone font-accent text-sm tracking-wider uppercase mb-3 font-semibold">Rendez-vous</p>
              <div className="text-karasu-400 text-sm space-y-1 font-body">
                <p className="text-primary font-semibold">Sur rendez-vous uniquement</p>
                <p>Consultation préalable obligatoire</p>
                <p>Contactez-nous pour planifier</p>
              </div>
            </div>
          </div>

          {/* Informations & Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-xl kanji-style text-gold mr-3">法</span>
              <h3 className="text-bone font-accent text-lg tracking-wider uppercase">Informations</h3>
            </div>
            
            <ul className="space-y-2 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  {link.name === 'Mentions légales' ? (
                    <button
                      onClick={onShowMentions}
                      className="text-karasu-400 hover:text-primary transition-colors duration-300 text-sm font-body text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-karasu-400 hover:text-primary transition-colors duration-300 text-sm font-body"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="glass-card p-4">
              <div className="flex items-center mb-3">
                <span className="text-lg kanji-style text-primary mr-2">証</span>
                <p className="text-bone font-accent text-sm tracking-wider uppercase font-semibold">Certifications</p>
              </div>
              <div className="text-karasu-400 text-xs space-y-2 font-body">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span>Studio agréé ARS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span>Normes d'hygiène européennes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span>Matériel stérilisé certifié</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span>Encres approuvées CE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-karasu-800 mb-8">
          <div className="flex justify-center py-8">
            <div className="text-center">
              <span className="text-4xl kanji-style text-primary/30 block">和</span>
              <div className="text-xs font-accent text-karasu-400 tracking-widest mt-2">
                HARMONIE · RESPECT · TRADITION
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-karasu-400 text-sm text-center lg:text-left font-body">
              © {currentYear} Ink Ritual Tattoo (Démo) – Tous droits réservés.
              <br />
              <span className="text-xs">Création & développement : <a href="https://www.linkedin.com/in/grégory-poupaux" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition-colors duration-300">Gregory Poupaux</a></span>
            </div>
            
            <div className="flex items-center text-karasu-400 text-sm font-body">
              <span>Template développé avec</span>
              <FaHeart className="text-primary mx-2 animate-pulse" />
              <span>par</span>
              <a 
                href="https://misterpoy.github.io/GregDev-PortFolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:text-gold transition-colors duration-300 font-semibold"
              >
                GregDev
              </a>
              <span className="kanji-style text-primary ml-2">愛</span>
            </div>
            
            <div className="text-karasu-400 text-sm text-center lg:text-right font-body">
              <p className="text-xs">SIRET: 01234567890123 (fictif)</p>
              <p className="text-xs mt-1">⚠️ Site de démonstration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/80 border-2 border-karasu-600 hover:border-primary text-bone rounded-full flex items-center justify-center shadow-xl hover-lift transition-all duration-300 z-40 group cursor-pointer"
        title="Retour en haut"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={18} />
      </button>
    </footer>
  );
};

export default Footer;