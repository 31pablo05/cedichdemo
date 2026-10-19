export const profesionales = [
  {
    nombre: 'Dr. Andrés Galarza',
    especialidad: 'Especialista en endoscopía digestiva',
    // PENDIENTE CLIENTE: confirmar número de matrícula
    matricula: '',
    foto: null,
    atributos: [
      'Especialista en endoscopía digestiva',
      'Trayectoria y formación continua',
      'Atención humana y personalizada',
    ],
  },
];

// PENDIENTE CLIENTE: validar textos con el Dr. Galarza
// PENDIENTE CLIENTE: confirmar si se puede usar "especialista" como título
// PENDIENTE CLIENTE: agregar años de cada etapa si el doctor los pasa (opcionales)
export const trayectoria = {
  profesional: 'Dr. Andrés Galarza',
  titulo: 'Formación y trayectoria',
  etapas: [
    {
      lugar: 'Corrientes',
      institucion: 'Universidad Nacional del Nordeste',
      descripcion:
        'Nacido en José de San Martín, Chubut, el Dr. Andrés Galarza se trasladó a Corrientes para estudiar Medicina en la Universidad Nacional del Nordeste, donde se formó como médico cirujano.',
    },
    {
      lugar: 'Posadas, Misiones',
      institucion: 'Hospital Escuela de Agudos Dr. Ramón Madariaga',
      descripcion:
        'Continuó su formación en el Hospital Escuela de Agudos Dr. Ramón Madariaga, en Posadas, Misiones, donde realizó su residencia en Cirugía General y se desempeñó como jefe de residentes.',
    },
    {
      lugar: 'Buenos Aires',
      institucion: 'Hospital Santojanni',
      descripcion:
        'Posteriormente se trasladó a Buenos Aires para realizar un fellowship en Cirugía Percutánea en el Hospital Santojanni. En esa misma institución también desarrolló una concurrencia en el Servicio de Gastroenterología. Su trayectoria incluye actividad en cirugía percutánea en la Fundación DAICIM y experiencia en docencia y anatomía.',
    },
    {
      lugar: 'Trelew',
      institucion: 'Actualidad',
      descripcion:
        'Tras regresar a Chubut, se estableció en Trelew. Actualmente desarrolla su actividad profesional en el Instituto Médico del Sur, CEDICH y el Instituto Cardiovascular, integrando su formación quirúrgica y su experiencia en endoscopía digestiva.',
    },
  ],
};
