import { useState } from 'react';

const iconosPaths = {
  'Endoscopía Digestiva Alta':
    '<circle cx="12" cy="10" r="3.5" stroke-width="1.5"/><path d="M8.5 10c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5" stroke-width="1.5"/><path d="M12 13.5v3M9.5 16.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" stroke-width="1.5"/><ellipse cx="12" cy="7" rx="4.5" ry="2.5" stroke-width="1.5"/>',
  'Colonoscopía':
    '<path d="M5 8c0-1.7 1.3-3 3-3h1c1.1 0 2 .9 2 2v0c0 1.1.9 2 2 2h2c1.1 0 2 .9 2 2v4c0 1.7-1.3 3-3 3h-2c-1.1 0-2-.9-2-2v0c0-1.1-.9-2-2-2H7c-1.1 0-2-.9-2-2V8z" stroke-width="1.5"/>',
  'Test de Aire Espirado':
    '<circle cx="12" cy="12" r="9" stroke-width="1.5"/><path d="M8 12h2m2 0h2m2 0h2M12 8v2m0 2v2m0 2v2" stroke-width="1.5" stroke-linecap="round"/><path d="M15 9l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  'Intolerancia a la Lactosa':
    '<path d="M6 4h12v12c0 2.2-1.8 4-4 4h-4c-2.2 0-4-1.8-4-4V4z" stroke-width="1.5"/><path d="M6 4h12v4H6V4z" stroke-width="1.5"/><circle cx="10" cy="14" r="1.5" fill="currentColor"/><circle cx="14" cy="14" r="1.5" fill="currentColor"/>',
  'Detección de SIBO':
    '<ellipse cx="12" cy="8" rx="5" ry="3" stroke-width="1.5"/><path d="M7 8v8c0 1.7 2.2 3 5 3s5-1.3 5-3V8" stroke-width="1.5"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/>',
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
                    stroke={isOpen ? 'white' : 'var(--color-blue-dark)'}
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
                      stroke="var(--color-blue-dark)"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    <span className="text-[13px] text-[var(--color-blue-dark)] font-medium">{estudio.duracion}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-cyan-light)_40%,var(--color-cyan-pale))] bg-[var(--color-cyan-pale)] px-3.5 py-2">
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
                    <span className="text-[13px] text-[var(--color-blue-dark)] font-medium">
                      {estudio.sedacion ? 'Con sedación' : 'Sin sedación'}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color-mix(in_srgb,var(--color-cyan-light)_40%,var(--color-cyan-pale))] bg-[var(--color-cyan-pale)] px-3.5 py-2">
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
                    <span className="text-[13px] text-[var(--color-blue-dark)] font-medium">
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
