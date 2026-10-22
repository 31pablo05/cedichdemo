export const site = {
  nombreCorto: 'CEDICH',
  nombreCompleto: 'Centro de Endoscopías Digestivas de Chubut',
  telefono: '280 453 3933',
  telefonoInternacional: '+54 280 453 3933',
  whatsapp: '5492804533933',
  direccion: 'Pedro Martínez 45',
  localidad: 'Rawson',
  provincia: 'Chubut',
  codigoPostal: '9103',
  pais: 'Argentina',
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
  googleMapsComoLlegarUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Pedro+Mart%C3%ADnez+45%2C+Rawson%2C+Chubut',
};

// Mensajes de WhatsApp unificados
export const whatsappMensajes = {
  solicitarTurno: 'Hola, quiero solicitar un turno',
  consultaGeneral: 'Hola, tengo una consulta',
  consultaCobertura: 'Hola, quiero consultar si trabajan con mi obra social',
  consultaPreparacion: 'Hola, quiero consultar por la preparación de un estudio',
};

export function getWhatsappLink(mensaje) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
