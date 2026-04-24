// Helper para JSON-LD de schema.org/WebPage.
// Inclui referência ao BreadcrumbList por @id e ao publisher do site.
// Use em conjunto com <BreadcrumbJsonLd /> — o breadcrumbId deve coincidir
// com o "@id" do BreadcrumbList (passe o mesmo id para ambos).

import { Helmet } from "react-helmet-async";

export interface WebPageJsonLdProps {
  url: string;                 // URL canônica absoluta da página
  name: string;                // título curto da página
  headline: string;            // headline principal (geralmente o H1)
  description: string;         // meta description
  inLanguage?: string;         // BCP-47 (default: pt-BR)
  type?: "WebPage" | "ProfilePage" | "ItemPage" | "CollectionPage" | "AboutPage";
  primaryImageUrl?: string;    // imagem principal absoluta (capa do livro, og:image, etc.)
  datePublished?: string;      // ISO 8601
  dateModified?: string;       // ISO 8601
  breadcrumbId?: string;       // @id do BreadcrumbList associado (opcional)
  authorName?: string;         // nome do autor da página/conteúdo (opcional)
  // ids de outras entidades do mesmo @graph que esta página descreve
  mainEntityId?: string;
  about?: string[];            // tópicos / categorias
}

const SITE = "https://literary-haven-videos.lovable.app";
const SITE_NAME = "Letras & Páginas";

const WebPageJsonLd = ({
  url,
  name,
  headline,
  description,
  inLanguage = "pt-BR",
  type = "WebPage",
  primaryImageUrl,
  datePublished,
  dateModified,
  breadcrumbId,
  authorName,
  mainEntityId,
  about,
}: WebPageJsonLdProps) => {
  const pageId = `${url}#webpage`;

  const webPage: Record<string, unknown> = {
    "@type": type,
    "@id": pageId,
    url,
    name,
    headline,
    description,
    inLanguage,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: SITE_NAME,
      inLanguage,
      publisher: { "@id": `${SITE}/#publisher` },
    },
    publisher: { "@id": `${SITE}/#publisher` },
    potentialAction: {
      "@type": "ReadAction",
      target: [url],
    },
  };

  if (primaryImageUrl) {
    webPage.primaryImageOfPage = {
      "@type": "ImageObject",
      url: primaryImageUrl,
    };
    webPage.image = primaryImageUrl;
  }
  if (datePublished) webPage.datePublished = datePublished;
  if (dateModified) webPage.dateModified = dateModified;
  if (breadcrumbId) webPage.breadcrumb = { "@id": breadcrumbId };
  if (authorName) webPage.author = { "@type": "Person", name: authorName };
  if (mainEntityId) webPage.mainEntity = { "@id": mainEntityId };
  if (about && about.length > 0) {
    webPage.about = about.map((a) => ({ "@type": "Thing", name: a }));
  }

  // Publisher (Organization) — declarado uma vez, referenciado pelo @id em outros nós.
  const publisher = {
    "@type": "Organization",
    "@id": `${SITE}/#publisher`,
    name: SITE_NAME,
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/og-image.jpg`,
    },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [webPage, publisher],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default WebPageJsonLd;
