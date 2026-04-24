// Gerencia o conjunto de IDs de novidades já vistas pelo usuário (localStorage).
// Compartilhado entre o UpdatesBanner e o UpdatesHistoryButton.

import { siteUpdates, latestUpdateId } from "@/data/site-updates";

export const SEEN_SET_KEY = "site:seenUpdateIds";
export const LEGACY_LAST_SEEN_KEY = "site:lastSeenUpdateId";
export const SEEN_CHANGED_EVENT = "site:seenUpdatesChanged";

export const getSeenIds = (): Set<string> => {
  try {
    const raw = localStorage.getItem(SEEN_SET_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return new Set(parsed);
    }
    // Migração da chave legada (apenas o último visto)
    const legacy = localStorage.getItem(LEGACY_LAST_SEEN_KEY);
    if (legacy) {
      const idx = siteUpdates.findIndex((u) => u.id === legacy);
      if (idx !== -1) {
        // Tudo a partir do legado (inclusive) considera-se visto
        const seen = new Set(siteUpdates.slice(idx).map((u) => u.id));
        saveSeenIds(seen);
        return seen;
      }
    }
  } catch {
    // ignore
  }
  return new Set();
};

export const saveSeenIds = (ids: Set<string>) => {
  try {
    localStorage.setItem(SEEN_SET_KEY, JSON.stringify(Array.from(ids)));
    // Mantém a chave legada sincronizada com o último visto, caso o usuário
    // tenha o ID mais recente marcado como visto.
    if (latestUpdateId && ids.has(latestUpdateId)) {
      localStorage.setItem(LEGACY_LAST_SEEN_KEY, latestUpdateId);
    }
    window.dispatchEvent(new CustomEvent(SEEN_CHANGED_EVENT));
  } catch {
    // ignore
  }
};

export const markSeen = (id: string) => {
  const seen = getSeenIds();
  if (seen.has(id)) return;
  seen.add(id);
  saveSeenIds(seen);
};

export const markAllSeen = () => {
  saveSeenIds(new Set(siteUpdates.map((u) => u.id)));
};

export const markUnseen = (id: string) => {
  const seen = getSeenIds();
  if (!seen.has(id)) return;
  seen.delete(id);
  saveSeenIds(seen);
};

export const getUnseenCount = (): number => {
  const seen = getSeenIds();
  return siteUpdates.filter((u) => !seen.has(u.id)).length;
};
