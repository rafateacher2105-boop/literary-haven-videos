// Catálogo de autores e seus livros — usado pelas páginas /autor/:slug
// para gerar grades por autor com links para categorias relacionadas.

import coverImpacto from "@/assets/cover-impacto-2070.jpg";
import coverAtribulados from "@/assets/cover-os-atribulados.jpg";
import coverCrime from "@/assets/cover-crime-antecipado.jpg";
import coverBlackout from "@/assets/cover-blackout-2040.jpg";
import coverPoesiaAlma from "@/assets/cover-poesia-da-alma.jpg";
import coverPoesiaNatureza from "@/assets/cover-poesia-da-natureza.jpg";
import coverPoesiaSocial from "@/assets/cover-poesia-social.jpg";
import coverAtividadesIngles from "@/assets/cover-atividades-ingles.jpg";
import coverObsoletos from "@/assets/cover-obsoletos.jpg";
import coverMemoriasAndroid from "@/assets/cover-memorias-android.jpg";
import coverPareDeProcrastinar from "@/assets/cover-pare-de-procrastinar.jpg";

export interface AuthorBook {
  slug?: string;          // página de leitura (poesia)
  previewSlug?: string;   // prévia (prosa)
  title: string;
  cover: string;
  theme: string;          // categoria/tema principal
  year?: string;
  price?: string;
  externalUrl?: string;
}

export interface Author {
  slug: string;
  name: string;
  bio: string;
  longBio: string;
  books: AuthorBook[];
}

export const authors: Record<string, Author> = {
  "rafael-s-l-aguiar": {
    slug: "rafael-s-l-aguiar",
    name: "Rafael S. L. Aguiar",
    bio: "Escritor brasileiro, professor de Língua Portuguesa, Inglesa e Música, criador do método Easy English.",
    longBio:
      "Rafael Silveira Lima Aguiar transita entre a ficção distópica, a ficção científica e a poesia. Sua obra investiga o futuro próximo, a tecnologia, a fé e os dilemas da alma humana, sempre com olhar crítico sobre a sociedade contemporânea.",
    books: [
      { previewSlug: "memorias-bryan-kubrick", title: "Memórias Ácidas de Bryan Kubrick", cover: coverMemoriasAndroid, theme: "Ficção Científica", price: "R$ 15,00" },
      { previewSlug: "obsoletos", title: "Obsoletos — O Despertar da Nova Era", cover: coverObsoletos, theme: "Ficção Científica", price: "R$ 15,00" },
      { previewSlug: "impacto-2070", title: "Impacto 2070, o Recomeço", cover: coverImpacto, theme: "Ficção Científica", price: "R$ 15,00" },
      { previewSlug: "os-atribulados", title: "Os Atribulados", cover: coverAtribulados, theme: "Distopia", price: "R$ 15,00" },
      { previewSlug: "crime-antecipado", title: "O Crime Antecipado", cover: coverCrime, theme: "Distopia", price: "R$ 15,00" },
      { title: "Blackout 2040", cover: coverBlackout, theme: "Distopia" },
      { slug: "poesia-da-alma", title: "Poesia da Alma", cover: coverPoesiaAlma, theme: "Poesia" },
      { slug: "poesia-da-natureza", title: "Poesia da Natureza", cover: coverPoesiaNatureza, theme: "Poesia" },
      { slug: "poesia-social", title: "Poesia Social", cover: coverPoesiaSocial, theme: "Poesia" },
      { previewSlug: "atividades-ingles", title: "Activity — Creative Minds at Play", cover: coverAtividadesIngles, theme: "Didático", price: "R$ 20,00" },
      { title: "Pare de Procrastinar", cover: coverPareDeProcrastinar, theme: "Autoajuda", year: "2025", price: "R$ 15,00" },
    ],
  },
};

// Mapa: slug do livro -> slug do autor (usado em RelatedBooks para linkar
// "Mais deste autor").
export const bookToAuthor: Record<string, string> = Object.fromEntries(
  Object.values(authors).flatMap((a) =>
    a.books.flatMap((b) => {
      const keys = [b.slug, b.previewSlug].filter(Boolean) as string[];
      return keys.map((k) => [k, a.slug] as const);
    })
  )
);

// Lista de temas de um autor (categorias relacionadas)
export function getAuthorThemes(authorSlug: string): string[] {
  const a = authors[authorSlug];
  if (!a) return [];
  return Array.from(new Set(a.books.map((b) => b.theme)));
}
