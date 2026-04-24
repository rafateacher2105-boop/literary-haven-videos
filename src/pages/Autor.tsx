import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, BookOpen, Tag, HelpCircle, ChevronRight } from "lucide-react";
import { authors, getAuthorThemes } from "@/data/authors";
import { Button } from "@/components/ui/button";
import ReaderTestimonials from "@/components/ReaderTestimonials";
import { rafaelTestimonials, getRafaelStats } from "@/data/testimonials";
import { authorFaqs } from "@/data/author-faqs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Autor = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? authors[slug] : undefined;

  if (!author) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Autor não encontrado</h1>
          <Link to="/" className="text-primary underline">Voltar à página inicial</Link>
        </div>
      </div>
    );
  }

  const themes = getAuthorThemes(author.slug);
  const pageUrl = `https://literary-haven-videos.lovable.app/autor/${author.slug}`;
  const pageDesc = `Conheça as obras de ${author.name}: ${author.books.length} livros disponíveis. ${author.bio}`;

  // Agrupa livros por tema para exibição organizada
  const booksByTheme = themes.map((t) => ({
    theme: t,
    books: author.books.filter((b) => b.theme === t),
  }));

  // FAQs e estatísticas para enriquecer o JSON-LD com Reviews/AggregateRating/FAQ.
  const faqs = authorFaqs[author.slug] ?? [];
  const hasReviews = author.slug === "rafael-s-l-aguiar";
  const stats = hasReviews ? getRafaelStats() : null;

  // Grafo schema.org: Person + ItemList + Book[] + (AggregateRating + Reviews) + FAQPage
  const jsonLdGraph: Record<string, unknown>[] = [
    {
      "@type": "Person",
      "@id": `${pageUrl}#author`,
      name: author.name,
      description: author.bio,
      url: pageUrl,
      jobTitle: "Escritor",
      knowsAbout: themes,
    },
  ];

  // ---- Book markup por livro do catálogo do autor ----
  const SITE = "https://literary-haven-videos.lovable.app";
  const bookIdFor = (slug: string) => `${SITE}/livro/${slug}#book`;

  // Indexa avaliações por slug do livro para anexar reviews/aggregateRating ao Book.
  const reviewsBySlug = new Map<string, typeof rafaelTestimonials>();
  if (hasReviews) {
    rafaelTestimonials.forEach((t) => {
      if (!t.bookSlug) return;
      const list = reviewsBySlug.get(t.bookSlug) ?? [];
      list.push(t);
      reviewsBySlug.set(t.bookSlug, list);
    });
  }

  // Constrói cada Book como nó nomeado e coleta @ids para o ItemList.
  const bookNodes: Record<string, unknown>[] = [];
  const itemListElements: Record<string, unknown>[] = [];

  author.books.forEach((b, idx) => {
    const linkSlug = b.slug || b.previewSlug;
    const bookUrl = linkSlug ? `${SITE}/livro/${linkSlug}` : pageUrl;
    const bookId = linkSlug ? bookIdFor(linkSlug) : `${pageUrl}#book-${idx}`;
    const imageUrl = b.cover.startsWith("http") ? b.cover : `${SITE}${b.cover}`;

    const bookNode: Record<string, unknown> = {
      "@type": "Book",
      "@id": bookId,
      name: b.title,
      url: bookUrl,
      image: imageUrl,
      inLanguage: "pt-BR",
      genre: b.theme,
      author: { "@id": `${pageUrl}#author` },
      bookFormat: "https://schema.org/EBook",
    };
    if (b.year) bookNode.datePublished = String(b.year);

    // Oferta: parseia "R$ 15,00" -> 15.00 BRL
    if (b.price) {
      const priceNum = Number(
        b.price.replace(/[^\d,]/g, "").replace(",", ".")
      );
      if (!Number.isNaN(priceNum)) {
        bookNode.offers = {
          "@type": "Offer",
          price: priceNum.toFixed(2),
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          url: bookUrl,
        };
      }
    }

    // Anexa reviews/aggregateRating do livro, se houver depoimentos para o slug.
    if (linkSlug && reviewsBySlug.has(linkSlug)) {
      const list = reviewsBySlug.get(linkSlug)!;
      const avg =
        Math.round(
          (list.reduce((a, t) => a + t.rating, 0) / list.length) * 10
        ) / 10;
      bookNode.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: avg,
        reviewCount: list.length,
        bestRating: 5,
        worstRating: 1,
      };
      bookNode.review = list.map((t, i) => ({
        "@type": "Review",
        "@id": `${bookId}-review-${i + 1}`,
        name: t.headline,
        reviewBody: t.text,
        datePublished: t.datePublished,
        inLanguage: t.language ?? "pt-BR",
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          "@type": "Person",
          name: t.reader,
          ...(t.reviewerJobTitle ? { jobTitle: t.reviewerJobTitle } : {}),
          ...(t.location
            ? {
                address: {
                  "@type": "PostalAddress",
                  addressLocality: t.location,
                  addressCountry: "BR",
                },
              }
            : {}),
        },
      }));
    }

    bookNodes.push(bookNode);
    itemListElements.push({
      "@type": "ListItem",
      position: idx + 1,
      url: bookUrl,
      item: { "@id": bookId },
    });
  });

  // ItemList do catálogo do autor
  jsonLdGraph.push({
    "@type": "ItemList",
    "@id": `${pageUrl}#catalog`,
    name: `Catálogo de ${author.name}`,
    numberOfItems: author.books.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: itemListElements,
  });

  // Adiciona todos os Books ao grafo
  jsonLdGraph.push(...bookNodes);

  if (hasReviews && stats) {
    jsonLdGraph.push({
      "@type": "AggregateRating",
      "@id": `${pageUrl}#rating`,
      itemReviewed: { "@id": `${pageUrl}#author` },
      ratingValue: stats.averageRating,
      reviewCount: stats.totalRatings,
      bestRating: 5,
      worstRating: 1,
    });

    rafaelTestimonials.forEach((t, i) => {
      // Item revisado: Book com URL canônica quando o slug for conhecido.
      const itemReviewed: Record<string, unknown> = {
        "@type": "Book",
        name: t.bookTitle,
        author: { "@id": `${pageUrl}#author` },
        inLanguage: "pt-BR",
      };
      if (t.bookSlug) {
        itemReviewed.url = `https://literary-haven-videos.lovable.app/livro/${t.bookSlug}`;
      }

      // Reviewer enriquecido: address (cidade), jobTitle e nationality.
      const reviewer: Record<string, unknown> = {
        "@type": t.reviewerType ?? "Person",
        name: t.reader,
      };
      if (t.reviewerJobTitle) reviewer.jobTitle = t.reviewerJobTitle;
      if (t.location) {
        reviewer.address = {
          "@type": "PostalAddress",
          addressLocality: t.location,
          addressCountry: "BR",
        };
      }

      const review: Record<string, unknown> = {
        "@type": "Review",
        "@id": `${pageUrl}#review-${i + 1}`,
        itemReviewed,
        reviewRating: {
          "@type": "Rating",
          ratingValue: t.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: reviewer,
        reviewBody: t.text,
        publisher: {
          "@type": "Organization",
          name: "Letras & Páginas",
          url: "https://literary-haven-videos.lovable.app",
        },
      };

      if (t.headline) review.name = t.headline;
      if (t.datePublished) review.datePublished = t.datePublished;
      if (t.language) review.inLanguage = t.language;
      if (t.verifiedPurchase !== undefined) {
        // Marcador adicional usado por agregadores de review.
        review.reviewAspect = "Leitor verificado";
      }

      jsonLdGraph.push(review);
    });
  }

  if (faqs.length > 0) {
    jsonLdGraph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph,
  };

  return (
    <div className="min-h-screen bg-parchment">
      <Helmet>
        <title>{`${author.name} — Autor | Letras & Páginas`}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${author.name} — Autor | Letras & Páginas`} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Letras & Páginas" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://literary-haven-videos.lovable.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${author.name} — Autor`} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content="https://literary-haven-videos.lovable.app/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Voltar</span>
          </Link>
          <h1 className="font-display text-lg font-semibold text-foreground truncate mx-4">{author.name}</h1>
          <div className="w-16" />
        </div>
      </header>

      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: "https://literary-haven-videos.lovable.app/" },
          { name: "Autores", url: "https://literary-haven-videos.lovable.app/#livros" },
          { name: author.name, url: pageUrl },
        ]}
      />

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center flex-wrap gap-1.5 text-sm font-body text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <li>
              <Link to="/#livros" className="hover:text-primary transition-colors">Autores</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <li className="text-foreground font-medium" aria-current="page">{author.name}</li>
          </ol>
        </nav>
        {/* Cabeçalho do autor */}
        <section className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Autor</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{author.name}</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">{author.longBio}</p>
        </section>

        {/* Categorias relacionadas */}
        {themes.length > 0 && (
          <section className="mb-12 text-center">
            <h3 className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Tag className="w-4 h-4" />
              Categorias deste autor
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {themes.map((t) => (
                <a
                  key={t}
                  href={`#tema-${t.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-body text-sm bg-card border border-border rounded-full px-4 py-1.5 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Livros agrupados por tema */}
        {booksByTheme.map(({ theme, books }) => (
          <section
            key={theme}
            id={`tema-${theme.toLowerCase().replace(/\s+/g, "-")}`}
            className="mb-16 scroll-mt-20"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              {theme}
              <span className="font-body text-sm font-normal text-muted-foreground">
                ({books.length} {books.length === 1 ? "livro" : "livros"})
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((b) => {
                const linkSlug = b.slug || b.previewSlug;
                const card = (
                  <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all">
                    <div className="aspect-[2/3] overflow-hidden">
                      <img
                        src={b.cover}
                        alt={`Capa de ${b.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-display text-sm font-semibold text-foreground line-clamp-2 mb-1">{b.title}</h4>
                      <p className="font-body text-xs text-muted-foreground">{b.theme}</p>
                      {b.price && (
                        <p className="font-body text-xs text-primary font-medium mt-1">{b.price}</p>
                      )}
                    </div>
                  </div>
                );
                return linkSlug ? (
                  <Link key={b.title} to={`/livro/${linkSlug}`}>{card}</Link>
                ) : (
                  <Link key={b.title} to="/#livros">{card}</Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* Bloco de avaliações e alcance */}
        <ReaderTestimonials authorSlug={author.slug} />

        {/* FAQ — exibido visualmente e exposto como FAQPage no JSON-LD */}
        {faqs.length > 0 && (
          <section aria-label="Perguntas frequentes" className="mt-16 max-w-3xl mx-auto">
            <header className="text-center mb-8">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Dúvidas comuns
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <HelpCircle className="w-7 h-7 text-primary" />
                Perguntas frequentes
              </h3>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Tudo o que você precisa saber sobre o autor e suas obras.
              </p>
            </header>
            <Accordion type="single" collapsible className="bg-card border border-border rounded-lg px-6">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="font-display text-left text-foreground hover:text-primary">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        <div className="text-center mt-16">
          <Link to="/#livros">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Ver todos os livros
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Autor;
