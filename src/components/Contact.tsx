import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaTwitter, FaTiktok, FaPaperPlane } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  projectType: string;
  company: string; // honeypot
}

const Contact: React.FC = () => {
  const headerRef = useScrollReveal();
  const noteRef = useScrollReveal();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification honeypot - si rempli, c'est un bot
    if (formData.company) {
      console.log('Bot détecté via honeypot');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
        company: ''
      });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Téléphone",
      content: "+33 1 42 86 87 88",
      link: "tel:+33142868788",
      kanji: "電"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "contact@inkritual-tattoo.fr",
      link: "mailto:contact@inkritual-tattoo.fr",
      kanji: "信"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      content: "Ink Ritual Tattoo, Paris, France",
      link: "https://maps.google.com",
      kanji: "場"
    },
    {
      icon: <FaClock />,
      title: "Rendez-vous",
      content: "Sur RDV uniquement",
      link: null,
      kanji: "時"
    }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/votre_salon_tattoo", handle: "@votre_salon" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/inkritual_art", handle: "@inkritual_art" },
    { icon: <FaTiktok />, name: "TikTok", url: "https://tiktok.com/@inkritual", handle: "@inkritual" }
  ];

  const projectTypes = [
    { value: 'irezumi', label: 'Irezumi Traditionnel', kanji: '入墨' },
    { value: 'neo-japonais', label: 'Neo-Japonais', kanji: '新' },
    { value: 'floral', label: 'Motifs Floraux', kanji: '花' },
    { value: 'calligraphie', label: 'Calligraphie', kanji: '書' },
    { value: 'geometrique', label: 'Géométrique', kanji: '幾' },
    { value: 'autre', label: 'Autre Style', kanji: '他' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-karasu-950 via-karasu-900 to-karasu-950 relative overflow-hidden">
      
      {/* Kanji géants d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="kanji-giant kanji-giant-massive kanji-serif text-purple absolute -bottom-40 -left-48 kanji-float-2" style={{ '--rotation': '16deg' } as React.CSSProperties}>鴉</div>
        <div className="kanji-giant kanji-giant-sm kanji-decorative text-gold absolute top-24 -right-24 kanji-float-5" style={{ '--rotation': '-28deg' } as React.CSSProperties}>鴉</div>
        <div className="kanji-giant kanji-giant-xs kanji-sans text-primary absolute bottom-1/3 right-1/5 kanji-float-3" style={{ '--rotation': '12deg' } as React.CSSProperties}>鴉</div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <span className="text-4xl kanji-style text-primary">連絡</span>
            <div className="text-sm font-accent text-karasu-400 tracking-widest mt-2">
              RENRAKU · PRENEZ CONTACT
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-accent text-bone mb-6 text-shadow-dark">
            Contactez <span className="text-primary brush-stroke">nos Artistes</span>
          </h2>
          <p className="text-lg text-karasu-400 max-w-3xl mx-auto leading-relaxed font-body">
            Prêt à transformer votre vision en œuvre d'art permanente ? 
            Nos maîtres tatoueurs vous accompagnent dans votre projet artistique.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
          {/* Formulaire de Contact */}
          <div className="xl:col-span-3">
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <span className="text-2xl kanji-style text-primary mr-3">書</span>
                <h3 className="text-2xl font-accent text-bone">Formulaire de Contact</h3>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <FaPaperPlane className="text-bone text-2xl" />
                  </div>
                  <span className="text-4xl kanji-style text-gold block mb-3">感謝</span>
                  <h4 className="text-2xl font-accent text-bone mb-3">Message Envoyé !</h4>
                  <p className="text-karasu-400 font-body leading-relaxed">
                    Arigatō gozaimasu ! Votre message a été transmis à nos artistes.
                    <br />
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <div>
                  {/* Boutons directs */}
                  <div className="mb-6 flex flex-wrap gap-3">
                    <a href="https://wa.me/33600000000?text=Bonjour%2C%20j%27aimerais%20parler%20de%20mon%20projet%20tattoo"
                       target="_blank" rel="noopener"
                       className="rounded-lg px-4 py-2 bg-primary text-karasu-950 transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20">WhatsApp</a>
                    <a href="https://instagram.com/votre_salon_tattoo" target="_blank" rel="noopener"
                       className="rounded-lg px-4 py-2 border border-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-lg">Instagram DM</a>
                    <a href="tel:+33600000000" className="rounded-lg px-4 py-2 border border-karasu-600 transition-all duration-300 hover:border-primary hover:bg-karasu-800/50">Appeler</a>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-bone font-accent mb-2 text-sm tracking-wider uppercase">
                        Nom *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-karasu-800/50 border border-karasu-600 rounded text-bone placeholder-karasu-400 focus:outline-none focus:border-primary focus:bg-karasu-800 transition-all duration-300 font-body"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-bone font-accent mb-2 text-sm tracking-wider uppercase">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-karasu-800/50 border border-karasu-600 rounded text-bone placeholder-karasu-400 focus:outline-none focus:border-primary focus:bg-karasu-800 transition-all duration-300 font-body"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Honeypot field - caché des utilisateurs normaux */}
                  <input type="text" name="company"  value={formData.company} onChange={handleInputChange} className="hidden"  tabIndex={-1} autoComplete="off" aria-hidden="true"  aria-label="Ne pas remplir ce champ"/>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-bone font-accent mb-2 text-sm tracking-wider uppercase">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-karasu-800/50 border border-karasu-600 rounded text-bone placeholder-karasu-400 focus:outline-none focus:border-primary focus:bg-karasu-800 transition-all duration-300 font-body"
                        placeholder="Votre numéro"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-bone font-accent mb-2 text-sm tracking-wider uppercase">
                        Type de Projet *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-karasu-800/50 border border-karasu-600 rounded text-bone focus:outline-none focus:border-primary focus:bg-karasu-800 transition-all duration-300 font-body"
                      >
                        <option value="">Choisir un style</option>
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.kanji} · {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-bone font-accent mb-2 text-sm tracking-wider uppercase">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-karasu-800/50 border border-karasu-600 rounded text-bone focus:outline-none focus:border-primary focus:bg-karasu-800 transition-all duration-300 font-body"
                    >
                      <option value="">Type de demande</option>
                      <option value="consultation">Consultation gratuite</option>
                      <option value="nouveau-projet">Nouveau projet</option>
                      <option value="retouche">Retouche</option>
                      <option value="cover-up">Cover-up</option>
                      <option value="information">Information générale</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-bone font-accent mb-2 text-sm tracking-wider uppercase">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-karasu-800/50 border border-karasu-600 rounded text-bone placeholder-karasu-400 focus:outline-none focus:border-primary focus:bg-karasu-800 transition-all duration-300 resize-none font-body"
                      placeholder="Décrivez votre projet, vos inspirations, la taille souhaitée, l'emplacement... Plus vous nous donnez de détails, mieux nous pourrons vous conseiller."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Envoyer le message"
                    className={`w-full py-4 rounded font-accent text-lg tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isSubmitting
                        ? 'bg-karasu-600 cursor-not-allowed text-karasu-400'
                        : 'bg-primary hover:bg-primary/80 text-karasu-950 hover-lift primary-glow'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <span className="kanji-style mr-2">送</span>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <FaPaperPlane className="mr-3" />
                        Envoyer le Message
                      </span>
                    )}
                  </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Informations de Contact */}
          <div className="xl:col-span-2 space-y-8">
            {/* Coordonnées */}
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <span className="text-2xl kanji-style text-gold mr-3">情</span>
                <h3 className="text-2xl font-accent text-bone">Informations</h3>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-bone transition-all duration-300">
                        <div className="flex flex-col items-center">
                          {info.icon}
                          <span className="text-xs kanji-style mt-1">{info.kanji}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-bone font-accent text-sm tracking-wider uppercase mb-1 group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                        <p className="text-karasu-400 font-body group-hover:text-primary transition-colors duration-300">{info.content}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={index} className="flex items-start space-x-4 group cursor-context-menu">
                      <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-bone transition-all duration-300">
                        <div className="flex flex-col items-center">
                          {info.icon}
                          <span className="text-xs kanji-style mt-1">{info.kanji}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-bone font-accent text-sm tracking-wider uppercase mb-1">{info.title}</h4>
                        <p className="text-karasu-400 font-body">{info.content}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <span className="text-2xl kanji-style text-primary mr-3">繋</span>
                <h3 className="text-2xl font-accent text-bone">Suivez-nous</h3>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded border border-karasu-600 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-karasu-600 group-hover:bg-primary rounded-lg flex items-center justify-center text-bone transition-all duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-bone font-accent text-sm">{social.name}</div>
                      <div className="text-karasu-400 text-xs font-body">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Carte */}
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <span className="text-2xl kanji-style text-gold mr-3">地</span>
                <h3 className="text-2xl font-accent text-bone">Localisation</h3>
              </div>
              
              <div className="aspect-video bg-karasu-800 rounded-lg border-2 border-dashed border-karasu-600 flex items-center justify-center hover:border-primary transition-colors duration-300">
                <div className="text-center text-karasu-400">
                  <FaMapMarkerAlt className="text-4xl mb-4 mx-auto text-primary" />
                  <p className="font-accent text-bone mb-1">Ink Ritual Tattoo</p>
                  <p className="text-sm font-body">123 Rue de l'Art</p>
                  <p className="text-sm font-body">75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note importante */}
        <div ref={noteRef} className="mt-16 text-center scroll-reveal">
          <div className="glass-card p-6 max-w-4xl mx-auto border border-gold/30">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl kanji-style text-gold">約</span>
              <div className="text-sm font-accent text-karasu-400 tracking-widest ml-3">
                YAKU · RÉSERVATION
              </div>
            </div>
            <p className="text-karasu-400 font-body leading-relaxed">
              <strong className="text-bone">Consultation gratuite</strong> sur rendez-vous pour discuter de votre projet. 
              <br />
              Un acompte de 100€ sera demandé pour valider la réservation de votre session de tatouage.
              <br />
              <em className="text-karasu-400">Réponse garantie sous 24h · 日本の美学</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;