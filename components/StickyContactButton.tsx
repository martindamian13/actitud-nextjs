'use client';

import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

/**
 * Botón flotante sticky que permanece visible durante el scroll
 * y dirige al usuario al formulario de contacto
 */
export default function StickyContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Throttle scroll handler to run at most once every 100ms
    const toggleVisibility = throttle(() => {
      // Mostrar el botón después de hacer scroll 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 100);

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      toggleVisibility.cancel();
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* Desktop Button - Bottom Left (opposite to WhatsApp) */}
      <button
        onClick={scrollToContact}
        className={`hidden md:flex fixed bottom-8 left-8 z-40 bg-primary-blue text-white px-8 py-4 rounded-full shadow-2xl hover:bg-primary-dark-blue transition-all duration-300 items-center gap-3 group hover:scale-105 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Ir al formulario de contacto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="font-semibold text-lg">Solicitar Información</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
        </span>
      </button>

      {/* Mobile Button - Bottom, slightly above WhatsApp */}
      <button
        onClick={scrollToContact}
        className={`md:hidden fixed bottom-6 left-6 z-40 bg-primary-blue text-white px-6 py-3 rounded-full shadow-2xl hover:bg-primary-dark-blue transition-all duration-300 flex items-center gap-2 group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        aria-label="Ir al formulario de contacto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="font-semibold">Solicitar Info</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
        </span>
      </button>
    </>
  );
}
