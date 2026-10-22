import { useState } from 'react';

const WHATSAPP_ICONO =
  'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.7 8.24-8.24 8.24a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.28-8.24Zm-4.53 4.7c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.64 2.04.87 2.46.7 2.9.65.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.5.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.47-.4-.4-.55-.4h-.48Z';

const LINK_CLASES =
  'font-semibold text-[var(--color-blue-dark)] underline decoration-[color-mix(in_srgb,var(--color-blue-dark)_35%,transparent)] underline-offset-2 hover:decoration-[var(--color-blue-dark)]';

// Links a secciones de la home: scroll suave sin dejar el ancla en la URL, como el menú
function irASeccion(event, href) {
  const destino = document.querySelector(href);
  if (!destino || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  destino.scrollIntoView({ block: 'start' });
}

export default function Faq({ items, textos, whatsappLink }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="relative overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] md:p-7">
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundImage: 'var(--gradient-blue)' }}
        aria-hidden="true"
      />
      <p className="eyebrow eyebrow-dark">{textos.eyebrow}</p>
      <h2 className="mt-4 text-[24px] font-display text-[var(--color-ink)]">{textos.titulo}</h2>

      <div className="mt-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const headerId = `faq-header-${index}`;

          return (
            <div key={item.pregunta} className="border-b border-[var(--color-border)]">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="group -mx-2 flex min-h-[52px] w-[calc(100%+1rem)] items-center justify-between gap-4 rounded-[var(--radius-sm)] px-2 py-3.5 text-left transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-blue)_5%,white)] motion-reduce:transition-none"
              >
                <span className="text-[15px] font-medium leading-[1.4] text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-blue-dark)] motion-reduce:transition-none">
                  {item.pregunta}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-blue)"
                  strokeWidth="1.5"
                  className="shrink-0 transition-transform duration-200 motion-reduce:transition-none"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-[62ch] pb-4 text-[15px] leading-[1.65] text-[color-mix(in_srgb,var(--color-ink)_25%,var(--color-muted))]">
                    {item.respuesta.map((tramo, i) =>
                      typeof tramo === 'string' ? (
                        tramo
                      ) : (
                        <a key={i} href={tramo.href} onClick={(event) => irASeccion(event, tramo.href)} className={LINK_CLASES}>
                          {tramo.texto}
                        </a>
                      )
                    )}
                    {item.enlace && (
                      <>
                        {' '}
                        <a href={item.enlace.href} onClick={(event) => irASeccion(event, item.enlace.href)} className={LINK_CLASES}>
                          {item.enlace.texto}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* En desktop este bloque pasa a la tarjeta de ayuda de la columna derecha */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:hidden">
        <p className="max-w-none text-[14px] text-[color-mix(in_srgb,var(--color-ink)_25%,var(--color-muted))]">{textos.otraDuda}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] border-[1.5px] border-[var(--color-border)] bg-white px-6 text-[15px] font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-blue)] hover:bg-[var(--color-blue)] hover:text-white motion-reduce:transition-none sm:w-auto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={WHATSAPP_ICONO} />
          </svg>
          {textos.boton}
        </a>
      </div>
    </div>
  );
}
