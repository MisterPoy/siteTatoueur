# 🏮 Template Site Vitrine - Salon de Tatouage Japonais

Un template de site vitrine professionnel pour **salons de tatouage**, avec une esthétique japonaise authentique. Construit avec React 19, TypeScript et Tailwind CSS v4.

## ⛩️ Caractéristiques

- **Design Japonais Immersif** : Esthétique sombre inspirée de l'art traditionnel japonais
- **Kanjis Intégrés** : Caractères japonais dans le design et animations flottantes thématiques  
- **Palette Optimisée** : 8 couleurs soigneusement sélectionnées pour un rendu professionnel
- **Single Page Application** : Navigation fluide avec scroll smooth et ancres
- **Responsive Mobile-First** : Parfaitement adapté à tous les écrans
- **Animations Sophistiquées** : Effets scroll-reveal, hover-lift et transitions cinématographiques
- **Galeries Dynamiques** : Masonry + Carrousel avec modal interactif
- **Design System Complet** : Classes CSS personnalisées et thème Tailwind moderne

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone <votre-repo>
cd ink-ritual-tattoo

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:5173
```

### Scripts disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production  
npm run preview    # Prévisualiser le build
npm run lint       # Vérification ESLint
npm run deploy     # Déploiement GitHub Pages
```

## 📱 Sections du site

### 🏠 Header
- Navigation sticky responsive avec menu burger
- Logo personnalisable avec effets visuels
- Transitions japonaises fluides

### 🎯 Hero Section  
- Grand kanji central (墨 - encre) avec animations
- Kanjis flottants thématiques (encre, art, pinceau...)
- Message d'accueil personnalisable
- Double CTA avec effets lumineux

### 👨‍🎨 Section Artistes
- Profils de tatoueurs avec système de toggle mobile
- Philosophies artistiques et spécialités
- Images grayscale avec révélation couleur
- Processus de travail en 3 étapes (consultation, création, réalisation)

### 🖼️ Galerie Masonry
- Grille responsive avec hauteurs variables
- Filtres par catégorie de tatouage  
- Modal fullscreen avec navigation clavier
- Effets grayscale/couleur sophistiqués

### 📊 Portfolio Carrousel
- Présentation des œuvres principales
- Navigation automatique et manuelle
- Descriptions détaillées avec overlay
- Miniatures de navigation

### 💰 Infos & Tarifs
- Système de tarification "à partir de" + tarif horaire
- 4 niveaux : Consultation gratuite, Flash, Personnalisé, Œuvre d'art
- Processus de travail illustré avec kanjis
- Section hygiène et certifications

### 📞 Contact
- Formulaire complet avec types de projets
- Animation de succès avec kanji japonais
- Informations de contact avec zones cliquables
- Réseaux sociaux et placeholder carte

### 🦶 Footer
- 4 colonnes organisées (navigation, contact, infos, certifications)
- Mentions légales et crédits développeur
- Bouton retour haut animé
- Design minimaliste avec accents colorés

## 🎨 Design & Technologies

### Stack technique
- **React 19.1.0** avec TypeScript strict
- **Vite 7.0.4** comme bundler ultra-rapide
- **Tailwind CSS v4** avec plugin @tailwindcss/vite
- **React Icons** pour les icônes
- **ESLint 9** avec configuration TypeScript moderne

### Palette de couleurs (8 couleurs total)
- **Base Karasu** : Du karasu-950 (#09090b) au karasu-400 (#a1a1aa)
- **Primary** : #0891b2 (cyan signature)
- **Purple** : #8b5cf6 (accent Akira)  
- **Gold** : #fbbf24 (kanjis spéciaux)
- **Bone** : #f8fafc (texte principal)

### Typographies
- **Kanji** : Polices optimisées pour caractères japonais
- **Accent** : Typographies élégantes pour titres
- **Body** : Police lisible pour contenu

### Animations et effets
- **Scroll-reveal** : Apparition progressive avec useScrollReveal hook
- **Hover-lift** : Élévation 3D des éléments interactifs
- **Kanji géants** : Arrière-plans animés flottants
- **Primary-glow** : Effets de lueur sur boutons
- **Glass-card** : Effet de verre avec backdrop-blur

## 📂 Structure du projet

```
src/
├── components/
│   ├── Header.tsx           # Navigation sticky
│   ├── Hero.tsx             # Section d'accueil + kanjis flottants
│   ├── Artist.tsx           # Profils tatoueurs
│   ├── Gallery.tsx          # Galerie masonry avec filtres
│   ├── Portfolio.tsx        # Carrousel présentation
│   ├── Infos.tsx            # Tarifs et informations
│   ├── Contact.tsx          # Formulaire + infos contact
│   ├── Footer.tsx           # Pied de page complet
│   └── MentionsLegales.tsx  # Page mentions légales
├── hooks/
│   └── useScrollReveal.ts   # Hook animations scroll
├── App.tsx                  # Composant racine
├── index.css                # Styles Tailwind + custom @theme
└── main.tsx                 # Point d'entrée React
```

## 🔧 Personnalisation

### Adapter les couleurs
Éditez `src/index.css` section `@theme` :

```css
@theme {
  --color-karasu-950: #09090b;  /* Fond principal */
  --color-karasu-900: #18181b;  /* Sections */
  --color-karasu-800: #27272a;  /* Composants */
  --color-karasu-600: #52525b;  /* Bordures */
  --color-karasu-400: #a1a1aa;  /* Texte secondaire */
  --color-primary: #0891b2;     /* Couleur signature */
  --color-purple: #8b5cf6;      /* Accent artiste */
  --color-gold: #fbbf24;        /* Kanjis précieux */
  --color-bone: #f8fafc;        /* Texte principal */
}
```

### Personnaliser le contenu
- **Artist.tsx** : Informations des tatoueurs, spécialités, philosophies
- **Gallery.tsx** : Images de tatouages avec catégories et filtres
- **Portfolio.tsx** : Sélection d'œuvres pour le carrousel
- **Infos.tsx** : Tarifs, processus de travail, certifications
- **Contact.tsx** : Informations de contact et réseaux sociaux

### Adapter les kanjis
- **Hero** : Kanjis flottants thématiques (墨, 絵, 芸, 筆, 線, 色)
- **Sections** : Kanjis d'en-tête personnalisables
- **Arrière-plans** : Kanjis géants décoratifs (鴉) avec animations

## 🌐 Déploiement

### GitHub Pages (recommandé)
```bash
npm run deploy  # Build + déploiement automatique
```

### Autres plateformes
- **Vercel** : Build automatique depuis GitHub
- **Netlify** : `npm run build`, dossier `dist`
- **Hosting classique** : Contenu du dossier `dist` après build

## 🎨 Design System Japonais

### Classes CSS personnalisées
- **kanji-style** : Typographie caractères japonais
- **glass-card** : Effet verre backdrop-blur
- **hover-lift** : Animation élévation 3D
- **primary-glow** : Effets lumineux colorés
- **brush-stroke** : Effet pinceau sur texte
- **scroll-reveal** : Animation apparition scroll

### Kanjis utilisés (exemples)
- **鴉** (karasu) : Arrière-plans géants flottants
- **墨** (sumi) : Encre - Hero et éléments thématiques
- **職人** (shokunin) : Artisans - Section tatoueurs  
- **雑** (zatsu) : Réalisations - Portfolio
- **情報** (jōhō) : Informations - Tarifs
- **連絡** (renraku) : Contact

## 📝 Notes techniques

- **Template de démonstration** : Site fictif "Ink Ritual Tattoo" à personnaliser
- **Images incluses** : Dossier `public/images/gallery/` avec exemples
- **Formulaire** : Simulation - à connecter avec votre backend
- **Mentions légales** : Page dédiée avec informations développeur
- **Performance** : Lazy loading et optimisations intégrées
- **Mobile-first** : Design responsive avec breakpoints adaptés
- **Accessibilité** : Navigation clavier, ARIA labels, contraste optimisé

## 📜 Droits d'utilisation

⚠️ **Ce projet n'est pas open source.**

**Propriété intellectuelle :**
- Code source et design protégés par droit d'auteur
- Propriétaire : **Gregory Poupaux** (GregDev)
- Reproduction, modification ou utilisation sans autorisation interdite

**Utilisation commerciale :**
- Template disponible à la **vente et personnalisation sur demande**
- Projets sur-mesure selon vos besoins
- Intégration complète avec votre identité visuelle

**Contact pour acquisition :**
- 🔗 **LinkedIn :** [Gregory Poupaux](https://www.linkedin.com/in/grégory-poupaux)
- 🌐 **Portfolio :** [GregDev](https://misterpoy.github.io/GregDev-PortFolio/)
- 🎯 **Démo live :** [Template Salon Tatouage](https://misterpoy.github.io/siteTatoueur/)

**Pourquoi ce template ?**
- ✅ Design immersif japonais unique
- ✅ Code moderne React 19 + TypeScript
- ✅ Responsive et optimisé SEO
- ✅ Palette couleurs professionnelle
- ✅ Personnalisation complète
- ✅ Support technique inclus

## 📄 Licence

Copyright © 2025 Gregory Poupaux (GregDev)

**Tous droits réservés.**

Ce code source est la propriété de son auteur.  
Aucune reproduction, diffusion ou modification n'est autorisée sans accord écrit préalable.

Le projet est disponible uniquement dans le cadre d'une prestation commerciale.

---

**Template développé avec ❤️ par Gregory Poupaux (GregDev) 愛**

*Solution professionnelle pour salons de tatouage - Disponible sur demande*