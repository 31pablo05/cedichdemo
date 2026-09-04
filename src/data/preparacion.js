// PENDIENTE CLIENTE: las indicaciones definitivas de preparación las tiene que aportar el centro
export const preparacion = [
  {
    estudio: 'Endoscopía Digestiva Alta',
    duracion: '15 a 20 minutos',
    sedacion: true,
    acompanante: true,
    indicaciones: [
      'Ayuno de 8 horas antes del estudio, sin agua ni alimentos.',
      'Suspender ciertos medicamentos según indicación médica.',
      'Concurrir con acompañante, ya que se realiza con sedación.',
      'No conducir ni realizar actividades de riesgo el resto del día.',
    ],
  },
  {
    estudio: 'Colonoscopía',
    duracion: '30 a 45 minutos',
    sedacion: true,
    acompanante: true,
    indicaciones: [
      'Dieta líquida el día previo al estudio.',
      'Tomar la solución evacuante indicada en los horarios señalados.',
      'Ayuno de 8 horas antes del estudio.',
      'Concurrir con acompañante, ya que se realiza con sedación.',
    ],
  },
  {
    estudio: 'Vía Biliar',
    duracion: '20 a 30 minutos',
    sedacion: true,
    acompanante: true,
    indicaciones: [
      'Ayuno de 8 horas antes del estudio.',
      'Traer estudios previos relacionados, si los tenés.',
      'Concurrir con acompañante, ya que se realiza con sedación.',
      'No conducir ni realizar actividades de riesgo el resto del día.',
    ],
  },
  {
    estudio: 'Prevención',
    duracion: 'Según el estudio indicado',
    sedacion: false,
    acompanante: false,
    indicaciones: [
      'La preparación depende del estudio de prevención indicado.',
      'Te enviamos las indicaciones puntuales por WhatsApp.',
      'Traer estudios previos relacionados, si los tenés.',
    ],
  },
];
