// Lista de novidades publicadas no site.
// Adicione um novo item no TOPO sempre que publicar algo novo (livro, artigo, etc.).
// O banner de notificação compara o `id` mais recente com o último visto pelo usuário.

export type SiteUpdate = {
  id: string;          // identificador único (ex: "memorias-bryan-kubrick")
  title: string;       // título exibido na notificação
  type: "livro" | "artigo" | "infografico" | "outro";
  href?: string;       // link para abrir ao clicar (opcional)
  publishedAt: string; // ISO date
};

export const siteUpdates: SiteUpdate[] = [
  {
    id: "perseu-legado-livro-iv",
    title: "Novo na Biblioteca: Heróis Épicos — Perseu, Livro IV",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-04-29",
  },
  {
    id: "jasao-argonautas-livro-iii",
    title: "Novo na Biblioteca: Heróis Épicos — Jasão e os Argonautas, Livro III",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-04-29",
  },
  {
    id: "siegfried-saga-livro-ii",
    title: "Novo na Biblioteca: Heróis Épicos — Siegfried, Livro II",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-04-29",
  },
  {
    id: "aquiles-ira-do-heroi",
    title: "Novo na Biblioteca: Heróis Épicos — Aquiles, A Ira do Herói de Troia",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-04-29",
  },
  {
    id: "memorias-bryan-kubrick",
    title: "Novo livro: Memórias Ácidas de Bryan Kubrick",
    type: "livro",
    href: "/#livros",
    publishedAt: "2026-04-24",
  },
  {
    id: "obsoletos",
    title: "Novo livro: Obsoletos — O Despertar da Nova Era",
    type: "livro",
    href: "/#livros",
    publishedAt: "2026-04-20",
  },
];

export const latestUpdateId = siteUpdates[0]?.id ?? "";
