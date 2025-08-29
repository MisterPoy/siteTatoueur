import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Accueil" },
    { id: "artists", label: "Artistes" },
    { id: "portfolio", label: "Réalisations" },
    { id: "gallery", label: "Spécialités" },
    { id: "reviews", label: "Avis" },
    { id: "infos", label: "Infos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-karasu-950/95 backdrop-blur-md shadow-2xl border-b border-karasu-800/50"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
                          bg-bone text-karasu-900 px-3 py-2 rounded"
      >
        Aller au contenu
      </a>
      <div className="md:w-full xl:container xl:mx-auto px-4 sm:px-6 md:px-0 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 md:px-2">
          {/* Logo */}
          <button
            className="flex items-center cursor-pointer group flex-shrink-0 bg-transparent border-none p-0"
            onClick={() => scrollToSection("hero")}
            aria-label="Retour à l'accueil"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Icône Corbeau stylisée */}
              <div className="w-12 h-12 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple to-primary rounded-full opacity-30 group-hover:opacity-50 transition-all duration-300 group-hover:animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold kanji-style group-hover:text-purple transition-colors duration-300 group-hover:scale-110">
                    烏
                  </span>
                </div>
              </div>

              {/* Nom du salon */}
              <div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl kanji-style text-bone group-hover:text-shimmer transition-all duration-300">
                  Ink Ritual Tattoo
                </div>
                <div className="text-xs text-karasu-400 font-accent tracking-wider hidden lg:block">
                  烏 · L'Art Sacré
                </div>
              </div>
            </div>
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-bone hover:text-gold transition-all duration-300 font-accent text-xs lg:text-sm tracking-wider uppercase cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <div>
            <a
              href="#contact"
              className="ml-6  items-center rounded-xl px-4 py-2 font-accent text-sm uppercase tracking-wider
                         bg-primary text-karasu-950 hover:brightness-110 transition-all shadow-lg shadow-primary/20
                         hidden xl:inline-flex"
            >
              Prendre rendez‑vous
            </a>
            </div>
          </nav>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden text-bone hover:text-primary transition-colors duration-300 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {isMobileMenuOpen ? (
                <FaTimes size={20} className="animate-fade-in" />
              ) : (
                <FaBars size={20} className="animate-fade-in" />
              )}
            </div>
          </button>
        </div>

        {/* Navigation Mobile */}
        <div
          id="mobile-nav"
          className={`md:hidden absolute top-full left-0 right-0 karasu-gradient border-t border-karasu-800/50 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-bone hover:text-gold hover:bg-karasu-800/30 transition-all duration-300 rounded font-accent tracking-wider uppercase border-l-2 border-transparent hover:border-gold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="block w-full text-center mt-2 rounded-xl px-4 py-3 font-accent text-sm uppercase tracking-wider
                         bg-primary text-karasu-950"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prendre rendez‑vous
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
