import { useEffect, useState } from "react";
import { Bell, Check, CheckCheck, Circle, BookOpen, FileText, Image as ImageIcon, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteUpdates, type SiteUpdate } from "@/data/site-updates";
import {
  getSeenIds,
  markSeen,
  markAllSeen,
  markUnseen,
  SEEN_CHANGED_EVENT,
} from "@/lib/updates-storage";

type Props = {
  variant?: "icon" | "inline";
  onNavigate?: () => void;
};

const typeIcon = (type: SiteUpdate["type"]) => {
  switch (type) {
    case "livro":
      return BookOpen;
    case "artigo":
      return FileText;
    case "infografico":
      return ImageIcon;
    default:
      return Sparkles;
  }
};

const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const UpdatesHistoryButton = ({ variant = "icon", onNavigate }: Props) => {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState<Set<string>>(new Set());

  useEffect(() => {
    setSeen(getSeenIds());
    const handler = () => setSeen(getSeenIds());
    window.addEventListener(SEEN_CHANGED_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(SEEN_CHANGED_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const unseenCount = siteUpdates.filter((u) => !seen.has(u.id)).length;

  const handleItemClick = (item: SiteUpdate) => {
    markSeen(item.id);
    if (item.href) {
      setOpen(false);
      onNavigate?.();
    }
  };

  const trigger =
    variant === "icon" ? (
      <button
        type="button"
        aria-label={
          unseenCount > 0
            ? `Histórico de novidades, ${unseenCount} não lida${unseenCount === 1 ? "" : "s"}`
            : "Histórico de novidades"
        }
        className="relative flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Bell className="w-5 h-5" aria-hidden="true" />
        {unseenCount > 0 && (
          <span
            aria-hidden="true"
            className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold flex items-center justify-center shadow"
          >
            {unseenCount > 9 ? "9+" : unseenCount}
          </span>
        )}
      </button>
    ) : (
      <button
        type="button"
        className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Bell className="w-4 h-4" />
        Novidades
        {unseenCount > 0 && (
          <Badge variant="default" className="ml-1 h-5 px-1.5 text-[10px]">
            {unseenCount}
          </Badge>
        )}
      </button>
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" aria-hidden="true" />
            Histórico de Novidades
          </SheetTitle>
          <SheetDescription className="font-body">
            {siteUpdates.length === 0
              ? "Nenhuma novidade publicada ainda."
              : `${siteUpdates.length} ${siteUpdates.length === 1 ? "publicação" : "publicações"}${
                  unseenCount > 0 ? ` · ${unseenCount} não lida${unseenCount === 1 ? "" : "s"}` : " · todas vistas"
                }`}
          </SheetDescription>
        </SheetHeader>

        {siteUpdates.length > 0 && (
          <div className="flex items-center justify-end pt-2 pb-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllSeen}
              disabled={unseenCount === 0}
              className="gap-1.5"
            >
              <CheckCheck className="w-4 h-4" />
              Marcar todas como vistas
            </Button>
          </div>
        )}

        <ScrollArea className="flex-1 -mx-6 px-6">
          <ul className="space-y-2 py-2">
            {siteUpdates.map((item) => {
              const Icon = typeIcon(item.type);
              const isSeen = seen.has(item.id);
              return (
                <li key={item.id}>
                  <article
                    className={`group rounded-lg border p-3 transition-colors ${
                      isSeen
                        ? "bg-card border-border"
                        : "bg-secondary/60 border-primary/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          isSeen ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2">
                          {item.href ? (
                            <a
                              href={item.href}
                              onClick={() => handleItemClick(item)}
                              className="font-body text-sm font-medium text-foreground hover:text-primary hover:underline underline-offset-2 break-words flex-1"
                            >
                              {item.title}
                            </a>
                          ) : (
                            <span className="font-body text-sm font-medium text-foreground break-words flex-1">
                              {item.title}
                            </span>
                          )}
                          {!isSeen && (
                            <Circle
                              className="w-2 h-2 mt-1.5 shrink-0 fill-accent text-accent"
                              aria-label="Não vista"
                            />
                          )}
                        </div>
                        <div className="mt-1 flex items-center justify-between gap-2">
                          <time className="text-xs text-muted-foreground font-body">
                            {formatDate(item.publishedAt)}
                          </time>
                          <button
                            type="button"
                            onClick={() => (isSeen ? markUnseen(item.id) : markSeen(item.id))}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                            aria-label={isSeen ? "Marcar como não vista" : "Marcar como vista"}
                          >
                            <Check className="w-3 h-3" />
                            {isSeen ? "Vista" : "Marcar como vista"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default UpdatesHistoryButton;
