import { useEffect, useRef, useState } from "react";
import { Bell, X } from "lucide-react";
import { siteUpdates, latestUpdateId } from "@/data/site-updates";
import { getSeenIds, markAllSeen, markSeen } from "@/lib/updates-storage";

const EXIT_DURATION = 250;

const UpdatesBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [newItems, setNewItems] = useState<typeof siteUpdates>([]);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!latestUpdateId) return;
    const seen = getSeenIds();
    const fresh = siteUpdates.filter((u) => !seen.has(u.id)).slice(0, 3);
    if (fresh.length === 0) return;
    setNewItems(fresh);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
  }, [mounted]);

  const closeWithAnimation = () => {
    if (exiting) return;
    setExiting(true);
    window.setTimeout(() => {
      setMounted(false);
      const prev = previousFocusRef.current;
      if (prev && typeof prev.focus === "function" && document.contains(prev)) {
        prev.focus();
      }
    }, EXIT_DURATION);
  };

  const dismissOnly = () => {
    // Marca apenas o item primário como visto (clique no link); restantes ficam no histórico.
    if (newItems[0]) markSeen(newItems[0].id);
    closeWithAnimation();
  };

  const dismissAll = () => {
    markAllSeen();
    closeWithAnimation();
  };

  useEffect(() => {
    if (!mounted || exiting) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        dismissAll();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, exiting]);

  if (!mounted) return null;

  const primary = newItems[0];
  const extraCount = newItems.length - 1;
  const animationClass = exiting ? "animate-slide-up-fade" : "animate-slide-down-fade";

  return (
    <aside
      role="region"
      aria-label="Novidades do site"
      className={`fixed top-[68px] left-0 right-0 z-40 bg-primary text-primary-foreground shadow-md ${animationClass}`}
    >
      <div className="container mx-auto px-4 py-2.5 flex items-center gap-3">
        <Bell
          className="w-4 h-4 shrink-0 animate-bell-ring origin-top"
          aria-hidden="true"
        />
        <div
          className="flex-1 min-w-0 text-sm font-body"
          aria-live="polite"
          aria-atomic="true"
        >
          <a
            ref={linkRef}
            href={primary.href ?? "#livros"}
            onClick={dismissOnly}
            aria-label={`Abrir novidade: ${primary.title}`}
            className="underline-offset-2 hover:underline truncate inline-block max-w-full align-middle rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {primary.title}
          </a>
          {extraCount > 0 && (
            <span
              className="ml-2 opacity-90"
              aria-label={`mais ${extraCount} ${extraCount === 1 ? "novidade disponível" : "novidades disponíveis"}`}
            >
              +{extraCount} {extraCount === 1 ? "novidade" : "novidades"}
            </span>
          )}
        </div>
        <button
          onClick={dismissAll}
          aria-label="Fechar notificação de novidades"
          className="shrink-0 p-1 rounded hover:bg-primary-foreground/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
};

export default UpdatesBanner;
