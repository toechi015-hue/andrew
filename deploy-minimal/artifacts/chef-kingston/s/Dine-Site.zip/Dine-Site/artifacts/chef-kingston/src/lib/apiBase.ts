/** Trimmed API origin (no trailing slash). Empty uses same origin (Vite dev proxy or API on same host). */
export const API_BASE_URL = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

export function apiUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!API_BASE_URL) {
    if (typeof window !== "undefined" && window.location.origin) {
      return `${window.location.origin}${p}`;
    }
    return p;
  }
  return `${API_BASE_URL}${p}`;
}

/** Turn stored paths like `/api/storage/...` into a full URL for `<img src>` when the API is on another host. */
export function mediaSrc(stored: string): string {
  if (!stored) return stored;
  if (stored.startsWith("http://") || stored.startsWith("https://")) return stored;
  if (stored.startsWith("/")) return apiUrl(stored);
  return apiUrl(`/${stored}`);
}
