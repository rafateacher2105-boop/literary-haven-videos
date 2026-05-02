import { Helmet } from "react-helmet-async";
import { SITE_URL, toAbsoluteUrl, type BookSeoEntry } from "@/data/book-seo";

interface BookSeoProps {
  entry: BookSeoEntry;
  /** URL canônica da página do livro (sem query/hash). */
  canonicalUrl: string;
}

/**
 * Emite as tags Helmet (title, meta description, canonical, Open Graph,
 * Twitter Cards) e o JSON-LD `schema.org/Book` para a página de um livro.
 *
 * Cada livro recebe metadados próprios — título, descrição manual e capa real
 * como og:image — para máxima qualidade de SEO e compartilhamento social.
 */
const BookSeo = ({ entry, canonicalUrl }: BookSeoProps) => {
  const ogTitle = `${entry.title} — ${entry.author} | Letras & Páginas`;
  const ogImage = toAbsoluteUrl(entry.cover);
  const ogType = entry.ogType ?? "book";

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${canonicalUrl}#book`,
    name: entry.title,
    headline: entry.title,
    alternativeHeadline: entry.subtitle,
    description: entry.description,
    image: ogImage,
    url: canonicalUrl,
    inLanguage: "pt-BR",
    bookFormat: "https://schema.org/EBook",
    genre: entry.genre,
    keywords: entry.keywords.join(", "),
    author: {
      "@type": "Person",
      name: entry.author,
      url: `${SITE_URL}/autor/rafael-s-l-aguiar`,
    },
    publisher: {
      "@type": "Organization",
      name: "Letras & Páginas",
      url: SITE_URL,
    },
    ...(entry.year ? { datePublished: entry.year } : {}),
    ...(entry.isbn ? { isbn: entry.isbn } : {}),
  };

  return (
    <Helmet>
      <title>{ogTitle}</title>
      <meta name="description" content={entry.description} />
      <meta name="keywords" content={entry.keywords.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={`${entry.title} — ${entry.author}`} />
      <meta property="og:description" content={entry.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Letras & Páginas" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`Capa do livro ${entry.title}`} />
      <meta property="book:author" content={entry.author} />
      {entry.isbn && <meta property="book:isbn" content={entry.isbn} />}
      {entry.year && <meta property="book:release_date" content={entry.year} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${entry.title} — ${entry.author}`} />
      <meta name="twitter:description" content={entry.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`Capa do livro ${entry.title}`} />

      {/* JSON-LD schema.org/Book */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default BookSeo;
