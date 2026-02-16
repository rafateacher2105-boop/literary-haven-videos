import BookCard from "./BookCard";

const books = [
  {
    title: "Sussurros ao Entardecer",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "Uma jornada poética pelos caminhos da memória, onde cada página revela fragmentos de um passado que insiste em florescer.",
    badge: "Novo",
  },
  {
    title: "O Guardião das Palavras",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    description: "Em um mundo onde as palavras têm poder, um jovem descobre que é o último guardião de uma língua esquecida.",
    badge: "Destaque",
  },
  {
    title: "Cartas Nunca Enviadas",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    description: "Uma coleção de cartas que atravessam décadas, revelando amores, despedidas e reencontros inesperados.",
  },
  {
    title: "Além da Última Página",
    author: "Você",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description: "O que acontece quando um personagem descobre que sua história está sendo escrita por alguém?",
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
