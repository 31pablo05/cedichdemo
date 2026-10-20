import { useEffect, useRef, useState } from 'react';
import { nav } from '../../data/nav.js';
import { site, getWhatsappLink, whatsappMensajes } from '../../data/site.js';
import { isotipo } from '../../lib/imagenes.js';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [activeAncla, setActiveAncla] = useState(null);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const closeTimerRef = useRef(null);

  const whatsappLink = getWhatsappLink(whatsappMensajes.solicitarTurno);

  const open = () => {
    setAnimKey((key) => key + 1);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    const triggerButton = document.getElementById('mobile-nav-trigger');
    triggerButton?.focus();
  };

  // Escuchar clicks en el botón del header
  useEffect(() => {
    const triggerButton = document.getElementById('mobile-nav-trigger');
    if (!triggerButton) return;

    const handleTriggerClick = () => {
      open();
    };

    triggerButton.addEventListener('click', handleTriggerClick);
    return () => triggerButton.removeEventListener('click', handleTriggerClick);
  }, []);

  // Actualizar aria-expanded del botón del header
  useEffect(() => {
    const triggerButton = document.getElementById('mobile-nav-trigger');
    if (triggerButton) {
      triggerButton.setAttribute('aria-expanded', isOpen.toString());
    }
  }, [isOpen]);

  // Bloquear scroll del body cuando el menú está abierto
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

  // Manejar tabindex de elementos interactivos para prevenir tabulación cuando está cerrado
  useEffect(() => {
    if (!panelRef.current) return;

    const panel = panelRef.current;
    const focusableElements = panel.querySelectorAll(
      'a[href], button:not([disabled])'
    );

    focusableElements.forEach((el) => {
      if (isOpen) {
        el.removeAttribute('tabindex');
      } else {
        el.setAttribute('tabindex', '-1');
      }
    });
  }, [isOpen]);

  // Mover foco al panel cuando se abre
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Escape cierra el menú
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

  // Focus trap: mantener el foco dentro del panel
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const focusableElements = panel.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const trapFocus = (event) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift+Tab: si está en el primero, ir al último
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab: si está en el último, ir al primero
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    panel.addEventListener('keydown', trapFocus);
    return () => panel.removeEventListener('keydown', trapFocus);
  }, [isOpen]);

  useEffect(() => {
    return () => clearTimeout(closeTimerRef.current);
  }, []);

  const handleNavClick = (event, item) => {
    event.preventDefault();
    setActiveAncla(item.ancla);
    
    // Cerrar el menú
    close();
    setActiveAncla(null);
    
    // Pequeño delay para que se cierre el menú antes de navegar
    setTimeout(() => {
      // En la home la sección existe: scroll suave sin recargar. Desde otras páginas se navega a la home.
      const targetElement = document.querySelector(item.ancla);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Actualizar la URL sin recargar
        history.pushState(null, '', item.href);
      } else {
        // Si no existe la sección (estamos en otra página), navegar a la home
        window.location.assign(item.href);
      }
    }, 300);
  };

  return (
    <>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[100] flex flex-col overflow-y-auto transition-transform duration-[280ms] ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full invisible'
        }`}
        style={{
          backgroundImage: 'var(--gradient-navy)',
        }}
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

        <div className="relative flex flex-col min-h-full px-5 py-5">
          <div className="flex items-center justify-between">
            <a href="/" onClick={close} className="flex items-center gap-3">
              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white border border-white/15 shadow-[var(--shadow-card)]">
                <img
                  src={isotipo.src}
                  alt="CEDICH"
                  width={isotipo.width}
                  height={isotipo.height}
                  className="h-auto w-[35px]"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-[20px] text-white">CEDICH</span>
                <span className="text-[10px] leading-tight text-[var(--color-cyan)]">
                  Centro de Endoscopías Digestivas de Chubut
                </span>
              </span>
            </a>

            <button
              ref={closeButtonRef}
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

          <nav className="mt-5">
            <ul key={animKey}>
              {nav.map((item, index) => (
                <li
                  key={item.ancla}
                  className="mobile-nav-item border-b border-white/10"
                  style={{ '--stagger-index': index }}
                >
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item)}
                    className="flex h-[52px] items-center gap-3"
                  >
                    <span className="font-display text-[11px] font-semibold text-[var(--color-cyan)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 font-display text-[21px] leading-[1.2] transition-colors duration-150 ${
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
            className="mobile-nav-cta mt-6 flex min-h-[48px] items-center justify-center gap-2 w-full rounded-[var(--radius-pill)] px-[22px] py-3 font-medium text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.7 8.24-8.24 8.24a8.3 8.3 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.28-8.24Zm-4.53 4.7c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.64 2.04.87 2.46.7 2.9.65.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.5.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.47-.4-.4-.55-.4h-.48Z" />
            </svg>
            Solicitar turno
          </a>

          <div className="mt-7 pt-5 border-t border-white/10">
            <div className="flex items-center justify-between">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-cyan)]">
                Dónde estamos
              </p>

              <div className="-my-2 -mr-2 flex items-center">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de CEDICH"
                  className="flex h-11 w-11 items-center justify-center text-white"
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
                  className="flex h-11 w-11 items-center justify-center text-white"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3Z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="mt-2 text-[14px] text-white/70">
              {site.direccion}, {site.localidad}, {site.provincia}
            </p>
            {/* PENDIENTE CLIENTE: confirmar horarios reales de atención */}
            <p className="mt-1 text-[13px] text-white/50">
              {site.horarios.map((horario) => (
                <span key={horario.dia} className="block">
                  {horario.dia} de {horario.franja}
                </span>
              ))}
            </p>
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

