// Catálogo central de SEO por livro autoral.
// Usado por <BookSeo /> para gerar <title>, meta description, Open Graph,
// Twitter Cards e JSON-LD schema.org/Book específicos para cada obra.
//
// Ao adicionar um novo livro com página própria (/livro/:slug), inclua aqui
// uma entrada com a capa correta (caminho absoluto sob /src/assets) e uma
// descrição manual de 140–160 caracteres focada em palavras-chave reais.

import coverOsAtribulados from "@/assets/cover-os-atribulados.jpg";
import coverImpacto2070 from "@/assets/cover-impacto-2070.jpg";
import coverCrimeAntecipado from "@/assets/cover-crime-antecipado.jpg";
import coverPoesiaDaAlma from "@/assets/cover-poesia-da-alma.jpg";
import coverPoesiaDaNatureza from "@/assets/cover-poesia-da-natureza.jpg";
import coverPoesiaSocial from "@/assets/cover-poesia-social.jpg";

export const SITE_URL = "https://literary-haven-videos.lovable.app";

export type BookSeoEntry = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  /** 140–160 chars ideal — frase única, com palavras-chave naturais. */
  description: string;
  /** Caminho importado (resolvido pelo Vite) ou URL absoluta. */
  cover: string;
  /** Ex.: "Distopia", "Ficção científica", "Poesia". */
  genre: string;
  /** Lista de palavras-chave para meta keywords e schema.org/about. */
  keywords: string[];
  year?: string;
  isbn?: string;
  /** Tipo Open Graph; padrão "book". */
  ogType?: "book" | "article" | "website";
};

export const bookSeoCatalog: Record<string, BookSeoEntry> = {
  "os-atribulados": {
    slug: "os-atribulados",
    title: "Os Atribulados",
    subtitle: "Quando chegar o fim, escolha seu lado",
    author: "Rafael Silveira Lima Aguiar",
    description:
      "Distopia cristã ambientada em 2045: após o arrebatamento, sobreviventes enfrentam um governo global totalitário. Leia a prévia gratuita do romance.",
    cover: coverOsAtribulados,
    genre: "Distopia cristã",
    keywords: [
      "Os Atribulados",
      "distopia cristã",
      "ficção pós-arrebatamento",
      "Rafael Aguiar",
      "livro distópico brasileiro",
      "ebook distopia",
    ],
    year: "2025",
  },
  "impacto-2070": {
    slug: "impacto-2070",
    title: "Impacto 2070, o Recomeço",
    subtitle: "Quando a internet acabar, o que restará de nós?",
    author: "Rafael Silveira Lima Aguiar",
    description:
      "Ficção científica juvenil em um futuro hipertecnológico ameaçado por um meteoro. Leia a prévia de Impacto 2070, o Recomeço, de Rafael Aguiar.",
    cover: coverImpacto2070,
    genre: "Ficção científica",
    keywords: [
      "Impacto 2070",
      "ficção científica juvenil",
      "distopia tecnológica",
      "meteoro",
      "Rafael Aguiar",
      "ebook sci-fi brasileiro",
    ],
    year: "2025",
    isbn: "978-65-01-42471-2",
  },
  "crime-antecipado": {
    slug: "crime-antecipado",
    title: "O Crime Antecipado",
    subtitle: "Onde a intenção é a prova e o pensamento é o crime",
    author: "Rafael Silveira Lima Aguiar",
    description:
      "Thriller distópico em que pensar virou crime e a polícia age antes do ato. Leia a prévia de O Crime Antecipado, de Rafael S. L. Aguiar.",
    cover: coverCrimeAntecipado,
    genre: "Thriller distópico",
    keywords: [
      "O Crime Antecipado",
      "thriller distópico",
      "pré-crime",
      "vigilância",
      "Rafael Aguiar",
      "ebook brasileiro",
    ],
    year: "2025",
  },
  "poesia-da-alma": {
    slug: "poesia-da-alma",
    title: "Poesia da Alma",
    subtitle: "Produção 2010–2019",
    author: "Rafael Silveira Lima Aguiar",
    description:
      "Coletânea de poesias cristãs escritas entre 2010 e 2019 por Rafael Aguiar. Leia online gratuitamente e baixe o EPUB doando para apoiar o autor.",
    cover: coverPoesiaDaAlma,
    genre: "Poesia cristã",
    keywords: [
      "Poesia da Alma",
      "poesia cristã",
      "poemas de fé",
      "Rafael Aguiar",
      "ebook poesia",
      "literatura cristã brasileira",
    ],
    year: "2019",
  },
  "poesia-da-natureza": {
    slug: "poesia-da-natureza",
    title: "Poesia da Natureza",
    subtitle: "Versos sobre os elementos do mundo natural",
    author: "Rafael Silveira Lima Aguiar",
    description:
      "Poesias inspiradas em elementos da natureza — terra, água, ar e fogo — por Rafael Aguiar. Leia online e baixe o EPUB doando para apoiar o autor.",
    cover: coverPoesiaDaNatureza,
    genre: "Poesia",
    keywords: [
      "Poesia da Natureza",
      "poesia ecológica",
      "natureza",
      "Rafael Aguiar",
      "ebook poesia brasileira",
    ],
    year: "2018",
  },
  "poesia-social": {
    slug: "poesia-social",
    title: "Poesia Social",
    subtitle: "Pílulas de crítica — 2019",
    author: "Rafael Silveira Lima Aguiar",
    description:
      "Poesia de crítica social: versos curtos e contundentes sobre desigualdade, política e sociedade. Leia online e baixe o EPUB de Rafael Aguiar.",
    cover: coverPoesiaSocial,
    genre: "Poesia de crítica social",
    keywords: [
      "Poesia Social",
      "crítica social",
      "poesia engajada",
      "Rafael Aguiar",
      "literatura brasileira contemporânea",
    ],
    year: "2019",
  },
};

/** Resolve a entrada SEO de um slug; retorna `undefined` se não existir. */
export function getBookSeo(slug: string | undefined): BookSeoEntry | undefined {
  if (!slug) return undefined;
  return bookSeoCatalog[slug];
}

/** Garante URL absoluta para imagens de Open Graph (o Vite resolve para /assets/...). */
export function toAbsoluteUrl(path: string): string {
  if (!path) return `${SITE_URL}/og-image.jpg`;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
