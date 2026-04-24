import { useEffect, useState } from "react";
import { Bell, X } from "lucide-react";
import { siteUpdates, latestUpdateId } from "@/data/site-updates";

const STORAGE_KEY = "site:lastSeenUpdateId";

const UpdatesBanner = () => {
  const [visible, setVisible] = useState(false);
  const [newItems, setNewItems] = useState<typeof siteUpdates>([]);

  useEffect(() => {
    if (!latestUpdateId) return;
    try {
      const lastSeen = localStorage.getItem(STORAGE_KEY);
      if (lastSeen === latestUpdateId) return;

      const lastIndex = lastSeen ? siteUpdates.findIndex((u) => u.id === lastSeen) : -1;
      const fresh = lastIndex === -1 ? siteUpdates.slice(0, 3) : siteUpdates.slice(0, lastIndex);
      if (fresh.length === 0) return;

      setNewItems(fresh);
      setVisible(true);
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, latestUpdateId);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  const primary = newItems[0];
  const extraCount = newItems.length - 1;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-[68px] left-0 right-0 z-40 bg-primary text-primary-foreground shadow-md"
    >
      <div className="container mx-auto px-4 py-2.5 flex items-center gap-3">
        <Bell className="w-4 h-4 shrink-0 animate-pulse" aria-hidden="true" />
        <div className="flex-1 min-w-0 text-sm font-body">
          <a
            href={primary.href ?? "#livros"}
            onClick={dismiss}
            className="underline-offset-2 hover:underline truncate inline-block max-w-full align-middle"
          >
            {primary.title}
          </a>
          {extraCount > 0 && (
            <span className="ml-2 opacity-90">
              +{extraCount} {extraCount === 1 ? "novidade" : "novidades"}
            </span>
          )}
        </div>
        <button
          onClick={dismiss}
          aria-label="Fechar notificação"
          className="shrink-0 p-1 rounded hover:bg-primary-foreground/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UpdatesBanner;
