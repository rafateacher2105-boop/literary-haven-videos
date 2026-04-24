import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, BookOpen, Tag } from "lucide-react";
import { authors, getAuthorThemes } from "@/data/authors";
import { Button } from "@/components/ui/button";

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

  // JSON-LD para o autor
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    url: pageUrl,
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
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
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

      <main className="container mx-auto px-6 py-12 max-w-6xl">
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
