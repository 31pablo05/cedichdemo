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
          <div key={estudio.estudio}>
            <button
              type="button"
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 bg-white border border-[var(--color-border)] rounded-[var(--radius)] px-5 py-[18px] transition-colors hover:border-[var(--color-blue)]"
            >
              <span className="font-display text-[16px] font-semibold text-[var(--color-ink)]">
                {estudio.estudio}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-blue)"
                strokeWidth="1.5"
                className="shrink-0 transition-transform duration-200"
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
              className="overflow-hidden transition-[max-height] duration-[250ms] ease-in-out"
              style={{ maxHeight: isOpen ? '600px' : '0px' }}
            >
              <div className="px-5 py-5">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
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
                  </div>
                  <div className="flex items-center gap-2">
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
                  </div>
                  <div className="flex items-center gap-2">
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
                  </div>
                </div>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {estudio.indicaciones.map((indicacion) => (
                    <li key={indicacion} className="flex items-start gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-blue)"
                        strokeWidth="2"
                        className="shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12.5l4.5 4.5L19 7" />
                      </svg>
                      <span className="text-[14px] text-[var(--color-muted)] leading-[1.7]">
                        {indicacion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
