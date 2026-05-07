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
    id: "el-cid-campeador-livro-xv",
    title: "Novo na Biblioteca: Heróis Épicos — El Cid, O Campeador, Livro XV (Edição Premium)",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-07",
  },
  {
    id: "musashi-minamoto-livro-xiv",
    title: "Novo na Biblioteca: Heróis Épicos — Musashi Minamoto, Livro XIV",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-07",
  },
  {
    id: "arthur-livro-xiii",
    title: "Novo na Biblioteca: Heróis Épicos — A Lenda de Arthur, Livro XIII",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-06",
  },
  {
    id: "blackout-2040-luz-fim-tunel",
    title: "Novo livro: Blackout 2040 — Uma luz no fim do túnel",
    type: "livro",
    href: "/#livros",
    publishedAt: "2026-05-05",
  },
  {
    id: "persival-busca-graal",
    title: "Novo na Biblioteca: Persival e a Busca pelo Graal — Edição Especial de Luxo",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-05",
  },
  {
    id: "davi-coracao-de-deus-livro-xii",
    title: "Novo na Biblioteca: Heróis Épicos — Davi, Livro XII (Edição Premium)",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-05",
  },
  {
    id: "sansao-heroi-hebreu-livro-xi",
    title: "Novo na Biblioteca: Heróis Épicos — Sansão, Livro XI",
    type: "livro",
    href: "/#biblioteca",
    publishedAt: "2026-05-04",
  },
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
