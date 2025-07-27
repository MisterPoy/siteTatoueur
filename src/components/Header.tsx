import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'artists', label: 'Artistes' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'infos', label: 'Infos' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-karasu-950/95 backdrop-blur-md shadow-2xl border-b border-karasu-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Karasu */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-3">
              {/* Icône Corbeau stylisée */}
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple to-teal rounded-full opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold kanji-style group-hover:text-purple transition-colors duration-300">烏</span>
                </div>
              </div>
              
              {/* Nom du salon */}
              <div>
                <div className="text-2xl lg:text-3xl kanji-style text-bone group-hover:text-shimmer transition-all duration-300">
                  Karasu Ink
                </div>
                <div className="text-xs text-karasu-400 font-accent tracking-wider hidden lg:block">
                  鴉 · L'art de l'encre
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-bone hover:text-primary transition-all duration-300 font-accent text-sm tracking-wider uppercase"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Menu Mobile Button */}
          <button
            className="md:hidden text-bone hover:text-primary transition-colors duration-300 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          className={`md:hidden absolute top-full left-0 right-0 karasu-gradient border-t border-karasu-800/50 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-bone hover:text-primary hover:bg-karasu-800/30 transition-all duration-300 rounded font-accent tracking-wider uppercase border-l-2 border-transparent hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;