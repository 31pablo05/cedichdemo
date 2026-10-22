// PENDIENTE REVISIÓN MÉDICA: indicaciones orientativas basadas en recomendaciones generales. El Dr. Galarza debe validarlas y ajustarlas al protocolo de CEDICH (horas de ayuno, días de dieta, solución evacuante) antes de publicar.

export const preparacionTextos = {
  eyebrow: 'INDICACIONES',
  titulo: 'Preparación según el estudio',
  intro: 'Información orientativa. Las indicaciones definitivas te las enviamos por WhatsApp según tu caso.',
  aviso:
    'Esta información es orientativa y no reemplaza la indicación de tu médico. Ante cualquier duda, escribinos.',
  boton: 'Consultar mi preparación',
};

const GRUPO_ENDOSCOPICOS = 'Estudios endoscópicos';
const GRUPO_AIRE_ESPIRADO = 'Tests de aire espirado';

const DOCUMENTACION_CON_ESTUDIOS =
  'Traé el pedido médico, tu documento, la credencial de tu obra social y estudios previos si los tenés.';

// Comunes a los tres tests de aire espirado
const indicacionesAireEspirado = [
  'No tomar antibióticos en las 4 semanas previas, ni laxantes o probióticos en la semana previa, salvo indicación de tu médico.',
  'No haber hecho una preparación para colonoscopía en la semana previa.',
  'El día anterior, dieta liviana: carnes, pollo, pescado, huevo y arroz blanco. Sin lácteos, harinas, legumbres, frutas ni verduras.',
  'Ayuno de 12 horas antes del estudio. Podés tomar un poco de agua.',
  'El día del estudio no fumes. Durante el test vas a estar en reposo, sin hacer actividad física.',
  'Traé el pedido médico, tu documento y la credencial de tu obra social.',
];

// `id` coincide con el de servicios.js: arma el ancla #preparacion-<id> de "Ver preparación"
export const preparacion = [
  {
    id: 'endoscopia-alta',
    grupo: GRUPO_ENDOSCOPICOS,
    estudio: 'Endoscopía digestiva alta',
    duracion: '15 a 20 minutos',
    sedacion: true,
    acompanante: true,
    indicaciones: [
      'Ayuno de sólidos de 8 horas antes del estudio.',
      'Podés tomar líquidos claros (agua o té) solo hasta el horario que te indiquemos; después, nada por boca.',
      'Si tomás anticoagulantes, antiagregantes (como aspirina o clopidogrel), medicación para la diabetes o semaglutida, consultanos antes: puede ser necesario ajustarlos.',
      'Concurrí con un adulto acompañante, ya que el estudio se realiza con sedación.',
      'No manejes ni realices actividades de riesgo el resto del día.',
      DOCUMENTACION_CON_ESTUDIOS,
    ],
  },
  {
    id: 'colonoscopia',
    grupo: GRUPO_ENDOSCOPICOS,
    estudio: 'Colonoscopía',
    duracion: '30 a 45 minutos',
    sedacion: true,
    acompanante: true,
    indicaciones: [
      'Los días previos, dieta baja en fibra: sin frutas, verduras, legumbres ni cereales integrales.',
      'El día anterior, dieta líquida clara según el esquema que te enviemos. Evitá líquidos rojos o violetas.',
      'Tomá la solución evacuante en los horarios indicados, en dos tomas. La última tiene que terminar al menos 2 horas antes del estudio.',
      'Si tomás anticoagulantes, antiagregantes, hierro o medicación para la diabetes, consultanos antes: puede ser necesario ajustarlos.',
      'Concurrí con un adulto acompañante y no manejes el resto del día, ya que el estudio se realiza con sedación.',
      DOCUMENTACION_CON_ESTUDIOS,
    ],
  },
  {
    id: 'test-aire-espirado',
    grupo: GRUPO_AIRE_ESPIRADO,
    estudio: 'Test de aire espirado',
    duracion: '2 a 3 horas',
    sedacion: false,
    acompanante: false,
    indicaciones: indicacionesAireEspirado,
  },
  {
    id: 'intolerancia-lactosa',
    grupo: GRUPO_AIRE_ESPIRADO,
    estudio: 'Intolerancia a la lactosa',
    duracion: 'Aprox. 3 horas',
    sedacion: false,
    acompanante: false,
    indicaciones: [
      'Es un test de aire espirado: tomás una solución con lactosa y se miden muestras de aire durante unas 3 horas.',
      ...indicacionesAireEspirado,
    ],
  },
  {
    // PENDIENTE REVISIÓN MÉDICA: confirmar que la detección de SIBO se realiza por test de aire espirado
    id: 'deteccion-sibo',
    grupo: GRUPO_AIRE_ESPIRADO,
    estudio: 'Detección de SIBO',
    duracion: '2 a 3 horas',
    sedacion: false,
    acompanante: false,
    indicaciones: [
      'Es un test de aire espirado: tomás una solución y se miden muestras de aire durante 2 a 3 horas.',
      ...indicacionesAireEspirado,
    ],
  },
];

// PENDIENTE CLIENTE: confirmar si estos servicios siguen vigentes
// {
//   estudio: 'Vía Biliar',
//   duracion: '20 a 30 minutos',
//   sedacion: true,
//   acompanante: true,
//   indicaciones: [
//     'Ayuno de 8 horas antes del estudio.',
//     'Traer estudios previos relacionados, si los tenés.',
//     'Concurrir con acompañante, ya que se realiza con sedación.',
//     'No conducir ni realizar actividades de riesgo el resto del día.',
//   ],
// },
// {
//   estudio: 'Prevención',
//   duracion: 'Según el estudio indicado',
//   sedacion: false,
//   acompanante: false,
//   indicaciones: [
//     'La preparación depende del estudio de prevención indicado.',
//     'Te enviamos las indicaciones puntuales por WhatsApp.',
//     'Traer estudios previos relacionados, si los tenés.',
//   ],
// },
