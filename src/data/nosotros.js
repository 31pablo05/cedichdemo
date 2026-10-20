import { site } from './site.js';

const referenciaEnFrase = site.referencia.charAt(0).toLowerCase() + site.referencia.slice(1);

export const nosotros = {
  eyebrow: 'SOBRE CEDICH',
  titulo: 'Un centro dedicado a cuidar tu salud digestiva',
  parrafo:
    'CEDICH es un centro de endoscopía digestiva en Rawson, impulsado por el Dr. Andrés Galarza. Nuestro objetivo es que cada paciente llegue informado, se sienta acompañado y reciba un diagnóstico preciso.',
  diferenciales: [
    {
      titulo: 'Cerca tuyo',
      descripcion: `En ${site.localidad}, ${referenciaEnFrase}.`,
      icono: 'ubicacion',
    },
    {
      titulo: 'Te explicamos cada paso',
      descripcion: 'Indicaciones claras antes del estudio.',
      icono: 'indicaciones',
    },
    {
      titulo: 'Resultados claros',
      descripcion: 'Un informe comprensible y el seguimiento necesario.',
      icono: 'informe',
    },
  ],
  // PENDIENTE CLIENTE: cuando estén las fotos del equipo, volver a "Conocer al equipo"
  cta: {
    texto: 'Conocé al Dr. Galarza',
    destino: '#profesionales',
  },
  etiquetaFoto: 'Equipo CEDICH · Rawson',
  // Nombre de la imagen optimizada en public/imagenes/optimizadas (vacío muestra el placeholder)
  imagen: 'nosotros',
  imagenAlt: 'El equipo de CEDICH, con el Dr. Andrés Galarza, en el centro frente al logo institucional',
};
