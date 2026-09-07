import { useEffect, useRef, useState } from 'react';
import { nav } from '../../data/nav.js';
import { site, getWhatsappLink } from '../../data/site.js';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [activeAncla, setActiveAncla] = useState(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const closeTimerRef = useRef(null);

  const whatsappLink = getWhatsappLink('Hola, quiero hacer una consulta');

  const open = () => {
    setAnimKey((key) => key + 1);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    return () => clearTimeout(closeTimerRef.current);
  }, []);

  const handleNavClick = (event, ancla) => {
    event.preventDefault();
    setActiveAncla(ancla);
    closeTimerRef.current = setTimeout(() => {
      close();
      setActiveAncla(null);
      window.location.hash = ancla;
    }, 180);
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={open}
        className="mobile-nav-trigger flex items-center justify-center w-[42px] h-[42px] rounded-full"
      >
        <span className="relative flex flex-col items-center justify-center gap-[5px] w-[22px]">
          <span className="block h-[2px] w-full bg-white" />
          <span className="block h-[2px] w-[70%] bg-white" />
          <span className="block h-[2px] w-full bg-white" />
        </span>
      </button>

      <div
        ref={panelRef}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[100] flex flex-col overflow-y-auto transition-transform duration-[280ms] ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        style={{ backgroundImage: 'var(--gradient-navy)' }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="mobile-nav-hex"
              width="56"
              height="98"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1)"
            >
              <polygon
                points="28,0 56,14 56,42 28,56 0,42 0,14"
                fill="none"
                stroke="var(--color-cyan)"
                strokeWidth="1"
              />
              <polygon
                points="28,42 56,56 56,84 28,98 0,84 0,56"
                fill="none"
                stroke="var(--color-cyan)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-nav-hex)" />
        </svg>

        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--color-cyan)]/10 blur-[100px]" />

        <div className="relative flex flex-col h-full px-5 py-6">
          <div className="flex items-center justify-between">
            <a href="#main" onClick={close} className="flex items-center gap-3">
              <img
                src="/logos/logo-cedich.png"
                alt="CEDICH"
                width="42"
                height="42"
                className="h-[42px] w-auto"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-[20px] text-white">CEDICH</span>
                <span className="text-[10px] leading-tight text-[var(--color-cyan)]">
                  Centro de Endoscopías Digestivas del Chubut
                </span>
              </span>
            </a>

            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={close}
              className="flex items-center justify-center w-11 h-11"
            >
              <span className="relative block w-[22px] h-[22px]">
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45" />
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45" />
              </span>
            </button>
          </div>

          <nav className="mt-8">
            <ul key={animKey}>
              {nav.map((item, index) => (
                <li
                  key={item.ancla}
                  className="mobile-nav-item border-b border-white/10"
                  style={{ '--stagger-index': index }}
                >
                  <a
                    href={item.ancla}
                    onClick={(event) => handleNavClick(event, item.ancla)}
                    className="flex items-center gap-3 py-[18px]"
                  >
                    <span className="font-display text-[11px] font-semibold text-[var(--color-cyan)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 font-display text-[22px] transition-colors duration-150 ${
                        activeAncla === item.ancla ? 'text-[var(--color-cyan)]' : 'text-white'
                      }`}
                    >
                      {item.etiqueta}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white/30"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mobile-nav-cta mt-8 flex items-center justify-center gap-2 w-full rounded-[var(--radius-pill)] px-[22px] py-[14px] font-medium text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.7 8.24-8.24 8.24a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.28-8.24Zm-4.53 4.7c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.64 2.04.87 2.46.7 2.9.65.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.5.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.47-.4-.4-.55-.4h-.48Z" />
            </svg>
            Consultar por WhatsApp
          </a>

          <div className="mt-auto pt-6 border-t border-white/10">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-cyan)]">
              Dónde estamos
            </p>
            <p className="mt-3 text-[14px] text-white/70">
              {site.direccion}, {site.localidad}
            </p>
            {/* PENDIENTE CLIENTE: confirmar horarios reales de atención */}
            {site.horarios.map((horario) => (
              <p key={horario.dia} className="mt-1 text-[13px] text-white/50">
                {horario.dia} de {horario.franja}
              </p>
            ))}

            <div className="mt-5 flex items-center gap-5">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de CEDICH"
                className="text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de CEDICH"
                className="text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mobile-nav-trigger {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          transition: background-color 200ms ease;
        }

        .mobile-nav-trigger:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .mobile-nav-cta {
          background-image: var(--gradient-blue);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--color-blue) 40%, transparent);
        }

        .mobile-nav-item {
          opacity: 0;
          transform: translateX(18px);
          animation: mobile-nav-item-enter 320ms ease-out forwards;
          animation-delay: calc(var(--stagger-index) * 60ms);
        }

        @keyframes mobile-nav-item-enter {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-nav-item {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

