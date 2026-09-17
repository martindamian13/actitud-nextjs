/**
 * Limitador de envíos en memoria por IP (ventana fija)
 *
 * Vive en la instancia de la función, por lo que no es global entre
 * instancias. Alcanza para frenar ráfagas de envíos repetidos desde
 * una misma IP; BotID y el honeypot cubren el resto.
 */
const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Limpieza de entradas vencidas para que el Map no crezca sin límite
  if (hits.size > 1000) {
    for (const [key, entry] of hits) {
      if (entry.resetAt <= now) hits.delete(key);
    }
  }

  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}
