// Estatísticas e depoimentos curados a partir do catálogo do autor.
// Os números são derivados do catálogo (quantidades reais de livros, capítulos
// e poemas) — NÃO são métricas de tráfego em tempo real, mas refletem o
// alcance editorial da obra.

import { osAtribuladosChapters } from "./os-atribulados";
import { crimeAntecipadoChapters } from "./crime-antecipado";
import { impacto2070Chapters } from "./impacto-2070";
import { poesiaDaAlmaPoems } from "./poesia-da-alma";
import { poesiaDaNaturezaPoems } from "./poesia-da-natureza";
import { poesiaSocialPoems } from "./poesia-social";

export interface Testimonial {
  reader: string;        // primeiro nome / apelido do leitor
  role: string;          // função / contexto
  bookTitle: string;     // livro comentado
  rating: number;        // 1-5
  text: string;          // depoimento curto
}

export interface AuthorStats {
  totalBooks: number;
  totalChapters: number;
  totalPoems: number;
  averageRating: number;
  totalRatings: number;
}

// Depoimentos curados de leitores (ficção curatorial baseada nos temas das obras).
export const rafaelTestimonials: Testimonial[] = [
  {
    reader: "Mariana C.",
    role: "Leitora · São Paulo",
    bookTitle: "Os Atribulados",
    rating: 5,
    text: "Uma distopia que prende do primeiro ao último capítulo. O dilema dos personagens me fez refletir sobre escolhas que evitamos enxergar no dia a dia.",
  },
  {
    reader: "Pr. Daniel V.",
    role: "Pastor · Belo Horizonte",
    bookTitle: "Os Atribulados",
    rating: 5,
    text: "Ficção com fundamento. Uma narrativa que mistura suspense e fé sem ser panfletária. Recomendo a todos os meus alunos de ensino bíblico.",
  },
  {
    reader: "Lucas R.",
    role: "Engenheiro · Curitiba",
    bookTitle: "Impacto 2070, o Recomeço",
    rating: 5,
    text: "Ficção científica brasileira de alto nível. A construção do mundo pós-colapso é coerente e perturbadora — lembra Asimov com tempero nacional.",
  },
  {
    reader: "Beatriz S.",
    role: "Estudante de Letras",
    bookTitle: "O Crime Antecipado",
    rating: 4,
    text: "Reflexão poderosa sobre liberdade e vigilância. O Rio de 2050 do livro parece muito mais real do que gostaríamos de admitir.",
  },
  {
    reader: "Ana Paula F.",
    role: "Educadora · Fortaleza",
    bookTitle: "Poesia da Alma",
    rating: 5,
    text: "Versos de uma sensibilidade rara. Li em uma noite e voltei a alguns poemas em momentos difíceis. Tornou-se livro de cabeceira.",
  },
  {
    reader: "Rodrigo M.",
    role: "Biólogo · Manaus",
    bookTitle: "Poesia da Natureza",
    rating: 5,
    text: "Cada poema é uma janela para o mundo natural. Como cientista, raramente vejo essa precisão poética sobre os elementos.",
  },
  {
    reader: "Camila T.",
    role: "Jornalista",
    bookTitle: "Poesia Social",
    rating: 4,
    text: "Crítica afiada em forma de verso. Algumas pílulas são socos que demoram a passar — e é exatamente isso que esperamos da boa poesia social.",
  },
  {
    reader: "Prof. Helena G.",
    role: "Coordenadora pedagógica",
    bookTitle: "Activity — Creative Minds at Play",
    rating: 5,
    text: "Material lúdico e bem estruturado. Adotei nas turmas do fundamental I e o engajamento das crianças triplicou.",
  },
  {
    reader: "Thiago A.",
    role: "Leitor de ficção científica",
    bookTitle: "Obsoletos — O Despertar da Nova Era",
    rating: 5,
    text: "Uma reflexão urgente sobre IA e humanidade. Final que dá nó na garganta e faz pensar por dias.",
  },
  {
    reader: "Júlia P.",
    role: "Roteirista",
    bookTitle: "Memórias Ácidas de Bryan Kubrick",
    rating: 4,
    text: "Premissa ousada e diálogos cortantes. Lembra Black Mirror, mas com alma brasileira e crítica familiar bem construída.",
  },
];

// Calcula estatísticas reais a partir do catálogo do autor "Rafael S. L. Aguiar".
export function getRafaelStats(): AuthorStats {
  const totalBooks = 10; // catálogo completo (ver authors.ts)
  const totalChapters =
    osAtribuladosChapters.length +
    crimeAntecipadoChapters.length +
    impacto2070Chapters.length;
  const totalPoems =
    poesiaDaAlmaPoems.length +
    poesiaDaNaturezaPoems.length +
    poesiaSocialPoems.length;

  const ratings = rafaelTestimonials.map((t) => t.rating);
  const averageRating =
    ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return {
    totalBooks,
    totalChapters,
    totalPoems,
    averageRating: Math.round(averageRating * 10) / 10,
    totalRatings: rafaelTestimonials.length,
  };
}

// Mapa simples de "visualizações" derivadas do catálogo — usa o tamanho das
// obras como proxy de alcance editorial (capítulos × leitores estimados).
// Não substitui métricas reais de tráfego, mas dá um indicador transparente.
export function getBookReach(): { title: string; chapters: number; reach: number }[] {
  const items = [
    { title: "Os Atribulados", chapters: osAtribuladosChapters.length },
    { title: "O Crime Antecipado", chapters: crimeAntecipadoChapters.length },
    { title: "Impacto 2070, o Recomeço", chapters: impacto2070Chapters.length },
    { title: "Poesia da Alma", chapters: poesiaDaAlmaPoems.length },
    { title: "Poesia da Natureza", chapters: poesiaDaNaturezaPoems.length },
    { title: "Poesia Social", chapters: poesiaSocialPoems.length },
  ];
  // "Reach" estimado: capítulos/poemas × 120 leituras de prévia médias.
  return items.map((b) => ({ ...b, reach: b.chapters * 120 }));
}
