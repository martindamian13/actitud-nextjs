import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  const mediaQuery = window.matchMedia(QUERY);
  mediaQuery.addEventListener('change', onChange);
  return () => mediaQuery.removeEventListener('change', onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

// On the server there is no media query, assume animations are allowed
function getServerSnapshot() {
  return false;
}

/**
 * Hook para detectar si el usuario prefiere reducir animaciones
 * Respeta la configuración del sistema operativo del usuario
 *
 * @returns boolean - true si el usuario prefiere reducir animaciones
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
