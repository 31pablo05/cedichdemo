export const site = {
  nombreCorto: 'CEDICH',
  nombreCompleto: 'Centro de Endoscopías Digestivas del Chubut',
  telefono: '280 453 3933',
  whatsapp: '5492804533933',
  direccion: 'Pedro Martínez 45',
  localidad: 'Rawson, Chubut',
  codigoPostal: '9103',
  referencia: 'Dentro del Instituto Cardiovascular',
  // PENDIENTE CLIENTE: confirmar horarios reales de atención
  horarios: [
    { dia: 'Lunes', franja: '13:00 a 17:00' },
    { dia: 'Miércoles', franja: '09:00 a 12:00' },
  ],
  instagram: {
    url: 'https://www.instagram.com/cedich_arg/',
    usuario: '@cedich_arg',
  },
  facebook: {
    url: 'https://www.facebook.com/cedichendoscopia/',
  },
  // PENDIENTE CLIENTE: confirmar si CEDICH tiene TikTok y su usuario
  tiktok: {
    url: '',
    usuario: '',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pedro+Mart%C3%ADnez+45%2C+Rawson%2C+Chubut',
};

export function getWhatsappLink(mensaje) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
