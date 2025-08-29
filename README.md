🏮 Template Site Vitrine - 鴉 Salon de Tatouage Japonais
Un template de site vitrine immersif et esthétique pour salons de tatouage, avec une esthétique japonaise authentique, construit avec React, TypeScript et Tailwind CSS v4.

⛩️ Caractéristiques
Esthétique Japonaise : Design sombre et immersif inspiré de l'art traditionnel japonais
Typographie Authentique : Polices Zen Tokyo Zoo, Noto Sans JP et caractères Kanji intégrés
Single Page Application : Navigation fluide avec scroll smooth et ancrage japonais
Responsive Design : Parfaitement adapté mobile, tablette et desktop
Animations Sophistiquées : Effets reveal, hover-lift et transitions cinématographiques
Grille Masonry : Galerie dynamique avec modal interactif et navigation clavier
Palette Karasu : Gamme de noirs (karasu-950 à karasu-50), rouge carmin et blanc cassé
Design System Japonais : Classes CSS personnalisées avec thème @theme{} pour Tailwind v4
🚀 Démarrage rapide
Prérequis
Node.js (version 18 ou supérieure)
npm ou yarn
Installation
Cloner le projet
git clone <votre-repo>
cd ink-ritual-tattoo
Installer les dépendances
npm install
Lancer le serveur de développement
npm run dev
Ouvrir dans le navigateur
http://localhost:5178
Scripts disponibles
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linting
npm run lint
📱 Sections du site
🏠 Header
Logo personnalisable avec kanji et effets visuels
Navigation sticky avec transitions japonaises
Menu burger responsive avec animations
🎯 Hero Section
Grand kanji central avec animations flottantes thématiques
Message d'accueil personnalisable et immersif
Effets de texture et dégradés sombres
Boutons d'action avec effets lumineux
👨‍🎨 Section Artistes
Présentation des tatoueurs avec profils personnalisables
Philosophies artistiques et spécialités détaillées
Système de toggle interactif (mobile-friendly)
Design cards avec bordures colorées et effets hover
🖼️ Galerie
Grille masonry responsive avec hauteurs variables
Filtres par catégorie avec kanji (入墨, 新, 花, 幾, 書)
Modal fullscreen avec navigation clavier (ESC, flèches)
Effets grayscale/couleur et transformations au hover
💰 Infos & Prestations
Système de tarification personnalisable avec design japonais
Processus de travail en étapes avec icônes traditionnelles
Section hygiène et certifications professionnelles
Cards glass-effect avec effets visuels
📞 Contact
Formulaire complet avec types de projets de tatouage
Animation de succès avec messages thématiques
Informations de contact personnalisables
Intégration réseaux sociaux et carte interactive
🦶 Footer
4 colonnes avec sections organisées (navigation, contact, infos, certifications)
Mentions légales et crédits développeur
Bouton retour haut avec animations
Design minimaliste avec accents colorés japonais
🎨 Design & Technologies
Stack technique
React 18 avec TypeScript
Vite comme bundler
Tailwind CSS v4 avec plugin @tailwindcss/vite
React Icons pour les icônes
Design System personnalisé avec @theme{} syntax
Palette de couleurs thématique
Base sombre : Du karasu-950 (#09090b) au karasu-400 (#a1a1aa)
Primary (Cyan) : #0891b2 avec variantes hover et glow
Bone (Blanc cassé) : #f8fafc pour les textes principaux
Purple : #8b5cf6 et Gold : #fbbf24 pour les accents
Effets de texture : Dégradés et opacités pour ambiance japonaise
Typographies japonaises
Kanji Style : Polices adaptées aux caractères japonais
Accent : Typographies élégantes pour les titres
Body : Police lisible pour le contenu
Classes personnalisées : kanji-style, font-accent, font-body
Animations et effets
Scroll-reveal : Apparition progressive des sections
Hover-lift : Élévation 3D des éléments interactifs
Primary-glow : Effets de lueur sur les boutons
Glass-card : Effet de verre avec backdrop-blur
Keyframes personnalisées : fadeIn, slideUp, reveal, float, shimmer
📂 Structure du projet
src/
├── components/           # Composants React
│   ├── Header.tsx       # Navigation sticky
│   ├── Hero.tsx         # Section d'accueil
│   ├── Artist.tsx       # Profils des tatoueurs
│   ├── Gallery.tsx      # Galerie de réalisations
│   ├── Portfolio.tsx    # Portfolio/présentation
│   ├── Infos.tsx        # Tarifs et informations
│   ├── Contact.tsx      # Formulaire de contact
│   ├── Footer.tsx       # Pied de page
│   └── MentionsLegales.tsx # Page mentions légales
├── hooks/               # Hooks personnalisés
│   └── useScrollReveal.ts # Animations au scroll
├── App.tsx              # Composant principal
├── index.css            # Styles Tailwind + custom
└── main.tsx             # Point d'entrée
🔧 Personnalisation
Modifier les couleurs
Éditez le fichier src/index.css dans la section @theme pour ajuster la palette :

@theme {
  --color-karasu-950: #09090b;
  --color-karasu-900: #18181b;
  --color-karasu-800: #27272a;
  --color-karasu-600: #52525b;
  --color-karasu-400: #a1a1aa;
  --color-primary: #0891b2;
  --color-purple: #8b5cf6;
  --color-gold: #fbbf24;
  --color-bone: #f8fafc;
}
Personnaliser les artistes
Éditez les profils dans src/components/Artist.tsx pour adapter les informations des tatoueurs :

Noms et spécialités des artistes
Philosophies artistiques personnelles
Images de profil (URLs Unsplash ou locales)
Liens Instagram et réseaux sociaux
Descriptions et approches créatives
Personnaliser la galerie
Adaptez les sections Gallery.tsx et Portfolio.tsx pour vos réalisations :

Gallery.tsx : Galerie masonry avec filtres

Images de tatouages avec catégories
Système de filtres par style
Modal fullscreen avec navigation
Portfolio.tsx : Carrousel de présentation

Sélection d'œuvres principales
Descriptions détaillées
Navigation automatique et manuelle
🌐 Déploiement
Build de production
npm run build
Déploiement GitHub Pages
npm run deploy
Autres plateformes
Vercel : Build automatique depuis GitHub
Netlify : Build command: npm run build, Directory: dist
Hosting classique : Uploadez le contenu du dossier dist
🎨 Design System Japonais
Classes CSS personnalisées
kanji-style : Typographie pour les caractères japonais
glass-card : Effet de verre avec backdrop-blur
hover-lift : Animation d'élévation au survol
primary-glow : Effets de lueur colorés
brush-stroke : Effet de pinceau sur le texte
scroll-reveal : Animation d'apparition au scroll
Kanji utilisés (exemples)
鴉 (karasu) : Arrière-plans décoratifs géants
墨 (sumi) : Encre - Hero section et éléments flottants
職人 (shokunin) : Artisans - Section tatoueurs
雑 (zatsu) : Réalisations - Portfolio
情報 (jōhō) : Informations - Tarifs
連絡 (renraku) : Contact
📝 Notes techniques importantes
Template de démonstration : Contenu fictif à personnaliser
Images : Dossier public/images/gallery/ avec images d'exemple
Formulaire : Simulation d'envoi - à connecter avec votre backend
Mentions légales : Page dédiée avec informations développeur
Tailwind v4 : Syntaxe moderne @theme{} avec @tailwindcss/vite
Performance : Optimisations et lazy loading intégrés
Responsive : Design mobile-first avec breakpoints adaptés
📜 Droits d'utilisation
⚠️ Ce projet n'est pas open source.

Propriété intellectuelle :

Le code source et le design sont protégés par le droit d'auteur
Propriétaire : Gregory Poupaux (GregDev)
Toute reproduction, modification ou utilisation sans autorisation est interdite
Utilisation commerciale :

Ce template est disponible à la vente et à la personnalisation sur demande
Projets sur-mesure selon vos besoins spécifiques
Intégration complète avec vos contenus et identité visuelle
Contact pour acquisition :

🔗 LinkedIn : Gregory Poupaux
🌐 Portfolio : GregDev
🎯 Démo live : Template Salon Tatouage
Pourquoi ce template ?

✅ Design immersif et professionnel
✅ Responsive et optimisé SEO
✅ Code moderne (React 19 + TypeScript)
✅ Personnalisation complète possible
✅ Support technique inclus
📄 Licence
Copyright © 2025 Gregory Poupaux (GregDev)

Tous droits réservés.

Ce code source est la propriété de son auteur.
Aucune reproduction, diffusion ou modification n'est autorisée sans accord écrit préalable.

Le projet est disponible uniquement dans le cadre d'une prestation commerciale.

Fait avec ❤️ pour l'art du tatouage japonais par Gregory Poupaux (GregDev) 愛

Template professionnel - Disponible sur demande pour vos projets
