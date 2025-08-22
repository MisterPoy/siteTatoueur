/**
 * Utilitaire pour gérer les chemins d'assets selon l'environnement
 */

/**
 * Obtient l'URL de base selon l'environnement
 */
export const getBaseUrl = (): string => {
  // En développement, Vite utilise '/'
  // En production, il utilise '/siteTatoueur/' défini dans vite.config.ts
  return import.meta.env.BASE_URL;
};

/**
 * Génère le chemin complet pour une image
 * @param imagePath - Le chemin relatif de l'image (ex: 'images/gallery/image.jpg')
 */
export const getImageUrl = (imagePath: string): string => {
  const baseUrl = getBaseUrl();
  // Supprime le slash initial si présent pour éviter les doubles slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${baseUrl}${cleanPath}`;
};