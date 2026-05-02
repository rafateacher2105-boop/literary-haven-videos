import { useMemo, useState, useEffect } from "react";
import { Search, BookOpen, Library, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { books as autorBooks } from "./BooksSection";
import { classicBooks, talesBooks, dystopiaBooks } from "./ClassicsModal";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Hit = {
  title: string;
  author: string;
  cover?: string;
  description?: string;
  source: "Meus Livros" | "Clássicos" | "Contos & Lendas" | "Distopias";
  href?: string;
  file?: string;
};

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const allBooks: Hit[] = useMemo(() => {
    const a: Hit[] = autorBooks.map((b) => ({
      title: b.title,
      author: b.author,
      cover: b.cover,
      description: b.description,
      source: "Meus Livros",
      href: "/#livros",
    }));
    const c: Hit[] = classicBooks.map((b) => ({
      title: b.title,
      author: b.author,
      cover: b.cover,
      description: b.description,
      source: "Clássicos",
      file: b.file,
    }));
    const t: Hit[] = talesBooks.map((b) => ({
      title: b.title,
      author: b.author,
      cover: b.cover,
      description: b.description,
      source: "Contos & Lendas",
      file: b.file,
    }));
    const d: Hit[] = dystopiaBooks.map((b) => ({
      title: b.title,
      author: b.author,
      cover: b.cover,
      description: b.description,
      source: "Distopias",
      file: b.file,
    }));
    return [...a, ...c, ...t, ...d];
  }, []);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (q.length < 2) return [];
    return allBooks
      .filter(
        (b) =>
          normalize(b.title).includes(q) || normalize(b.author).includes(q)
      )
      .slice(0, 30);
  }, [query, allBooks]);

  const sourceIcon = (s: Hit["source"]) =>
    s === "Meus Livros" ? <BookOpen className="w-3 h-3" /> : <Library className="w-3 h-3" />;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            Buscar livro ou autor
          </DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o título ou nome do autor…"
            className="pl-9 font-body"
          />
        </div>

        <ScrollArea className="h-[55vh] pr-2 mt-2">
          {query.trim().length < 2 ? (
            <p className="text-sm text-muted-foreground font-body italic text-center py-8">
              Digite ao menos 2 letras para buscar entre {allBooks.length} obras.
            </p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted-foreground font-body italic text-center py-8">
              Nenhum resultado para "{query}".
            </p>
          ) : (
            <ul className="space-y-2">
              {results.map((b, i) => {
                const content = (
                  <div className="flex gap-3 p-2 rounded-md border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors">
                    {b.cover ? (
                      <img
                        src={b.cover}
                        alt={`Capa de ${b.title}`}
                        loading="lazy"
                        className="w-12 h-16 object-cover rounded-sm flex-shrink-0 shadow-sm"
                      />
                    ) : (
                      <div className="w-12 h-16 bg-muted rounded-sm flex-shrink-0" />
                    )}
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-display text-sm font-semibold text-foreground leading-tight line-clamp-2">
                        {b.title}
                      </span>
                      <span className="font-body text-xs text-muted-foreground mt-0.5">
                        {b.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-primary mt-1 font-body">
                        {sourceIcon(b.source)} {b.source}
                        {b.file && (
                          <>
                            <span className="text-muted-foreground">·</span>
                            <Download className="w-3 h-3" /> disponível
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                );
                if (b.file) {
                  const isExternal = /^https?:\/\//i.test(b.file);
                  return (
                    <li key={i}>
                      <a
                        href={b.file}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        onClick={() => onOpenChange(false)}
                      >
                        {content}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={i}>
                    <a href={b.href || "/#livros"} onClick={() => onOpenChange(false)}>
                      {content}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
