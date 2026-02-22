import { Download, Library } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ClassicBook {
  title: string;
  author: string;
  file?: string; // path to epub in /public, added later
}

const classicBooks: ClassicBook[] = [
  { title: "A Divina Comédia", author: "Dante Alighieri" },
  { title: "As Viagens de Gulliver", author: "Jonathan Swift" },
  { title: "A Ilha Misteriosa", author: "Júlio Verne" },
  { title: "Viagem ao Centro da Terra", author: "Júlio Verne" },
  { title: "A Volta ao Mundo em 80 Dias", author: "Júlio Verne" },
  { title: "Frankenstein", author: "Mary Shelley" },
  { title: "Vinte Mil Léguas Submarinas", author: "Júlio Verne" },
  { title: "Drácula", author: "Bram Stoker" },
  { title: "O Retrato de Dorian Gray", author: "Oscar Wilde" },
  { title: "Os Lusíadas", author: "Luís de Camões" },
  { title: "Hamlet", author: "William Shakespeare" },
  { title: "Romeu e Julieta", author: "William Shakespeare" },
  { title: "A Ilha do Tesouro", author: "Robert L. Stevenson" },
  { title: "Iracema", author: "José de Alencar" },
  { title: "Dom Casmurro", author: "Machado de Assis" },
  { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis" },
  { title: "O Cortiço", author: "Aluísio Azevedo" },
  { title: "Memórias de um Sargento de Milícias", author: "Manuel A. de Almeida" },
  { title: "Papéis Avulsos", author: "Machado de Assis" },
];

// Generate a warm color based on index for placeholder covers
const coverColors = [
  "from-[hsl(15,60%,32%)] to-[hsl(38,70%,50%)]",
  "from-[hsl(350,45%,30%)] to-[hsl(15,60%,42%)]",
  "from-[hsl(24,15%,18%)] to-[hsl(38,50%,40%)]",
  "from-[hsl(200,40%,25%)] to-[hsl(200,30%,45%)]",
  "from-[hsl(150,30%,25%)] to-[hsl(150,20%,40%)]",
  "from-[hsl(280,30%,28%)] to-[hsl(280,25%,45%)]",
];

interface ClassicsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClassicsModal = ({ open, onOpenChange }: ClassicsModalProps) => {
  const handleDownload = (book: ClassicBook) => {
    if (book.file) {
      const a = document.createElement("a");
      a.href = book.file;
      a.download = "";
      a.click();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="flex items-center gap-2 font-display text-2xl">
            <Library className="w-6 h-6 text-primary" />
            Clássicos da Literatura
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Obras de domínio público disponíveis para download gratuito em EPUB.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="px-6 pb-6 max-h-[65vh]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
            {classicBooks.map((book, idx) => {
              const gradient = coverColors[idx % coverColors.length];
              return (
                <div
                  key={idx}
                  className="group flex flex-col rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  {/* Placeholder cover */}
                  <div
                    className={`aspect-[2/3] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-3 text-center`}
                  >
                    <span className="text-[hsl(35,40%,95%)] font-display text-sm font-semibold leading-tight drop-shadow-md">
                      {book.title}
                    </span>
                    <span className="text-[hsl(35,40%,95%)]/70 font-body text-[10px] mt-1.5">
                      {book.author}
                    </span>
                  </div>

                  {/* Info + download */}
                  <div className="p-3 flex flex-col gap-2 flex-1">
                    <h4 className="font-display text-xs font-semibold text-foreground leading-tight line-clamp-2">
                      {book.title}
                    </h4>
                    <p className="font-body text-[10px] text-muted-foreground">
                      {book.author}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-auto gap-1.5 text-xs"
                      disabled={!book.file}
                      onClick={() => handleDownload(book)}
                    >
                      <Download className="w-3 h-3" />
                      {book.file ? "Baixar EPUB" : "Em breve"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ClassicsModal;
