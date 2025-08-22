# 🏮 Ink Ritual Tattoo - 鴉 Site Vitrine Salon de Tatouage Japonais

Un site vitrine immersif et esthétique pour le salon de tatouage japonais **Ink Ritual Tattoo**, construit avec React, TypeScript et Tailwind CSS v4.

## ⛩️ Caractéristiques

- **Esthétique Japonaise** : Design sombre et immersif inspiré de l'art traditionnel japonais
- **Typographie Authentique** : Polices Zen Tokyo Zoo, Noto Sans JP et caractères Kanji intégrés
- **Single Page Application** : Navigation fluide avec scroll smooth et ancrage japonais
- **Responsive Design** : Parfaitement adapté mobile, tablette et desktop
- **Animations Sophistiquées** : Effets reveal, hover-lift et transitions cinématographiques
- **Grille Masonry** : Galerie dynamique avec modal interactif et navigation clavier
- **Palette Karasu** : Gamme de noirs (karasu-950 à karasu-50), rouge carmin et blanc cassé
- **Design System Japonais** : Classes CSS personnalisées avec thème @theme{} pour Tailwind v4

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd ink-ritual-tattoo
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5178
```

### Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linting
npm run lint
```

## 📱 Sections du site

### 🏠 Header
- Logo Karasu avec kanji 烏 (crow) et effet crimson
- Navigation sticky avec transitions japonaises
- Menu burger responsive avec animations

### 🎯 Hero Section
- Grand kanji 墨 (encre) central avec animations flottantes
- Philosophie japonaise et message d'accueil immersif
- Effets de texture et dégradés sombres
- Bouton d'action vers les artistes avec glow effect

### 👨‍🎨 Nos Artistes
- Carrousel de 4 artistes japonais avec noms authentiques
- Philosophies personnelles et spécialités détaillées
- Navigation par flèches et miniatures
- Design cards avec bordures dorées et effets hover

### 🖼️ Galerie
- Grille masonry responsive avec hauteurs variables
- Filtres par catégorie avec kanji (入墨, 新, 花, 幾, 書)
- Modal fullscreen avec navigation clavier (ESC, flèches)
- Effets grayscale/couleur et transformations au hover

### 💰 Infos & Prestations
- Tarification avec design japonais et kanji intégrés
- Processus en étapes avec icônes traditionnelles
- Informations studio et certifications
- Cards glass-effect avec bordures crimson

### 📞 Contact
- Formulaire complet avec types de projets japonais
- Animation de succès avec message en japonais
- Informations de contact avec kanji thématiques
- Réseaux sociaux et placeholder carte interactive

### 🦶 Footer
- 4 colonnes avec sections kanji (案, 情, 法)
- Liens navigation, contact, légal et certifications
- Symbole d'harmonie 和 et bouton retour haut
- Design minimaliste avec accents crimson et gold

## 🎨 Design & Technologies

### Stack technique
- **React 18** avec TypeScript
- **Vite** comme bundler
- **Tailwind CSS v4** avec plugin @tailwindcss/vite
- **React Icons** pour les icônes
- **Design System personnalisé** avec @theme{} syntax

### Palette de couleurs Karasu
- **Karasu (Noir)** : Du karasu-950 (#0a0a0a) au karasu-50 (#f8f9fa)
- **Crimson (Rouge)** : #dc2626 avec variantes hover et glow
- **Bone (Blanc cassé)** : #f5f5dc pour les textes principaux
- **Gold (Or)** : #ffd700 pour les accents et kanji
- **Japanese-texture** : Effets de fond avec opacité et gradients

### Typographies japonaises
- **Kanji Style** : 'Zen Tokyo Zoo', serif pour les caractères japonais
- **Accent** : 'Cinzel', serif pour les titres
- **Body** : 'Noto Sans JP', sans-serif pour le corps de texte
- **Classes personnalisées** : kanji-style, font-accent, font-body

### Animations et effets
- **Scroll-reveal** : Apparition progressive des sections
- **Hover-lift** : Élévation 3D des éléments interactifs
- **Crimson-glow** : Effet de lueur rouge sur les boutons
- **Glass-card** : Effet de verre avec backdrop-blur
- **Keyframes personnalisées** : fadeIn, slideUp, reveal, float, shimmer

## 📂 Structure du projet

```
src/
├── components/           # Composants React
│   ├── Header.tsx       # Navigation sticky
│   ├── Hero.tsx         # Section d'accueil
│   ├── Artists.tsx      # Profils des artistes
│   ├── Gallery.tsx      # Galerie de tatouages
│   ├── Pricing.tsx      # Tarifs et prestations
│   ├── Contact.tsx      # Formulaire de contact
│   └── Footer.tsx       # Pied de page
├── App.tsx              # Composant principal
├── index.css            # Styles Tailwind + custom
└── main.tsx             # Point d'entrée
```

## 🔧 Personnalisation

### Modifier les couleurs
Éditez le fichier `src/index.css` dans la section `@theme` pour ajuster la palette Karasu :

```css
@theme {
  --color-karasu-950: #0a0a0a;
  --color-karasu-900: #1a1a1a;
  --color-crimson: #dc2626;
  --color-bone: #f5f5dc;
  --color-gold: #ffd700;
}
```

### Ajouter des artistes
Modifiez le tableau `artists` dans `src/components/Artists.tsx` :

```typescript
const artists: Artist[] = [
  {
    id: 1,
    name: "Nouveau Maître",
    philosophy: "Philosophie artistique",
    specialty: "Spécialité japonaise",
    experience: "X ans d'expérience",
    description: "Description détaillée...",
    image: "URL_de_l_image",
    instagram: "@handle.instagram"
  },
  // ...
];
```

### Modifier la galerie
Éditez le tableau `images` dans `src/components/Gallery.tsx` pour ajouter vos tatouages :

```typescript
{
  id: 13,
  src: "URL_de_votre_image",
  alt: "Nom du tatouage",
  category: "irezumi|neo-japonais|floral|geometrique|calligraphie",
  artist: "Nom de l'artiste",
  description: "Description du tatouage",
  style: "Style artistique",
  height: 300 // Hauteur pour la masonry
}
```

## 🌐 Déploiement

### Build de production
```bash
npm run build
```

### Déploiement sur Vercel
```bash
npm install -g vercel
vercel --prod
```

### Déploiement sur Netlify
1. Connecter votre repo GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🎨 Design System Japonais

### Classes CSS personnalisées
- **kanji-style** : Typographie pour les caractères japonais
- **japanese-texture** : Texture de fond subtile
- **glass-card** : Effet de verre avec backdrop-blur
- **hover-lift** : Animation d'élévation au survol
- **crimson-glow** : Effet de lueur rouge
- **masonry-grid** : Grille en maçonnerie responsive
- **scroll-reveal** : Animation d'apparition au scroll

### Kanji utilisés
- 鴉 (karasu) : Corbeau - Logo principal
- 墨 (sumi) : Encre - Hero section
- 師 (shi) : Maître - Section artistes
- 作品 (sakuhin) : Œuvres - Galerie
- 連絡 (renraku) : Contact
- 和 (wa) : Harmonie - Footer

## 📝 Notes importantes

- **Images** : Utilise Unsplash pour les images de démonstration
- **Formulaire** : Simulation d'envoi avec animation japonaise - intégrer backend
- **Carte** : Placeholder pour Google Maps - intégrer l'API
- **Tailwind v4** : Utilise la nouvelle syntaxe @theme{} et @tailwindcss/vite
- **Performance** : Images lazy loading et optimisations CSS intégrées
- **Accessibilité** : Navigation clavier complète dans la galerie modal

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Fait avec ❤️ pour l'art du tatouage japonais 愛**

Ink Ritual Tattoo - Où tradition et modernité se rencontrent dans l'art de l'encre*
