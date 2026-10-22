import { useEffect, useRef, useState } from 'react';

const PREFIJO_ANCLA = 'preparacion-';

const CHIP_CLASES =
  'inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-cyan-light)_40%,var(--color-cyan-pale))] bg-[var(--color-cyan-pale)] px-3.5 py-2';

/** Devuelve el id del estudio si el hash es "#preparacion-<id>" de un estudio existente. */
function estudioDesdeHash(hash, estudios) {
  const ancla = decodeURIComponent(hash).replace(/^#/, '');
  if (!ancla.startsWith(PREFIJO_ANCLA)) return null;
  const id = ancla.slice(PREFIJO_ANCLA.length);
  return estudios.some((estudio) => estudio.id === id) ? id : null;
}

/** Agrupa los estudios manteniendo el orden y la numeración continua 01 a 05 de Servicios. */
function agrupar(estudios) {
  const grupos = [];
  estudios.forEach((estudio, index) => {
    let grupo = grupos.find((g) => g.nombre === estudio.grupo);
    if (!grupo) {
      grupo = { nombre: estudio.grupo, estudios: [] };
      grupos.push(grupo);
    }
    grupo.estudios.push({ ...estudio, numero: String(index + 1).padStart(2, '0') });
  });
  return grupos;
}

export default function PreparacionAccordion({ estudios }) {
  const [abierto, setAbierto] = useState(null);
  // Cada pedido es un objeto nuevo: así se vuelve a hacer scroll aunque el estudio ya esté abierto
  const [pedidoScroll, setPedidoScroll] = useState(null);
  const raizRef = useRef(null);

  const abrirDesdeAncla = (id) => {
    setAbierto(id);
    setPedidoScroll({ id });
  };

  // Abrir el estudio del ancla al cargar, al cambiar el hash y al tocar un link "Ver preparación"
  useEffect(() => {
    const desdeHash = () => {
      const id = estudioDesdeHash(window.location.hash, estudios);
      if (id) abrirDesdeAncla(id);
    };

    const alHacerClic = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href*="#preparacion-"]');
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;
      const id = estudioDesdeHash(url.hash, estudios);
      if (!id) return;
      event.preventDefault();
      if (window.location.hash !== url.hash) history.pushState(null, '', url.hash);
      abrirDesdeAncla(id);
    };

    desdeHash();
    window.addEventListener('hashchange', desdeHash);
    document.addEventListener('click', alHacerClic);
    return () => {
      window.removeEventListener('hashchange', desdeHash);
      document.removeEventListener('click', alHacerClic);
    };
  }, [estudios]);

  // Scroll hasta el estudio, descontando el header fijo y la altura de los paneles de arriba que se están cerrando
  useEffect(() => {
    if (!pedidoScroll || !raizRef.current) return;
    const item = document.getElementById(`${PREFIJO_ANCLA}${pedidoScroll.id}`);
    if (!item) return;

    let seCierranArriba = 0;
    raizRef.current.querySelectorAll('[data-panel-cerrado="true"]').forEach((panel) => {
      if (panel.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_FOLLOWING) {
        seCierranArriba += panel.getBoundingClientRect().height;
      }
    });

    const header = document.querySelector('header');
    const altoHeader = header ? header.getBoundingClientRect().height : 0;
    const destino = item.getBoundingClientRect().top + window.scrollY - seCierranArriba - altoHeader - 16;
    window.scrollTo({ top: Math.max(0, destino) });
  }, [pedidoScroll]);

  const toggle = (id) => {
    setAbierto((actual) => (actual === id ? null : id));
  };

  return (
    <div ref={raizRef} className="flex flex-col gap-8 md:gap-10">
      {agrupar(estudios).map((grupo) => (
        <div key={grupo.nombre}>
          <div className="flex items-center gap-4">
            <h4 className="eyebrow eyebrow-dark shrink-0">{grupo.nombre}</h4>
            <span className="h-px flex-1 bg-[var(--color-border)]" aria-hidden="true" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {grupo.estudios.map((estudio) => {
              const isOpen = abierto === estudio.id;
              const panelId = `preparacion-panel-${estudio.id}`;
              const headerId = `preparacion-header-${estudio.id}`;

              return (
                <div
                  key={estudio.id}
                  id={`${PREFIJO_ANCLA}${estudio.id}`}
                  className={`relative overflow-hidden rounded-[var(--radius)] border bg-white transition-colors duration-200 motion-reduce:transition-none ${
                    isOpen
                      ? 'border-[var(--color-blue)]'
                      : 'border-[var(--color-border)] hover:border-[var(--color-blue)]'
                  }`}
                >
                  {isOpen && (
                    <span
                      className="absolute inset-y-0 left-0 w-[3px]"
                      style={{ backgroundImage: 'var(--gradient-blue)' }}
                      aria-hidden="true"
                    />
                  )}

                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(estudio.id)}
                    className={`flex min-h-[60px] w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-200 motion-reduce:transition-none md:px-5 ${
                      isOpen ? 'bg-[color-mix(in_srgb,var(--color-blue)_6%,white)]' : 'bg-white'
                    }`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span
                        className="font-display text-[15px] font-bold leading-none tracking-[0.02em] text-[var(--color-blue-dark)]"
                        aria-hidden="true"
                      >
                        {estudio.numero}
                      </span>
                      <span className="font-display text-[17px] font-semibold leading-[1.3] text-[var(--color-ink)]">
                        {estudio.estudio}
                      </span>
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 motion-reduce:transition-none ${
                        isOpen ? 'bg-[var(--color-blue)]' : 'bg-[var(--color-cyan-pale)]'
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? 'white' : 'var(--color-blue)'}
                        strokeWidth="1.5"
                        className="shrink-0 transition-transform duration-200 motion-reduce:transition-none"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                        aria-hidden="true"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    data-panel-cerrado={isOpen ? 'false' : 'true'}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-4 pt-4 pb-5 md:px-5 md:pb-6">
                        <div className="flex flex-wrap gap-2">
                          <span className={CHIP_CLASES}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-dark)" strokeWidth="1.5" aria-hidden="true">
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 3" />
                            </svg>
                            <span className="text-[13px] font-medium text-[var(--color-blue-dark)]">{estudio.duracion}</span>
                          </span>
                          <span className={CHIP_CLASES}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-dark)" strokeWidth="1.5" aria-hidden="true">
                              <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                            </svg>
                            <span className="text-[13px] font-medium text-[var(--color-blue-dark)]">
                              {estudio.sedacion ? 'Con sedación' : 'Sin sedación'}
                            </span>
                          </span>
                          <span className={CHIP_CLASES}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-dark)" strokeWidth="1.5" aria-hidden="true">
                              <circle cx="9" cy="8" r="3" />
                              <path d="M3 20a6 6 0 0 1 12 0" />
                              <circle cx="17" cy="9" r="2.5" />
                              <path d="M15 20a5 5 0 0 1 6-4.9" />
                            </svg>
                            <span className="text-[13px] font-medium text-[var(--color-blue-dark)]">
                              {estudio.acompanante ? 'Con acompañante' : 'Sin acompañante'}
                            </span>
                          </span>
                        </div>

                        <ul className="mt-4 flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
                          {estudio.indicaciones.map((indicacion) => (
                            <li key={indicacion} className="flex items-start gap-2.5">
                              <span className="mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[var(--color-cyan-pale)]">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" aria-hidden="true">
                                  <path d="M5 12.5l4.5 4.5L19 7" />
                                </svg>
                              </span>
                              <span className="text-[15px] leading-[1.65] text-[color-mix(in_srgb,var(--color-ink)_25%,var(--color-muted))] lg:text-[16px]">
                                {indicacion}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
