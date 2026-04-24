// Mapa de relações entre os livros autorais por tema/gênero.
// Usado para gerar links internos entre páginas de livros e melhorar
// a descoberta orgânica e o rastreamento (SEO interno).

export interface RelatedBook {
  slug: string;
  title: string;
  theme: string;
}

export const allOwnBooks: RelatedBook[] = [
  { slug: "os-atribulados", title: "Os Atribulados", theme: "Distopia" },
  { slug: "crime-antecipado", title: "O Crime Antecipado", theme: "Distopia" },
  { slug: "impacto-2070", title: "Impacto 2070, o Recomeço", theme: "Ficção Científica" },
  { slug: "poesia-da-alma", title: "Poesia da Alma", theme: "Poesia" },
  { slug: "poesia-da-natureza", title: "Poesia da Natureza", theme: "Poesia" },
  { slug: "poesia-social", title: "Poesia Social", theme: "Poesia" },
  { slug: "atividades-ingles", title: "Activity — Creative Minds at Play", theme: "Didático" },
];

// Temas afins: ficção científica e distopia se reforçam mutuamente.
const themeAffinity: Record<string, string[]> = {
  Distopia: ["Distopia", "Ficção Científica"],
  "Ficção Científica": ["Ficção Científica", "Distopia"],
  Poesia: ["Poesia"],
  Didático: ["Didático"],
};

export function getRelatedBooks(currentSlug: string, limit = 3): RelatedBook[] {
  const current = allOwnBooks.find((b) => b.slug === currentSlug);
  if (!current) return [];
  const affinities = themeAffinity[current.theme] ?? [current.theme];
  const sameTheme = allOwnBooks.filter(
    (b) => b.slug !== currentSlug && affinities.includes(b.theme)
  );
  // Fallback: completa com outros livros se faltar.
  const others = allOwnBooks.filter(
    (b) => b.slug !== currentSlug && !sameTheme.includes(b)
  );
  return [...sameTheme, ...others].slice(0, limit);
}
