import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Indicacoes = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 pt-28 pb-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Minhas Indicações
        </h1>
        <p className="font-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Livros que recomendo para você. Clique na capa para comprar diretamente na Amazon.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Livros serão adicionados aqui futuramente */}
        </div>

        <p className="text-center text-muted-foreground font-body text-sm mt-16 italic">
          Em breve, mais indicações de leitura!
        </p>
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
