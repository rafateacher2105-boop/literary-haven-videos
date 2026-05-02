import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, BookOpen, List, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { poesiaDaAlmaInfo, poesiaDaAlmaPoems } from "@/data/poesia-da-alma";
import { poesiaDaNaturezaInfo, poesiaDaNaturezaPoems } from "@/data/poesia-da-natureza";
import { poesiaSocialInfo, poesiaSocialPoems } from "@/data/poesia-social";
import { osAtribuladosInfo, osAtribuladosChapters } from "@/data/os-atribulados";
import { crimeAntecipadoInfo, crimeAntecipadoChapters } from "@/data/crime-antecipado";
import { impacto2070Info, impacto2070Chapters } from "@/data/impacto-2070";
import { generateEpub, generateProseEpub } from "@/lib/epub-generator";
import DownloadGateModal from "@/components/DownloadGateModal";
import PaidDownloadModal from "@/components/PaidDownloadModal";
import RelatedBooks from "@/components/RelatedBooks";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import WebPageJsonLd from "@/components/WebPageJsonLd";
import BookSeo from "@/components/BookSeo";
import { getBookSeo, toAbsoluteUrl } from "@/data/book-seo";
import { bookToAuthor, authors } from "@/data/authors";
import type { Poem } from "@/data/poesia-da-alma";
import type { Chapter } from "@/data/os-atribulados";

const SITE = "https://literary-haven-videos.lovable.app";

function buildBookCrumbs(slug: string, bookTitle: string, theme: string) {
  const authorSlug = bookToAuthor[slug];
  const author = authorSlug ? authors[authorSlug] : undefined;
  const crumbs = [
    { name: "Início", url: `${SITE}/` },
    { name: "Meus Livros", url: `${SITE}/#livros` },
  ];
  if (author) {
    crumbs.push({ name: author.name, url: `${SITE}/autor/${author.slug}` });
  }
  crumbs.push({ name: theme, url: `${SITE}/#livros` });
  crumbs.push({ name: bookTitle, url: `${SITE}/livro/${slug}` });
  return crumbs;
}

const booksMap: Record<string, { info: typeof poesiaDaAlmaInfo; poems: Poem[] }> = {
  "poesia-da-alma": { info: poesiaDaAlmaInfo, poems: poesiaDaAlmaPoems },
  "poesia-da-natureza": { info: poesiaDaNaturezaInfo, poems: poesiaDaNaturezaPoems },
  "poesia-social": { info: poesiaSocialInfo, poems: poesiaSocialPoems },
};

interface ProseBook {
  info: typeof osAtribuladosInfo;
  chapters: Chapter[];
  previewOnly: number; // number of free chapters
  price: string;
}

const proseBooksMap: Record<string, ProseBook> = {
  "os-atribulados": {
    info: osAtribuladosInfo,
    chapters: osAtribuladosChapters,
    previewOnly: 1,
    price: "R$ 15,00",
  },
  "crime-antecipado": {
    info: crimeAntecipadoInfo,
    chapters: crimeAntecipadoChapters,
    previewOnly: 1,
    price: "R$ 15,00",
  },
  "impacto-2070": {
    info: impacto2070Info,
    chapters: impacto2070Chapters,
    previewOnly: 1,
    price: "R$ 15,00",
  },
};

const BookReader = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = slug ? booksMap[slug] : undefined;
  const proseBook = slug ? proseBooksMap[slug] : undefined;
  const [currentPoem, setCurrentPoem] = useState(0);
  const [showToc, setShowToc] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPaidModal, setShowPaidModal] = useState(false);

  if (!book && !proseBook) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Livro não encontrado</h1>
          <Link to="/#livros" className="text-primary underline">Voltar aos livros</Link>
        </div>
      </div>
    );
  }

  // Prose book reader
  if (proseBook) {
    const { info, chapters, previewOnly, price } = proseBook;
    const chapter = chapters[currentPoem];
    const isPreview = currentPoem < previewOnly;
    const totalPreview = Math.min(previewOnly, chapters.length);

    const handleProseDownload = async () => {
      // For "crime-antecipado", trigger direct EPUB file download
      if (slug === "crime-antecipado") {
        const a = document.createElement("a");
        a.href = "/O_Crime_Antecipado.epub";
        a.download = `${info.title}.epub`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        return;
      }
      await generateProseEpub(
        { title: info.title, author: info.author, year: info.year, aboutAuthor: info.aboutAuthor },
        chapters
      );
    };

    const pageUrl = `https://literary-haven-videos.lovable.app/livro/${slug}`;
    const seoEntry = getBookSeo(slug);
    const pageDesc = seoEntry?.description ??
      `Leia uma prévia gratuita de "${info.title}" por ${info.author}. ${chapters.length} capítulos disponíveis em EPUB por ${price}.`;
    const primaryImage = seoEntry ? toAbsoluteUrl(seoEntry.cover) : "https://literary-haven-videos.lovable.app/og-image.jpg";

    return (
      <div className="min-h-screen bg-parchment">
        {seoEntry ? (
          <BookSeo entry={seoEntry} canonicalUrl={pageUrl} />
        ) : (
          <Helmet>
            <title>{`${info.title} — ${info.author} | Letras & Páginas`}</title>
            <meta name="description" content={pageDesc} />
            <link rel="canonical" href={pageUrl} />
          </Helmet>
        )}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/#livros" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body text-sm">Voltar</span>
            </Link>
            <h1 className="font-display text-lg font-semibold text-foreground truncate mx-4">{info.title}</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowPaidModal(true)} className="gap-1.5">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">{price}</span>
              </Button>
            </div>
          </div>
        </header>

        {slug && (
          <>
            <BreadcrumbJsonLd
              id={`${pageUrl}#breadcrumb`}
              items={buildBookCrumbs(
                slug,
                info.title,
                authors[bookToAuthor[slug] ?? ""]?.books.find(
                  (b) => b.previewSlug === slug || b.slug === slug
                )?.theme ?? "Livros"
              )}
            />
            <WebPageJsonLd
              type="ItemPage"
              url={pageUrl}
              name={`${info.title} — ${info.author}`}
              headline={info.title}
              description={pageDesc}
              primaryImageUrl="https://literary-haven-videos.lovable.app/og-image.jpg"
              breadcrumbId={`${pageUrl}#breadcrumb`}
              authorName={info.author}
              about={[
                authors[bookToAuthor[slug] ?? ""]?.books.find(
                  (b) => b.previewSlug === slug || b.slug === slug
                )?.theme ?? "Livros",
              ]}
            />
          </>
        )}

        <main className="flex-1 flex flex-col items-center py-12 px-4">
          <div className="max-w-2xl w-full">
            <div className="bg-primary/10 rounded-lg px-4 py-2 mb-6 text-center">
              <p className="font-body text-sm text-primary font-medium">
                📖 Leitura prévia — Capítulo {currentPoem + 1} de {totalPreview}
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              {chapter.title}
            </h2>

            <div className="space-y-4">
              {chapter.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-body text-foreground leading-relaxed text-justify text-base md:text-lg indent-8">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="font-body text-sm text-muted-foreground text-center mt-10 italic">
              — {info.authorShort}
            </p>

            {/* CTA to buy full book */}
            <div className="mt-12 bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Gostou? Adquira o livro completo!</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                São {slug === "impacto-2070" ? "21" : "25"} capítulos de uma história envolvente. Garanta o EPUB completo por apenas {price}.
              </p>
              <Button onClick={() => setShowPaidModal(true)} className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                Comprar por {price}
              </Button>
            </div>
          </div>

          {/* Navigation for preview chapters */}
          {totalPreview > 1 && (
            <div className="flex items-center gap-6 mt-16">
              <Button variant="outline" size="icon" onClick={() => setCurrentPoem(Math.max(0, currentPoem - 1))} disabled={currentPoem === 0}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <BookOpen className="w-5 h-5 text-muted-foreground" />
              <Button variant="outline" size="icon" onClick={() => setCurrentPoem(Math.min(totalPreview - 1, currentPoem + 1))} disabled={currentPoem === totalPreview - 1}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {slug && <RelatedBooks currentSlug={slug} />}
        </main>

        {slug && (
          <PaidDownloadModal
            open={showPaidModal}
            onOpenChange={setShowPaidModal}
            bookTitle={info.title}
            bookSlug={slug}
            price={price}
            onDownload={handleProseDownload}
          />
        )}
      </div>
    );
  }

  // Poetry book reader (existing)
  const { info, poems } = book!;
  const poem = poems[currentPoem];

  const handleDownload = async () => {
    await generateEpub(
      { title: info.title, author: info.author, year: info.year, aboutAuthor: info.aboutAuthor },
      poems
    );
  };

  const pageUrl = `https://literary-haven-videos.lovable.app/livro/${slug}`;
  const pageDesc = `Leia online "${info.title}" — coletânea de poemas por ${info.author}. ${poems.length} poemas disponíveis em EPUB.`;

  return (
    <div className="min-h-screen bg-parchment">
      <Helmet>
        <title>{`${info.title} — ${info.author} | Letras & Páginas`}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="book" />
        <meta property="og:title" content={`${info.title} — ${info.author}`} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Letras & Páginas" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://literary-haven-videos.lovable.app/og-image.jpg" />
        <meta property="book:author" content={info.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${info.title} — ${info.author}`} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="https://literary-haven-videos.lovable.app/og-image.jpg" />
      </Helmet>
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
            <Button variant="outline" size="sm" onClick={() => setShowDownloadModal(true)} className="gap-1.5">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">EPUB</span>
            </Button>
          </div>
        </div>
      </header>

      {slug && (
        <>
          <BreadcrumbJsonLd
            id={`${pageUrl}#breadcrumb`}
            items={buildBookCrumbs(
              slug,
              info.title,
              authors[bookToAuthor[slug] ?? ""]?.books.find(
                (b) => b.previewSlug === slug || b.slug === slug
              )?.theme ?? "Livros"
            )}
          />
          <WebPageJsonLd
            type="ItemPage"
            url={pageUrl}
            name={`${info.title} — ${info.author}`}
            headline={info.title}
            description={pageDesc}
            primaryImageUrl="https://literary-haven-videos.lovable.app/og-image.jpg"
            breadcrumbId={`${pageUrl}#breadcrumb`}
            authorName={info.author}
            about={["Poesia"]}
          />
        </>
      )}

      <div className="flex">
        {showToc && (
          <aside className="w-72 shrink-0 bg-card border-r border-border h-[calc(100vh-57px)] overflow-y-auto sticky top-[57px]">
            <nav className="p-4">
              <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Índice</h2>
              <ul className="space-y-1">
                {poems.map((p, i) => (
                  <li key={i}>
                    <button
                      onClick={() => { setCurrentPoem(i); setShowToc(false); }}
                      className={`w-full text-left px-3 py-2 rounded text-sm font-body transition-colors ${
                        i === currentPoem ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
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

        <main className="flex-1 flex flex-col items-center py-12 px-4">
          <div className="max-w-lg w-full">
            <p className="font-body text-xs text-muted-foreground text-center mb-2">
              {currentPoem + 1} de {poems.length}
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              {poem.title}
            </h2>
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
            <p className="font-body text-sm text-muted-foreground text-center mt-10 italic">
              — {info.authorShort}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-16">
            <Button variant="outline" size="icon" onClick={() => setCurrentPoem(Math.max(0, currentPoem - 1))} disabled={currentPoem === 0}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <BookOpen className="w-5 h-5 text-muted-foreground" />
            <Button variant="outline" size="icon" onClick={() => setCurrentPoem(Math.min(poems.length - 1, currentPoem + 1))} disabled={currentPoem === poems.length - 1}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {slug && <RelatedBooks currentSlug={slug} />}
        </main>
      </div>
      {slug && (
        <DownloadGateModal
          open={showDownloadModal}
          onOpenChange={setShowDownloadModal}
          bookTitle={info.title}
          bookSlug={slug}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
};

export default BookReader;
