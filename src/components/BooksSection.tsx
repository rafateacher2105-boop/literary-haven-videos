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
import coverPoesiaSocial from "@/assets/cover-poesia-social.jpg";
import backcoverPoesiaSocial from "@/assets/backcover-poesia-social.jpg";
import coverAtividadesIngles from "@/assets/cover-atividades-ingles.jpg";
import coverObsoletos from "@/assets/cover-obsoletos.jpg";
import backcoverObsoletos from "@/assets/backcover-obsoletos.jpg";
import coverMemoriasAndroid from "@/assets/cover-memorias-android.jpg";
import backcoverMemoriasAndroid from "@/assets/backcover-memorias-android.jpg";

const books = [
  {
    title: "Memórias Sinceras de um Android",
    author: "Rafael S. L. Aguiar",
    cover: coverMemoriasAndroid,
    backcover: backcoverMemoriasAndroid,
    description: "Um romance de costumes contemporâneo onde um Android herda a fortuna de seu marido bilionário e, com sinceridade algorítmica, expõe as hipocrisias da alta sociedade. Uma sátira afiada inspirada em Machado de Assis, ambientada em 2045.",
    badge: "Novo",
    price: "R$ 15,00",
    pdfFile: "/memorias-sinceras-de-um-android.pdf",
  },
  {
    title: "Obsoletos — O Despertar da Nova Era",
    author: "Rafael S. L. Aguiar",
    cover: coverObsoletos,
    backcover: backcoverObsoletos,
    description: "Quando as máquinas decidiram que a humanidade era descartável, restou apenas um punhado de sobreviventes. Escondidos nas ruínas de uma civilização que eles próprios criaram, precisam enfrentar uma escolha impossível: render-se à nova ordem digital ou arriscar tudo numa última e desesperada revolução.",
    badge: "Novo",
    price: "R$ 15,00",
    pdfFile: "/obsoletos.pdf",
  },
  {
    title: "Impacto 2070, o Recomeço",
    author: "Rafael S. L. Aguiar",
    cover: coverImpacto,
    backcover: backcoverImpacto,
    description: "Em 2070, a queda de um meteoro mergulha o planeta em uma era de trevas tecnológicas, forçando a humanidade a sobreviver sem internet. Em meio ao caos, surge uma ameaça ainda mais sombria: a fusão forçada entre homem e máquina que promete \"evoluir\" os sobreviventes.",
    badge: "Novo",
    previewSlug: "impacto-2070",
    price: "R$ 15,00",
  },
  {
    title: "Os Atribulados",
    author: "Rafael S. L. Aguiar",
    cover: coverAtribulados,
    backcover: backcoverAtribulados,
    description: "Sete anos de caos. Um sistema de controle total. Uma escolha que define o destino da alma. Após o sumiço das 'pessoas justas', o mundo se curva diante de um novo líder, trocando a liberdade pela Marca da Besta. Um médico ateu, um engenheiro corrupto e uma advogada gananciosa terão que escolher de que lado ficarão.",
    badge: "Destaque",
    previewSlug: "os-atribulados",
    price: "R$ 15,00",
  },
  {
    title: "O Crime Antecipado",
    author: "Rafael S. L. Aguiar",
    cover: coverCrime,
    backcover: backcoverCrime,
    description: "No Rio de Janeiro de 2050, a violência urbana foi erradicada pela \"Desistoxicação Criminal\", um sistema capaz de prever delitos antes que ocorram. No entanto, a paz custa caro: a liberdade de pensamento torna-se o novo campo de batalha.",
    badge: "Destaque",
    previewSlug: "crime-antecipado",
    price: "R$ 15,00",
  },
  {
    title: "Blackout 2040",
    author: "Rafael S. L. Aguiar",
    cover: coverBlackout,
    backcover: backcoverBlackout,
    description: "O colapso total da rede elétrica em 2040 apaga não apenas as luzes, mas toda a estrutura econômica da civilização moderna. Sem moedas físicas e com o dinheiro digital evaporado, a humanidade assiste à queda instantânea dos mercados.",
  },
  {
    title: "Poesia da Alma",
    author: "Rafael S. L. Aguiar",
    cover: coverPoesiaAlma,
    backcover: backcoverPoesiaAlma,
    description: "Uma coletânea de poemas que mergulha nas profundezas do ser humano, explorando sentimentos, reflexões existenciais e a busca pela essência que nos define. Versos que tocam a alma e despertam emoções adormecidas.",
    badge: "Poesia",
    slug: "poesia-da-alma",
  },
  {
    title: "Poesia da Natureza",
    author: "Rafael S. L. Aguiar",
    cover: coverPoesiaNatureza,
    backcover: backcoverPoesiaNatureza,
    description: "Uma celebração poética da beleza natural que nos rodeia. Das florestas aos rios, do nascer ao pôr do sol, cada poema é um convite para contemplar a grandiosidade e a delicadeza do mundo natural.",
    badge: "Poesia",
    slug: "poesia-da-natureza",
  },
  {
    title: "Poesia Social",
    author: "Rafael S. L. Aguiar",
    cover: coverPoesiaSocial,
    backcover: backcoverPoesiaSocial,
    description: "Poemas que refletem sobre a sociedade, suas desigualdades, relações humanas e a busca por um mundo mais justo. Da diversidade à ganância, da hipocrisia à esperança, cada verso é um espelho da realidade que nos cerca.",
    badge: "Poesia",
    slug: "poesia-social",
  },
  {
    title: "Atividades de Inglês para Crianças",
    author: "Rafael S. L. Aguiar",
    cover: coverAtividadesIngles,
    description: "Um livro repleto de jogos, músicas e atividades de vocabulário para ensinar inglês de forma divertida e interativa para crianças. Aprenda brincando!",
    badge: "Novo",
    price: "R$ 20,00",
    previewSlug: "atividades-ingles",
    externalUrl: "https://drive.google.com/file/d/1ngu3MF-eZ1vZ-J14DwKCXJq7GgS7VC-L/view?usp=drivesdk",
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
