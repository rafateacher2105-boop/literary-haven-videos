import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Sword, Search, BookOpenText, Library, Theater, Heart, BookMarked, ExternalLink } from "lucide-react";

interface BookRec {
  title: string;
  author: string;
  amazonUrl?: string;
}

const distopias: BookRec[] = [
  { title: "1984", author: "George Orwell" },
  { title: "Admirável Mundo Novo", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "O Conto da Aia", author: "Margaret Atwood" },
  { title: "Nós", author: "Ievgueni Zamiatin" },
  { title: "A Estrada", author: "Cormac McCarthy" },
  { title: "Laranja Mecânica", author: "Anthony Burgess" },
  { title: "O Senhor das Moscas", author: "William Golding" },
  { title: "Ensaio Sobre a Cegueira", author: "José Saramago" },
  { title: "A Revolução dos Bichos", author: "George Orwell" },
];

const fantasia: BookRec[] = [
  { title: "O Senhor dos Anéis (Volume Único)", author: "J.R.R. Tolkien" },
  { title: "O Hobbit", author: "J.R.R. Tolkien" },
  { title: "As Crônicas de Nárnia (Edição de Luxo)", author: "C.S. Lewis" },
  { title: "O Nome do Vento", author: "Patrick Rothfuss" },
  { title: "A Guerra dos Tronos", author: "George R.R. Martin" },
  { title: "O Caminho dos Reis", author: "Brandon Sanderson" },
  { title: "O Feiticeiro de Terramar", author: "Ursula K. Le Guin" },
  { title: "Deuses Americanos", author: "Neil Gaiman" },
  { title: "Circe", author: "Madeline Miller" },
  { title: "A Roda do Tempo", author: "Robert Jordan" },
];

const suspense: BookRec[] = [
  { title: "E Não Sobrou Nenhum", author: "Agatha Christie" },
  { title: "O Assassinato de Roger Ackroyd", author: "Agatha Christie" },
  { title: "Um Estudo em Vermelho", author: "Arthur Conan Doyle" },
  { title: "O Silêncio dos Inocentes", author: "Thomas Harris" },
  { title: "A Garota no Trem", author: "Paula Hawkins" },
  { title: "Boneco de Neve", author: "Jo Nesbø" },
  { title: "A Paciente Silenciosa", author: "Alex Michaelides" },
  { title: "Garota Exemplar", author: "Gillian Flynn" },
  { title: "O Homem de Giz", author: "C.J. Tudor" },
  { title: "Misery", author: "Stephen King" },
];

const contos: BookRec[] = [
  { title: "Contos de Imaginação e Mistério", author: "Edgar Allan Poe" },
  { title: "Ficções", author: "Jorge Luis Borges" },
  { title: "O Aleph", author: "Jorge Luis Borges" },
  { title: "Histórias Extraordinárias", author: "Edgar Allan Poe" },
  { title: "Contos de Tchekhov", author: "Anton Tchekhov" },
  { title: "A Cartomante e Outros Contos", author: "Machado de Assis" },
  { title: "Primeiras Estórias", author: "João Guimarães Rosa" },
  { title: "Laços de Família", author: "Clarice Lispector" },
  { title: "O Horla e Outros Contos", author: "Guy de Maupassant" },
  { title: "Nove Histórias", author: "J.D. Salinger" },
];

const classicos: BookRec[] = [
  { title: "Dom Quixote", author: "Miguel de Cervantes" },
  { title: "Os Miseráveis", author: "Victor Hugo" },
  { title: "Crime e Castigo", author: "Fiódor Dostoiévski" },
  { title: "Os Irmãos Karamazov", author: "Fiódor Dostoiévski" },
  { title: "Guerra e Paz", author: "Lev Tolstói" },
  { title: "Dom Casmurro", author: "Machado de Assis" },
  { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis" },
  { title: "O Retrato de Dorian Gray", author: "Oscar Wilde" },
  { title: "Moby Dick", author: "Herman Melville" },
  { title: "A Divina Comédia", author: "Dante Alighieri" },
  { title: "Ilíada", author: "Homero" },
  { title: "Odisseia", author: "Homero" },
  { title: "Madame Bovary", author: "Gustave Flaubert" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "Em Busca do Tempo Perdido", author: "Marcel Proust" },
];

const dramas: BookRec[] = [
  { title: "A Metamorfose", author: "Franz Kafka" },
  { title: "O Processo", author: "Franz Kafka" },
  { title: "À Espera de Godot", author: "Samuel Beckett" },
  { title: "Hamlet", author: "William Shakespeare" },
  { title: "Rei Lear", author: "William Shakespeare" },
  { title: "A Morte de Ivan Ilitch", author: "Lev Tolstói" },
  { title: "O Estrangeiro", author: "Albert Camus" },
  { title: "Sobre Ratos e Homens", author: "John Steinbeck" },
  { title: "As Vinhas da Ira", author: "John Steinbeck" },
  { title: "O Sol é para Todos", author: "Harper Lee" },
  { title: "A Cor Púrpura", author: "Alice Walker" },
  { title: "Beloved (Amada)", author: "Toni Morrison" },
  { title: "O Caçador de Pipas", author: "Khaled Hosseini" },
  { title: "Mil Soles Esplêndidos", author: "Khaled Hosseini" },
  { title: "A Menina que Roubava Livros", author: "Markus Zusak" },
];

const romance: BookRec[] = [
  { title: "Orgulho e Preconceito", author: "Jane Austen" },
  { title: "Razão e Sensibilidade", author: "Jane Austen" },
  { title: "O Morro dos Ventos Uivantes", author: "Emily Brontë" },
  { title: "Jane Eyre", author: "Charlotte Brontë" },
  { title: "Anna Kariênina", author: "Lev Tolstói" },
  { title: "O Amor nos Tempos do Cólera", author: "Gabriel García Márquez" },
  { title: "O Grande Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Cem Anos de Solidão", author: "Gabriel García Márquez" },
  { title: "A Insustentável Leveza do Ser", author: "Milan Kundera" },
  { title: "Amor de Perdição", author: "Camilo Castelo Branco" },
  { title: "Como Eu Era Antes de Você", author: "Jojo Moyes" },
  { title: "A Culpa é das Estrelas", author: "John Green" },
  { title: "Pessoas Normais", author: "Sally Rooney" },
  { title: "Um Dia", author: "David Nicholls" },
];

const bonus: BookRec[] = [
  { title: "Paris no Século XX", author: "Jules Verne" },
  { title: "Vinte Mil Léguas Submarinas", author: "Jules Verne" },
  { title: "O Livro do Desassossego", author: "Fernando Pessoa" },
  { title: "Os Lusíadas", author: "Luís de Camões" },
  { title: "Cristianismo Puro e Simples", author: "C.S. Lewis" },
  { title: "O Peso da Glória", author: "C.S. Lewis" },
  { title: "Cartas de um Diabo a seu Aprendiz", author: "C.S. Lewis" },
  { title: "Em Busca de Sentido", author: "Viktor Frankl" },
  { title: "Confissões", author: "Santo Agostinho" },
  { title: "A Imitação de Cristo", author: "Tomás de Kempis" },
  { title: "Grande Sertão: Veredas", author: "João Guimarães Rosa" },
  { title: "Torto Arado", author: "Itamar Vieira Junior" },
  { title: "A Hora da Estrela", author: "Clarice Lispector" },
  { title: "Capitães da Areia", author: "Jorge Amado" },
  { title: "A Luneta Mágica", author: "Joaquim Manuel de Macedo" },
];

const genreGradients: Record<string, string> = {
  distopias: "from-[hsl(0,40%,18%)] to-[hsl(350,35%,30%)]",
  fantasia: "from-[hsl(260,35%,20%)] to-[hsl(280,40%,35%)]",
  suspense: "from-[hsl(210,30%,14%)] to-[hsl(220,35%,28%)]",
  contos: "from-[hsl(30,40%,18%)] to-[hsl(40,45%,32%)]",
  classicos: "from-[hsl(15,50%,22%)] to-[hsl(30,55%,38%)]",
  dramas: "from-[hsl(180,25%,15%)] to-[hsl(200,30%,28%)]",
  romance: "from-[hsl(330,35%,22%)] to-[hsl(350,40%,35%)]",
  bonus: "from-[hsl(140,30%,16%)] to-[hsl(120,35%,30%)]",
};

const BookGrid = ({ books, genre }: { books: BookRec[]; genre: string }) => {
  const gradient = genreGradients[genre] || genreGradients.classicos;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {books.map((book, idx) => (
        <a
          key={idx}
          href={book.amazonUrl || "#"}
          target={book.amazonUrl ? "_blank" : undefined}
          rel={book.amazonUrl ? "noopener noreferrer" : undefined}
          className="group flex flex-col rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
        >
          {/* Placeholder cover — será substituída por imagem real futuramente */}
          <div
            className={`aspect-[2/3] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-4 text-center relative`}
          >
            <span className="text-[hsl(35,40%,95%)] font-display text-sm font-semibold leading-tight drop-shadow-md">
              {book.title}
            </span>
            <span className="text-[hsl(35,40%,95%)]/70 font-body text-[10px] mt-2">
              {book.author}
            </span>
            {book.amazonUrl && (
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-[hsl(35,40%,95%)]/80" />
              </div>
            )}
          </div>

          <div className="p-3 flex flex-col gap-1 flex-1">
            <h4 className="font-display text-xs font-semibold text-foreground leading-tight line-clamp-2">
              {book.title}
            </h4>
            <p className="font-body text-[10px] text-muted-foreground">
              {book.author}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

const categories = [
  { value: "distopias", label: "Distopias", icon: Eye, books: distopias },
  { value: "fantasia", label: "Fantasia", icon: Sword, books: fantasia },
  { value: "suspense", label: "Suspense", icon: Search, books: suspense },
  { value: "contos", label: "Contos", icon: BookOpenText, books: contos },
  { value: "classicos", label: "Clássicos", icon: Library, books: classicos },
  { value: "dramas", label: "Dramas", icon: Theater, books: dramas },
  { value: "romance", label: "Romance", icon: Heart, books: romance },
  { value: "bonus", label: "Bônus", icon: BookMarked, books: bonus },
];

const Indicacoes = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-28 pb-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Minhas Indicações
        </h1>
        <p className="font-body text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Livros que recomendo para você. Clique na capa para comprar diretamente na Amazon.
        </p>

        <Tabs defaultValue="distopias" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-1 mb-6 bg-muted/50 p-1.5 rounded-lg">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="flex-1 min-w-[100px] gap-1.5 text-[11px] sm:text-xs py-2"
              >
                <cat.icon className="w-3.5 h-3.5 hidden sm:inline-block" />
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value} className="mt-0">
              <BookGrid books={cat.books} genre={cat.value} />
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center space-y-2">
          <p className="font-body text-xs text-muted-foreground">
            Como associado da Amazon, eu recebo por compras qualificadas.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Letras & Páginas. Feito com amor pela literatura.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Indicacoes;
