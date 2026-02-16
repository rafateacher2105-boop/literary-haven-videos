import BookCard from "./BookCard";

const books = [
  {
    title: "Impacto 2070, o Recomeço",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "Uma jornada épica rumo ao futuro, onde a humanidade enfrenta os desafios de recomeçar após um evento que mudou o mundo para sempre.",
    badge: "Novo",
  },
  {
    title: "Os Atribulados",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    description: "Vidas entrelaçadas por conflitos e esperanças, onde cada personagem carrega suas próprias batalhas internas.",
    badge: "Destaque",
  },
  {
    title: "O Crime Antecipado",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    description: "Um thriller envolvente que questiona os limites da justiça quando um crime é previsto antes de acontecer.",
  },
  {
    title: "Blackout 2040",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description: "Quando todas as luzes se apagam, a verdadeira natureza humana se revela em um mundo mergulhado na escuridão.",
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
