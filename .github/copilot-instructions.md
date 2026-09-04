# Instrucciones del proyecto — Web CEDICH

> Guardar como `.github/copilot-instructions.md` en la raíz del repo.
> Reemplaza cualquier versión anterior. Copilot lo lee en cada conversación.

---

## Proyecto

Web institucional de **CEDICH — Centro de Endoscopías Digestivas del Chubut**, centro médico de
endoscopía digestiva en Rawson, Chubut, Argentina, dentro del Instituto Cardiovascular.

El sitio informa al paciente y deriva la consulta a WhatsApp. No hay backend, base de datos, panel
administrativo, sistema de turnos ni login. Es un sitio estático.

## Stack

- **Astro** — componentes `.astro`, JavaScript (no TypeScript)
- **React Islands** — solo donde hay estado o eventos del DOM
- **Tailwind CSS v4** + variables CSS propias en `src/styles/global.css`
- **Vite** como build tool
- Deploy en **Vercel**, repo en **GitHub**

## Reglas de código

1. **Empezar siempre en `.astro`.** Pasar a `.jsx` solo si hace falta `useState` o un event handler.
2. **Nunca hardcodear texto en un componente.** Todo el contenido se importa desde `src/data/`.
3. **Nunca hardcodear colores.** Usar las variables CSS.
4. **Sin estilos inline.** Tailwind + variables CSS.
5. **Sin librerías externas** salvo pedido explícito. Los íconos se escriben como SVG inline.
6. **Mobile first.** Clase base para mobile, escalar con `md:` y `lg:`.
7. **Imágenes desde `public/`.** Se referencian con ruta absoluta que arranca en `/` y una etiqueta
   `img` común, siempre con `width`, `height` y `alt`. **No usar `astro:assets` ni el componente
   `Image`.** Es una decisión de esta etapa: las imágenes todavía no están definidas y así se
   reemplazan sin tocar código.
8. No reorganizar ni reformatear archivos que no se pidió tocar.

---

## Dirección visual

Base **blanca y luminosa**, con bandas de énfasis en azul navy profundo (hero, profesionales,
tecnología, contacto). No es una web oscura: el navy es acento estructural, no fondo dominante.

El patrón hexagonal es el activo de marca, tomado del material impreso real del centro. Se usa como
marca de agua muy tenue: sobre navy en cyan al 6%, sobre blanco en azul al 3%. Nunca protagonista.

## Variables CSS

```css
/* Azules institucionales */
--color-navy-deep: #071527;
--color-navy: #0B2140;
--color-navy-panel: #0E2C52;
--color-blue: #1B7FD4;
--color-blue-dark: #0F5FA8;
--color-cyan: #4BA9E8;

/* Neutros */
--color-surface: #F6F9FC;
--color-surface-alt: #EDF3F9;
--color-border: #E3EAF2;
--color-ink: #0E1D2F;
--color-muted: #5C6B7E;
--color-white: #FFFFFF;

/* WhatsApp: solo botón flotante */
--color-whatsapp: #25D366;

/* Tipografía */
--font-display: 'Plus Jakarta Sans', sans-serif;
--font-body: 'IBM Plex Sans', sans-serif;

/* Formas */
--radius-sm: 8px;
--radius: 12px;
--radius-lg: 20px;
--radius-pill: 999px;

/* Sombras */
--shadow-card: 0 4px 20px rgba(14, 45, 82, 0.07);
--shadow-card-hover: 0 12px 32px rgba(14, 45, 82, 0.13);
--shadow-float: 0 8px 28px rgba(0, 0, 0, 0.22);

/* Gradientes */
--gradient-navy: linear-gradient(135deg, #071527 0%, #0B2140 55%, #0E2C52 100%);
--gradient-blue: linear-gradient(135deg, #1B7FD4 0%, #0F5FA8 100%);
```

## Tipografía

| Elemento | Mobile | Desktop | Estilo |
|---|---|---|---|
| H1 | 32px | 48px | Display 700, line-height 1.12, letter-spacing -0.02em |
| H2 | 25px | 34px | Display 700, line-height 1.2, letter-spacing -0.01em |
| H3 | 18px | 20px | Display 600 |
| Eyebrow | 12px | 12px | Body 600, mayúsculas, letter-spacing 0.12em, color blue o cyan |
| Cuerpo | 15px | 16px | Body 400, line-height 1.7 |
| Small | 13px | 14px | Body 400 |

Párrafos con `max-width: 62ch`. Sentence case en títulos y botones, mayúsculas solo en eyebrows.
Ningún título lleva una palabra suelta en otro color.

## Reglas de diseño

- **Eyebrow + H2** es el patrón de encabezado de sección. Un solo eyebrow por sección.
- El azul `--color-blue` es el color de acción: botones primarios, links, íconos activos.
- El navy es estructura: bandas, cards oscuras, footer.
- El cyan es detalle: eyebrows sobre navy, subrayados, íconos sobre fondo oscuro.
- El verde de WhatsApp aparece **solo** en el botón flotante. En el resto del sitio, los botones de
  WhatsApp son blancos con borde y el ícono de WhatsApp en color ink.
- Cards: fondo blanco, borde 1px `--color-border`, radio 12px, `--shadow-card`. En hover el borde
  pasa a `--color-blue` y la sombra crece. **La card no se desplaza verticalmente.**
- Íconos de servicio: círculo navy de 56px con el ícono lineal blanco de 26px adentro.
- Padding de sección: `py-14` mobile, `py-24` desktop. Container `max-w-[1200px]`, `px-5` /
  `md:px-10`.
- Alineación izquierda por defecto. Centrado solo en el encabezado de Servicios.
- Sin flechas `→` en botones. Se permiten en links de texto tipo "Más información".

## Movimiento

Tres momentos y nada más:
1. Entrada escalonada del hero al cargar.
2. Revelado escalonado de la grilla de servicios al entrar en viewport, una sola vez.
3. Respuestas a la acción del usuario: hover, accordion, menú mobile.

No animar cada sección al scrollear. Desactivar 1 y 2 con `prefers-reduced-motion: reduce`.

## Accesibilidad

- Contraste AA mínimo. El cyan `#4BA9E8` no se usa para texto chico sobre blanco: ahí va
  `--color-blue-dark`.
- Focus visible: anillo de 2px `--color-blue` con offset 2px.
- Áreas táctiles de 48px mínimo.
- Un solo `h1` por página, jerarquía sin saltos.
- Accordions con `aria-expanded`, navegables por teclado.
- Todas las imágenes con `alt` descriptivo.

## Contenido y tono

Español rioplatense, voseo. Cálido y claro, orientado a bajar la ansiedad del paciente. Los botones
dicen la acción concreta: "Pedir turno por WhatsApp", "Ver preparación", "Cómo llegar". Nunca
"Enviar", "Ver más" ni "Click acá".

## Reglas de contenido no negociables

- **No inventar datos médicos, matrículas, nombres de profesionales ni obras sociales.** Todo lo no
  confirmado va como placeholder con el comentario `PENDIENTE CLIENTE`.
- **No usar logos de obras sociales o prepagas.** Hasta tener la lista confirmada, van como texto.
- **No prometer turnos online.** No existe sistema de reservas. Todo CTA de turno lleva a WhatsApp o
  a la sección que explica el proceso.
- **No usar fotos de banco de imágenes de médicos.** Los espacios de foto van con placeholder de
  marca hasta que llegue el material real.

## Lo que NO va en este proyecto

Backend, base de datos, Supabase, CMS, panel administrativo, sistema de turnos, historias clínicas,
login, formularios de contacto con envío de mail, carritos, comentarios.

Si un pedido parece requerir algo de esta lista, avisar antes de implementarlo.