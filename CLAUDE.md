# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes de développement courantes

### Développement et construction
```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Vérifier le code avec ESLint
npm run lint

# Déployer (build + gh-pages)
npm run deploy
```

### Système de types
Le projet utilise TypeScript avec des configurations séparées :
- `tsconfig.json` : Configuration racine référençant les sous-configurations
- `tsconfig.app.json` : Configuration pour le code de l'application
- `tsconfig.node.json` : Configuration pour les scripts Node.js (Vite)

Pour vérifier les types : `npx tsc --noEmit` (pas de script npm dédié)

## Architecture du projet

### Structure des composants
L'application suit une architecture Single Page Application (SPA) avec React :

```
src/
├── components/
│   ├── Header.tsx      # Navigation sticky avec menu responsive
│   ├── Hero.tsx        # Section d'accueil avec kanji central et animations
│   ├── Artist.tsx      # Profils des artistes avec carrousel
│   ├── Portfolio.tsx   # Section portfolio/présentation
│   ├── Gallery.tsx     # Galerie masonry avec modal et filtres
│   ├── Infos.tsx       # Tarifs et informations sur les prestations
│   ├── Contact.tsx     # Formulaire de contact avec animation
│   └── Footer.tsx      # Pied de page avec sections kanji
├── hooks/
│   └── useScrollReveal.ts  # Hook pour animations au scroll
├── App.tsx             # Composant racine assemblant toutes les sections
├── main.tsx            # Point d'entrée React
└── index.css           # Styles Tailwind + thème japonais personnalisé
```

### Système de design japonais
Le projet utilise un design system complet basé sur la culture japonaise :

**Palette de couleurs Karasu (Corbeau) :**
- Gamme de noirs : `karasu-50` à `karasu-950`
- Couleurs d'accent : `primary` (cyan), `secondary` (violet), `bone` (blanc cassé), `gold`, `sakura` (rose)

**Typographies :**
- Kanji : 'Zen Tokyo Zoo' pour les caractères japonais
- Titres : 'Cinzel' pour les accents élégants
- Corps : 'Noto Sans JP' pour le texte principal

**Classes CSS personnalisées :**
- `.kanji-style` : Style pour les caractères japonais
- `.japanese-texture` : Texture de fond subtile
- `.glass-card` : Effet de verre avec backdrop-blur
- `.hover-lift` : Animation d'élévation 3D
- `.masonry-grid` : Grille maçonnerie pour la galerie
- `.scroll-reveal` : Animations d'apparition au scroll

### Gestion des animations
Le projet utilise des animations CSS personnalisées définies dans `@theme` :
- `fadeIn`, `slideUp`, `reveal` : Apparitions progressives
- `float` : Animation flottante continue
- `shimmer` : Effet de lueur animée
- `gradient-shift` : Dégradés animés

### Configuration technique

**Stack principal :**
- React 19.1.0 avec TypeScript
- Vite 7.0.4 comme bundler et serveur de développement
- Tailwind CSS v4 avec plugin @tailwindcss/vite
- ESLint avec configuration TypeScript-eslint

**Configuration Vite :**
- Base path : `/siteTatoueur/` pour le déploiement GitHub Pages
- Build output : `dist/`
- Plugins : React + Tailwind CSS

**ESLint :**
- Configuration moderne avec TypeScript-eslint
- Règles React hooks et React refresh activées
- Cible : navigateurs modernes (ES2020)

### Particularités du projet

**Thématique japonaise :**
- Kanji intégrés dans le design : 鴉 (corbeau/karasu), 墨 (encre), 師 (maître)
- Philosophie artistique inspirée de l'art du tatouage japonais
- Couleurs et textures évoquant l'esthétique traditionnelle

**Galerie interactive :**
- Système masonry responsive (3/2/1 colonnes)
- Modal fullscreen avec navigation clavier
- Filtres par catégorie de tatouages
- Effets hover sophistiqués

**Optimisations :**
- Scroll reveal hook pour les animations au défilement
- Images lazy loading
- Transitions fluides avec easing personnalisé
- Responsive design mobile-first

## Notes importantes

- Le formulaire de contact simule l'envoi avec une animation japonaise (intégrer un backend réel)
- La carte de contact utilise un placeholder (intégrer Google Maps API)
- Les images utilisent Unsplash pour la démonstration
- Le projet cible un déploiement sur GitHub Pages via `npm run deploy`
- Tailwind v4 utilise la nouvelle syntaxe `@theme{}` dans index.css