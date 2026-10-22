export const profesionalesBanda = {
  eyebrow: 'PROFESIONALES',
  titulo: 'Experiencia médica al servicio de tu salud',
  bajada: 'Un equipo que combina trayectoria, actualización constante y un trato humano en cada consulta.',
  imagenAlt: 'El equipo de CEDICH frente al logo institucional del centro',
};

export const profesionales = [
  {
    nombre: 'Dr. Andrés Galarza',
    rol: 'Médico cirujano · Endoscopía digestiva',
    parrafo:
      'Al frente de CEDICH, combina su formación quirúrgica con la experiencia en endoscopía digestiva y un trato cercano en cada consulta.',
    datos: ['Médico cirujano · UNNE', 'Residencia en Cirugía General', 'Fellowship en Cirugía Percutánea'],
    // PENDIENTE CLIENTE: confirmar si se puede usar "especialista" antes de volver a mostrar estos datos
    // especialidad: 'Especialista en endoscopía digestiva',
    // atributos: [
    //   'Especialista en endoscopía digestiva',
    //   'Trayectoria y formación continua',
    //   'Atención humana y personalizada',
    // ],
    // PENDIENTE CLIENTE: confirmar número de matrícula
    matricula: '',
    retratoAlt: 'Dr. Andrés Galarza en CEDICH',
    acciones: {
      turno: 'Solicitar turno',
      trayectoria: 'Leer su trayectoria',
    },
  },
];

// PENDIENTE CLIENTE: validar textos con el Dr. Galarza
// PENDIENTE CLIENTE: confirmar si se puede usar "especialista" como título
// PENDIENTE CLIENTE: agregar años de cada etapa si el doctor los pasa (opcionales)
export const trayectoria = {
  eyebrow: 'TRAYECTORIA',
  titulo: 'De Corrientes a Chubut',
  subtitulo: 'La formación del Dr. Andrés Galarza',
  imagenAlt: 'El Dr. Andrés Galarza en el quirófano, bajo la lámpara quirúrgica',
  etapas: [
    {
      ciudad: 'Corrientes',
      rotulo: 'Universidad Nacional del Nordeste',
      descripcion:
        'Nacido en José de San Martín, Chubut, el Dr. Andrés Galarza se trasladó a Corrientes para estudiar Medicina en la Universidad Nacional del Nordeste, donde se formó como médico cirujano.',
    },
    {
      ciudad: 'Posadas',
      rotulo: 'Hospital Escuela de Agudos Dr. Ramón Madariaga',
      descripcion:
        'Continuó su formación en el Hospital Escuela de Agudos Dr. Ramón Madariaga, en Posadas, Misiones, donde realizó su residencia en Cirugía General y se desempeñó como jefe de residentes.',
    },
    {
      ciudad: 'Buenos Aires',
      rotulo: 'Hospital Santojanni',
      descripcion:
        'Posteriormente se trasladó a Buenos Aires para realizar un fellowship en Cirugía Percutánea en el Hospital Santojanni. En esa misma institución también desarrolló una concurrencia en el Servicio de Gastroenterología. Su trayectoria incluye actividad en cirugía percutánea en la Fundación DAICIM y experiencia en docencia y anatomía.',
    },
    {
      ciudad: 'Trelew',
      rotulo: 'Actualidad',
      descripcion:
        'Tras regresar a Chubut, se estableció en Trelew. Actualmente desarrolla su actividad profesional en el Instituto Médico del Sur, CEDICH y el Instituto Cardiovascular, integrando su formación quirúrgica y su experiencia en endoscopía digestiva.',
    },
  ],
};
