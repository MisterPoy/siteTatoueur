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

*Dernière mise à jour : 2025-08-20*