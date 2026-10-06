import { useState } from 'react';

const iconosPaths = {
  'Endoscopía Digestiva Alta':
    '<path d="M10.8 1.6c-.8 0-1.4.6-1.4 1.4v2.5C6 6.5 3.4 9.7 3.4 13.5c0 4.4 3.6 8 8 8h.3c3 0 5.4-2.4 5.4-5.4 0-2.1-1.2-3.9-3-4.8-.4-.2-.7-.6-.7-1.1V8.8c0-.5.3-.9.8-1 1.4-.4 2.6-1.3 3.2-2.6.4-.8-.2-1.7-1.1-1.7-.5 0-.9.3-1.1.7-.3.6-.9 1-1.6 1h-1.4V3c0-.8-.6-1.4-1.4-1.4z" fill="currentColor" stroke="none"/><path d="M15.8 15.4c1.6 0 2.9 1.3 2.9 2.9v2.3" stroke-width="2.3" stroke-linecap="round"/>',
  'Colonoscopía':
    '<path d="M4.6 21.5v-11A5.4 5.4 0 0 1 10 5.1h4a5.4 5.4 0 0 1 5.4 5.4v5.1a4 4 0 0 1-4 4h-1.6a2.8 2.8 0 0 0-2.8 2.8" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>',
  'Vía Biliar':
    '<path d="M2.8 4.6h12.4c2.7 0 4.8 2.2 4.8 4.8 0 3.3-2.3 6.1-5.5 6.7l-2.2.4c-.6.1-1.1-.1-1.4-.6l-.8-1.1-1.2 1c-.4.4-1 .4-1.5.1C4.6 14.3 2 10.6 2 6.4v-1c0-.5.3-.8.8-.8z" fill="currentColor" stroke="none"/><path d="M13.6 17.4c0 1.9 1.2 3.3 2.6 3.3s2.6-1.4 2.6-3.3c0-1.3-.6-2.4-1.5-2.9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  'Prevención':
    '<path d="M12 2.4 3.9 5.4v6.2c0 4.7 3.3 8.4 8.1 9.9 4.8-1.5 8.1-5.2 8.1-9.9V5.4L12 2.4z" stroke-width="2.2" stroke-linejoin="round"/><path d="M8.4 11.9l2.6 2.6 5.1-5.4" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>',
};

export default function PreparacionAccordion({ estudios }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="flex flex-col gap-3">
      {estudios.map((estudio, index) => {
        const isOpen = openIndex === index;
        const panelId = `preparacion-panel-${index}`;
        const headerId = `preparacion-header-${index}`;

        return (
          <div
            key={estudio.estudio}
            className={`relative overflow-hidden rounded-[var(--radius)] border transition-colors ${
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
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between gap-4 px-5 py-[18px] transition-colors ${
                isOpen ? 'bg-[color-mix(in_srgb,var(--color-blue)_6%,white)]' : 'bg-white'
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] transition-colors ${
                    isOpen ? 'bg-[var(--color-blue)]' : 'bg-[var(--color-cyan-pale)]'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isOpen ? 'white' : 'var(--color-blue)'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: iconosPaths[estudio.estudio] ?? '' }}
                  />
                </span>
                <span className="font-display text-[16px] font-semibold text-[var(--color-ink)]">
                  {estudio.estudio}
                </span>
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
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
                  className="shrink-0 transition-transform duration-200"
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
              className="overflow-hidden transition-[max-height] duration-[250ms] ease-in-out"
              style={{ maxHeight: isOpen ? '900px' : '0px' }}
            >
              <div className="px-5 py-5">
                <div className="flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-cyan-light)_40%,var(--color-cyan-pale))] bg-[var(--color-cyan-pale)] px-3.5 py-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-blue)"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    <span className="text-[13px] text-[var(--color-muted)]">{estudio.duracion}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-cyan-light)_40%,var(--color-cyan-pale))] bg-[var(--color-cyan-pale)] px-3.5 py-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-blue)"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    </svg>
                    <span className="text-[13px] text-[var(--color-muted)]">
                      {estudio.sedacion ? 'Con sedación' : 'Sin sedación'}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-cyan-light)_40%,var(--color-cyan-pale))] bg-[var(--color-cyan-pale)] px-3.5 py-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-blue)"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="8" r="3" />
                      <path d="M3 20a6 6 0 0 1 12 0" />
                      <circle cx="17" cy="9" r="2.5" />
                      <path d="M15 20a5 5 0 0 1 6-4.9" />
                    </svg>
                    <span className="text-[13px] text-[var(--color-muted)]">
                      {estudio.acompanante ? 'Con acompañante' : 'Sin acompañante'}
                    </span>
                  </span>
                </div>

                <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                  <ul className="flex flex-col gap-2.5">
                    {estudio.indicaciones.map((indicacion) => (
                      <li key={indicacion} className="flex items-start gap-2.5">
                        <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[var(--color-cyan-pale)]">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-blue)"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M5 12.5l4.5 4.5L19 7" />
                          </svg>
                        </span>
                        <span className="text-[14px] text-[var(--color-muted)] leading-[1.7]">
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
  );
}
