// ancla: id de la sección en la home (lo usa el indicador de sección activa).
// href: destino del link; apunta a la home para que funcione también desde las páginas legales.
// Estando en la home, "/#seccion" scrollea dentro de la misma página sin recargarla.
export const nav = [
  { etiqueta: 'Inicio', ancla: '#inicio' },
  { etiqueta: 'Nosotros', ancla: '#nosotros' },
  { etiqueta: 'Servicios', ancla: '#servicios' },
  { etiqueta: 'Profesionales', ancla: '#profesionales' },
  { etiqueta: 'Pacientes', ancla: '#pacientes' },
  { etiqueta: 'Contacto', ancla: '#contacto' },
].map((item) => ({ ...item, href: `/${item.ancla}` }));
