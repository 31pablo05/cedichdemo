export const serviciosEncabezado = {
  eyebrow: 'NUESTROS SERVICIOS',
  titulo: 'Cinco estudios para tu salud digestiva',
  bajada:
    'Estudios digestivos con equipamiento moderno y acompañamiento en cada paso. Todos los estudios se realizan según indicación médica.',
};

// En mobile el botón muestra solo `consultar`; `consultarDetalle` queda para lectores de pantalla
export const serviciosAcciones = {
  consultar: 'Consultar',
  consultarDetalle: ' por este estudio',
  verPreparacion: 'Ver preparación',
};

// ÍCONOS: reemplazar por un set profesional si el cliente lo pide
// (claves anteriores: estomago, colon, aire, lactosa, sibo)

// La numeración 01 a 05 sigue el orden de los grupos y de los estudios dentro de cada uno.
// `destacado` marca los estudios principales (cards más amplias con franja superior).
export const gruposServicios = [
  {
    id: 'endoscopicos',
    nombre: 'Estudios endoscópicos',
    destacado: true,
    estudios: [
      {
        id: 'endoscopia-alta',
        titulo: 'Endoscopía digestiva alta',
        descripcion: 'Estudio del esófago, estómago y duodeno.',
        mensajeWhatsapp: 'Hola, quiero consultar por Endoscopía Digestiva Alta',
        // icono: 'estomago',
      },
      {
        id: 'colonoscopia',
        titulo: 'Colonoscopía',
        descripcion: 'Estudio del colon y recto.',
        mensajeWhatsapp: 'Hola, quiero consultar por Colonoscopía',
        // icono: 'colon',
      },
    ],
  },
  {
    id: 'aire-espirado',
    nombre: 'Tests de aire espirado',
    destacado: false,
    estudios: [
      {
        id: 'test-aire-espirado',
        titulo: 'Test de aire espirado',
        descripcion: 'Estudio no invasivo para evaluar alteraciones digestivas.',
        mensajeWhatsapp: 'Hola, quiero consultar por Test de Aire Espirado',
        // icono: 'aire',
      },
      {
        id: 'intolerancia-lactosa',
        titulo: 'Intolerancia a la lactosa',
        descripcion: 'Diagnóstico preciso mediante test de aire espirado.',
        mensajeWhatsapp: 'Hola, quiero consultar por Intolerancia a la Lactosa',
        // icono: 'lactosa',
      },
      {
        // PENDIENTE REVISIÓN MÉDICA: confirmar que la detección de SIBO se realiza por test de aire espirado
        id: 'deteccion-sibo',
        titulo: 'Detección de SIBO',
        descripcion: 'Estudio de sobrecrecimiento bacteriano intestinal.',
        mensajeWhatsapp: 'Hola, quiero consultar por Detección de SIBO',
        // icono: 'sibo',
      },
    ],
  },
];

// PENDIENTE CLIENTE: confirmar si estos servicios siguen vigentes
// {
//   id: 'via-biliar',
//   titulo: 'Vía Biliar',
//   descripcion: 'Estudio y tratamiento de la vía biliar.',
//   icono: 'higado',
// },
// {
//   id: 'prevencion',
//   titulo: 'Prevención',
//   descripcion: 'Detección temprana y prevención de patologías digestivas.',
//   icono: 'escudo',
// },
