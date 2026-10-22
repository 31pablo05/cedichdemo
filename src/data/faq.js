// PENDIENTE REVISIÓN MÉDICA: confirmar precisión y alcance de cada respuesta
import { site } from './site.js';

export const faqTextos = {
  eyebrow: 'PREGUNTAS FRECUENTES',
  titulo: 'Las dudas más comunes',
  otraDuda: '¿Tenés otra duda?',
  boton: 'Hablar con CEDICH',
  // Tarjeta de ayuda, solo en desktop (columna derecha, debajo de obras sociales)
  ayudaTitulo: '¿No encontrás tu respuesta?',
  ayudaTexto: 'Escribinos por WhatsApp y te ayudamos con tu consulta.',
};

// `respuesta` es una lista de tramos: texto suelto o { texto, href } para un link dentro de la frase.
// `enlace` (opcional) se muestra después de la respuesta y no forma parte del texto para buscadores.
export const faq = [
  {
    pregunta: '¿Cómo solicito un turno?',
    respuesta: [
      'Escribinos por WhatsApp con tu pedido médico y el estudio indicado. Coordinamos juntos el día y el horario, y te enviamos la preparación.',
    ],
  },
  {
    pregunta: '¿Necesito pedido médico?',
    respuesta: [
      'Sí, para coordinar tu turno necesitás la orden de tu médico de cabecera o especialista. Consultanos por WhatsApp si tenés dudas sobre tu caso.',
    ],
  },
  {
    pregunta: '¿Qué tengo que llevar el día del estudio?',
    respuesta: [
      'El pedido médico, tu documento, la credencial de tu obra social y estudios previos relacionados, si los tenés.',
    ],
  },
  {
    pregunta: '¿Cómo me preparo para el estudio?',
    respuesta: [
      'Depende del estudio. En la ',
      { texto: 'sección Preparación', href: '#pacientes' },
      ' tenés las indicaciones de cada uno, y las definitivas te las enviamos por WhatsApp según tu caso.',
    ],
  },
  {
    pregunta: '¿La colonoscopía duele?',
    respuesta: [
      'El estudio se realiza con sedación, por lo que no deberías sentir dolor. Es normal sentir algo de distensión abdominal leve después del procedimiento.',
    ],
  },
  {
    pregunta: '¿Cuánto dura el estudio?',
    respuesta: [
      'Los estudios endoscópicos duran entre 15 y 45 minutos, más un tiempo de recuperación por la sedación. Los tests de aire espirado duran entre 2 y 3 horas.',
    ],
  },
  {
    pregunta: '¿Necesito ir con acompañante?',
    respuesta: [
      'Sí, en los estudios con sedación (endoscopía y colonoscopía), ya que después no vas a poder manejar ni volver solo. Para los tests de aire espirado no hace falta.',
    ],
  },
  {
    pregunta: '¿Cuándo tengo los resultados?',
    respuesta: [
      'En la mayoría de los casos recibís un informe el mismo día del estudio. Si se toman biopsias, el resultado definitivo puede demorar unos días más.',
    ],
  },
  {
    pregunta: '¿Trabajan con mi obra social?',
    respuesta: [
      'Escribinos por WhatsApp con el nombre de tu obra social o prepaga y el estudio que necesitás, y te confirmamos la cobertura antes del turno.',
    ],
  },
  {
    pregunta: '¿Dónde están ubicados?',
    respuesta: [`${site.direccion}, ${site.localidad}. ${site.referencia}.`],
    enlace: { texto: 'Ver cómo llegar', href: '#contacto' },
  },
];

/** Texto plano de una respuesta (sin links), para los datos estructurados FAQPage. */
export function respuestaEnTexto(item) {
  return item.respuesta.map((tramo) => (typeof tramo === 'string' ? tramo : tramo.texto)).join('');
}
