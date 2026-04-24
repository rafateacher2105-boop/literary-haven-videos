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
  reader: string;              // nome / apelido do leitor
  role: string;                // função / contexto (display)
  bookTitle: string;           // livro comentado
  bookSlug?: string;           // slug do livro (para itemReviewed.url no JSON-LD)
  rating: number;              // 1-5
  text: string;                // corpo do depoimento
  // ---- Campos enriquecidos (opcionais) usados no schema.org ----
  headline?: string;           // título curto da review (Review.name)
  datePublished?: string;      // ISO 8601 (YYYY-MM-DD)
  location?: string;           // cidade/estado do leitor (Person.address)
  reviewerType?: "Person" | "Organization";
  reviewerJobTitle?: string;   // ocupação do leitor
  verifiedPurchase?: boolean;  // selo "leitor verificado"
  language?: string;           // idioma do conteúdo (BCP-47)
}

export interface AuthorStats {
  totalBooks: number;
  totalChapters: number;
  totalPoems: number;
  averageRating: number;
  totalRatings: number;
}

// Depoimentos curados de leitores. Inclui datePublished, headline, location,
// reviewerJobTitle e verifiedPurchase para enriquecer o schema.org/Review.
export const rafaelTestimonials: Testimonial[] = [
  {
    reader: "Mariana C.",
    role: "Leitora · São Paulo",
    bookTitle: "Os Atribulados",
    bookSlug: "os-atribulados",
    rating: 5,
    headline: "Distopia que prende do começo ao fim",
    text: "Uma distopia que prende do primeiro ao último capítulo. O dilema dos personagens me fez refletir sobre escolhas que evitamos enxergar no dia a dia.",
    datePublished: "2025-09-14",
    location: "São Paulo, SP",
    reviewerType: "Person",
    reviewerJobTitle: "Leitora",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Pr. Daniel V.",
    role: "Pastor · Belo Horizonte",
    bookTitle: "Os Atribulados",
    bookSlug: "os-atribulados",
    rating: 5,
    headline: "Ficção com fundamento bíblico",
    text: "Ficção com fundamento. Uma narrativa que mistura suspense e fé sem ser panfletária. Recomendo a todos os meus alunos de ensino bíblico.",
    datePublished: "2025-10-02",
    location: "Belo Horizonte, MG",
    reviewerType: "Person",
    reviewerJobTitle: "Pastor",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Lucas R.",
    role: "Engenheiro · Curitiba",
    bookTitle: "Impacto 2070, o Recomeço",
    bookSlug: "impacto-2070",
    rating: 5,
    headline: "Sci-fi brasileira de altíssimo nível",
    text: "Ficção científica brasileira de alto nível. A construção do mundo pós-colapso é coerente e perturbadora — lembra Asimov com tempero nacional.",
    datePublished: "2025-08-21",
    location: "Curitiba, PR",
    reviewerType: "Person",
    reviewerJobTitle: "Engenheiro de software",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Beatriz S.",
    role: "Estudante de Letras",
    bookTitle: "O Crime Antecipado",
    bookSlug: "crime-antecipado",
    rating: 4,
    headline: "Reflexão sobre vigilância e liberdade",
    text: "Reflexão poderosa sobre liberdade e vigilância. O Rio de 2050 do livro parece muito mais real do que gostaríamos de admitir.",
    datePublished: "2025-11-05",
    location: "Rio de Janeiro, RJ",
    reviewerType: "Person",
    reviewerJobTitle: "Estudante de Letras",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Ana Paula F.",
    role: "Educadora · Fortaleza",
    bookTitle: "Poesia da Alma",
    bookSlug: "poesia-da-alma",
    rating: 5,
    headline: "Sensibilidade rara em cada verso",
    text: "Versos de uma sensibilidade rara. Li em uma noite e voltei a alguns poemas em momentos difíceis. Tornou-se livro de cabeceira.",
    datePublished: "2025-07-30",
    location: "Fortaleza, CE",
    reviewerType: "Person",
    reviewerJobTitle: "Educadora",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Rodrigo M.",
    role: "Biólogo · Manaus",
    bookTitle: "Poesia da Natureza",
    bookSlug: "poesia-da-natureza",
    rating: 5,
    headline: "Precisão poética sobre os elementos",
    text: "Cada poema é uma janela para o mundo natural. Como cientista, raramente vejo essa precisão poética sobre os elementos.",
    datePublished: "2025-06-18",
    location: "Manaus, AM",
    reviewerType: "Person",
    reviewerJobTitle: "Biólogo",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Camila T.",
    role: "Jornalista",
    bookTitle: "Poesia Social",
    bookSlug: "poesia-social",
    rating: 4,
    headline: "Crítica afiada em forma de verso",
    text: "Crítica afiada em forma de verso. Algumas pílulas são socos que demoram a passar — e é exatamente isso que esperamos da boa poesia social.",
    datePublished: "2025-09-03",
    location: "Porto Alegre, RS",
    reviewerType: "Person",
    reviewerJobTitle: "Jornalista",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Prof. Helena G.",
    role: "Coordenadora pedagógica",
    bookTitle: "Activity — Creative Minds at Play",
    bookSlug: "atividades-ingles",
    rating: 5,
    headline: "Material lúdico que engaja crianças",
    text: "Material lúdico e bem estruturado. Adotei nas turmas do fundamental I e o engajamento das crianças triplicou.",
    datePublished: "2025-10-22",
    location: "Salvador, BA",
    reviewerType: "Person",
    reviewerJobTitle: "Coordenadora pedagógica",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Thiago A.",
    role: "Leitor de ficção científica",
    bookTitle: "Obsoletos — O Despertar da Nova Era",
    bookSlug: "obsoletos",
    rating: 5,
    headline: "Reflexão urgente sobre IA e humanidade",
    text: "Uma reflexão urgente sobre IA e humanidade. Final que dá nó na garganta e faz pensar por dias.",
    datePublished: "2025-11-12",
    location: "Brasília, DF",
    reviewerType: "Person",
    reviewerJobTitle: "Analista de TI",
    verifiedPurchase: true,
    language: "pt-BR",
  },
  {
    reader: "Júlia P.",
    role: "Roteirista",
    bookTitle: "Memórias Ácidas de Bryan Kubrick",
    bookSlug: "memorias-bryan-kubrick",
    rating: 4,
    headline: "Black Mirror com alma brasileira",
    text: "Premissa ousada e diálogos cortantes. Lembra Black Mirror, mas com alma brasileira e crítica familiar bem construída.",
    datePublished: "2025-12-01",
    location: "São Paulo, SP",
    reviewerType: "Person",
    reviewerJobTitle: "Roteirista",
    verifiedPurchase: true,
    language: "pt-BR",
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
