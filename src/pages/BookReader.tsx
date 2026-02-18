import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, BookOpen, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { poesiaDaAlmaInfo, poesiaDaAlmaPoems } from "@/data/poesia-da-alma";
import { poesiaDaNaturezaInfo, poesiaDaNaturezaPoems } from "@/data/poesia-da-natureza";
import { generateEpub } from "@/lib/epub-generator";
import type { Poem } from "@/data/poesia-da-alma";

const booksMap: Record<string, { info: typeof poesiaDaAlmaInfo; poems: Poem[] }> = {
  "poesia-da-alma": { info: poesiaDaAlmaInfo, poems: poesiaDaAlmaPoems },
  "poesia-da-natureza": { info: poesiaDaNaturezaInfo, poems: poesiaDaNaturezaPoems },
};

const BookReader = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = slug ? booksMap[slug] : undefined;
  const [currentPoem, setCurrentPoem] = useState(0);
  const [showToc, setShowToc] = useState(false);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Livro não encontrado</h1>
          <Link to="/#livros" className="text-primary underline">Voltar aos livros</Link>
        </div>
      </div>
    );
  }

  const { info, poems } = book;
  const poem = poems[currentPoem];

  const handleDownload = async () => {
    await generateEpub(
      { title: info.title, author: info.author, year: info.year, aboutAuthor: info.aboutAuthor },
      poems
    );
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/#livros" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Voltar</span>
          </Link>
          <h1 className="font-display text-lg font-semibold text-foreground truncate mx-4">{info.title}</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setShowToc(!showToc)} title="Índice">
              <List className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload} className="gap-1.5">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">EPUB</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* TOC Sidebar */}
        {showToc && (
          <aside className="w-72 shrink-0 bg-card border-r border-border h-[calc(100vh-57px)] overflow-y-auto sticky top-[57px]">
            <nav className="p-4">
              <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Índice
              </h2>
              <ul className="space-y-1">
                {poems.map((p, i) => (
                  <li key={i}>
                    <button
                      onClick={() => { setCurrentPoem(i); setShowToc(false); }}
                      className={`w-full text-left px-3 py-2 rounded text-sm font-body transition-colors ${
                        i === currentPoem
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {p.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        {/* Main reading area */}
        <main className="flex-1 flex flex-col items-center py-12 px-4">
          <div className="max-w-lg w-full">
            {/* Poem counter */}
            <p className="font-body text-xs text-muted-foreground text-center mb-2">
              {currentPoem + 1} de {poems.length}
            </p>

            {/* Poem title */}
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              {poem.title}
            </h2>

            {/* Poem content */}
            <div className="space-y-1">
              {poem.lines.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-6" />
                ) : (
                  <p key={i} className="font-body text-foreground leading-relaxed text-center text-base md:text-lg">
                    {line}
                  </p>
                )
              )}
            </div>

            {/* Author */}
            <p className="font-body text-sm text-muted-foreground text-center mt-10 italic">
              — {info.authorShort}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-16">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPoem(Math.max(0, currentPoem - 1))}
              disabled={currentPoem === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <BookOpen className="w-5 h-5 text-muted-foreground" />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPoem(Math.min(poems.length - 1, currentPoem + 1))}
              disabled={currentPoem === poems.length - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookReader;
