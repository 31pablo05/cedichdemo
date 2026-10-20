// Las variantes viven en public/imagenes/optimizadas/<nombre>-<ancho>.(avif|webp)
// y se generaron con sharp a partir de los originales.
const CARPETA = '/imagenes/optimizadas';

/**
 * Arma los srcset AVIF y WebP de una imagen optimizada para usar en <picture>,
 * más un src WebP de respaldo para el <img>.
 */
export function fuentesResponsive(nombre, anchos) {
  const srcset = (formato) =>
    anchos.map((ancho) => `${CARPETA}/${nombre}-${ancho}.${formato} ${ancho}w`).join(', ');

  return {
    avif: srcset('avif'),
    webp: srcset('webp'),
    fallback: `${CARPETA}/${nombre}-${anchos[anchos.length - 1]}.webp`,
  };
}

/** Logo liviano de 128 px: nítido en pantallas retina hasta ~40 px de alto. */
export const logoSrc = '/logos/logo-cedich-128.png';

/** Isotipo (solo el ojo, recortado) para el círculo del header y del menú mobile. */
export const isotipo = { src: '/logos/isotipo-cedich-192.png', width: 192, height: 116 };
