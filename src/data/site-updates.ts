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
    id: "beowulf-livro-x",
    title: "Novo na Biblioteca: Heróis Épicos — A Lenda de Beowulf, Livro X",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-04",
  },
  {
    id: "antigona-sofocles-livro-viii",
    title: "Novo na Biblioteca: Heróis Épicos — Antígona de Sófocles, Livro VIII",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-04",
  },
  {
    id: "teseu-minotauro-livro-vii",
    title: "Novo na Biblioteca: Heróis Épicos — Teseu e o Minotauro, Livro VII",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-03",
  },
  {
    id: "gilgamesh-epopeia-livro-vi",
    title: "Novo na Biblioteca: Heróis Épicos — A Epopeia de Gilgamesh, Livro VI",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-02",
  },
  {
    id: "eneida-jornada-livro-v",
    title: "Novo na Biblioteca: Heróis Épicos — A Eneida, Livro V",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-02",
  },
  {
    id: "perseu-legado-livro-iv",
    title: "Novo na Biblioteca: Heróis Épicos — Perseu, Livro IV",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-04-24",
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
