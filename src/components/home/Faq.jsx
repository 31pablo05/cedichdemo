import { useState } from 'react';
import { getWhatsappLink } from '../../data/site.js';

const WHATSAPP = getWhatsappLink('Hola, tengo una consulta sobre los estudios');

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius)] shadow-[var(--shadow-card)] p-7">
      <p className="eyebrow eyebrow-dark">PREGUNTAS FRECUENTES</p>
      <h2 className="mt-4 text-[24px] font-display text-[var(--color-ink)]">Las dudas más comunes</h2>

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
                className="w-full flex items-center justify-between gap-4 py-4 text-left group"
              >
                <span className="text-[15px] font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-blue)]">
                  {item.pregunta}
                </span>
                <svg
                  width="18"
                  height="18"
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
                style={{ maxHeight: isOpen ? '300px' : '0px' }}
              >
                <p className="pb-4 text-[14px] text-[var(--color-muted)] leading-[1.7] max-w-[62ch]">
                  {item.respuesta}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-end">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-blue)]"
        >
          Hacer una consulta
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
