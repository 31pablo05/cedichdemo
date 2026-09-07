import { useState } from 'react';

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
              <span className="font-display text-[16px] font-semibold text-[var(--color-ink)]">
                {estudio.estudio}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? 'bg-[var(--color-blue)]' : 'bg-[color-mix(in_srgb,var(--color-blue)_10%,white)]'
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
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-blue)_25%,white)] bg-[color-mix(in_srgb,var(--color-blue)_8%,white)] px-3.5 py-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-blue-dark)"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    <span className="text-[13px] text-[var(--color-muted)]">{estudio.duracion}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-blue)_25%,white)] bg-[color-mix(in_srgb,var(--color-blue)_8%,white)] px-3.5 py-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-blue-dark)"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                    </svg>
                    <span className="text-[13px] text-[var(--color-muted)]">
                      {estudio.sedacion ? 'Con sedación' : 'Sin sedación'}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-blue)_25%,white)] bg-[color-mix(in_srgb,var(--color-blue)_8%,white)] px-3.5 py-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-blue-dark)"
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
                        <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-blue)_10%,white)]">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-blue-dark)"
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
