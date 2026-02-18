import BookCard from "./BookCard";
import coverImpacto from "@/assets/cover-impacto-2070.jpg";
import coverAtribulados from "@/assets/cover-os-atribulados.jpg";
import coverCrime from "@/assets/cover-crime-antecipado.jpg";
import coverBlackout from "@/assets/cover-blackout-2040.jpg";
import coverPoesiaAlma from "@/assets/cover-poesia-da-alma.jpg";
import coverPoesiaNatureza from "@/assets/cover-poesia-da-natureza.jpg";
import backcoverImpacto from "@/assets/backcover-impacto-2070.jpg";
import backcoverAtribulados from "@/assets/backcover-os-atribulados.jpg";
import backcoverCrime from "@/assets/backcover-crime-antecipado.jpg";
import backcoverBlackout from "@/assets/backcover-blackout-2040.jpg";
import backcoverPoesiaAlma from "@/assets/backcover-poesia-da-alma.jpg";
import backcoverPoesiaNatureza from "@/assets/backcover-poesia-da-natureza.jpg";

const books = [
  {
    title: "Impacto 2070, o Recomeço",
    author: "Rafael S. L. Aguiar",
    cover: coverImpacto,
    backcover: backcoverImpacto,
    description: "Em 2070, a queda de um meteoro mergulha o planeta em uma era de trevas tecnológicas, forçando a humanidade a sobreviver sem internet. Em meio ao caos, surge uma ameaça ainda mais sombria: a fusão forçada entre homem e máquina que promete \"evoluir\" os sobreviventes. Grupos de resistência lutam para preservar a essência humana em um mundo onde o silêncio digital é a única defesa. Entre ruínas e circuitos, a batalha final será para decidir se o futuro pertence ao carbono ou ao silício. A sobrevivência agora depende de instintos antigos em uma guerra contra a própria tecnologia que criamos.",
    badge: "Novo",
  },
  {
    title: "Os Atribulados",
    author: "Rafael S. L. Aguiar",
    cover: coverAtribulados,
    backcover: backcoverAtribulados,
    description: "O ano é 2045 e o mundo ainda tenta processar o desaparecimento inexplicável de milhões de pessoas em um piscar de olhos. Do vácuo do desespero, emerge um governo global absoluto que promete ordem em troca de submissão total a um novo regime. Aqueles que recusam o controle são sumariamente excluídos do sistema financeiro, tornando-se párias em uma sociedade vigiada. Em um cenário de escassez e fé provada, um grupo de resistentes precisa aprender a sobreviver à margem do sistema. A liberdade agora tem um preço alto, e a escolha é clara: curvar-se ao novo líder ou enfrentar a tribulação.",
    badge: "Destaque",
  },
  {
    title: "O Crime Antecipado",
    author: "Rafael S. L. Aguiar",
    cover: coverCrime,
    backcover: backcoverCrime,
    description: "No Rio de Janeiro de 2050, a violência urbana foi erradicada pela \"Desintoxicação Criminal\", um sistema capaz de prever delitos antes que ocorram. No entanto, a paz custa caro: a liberdade de pensamento torna-se o novo campo de batalha jurídico e ético. Quando um homem é detido por um crime que ainda não cometeu, ele se vê preso em um labirinto onde a intenção é tão punível quanto o ato. Agora, ele precisa provar sua inocência contra um algoritmo que afirma conhecer seu futuro melhor do que ele mesmo. Em um mundo sem crimes, a maior infração pode ser, simplesmente, o livre-arbítrio.",
  },
  {
    title: "Blackout 2040",
    author: "Rafael S. L. Aguiar",
    cover: coverBlackout,
    backcover: backcoverBlackout,
    description: "O colapso total da rede elétrica em 2040 apaga não apenas as luzes, mas toda a estrutura econômica da civilização moderna. Sem moedas físicas e com o dinheiro digital evaporado, a humanidade assiste à queda instantânea dos mercados e da ordem social. Em meio à crise financeira absoluta, cidades modernas tornam-se armadilhas de concreto onde o escambo volta a ser a única lei. Homens e mulheres são forçados a reaprender ofícios esquecidos há séculos para garantir o pão de cada dia. No silêncio do blackout, a verdadeira riqueza passa a ser medida pela capacidade de sobreviver ao passado.",
  },
  {
    title: "Poesia da Alma",
    author: "Rafael S. L. Aguiar",
    cover: coverPoesiaAlma,
    backcover: backcoverPoesiaAlma,
    description: "Uma coletânea de poemas que mergulha nas profundezas do ser humano, explorando sentimentos, reflexões existenciais e a busca pela essência que nos define. Versos que tocam a alma e despertam emoções adormecidas.",
    badge: "Poesia",
  },
  {
    title: "Poesia da Natureza",
    author: "Rafael S. L. Aguiar",
    cover: coverPoesiaNatureza,
    backcover: backcoverPoesiaNatureza,
    description: "Uma celebração poética da beleza natural que nos rodeia. Das florestas aos rios, do nascer ao pôr do sol, cada poema é um convite para contemplar a grandiosidade e a delicadeza do mundo natural.",
    badge: "Poesia",
  },
];

const BooksSection = () => {
  return (
    <section id="livros" className="py-24 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Biblioteca
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meus Livros
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Cada livro é uma porta para um novo universo. Explore minhas obras e encontre sua próxima leitura.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
