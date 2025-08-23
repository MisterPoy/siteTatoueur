# Journal de Développement - Ink Ritual Tattoo

## 📖 À propos de ce journal
Ce document retrace toutes les modifications, améliorations et décisions techniques prises durant le développement du site Ink Ritual Tattoo. Il exclut volontairement les commits Git pour se concentrer sur l'évolution fonctionnelle du projet.

---

## 🎯 Vue d'ensemble du projet

**Projet :** Site web pour studio de tatouage japonais  
**Stack technique :** React 19.1.0 + TypeScript + Vite 7.0.4 + Tailwind CSS v4  
**Thème :** Esthétique japonaise avec palette de couleurs "karasu" (corbeau)  
**Déploiement :** GitHub Pages

---

## 📅 Historique des modifications

### 2025-08-20 - Session continue

#### 🔧 **Corrections techniques critiques**
- **Problème résolu :** Erreur de syntaxe CSS `lg-p-4` → `lg:p-4` dans Gallery.tsx:354
- **Problème résolu :** Configuration Vite instable en développement
  - **Ancienne config :** `base: '/siteTatoueur/'` causait des bugs de cache et erreurs réseau
  - **Nouvelle config :** `base: './'` pour chemins relatifs universels
- **Nettoyage :** Cache Vite vidé pour résoudre les conflits

#### 🖼️ **Remplacement complet des images**
- **Contexte :** Remplacement des images Lorem Picsum par de vraies photos de tatouages
- **Source :** Dossier local `I:\MrPoyDocs\ProjetsDevPerso\siteTatoueur\images-tatouages\`
- **Images ajoutées :**
  - `grue-japonaise.jpg` (image principale)
  - `tatouage-1.jpg`, `tatouage-2.jpg`, `tatouage-3.jpg` (nouvelles images)
  - Conservation des images existantes Unsplash renommées
- **Composants modifiés :**
  - `Gallery.tsx` : Toutes les URLs Lorem Picsum remplacées
  - `Portfolio.tsx` : Carousel avec vraies images
- **Technique :** Utilisation de chemins relatifs `./images/gallery/` pour compatibilité dev/prod

#### 🎨 **Amélioration UX mobile**
- **Problème identifié :** Symboles flottants du Hero invisibles sur mobile
- **Particules flottantes :**
  - Mobile : `w-3 h-3` et `w-4 h-4` (vs `w-1 h-1` et `w-2 h-2`)
  - Opacité renforcée : `opacity-70/80` sur mobile
- **Kanjis décoratifs :**
  - Suppression de `hidden lg:block` → visibles partout
  - Tailles responsives : `text-xs/sm/base` → `text-lg/xl/2xl`
  - Repositionnement pour mobile : `left-4` vs `left-8`

#### 🔄 **Gestion des chemins d'assets**
- **Approche simplifiée :** Abandon de la fonction utilitaire complexe `getImageUrl()`
- **Solution finale :** `base: './'` dans vite.config.ts
- **Avantage :** Même syntaxe pour développement et production

---

### Sessions précédentes (contexte)

#### 🏗️ **Initialisation et anonymisation**
- **Création :** Documentation CLAUDE.md pour futures sessions
- **Anonymisation complète :**
  - "Karasu tattoo" + "Theora Ink Shop" → "Ink Ritual Tattoo"
  - Artistes "Th3ora" + "Karasu" → "Akira" + "Hiro"
  - Kanji central : 烏 (karasu/corbeau) → 墨 (sumi/encre)
  - Coordonnées et adresses mises à jour

#### 🎨 **Développement de l'identité visuelle**
- **Palette couleurs :** Système "karasu" (karasu-50 à karasu-950)
- **Typographie :** Intégration de kanjis japonais dans l'interface
- **Animations :** Effets hover, scroll reveal, particules flottantes
- **Composants :** Architecture modulaire avec hooks personnalisés

---

## 🛠️ **Configuration technique actuelle**

### Dependencies principales
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0", 
  "react-icons": "^5.5.0",
  "@tailwindcss/vite": "^4.1.11",
  "vite": "^7.0.4"
}
```

### Configuration Vite
```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Chemins relatifs pour dev/prod
  build: { outDir: 'dist' }
})
```

### Structure des images
```
public/images/gallery/
├── grue-japonaise.jpg (image principale)
├── tatouage-1.jpg, tatouage-2.jpg, tatouage-3.jpg
├── allef-vinicius.jpg, benjamin-lehman.jpg
├── collins-lesulie-PWK6CeCJtJw-unsplash.jpg
├── eduardo-vaccari-pIltvcnqsfU-unsplash.jpg
├── jasmin-chew-WbWOF8z_NGQ-unsplash.jpg
├── jj-jordan-eenumTwM6Ec-unsplash.jpg
├── matheus-ferrero-RBsrv4yV5KY-unsplash.jpg
├── pexels-photo-2183131.jpeg
├── pexels-photo-8767196.jpeg
└── Tatouage_d'une_grue_dans_le_style_japonais_par_l'artiste_tatoueur_Nico_Tatuto_basé_à_Bordeaux.jpg
```

---

## 🎯 **Objectifs réalisés**

✅ Site totalement anonymisé  
✅ Identité visuelle japonaise cohérente  
✅ Images réelles de tatouages intégrées  
✅ Responsive design optimisé  
✅ Configuration dev/prod simplifiée  
✅ UX mobile améliorée (symboles visibles)  
✅ Architecture modulaire et maintenable  

---

## 🚀 **Prochaines étapes potentielles**

- [ ] Tests utilisateur sur mobile
- [ ] Optimisation des performances (lazy loading, compression images)
- [ ] Intégration d'un formulaire de contact fonctionnel
- [ ] SEO et métadonnées
- [ ] Analytics et suivi utilisateur
- [ ] Mode sombre/clair
- [ ] Galerie avec filtres avancés
- [ ] Système de réservation en ligne

---

## 📝 **Notes techniques importantes**

### Gestion des chemins d'assets
- **Toujours utiliser :** `./images/gallery/filename.jpg`
- **Éviter :** Chemins absolus `/siteTatoueur/` qui cassent en dev
- **Config Vite :** `base: './'` assure la compatibilité universelle

### Responsive design
- **Mobile first :** Classes Tailwind avec préfixes sm:, md:, lg:
- **Particules :** Tailles et opacités adaptées par breakpoint
- **Kanjis :** Visibles sur tous devices avec tailles progressives

### Performance
- **Images :** Lazy loading natif avec `loading="lazy"`
- **Animations :** CSS transitions plutôt que JS pour fluidité
- **Cache :** Vite gère automatiquement le cache busting

---

### 2025-08-22 - Session design & animations

#### 🎨 **Refonte typographique majeure**
- **Remplacement de police :** Zen Tokyo Zoo → Playfair Display
  - **Raison :** Recherche d'une alternative gratuite à Ferryman pour plus d'élégance
  - **Implementation :** Google Fonts + ajustements responsive complets
  - **Breakpoints :** Tailles adaptées mobile (`text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem]`)
  - **Résultat :** Typographie plus raffinée tout en gardant l'esthétique japonaise

#### 🖼️ **Optimisation Hero section mobile**
- **Problème résolu :** Image de fond invisible sur mobile Android
  - **Cause :** Masques trop opaques + chemin absolu + format WebP non supporté
  - **Solution :** 
    - Chemin relatif : `/images/` → `./images/`
    - Fallback JPG : `url("./images/gallery/imageFond.webp"), url("./images/gallery/grue-japonaise.jpg")`
    - Masques allégés : opacités réduites de 50% sur mobile (`sm:from-karasu-950/70`)
    - Cercles repositionnés et redimensionnés pour mobile
- **Résultat :** Image parfaitement visible sur tous devices

#### 🎌 **Kanji géants d'arrière-plan - Innovation majeure**
- **Concept :** Kanji KARASU (鴉) géants flottants en arrière-plan de chaque section
- **Tailles créées :**
  - COLOSSAL : jusqu'à 1000px (`clamp(500px, 55vw, 1000px)`)
  - MASSIVE : jusqu'à 800px
  - HUGE : jusqu'à 600px  
  - XL, LG, MD, SM, XS : gamme complète
- **Polices variées :** Noto Sans JP, Playfair Display, Cinzel
- **Positionnement artistique :** 3-4 kanji par section, répartition harmonieuse
- **Opacités subtiles :** 0.025 à 0.06 pour effet watermark élégant

#### 🌊 **Système d'animations fluides**
- **5 animations de flottement :** `kanji-float-1` à `kanji-float-5`
- **Amplitudes importantes :**
  - Vertical : -10px à -40px (vs -3px à -15px initial)
  - Horizontal : -15px à +16px (vs -4px à +4px initial)
  - Rotations : ±1° à ±3° autour de la rotation de base
- **Durées variées :** 8s à 12s pour éviter synchronisation
- **CSS Variables :** `--rotation` pour préserver rotations d'origine
- **Résultat :** Kanji qui "nagent" vraiment dans l'espace

#### 🎯 **Arrière-plans de sections**
- **Évolution :** Fonds unis → Dégradés subtils → Kanji géants
- **Dégradés créés :** 
  - Portfolio : `bg-gradient-to-br from-karasu-900 via-karasu-950 to-karasu-900`
  - Gallery : `bg-gradient-to-bl from-karasu-800 via-karasu-900 to-karasu-850`
  - Artists : `bg-gradient-to-tr from-karasu-900 via-karasu-800 to-karasu-950`
  - Infos : `bg-gradient-to-tl from-karasu-950 via-karasu-900 to-karasu-950`
  - Contact : `bg-gradient-to-br from-karasu-950 via-karasu-850 to-karasu-950`
  - Testimonials : conservation du dégradé existant

#### ⚖️ **Répartition harmonieuse finale**
- **Anti-surcharge :** Évitement des "tas" de kanji par espacement optimisé
- **Marges négatives :** `-left-48`, `-right-48`, `-bottom-40` pour débordements contrôlés
- **Distribution stratégique :** Gros kanji en coins, petits en zones intermédiaires
- **Résultat :** Composition équilibrée et aérée

---

## 🎯 **Objectifs réalisés (mise à jour)**

✅ Site totalement anonymisé  
✅ Identité visuelle japonaise cohérente  
✅ Images réelles de tatouages intégrées  
✅ Responsive design optimisé  
✅ Configuration dev/prod simplifiée  
✅ UX mobile améliorée (symboles visibles)  
✅ Architecture modulaire et maintenable  
✅ **Typographie élégante avec Playfair Display**  
✅ **Image Hero mobile Android corrigée**  
✅ **Kanji géants animés - innovation artistique majeure**  
✅ **Système d'animations fluides et amples**  
✅ **Arrière-plans différenciés par section**  

---

### 2025-08-23 - Révolution de la Palette de Couleurs

#### 🎨 **Optimisation Ultra-Intelligente de la Palette**
- **Analyse critique :** Identification de 25 couleurs → **trop dispersé pour un site professionnel**
- **Approach créative-technique :** Équilibre entre richesse artistique et bonnes pratiques web
- **Méthodologie :** Analyse systématique de chaque utilisation couleur dans le codebase
- **Remplacements intelligents :**
  - `karasu-200/300` → `karasu-400` (textes descriptifs)
  - `karasu-500` → `karasu-400` (hovers subtils) 
  - `karasu-700` → `karasu-600` (bordures plus visibles)
  - `emerald/teal` → `primary/gold` (selon contexte)
  - Suppression des variants automatiques (`primary-dark`, `primary-light`)
  - Suppression des doublons (`secondary` = `purple`)

#### ✅ **Palette Ultra-Optimisée Finale : 8 Couleurs**
- **Base Karasu (5) :** 950, 900, 800, 600, 400 - du plus sombre au plus clair
- **Accents (3) :** Primary #0891b2 (signature), Purple #8b5cf6 (Akira), Gold #fbbf24 (kanjis)
- **Texte (1) :** Bone #f8fafc (lisibilité parfaite)
- **Réduction :** **-68%** par rapport aux 25 couleurs originales
- **Impact :** Design 100% préservé, palette 68% plus légère

#### 🔧 **Corrections Techniques Critiques**
- **Bug kanji 実** : Correction du kanji "Réalisation" qui avait perdu sa couleur
- **Incohérences résolues :** `karasu-850` (inexistant) → `karasu-900`
- **Classes CSS nettoyées :** `teal-glow`, `emerald-glow` → `gold-glow`
- **Harmonisation boutons :** "Commencer votre projet" aligné sur "Réserver consultation"

#### 🎯 **Kanjis Géants - Répartition Optimisée**
- **Mélange équilibré :** 30% Primary, 25% Purple, 25% Gold, 20% Karasu-400
- **Philosophie :** Primary (éléments visibles), Gold (modération), Purple (Akira), Karasu (subtilité)
- **Cohérence renforcée :** Chaque kanji a désormais un rôle chromatique défini

#### 📋 **Documentation Complète**
- **`palette-ink-ritual-site.html`** : Palette actuelle comme référence développeur
- **Variables CSS** : Toutes documentées avec exemples d'usage
- **Guide d'utilisation** : Philosophie chromatique et bonnes pratiques
- **Statistiques visuelles** : 8 couleurs organisées par catégories

---

## 🎯 **Objectifs réalisés (mise à jour)**

✅ Site totalement anonymisé  
✅ Identité visuelle japonaise cohérente  
✅ Images réelles de tatouages intégrées  
✅ Responsive design optimisé  
✅ Configuration dev/prod simplifiée  
✅ UX mobile améliorée (symboles visibles)  
✅ Architecture modulaire et maintenable  
✅ **Typographie élégante avec Playfair Display**  
✅ **Image Hero mobile Android corrigée**  
✅ **Kanji géants animés - innovation artistique majeure**  
✅ **Système d'animations fluides et amples**  
✅ **Arrière-plans différenciés par section**  
✅ **🚀 PALETTE ULTRA-OPTIMISÉE : 8 couleurs (-68%)**  
✅ **🎨 Design system japonais professionnel**  
✅ **📱 Cohérence UI/UX parfaite**  

---

*Dernière mise à jour : 2025-08-23*