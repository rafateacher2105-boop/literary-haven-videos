// FAQs por autor — exibidas visualmente E expostas como JSON-LD (FAQPage)
// para enriquecer a SERP do Google com snippets de perguntas e respostas.

export interface FaqItem {
  question: string;
  answer: string;
}

export const authorFaqs: Record<string, FaqItem[]> = {
  "rafael-s-l-aguiar": [
    {
      question: "Quem é Rafael S. L. Aguiar?",
      answer:
        "Rafael Silveira Lima Aguiar é um escritor brasileiro, professor de Língua Portuguesa, Inglesa e Música, e criador do método Easy English. Sua obra transita entre a ficção distópica, a ficção científica e a poesia.",
    },
    {
      question: "Quais são os principais livros de Rafael S. L. Aguiar?",
      answer:
        "Entre seus principais títulos estão 'Os Atribulados', 'O Crime Antecipado', 'Impacto 2070, o Recomeço', 'Obsoletos — O Despertar da Nova Era', além das coletâneas 'Poesia da Alma', 'Poesia da Natureza' e 'Poesia Social'.",
    },
    {
      question: "Em que gêneros literários o autor escreve?",
      answer:
        "O autor escreve principalmente ficção distópica, ficção científica e poesia (de temática cristã, naturalista e social). Também publicou material didático para o ensino de inglês para crianças.",
    },
    {
      question: "Como posso ler ou comprar os livros?",
      answer:
        "Os livros de prosa têm leitura prévia gratuita no site e podem ser adquiridos em EPUB por R$ 15,00. As coletâneas de poesia estão disponíveis para leitura online gratuita e download em EPUB. O material didático em inglês custa R$ 20,00.",
    },
    {
      question: "Os livros estão disponíveis em formato digital?",
      answer:
        "Sim. Todas as obras autorais estão disponíveis em formato EPUB, com leitura otimizada em qualquer dispositivo. Algumas obras também oferecem versão PDF para leitura online direta no navegador.",
    },
    {
      question: "Como posso apoiar o autor?",
      answer:
        "Além de adquirir os livros, é possível apoiar o autor por meio de uma doação voluntária de R$ 5,00 pelo botão 'Apoie o Autor' no menu do site. O apoio ajuda a manter o blog e viabilizar novas publicações.",
    },
  ],
};
