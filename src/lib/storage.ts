/**
 * Safe client-side storage utility for user convenience preferences.
 * Fully optional: fails gracefully to memory fallback if storage is disabled or blocked.
 */

const PREFIX = 'btc_v1_';

export function getSafeStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(`${PREFIX}${key}`);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function setSafeStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
  } catch {
    // Ignore quota or private-browsing errors silently
  }
}
