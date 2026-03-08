import { Download, Library, Mail, Skull, BookOpenText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";
import coverViagensGulliver from "@/assets/cover-viagens-gulliver.avif";
import coverDivinaComedia from "@/assets/cover-divina-comedia.jpg";
import coverViagemCentroTerra from "@/assets/cover-viagem-centro-terra.jpg";
import coverVoltaMundo from "@/assets/cover-volta-mundo-80-dias.jpg";
import coverFrankenstein from "@/assets/cover-frankenstein.jpg";
import coverDracula from "@/assets/cover-dracula.jpg";
import coverDorianGray from "@/assets/cover-dorian-gray.jpg";
import coverLusiadas from "@/assets/cover-lusiadas.jpg";
import coverHamlet from "@/assets/cover-hamlet.jpg";
import coverRomeuJulieta from "@/assets/cover-romeu-julieta.jpg";
import coverIlhaTesouro from "@/assets/cover-ilha-tesouro.jpg";
import coverIlhaMisteriosa from "@/assets/cover-ilha-misteriosa.jpg";
import coverVinteMilLeguas from "@/assets/cover-vinte-mil-leguas.jpg";
import coverNuvemPurpura from "@/assets/cover-nuvem-purpura.jpg";
import coverTacaoFerro from "@/assets/cover-tacao-ferro.jpg";
import coverMaquinaParou from "@/assets/cover-maquina-parou.jpg";
import coverNos from "@/assets/cover-nos.jpg";
import coverUltimoHomem from "@/assets/cover-ultimo-homem.jpg";
import coverRur from "@/assets/cover-rur.jpg";
import coverParisSeculoXX from "@/assets/cover-paris-seculo-xx.jpg";
import coverKallocain from "@/assets/cover-kallocain.jpg";
import coverGuerraSalamandras from "@/assets/cover-guerra-salamandras.jpg";
import coverMaquinaTempo from "@/assets/cover-maquina-tempo.jpg";
import cover1984 from "@/assets/cover-1984.jpg";
import coverRevolucaoBichos from "@/assets/cover-revolucao-bichos.jpg";
import coverIlhaDrMoreau from "@/assets/cover-ilha-dr-moreau.png";
import coverHomemInvisivel from "@/assets/cover-homem-invisivel.png";
import coverMaquinaTempoClassic from "@/assets/cover-maquina-tempo-classic.png";
import coverOCortico from "@/assets/cover-o-cortico.png";
import coverIracema from "@/assets/cover-iracema.png";
import coverBrasCubas from "@/assets/cover-bras-cubas.png";
import coverSargentoMilicias from "@/assets/cover-sargento-milicias.png";
import coverDomCasmurro from "@/assets/cover-dom-casmurro.png";
import coverContosPoe from "@/assets/cover-contos-poe.jpg";
import coverContosGrimm from "@/assets/cover-contos-grimm.jpg";
import coverContosAndersen from "@/assets/cover-contos-andersen.jpg";
import coverContosPerrault from "@/assets/cover-contos-perrault.jpg";
import coverLendasIndigenas from "@/assets/cover-lendas-indigenas.jpg";
import coverLendasAfricanas from "@/assets/cover-lendas-africanas.jpg";
import coverLendasUrbanas from "@/assets/cover-lendas-urbanas.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClassicBook {
  title: string;
  author: string;
  year?: string;
  description?: string;
  file?: string;
  cover?: string;
}

const classicBooks: ClassicBook[] = [
  { title: "A Divina Comédia", author: "Dante Alighieri", cover: coverDivinaComedia, file: "/divina-comedia.pdf" },
  { title: "As Viagens de Gulliver", author: "Jonathan Swift", cover: coverViagensGulliver, file: "/as-viagens-de-gulliver.pdf" },
  { title: "A Ilha Misteriosa", author: "Júlio Verne", cover: coverIlhaMisteriosa, file: "/a-ilha-misteriosa.pdf" },
  { title: "Viagem ao Centro da Terra", author: "Júlio Verne", cover: coverViagemCentroTerra, file: "/viagem-centro-terra.pdf" },
  { title: "A Volta ao Mundo em 80 Dias", author: "Júlio Verne", cover: coverVoltaMundo, file: "/volta-mundo-80-dias.pdf" },
  { title: "Frankenstein", author: "Mary Shelley", cover: coverFrankenstein, file: "/frankenstein.pdf" },
  { title: "Vinte Mil Léguas Submarinas", author: "Júlio Verne", cover: coverVinteMilLeguas, file: "/vinte-mil-leguas-submarinas.pdf" },
  { title: "Drácula", author: "Bram Stoker", cover: coverDracula, file: "/dracula.pdf" },
  { title: "O Retrato de Dorian Gray", author: "Oscar Wilde", cover: coverDorianGray, file: "/retrato-dorian-gray.pdf" },
  { title: "Os Lusíadas", author: "Luís de Camões", cover: coverLusiadas, file: "/os-lusiadas.pdf" },
  { title: "Hamlet", author: "William Shakespeare", cover: coverHamlet, file: "/hamlet.pdf" },
  { title: "Romeu e Julieta", author: "William Shakespeare", cover: coverRomeuJulieta, file: "/romeu-e-julieta.pdf" },
  { title: "A Ilha do Tesouro", author: "Robert L. Stevenson", cover: coverIlhaTesouro, file: "/a-ilha-do-tesouro.pdf" },
  { title: "Alice no País das Maravilhas", author: "Lewis Carroll", file: "/alice-pais-maravilhas.pdf" },
  { title: "Iracema", author: "José de Alencar", cover: coverIracema, file: "/iracema.pdf" },
  { title: "Dom Casmurro", author: "Machado de Assis", file: "/dom-casmurro.pdf" },
  { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis", file: "/memorias-postumas-bras-cubas.pdf" },
  { title: "O Cortiço", author: "Aluísio Azevedo", file: "/o-cortico.pdf" },
  { title: "Memórias de um Sargento de Milícias", author: "Manuel A. de Almeida", file: "/memorias-sargento-milicias.pdf" },
  { title: "Papéis Avulsos", author: "Machado de Assis", file: "/papeis-avulsos.pdf" },
  { title: "A Máquina do Tempo", author: "H.G. Wells", file: "/a-maquina-do-tempo.pdf" },
  { title: "A Guerra dos Mundos", author: "H.G. Wells", file: "/a-guerra-dos-mundos.pdf" },
  { title: "O Homem Invisível", author: "H.G. Wells", file: "/o-homem-invisivel.pdf" },
  { title: "A Ilha do Doutor Moreau", author: "H.G. Wells", file: "/a-ilha-do-dr-moreau.pdf" },
  { title: "Os Primeiros Homens na Lua", author: "H.G. Wells", file: "/os-primeiros-homens-na-lua.pdf" },
  { title: "Admirável Mundo Novo", author: "Aldous Huxley", file: "/admiravel-mundo-novo.pdf" },
  { title: "Orgulho e Preconceito", author: "Jane Austen", file: "/orgulho-e-preconceito.pdf" },
  { title: "Razão e Sensibilidade", author: "Jane Austen", file: "/razao-e-sensibilidade.pdf" },
  { title: "Crime e Castigo", author: "Fiódor Dostoiévski", file: "/crime-e-castigo.pdf" },
  { title: "Os Irmãos Karamazov", author: "Fiódor Dostoiévski", file: "/os-irmaos-karamazov.pdf" },
  { title: "O Idiota", author: "Fiódor Dostoiévski", file: "/o-idiota.pdf" },
  { title: "O Livro da Selva", author: "Rudyard Kipling", file: "/livro-da-selva.pdf" },
  { title: "Peter Pan", author: "J.M. Barrie", file: "/peter-pan.pdf" },
  { title: "Pinóquio", author: "Carlo Collodi", file: "/pinoquio.pdf" },
  { title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", file: "/o-pequeno-principe.pdf" },
  { title: "O Médico e o Monstro", author: "Robert L. Stevenson", file: "/o-medico-e-o-monstro.pdf" },
  { title: "A Metamorfose", author: "Franz Kafka", file: "/a-metamorfose.pdf" },
  { title: "A Odisseia", author: "Homero", file: "/a-odisseia.pdf" },
  { title: "Dom Quixote", author: "Miguel de Cervantes", file: "/dom-quixote.pdf" },
  { title: "A Revolução dos Bichos", author: "George Orwell", cover: coverRevolucaoBichos, file: "/revolucao-dos-bichos.pdf" },
  { title: "1984", author: "George Orwell", cover: cover1984, file: "/e-book-1984.pdf" },
];

const talesBooks: ClassicBook[] = [
  { title: "Contos de Poe", author: "Edgar Allan Poe", cover: coverContosPoe, description: "Mestre do terror e do mistério, Poe nos leva a labirintos psicológicos sombrios com contos como 'O Gato Preto', 'O Coração Delator' e 'A Queda da Casa de Usher'." },
  { title: "Contos de Grimm", author: "Irmãos Grimm", cover: coverContosGrimm, description: "A coletânea que definiu os contos de fadas modernos: Branca de Neve, Cinderela, Rapunzel, João e Maria e dezenas de outros clássicos imortais." },
  { title: "Contos de Andersen", author: "Hans Christian Andersen", cover: coverContosAndersen, description: "O Patinho Feio, A Pequena Sereia, A Rainha da Neve — histórias encantadoras que misturam fantasia, melancolia e lições atemporais." },
  { title: "Contos de Perrout", author: "Charles Perrault", cover: coverContosPerrault, description: "O Gato de Botas, A Bela Adormecida, Chapeuzinho Vermelho — os contos que inauguraram a tradição literária dos contos de fadas na Europa." },
  { title: "Lendas Indígenas", author: "Tradição Oral", cover: coverLendasIndigenas, description: "Narrativas ancestrais dos povos originários do Brasil: o Curupira, o Boto, a Iara, o Saci-Pererê e outras histórias que explicam o mundo pela sabedoria da floresta." },
  { title: "Lendas Africanas", author: "Tradição Oral", cover: coverLendasAfricanas, description: "Contos que atravessaram o Atlântico: Anansi, a aranha sábia, os orixás, e narrativas que celebram a riqueza cultural e espiritual do continente africano." },
  { title: "Lendas Urbanas", author: "Folclore Contemporâneo", cover: coverLendasUrbanas, description: "A Loira do Banheiro, o Homem do Saco, a Maria Sangrenta — histórias que nascem nas cidades e se espalham de boca em boca, alimentando nossos medos modernos." },
];

const talesColors = [
  "from-[hsl(270,35%,20%)] to-[hsl(280,40%,35%)]",
  "from-[hsl(140,30%,20%)] to-[hsl(120,35%,35%)]",
  "from-[hsl(200,40%,22%)] to-[hsl(210,35%,38%)]",
  "from-[hsl(30,50%,22%)] to-[hsl(40,45%,38%)]",
  "from-[hsl(100,35%,18%)] to-[hsl(80,40%,32%)]",
];

const dystopiaBooks: ClassicBook[] = [
  { title: "O Cromossomo de Ferro (O Tacão de Ferro)", author: "Jack London", year: "1908", description: "Uma das primeiras distopias modernas. Retrata a ascensão de uma oligarquia tirânica nos EUA que esmaga a liberdade individual.", cover: coverTacaoFerro },
  { title: "A Máquina Parou", author: "E.M. Forster", year: "1909", description: "A humanidade vive no subsolo, isolada em quartos individuais, comunicando-se apenas por telas. Todas as necessidades são supridas por 'A Máquina'.", cover: coverMaquinaParou },
  { title: "Nós", author: "Yevgeny Zamyatin", year: "1924", description: "No 'Estado Único', as paredes são de vidro para que ninguém tenha privacidade. A individualidade é uma doença.", cover: coverNos },
  { title: "O Último Homem", author: "Mary Shelley", year: "1826", description: "O primeiro grande romance pós-apocalíptico. Uma praga imparável varre o mundo no final do século XXI.", cover: coverUltimoHomem },
  { title: "R.U.R. (Robôs Universais de Rossum)", author: "Karel Čapek", year: "1920", description: "A peça onde surgiu o termo 'Robô'. Máquinas orgânicas criadas para servir ganham consciência e decidem exterminar seus criadores.", cover: coverRur },
  { title: "A Nuvem Púrpura", author: "M.P. Shiel", year: "1901", description: "Uma névoa tóxica mata toda a vida na Terra, restando apenas um homem vagando por cidades desertas.", cover: coverNuvemPurpura },
  { title: "Paris no Século XX", author: "Júlio Verne", year: "1863", description: "Uma Paris tecnológica onde a cultura foi assassinada pelo lucro. Poetas e músicos são párias numa sociedade que só valoriza o que pode ser vendido.", cover: coverParisSeculoXX },
  { title: "Kallocain", author: "Karin Boye", year: "1940", description: "Um cientista cria um soro que obriga as pessoas a confessarem seus pensamentos. O Estado passa a punir 'pensamentos proibidos'.", cover: coverKallocain },
  { title: "A Guerra das Salamandras", author: "Karel Čapek", year: "1936", description: "Criaturas marinhas inteligentes armadas pelos humanos acabam explodindo os continentes para criar mais espaço para viver.", cover: coverGuerraSalamandras },
  { title: "A Máquina do Tempo", author: "H.G. Wells", year: "1895", description: "No futuro distante, a humanidade se degenerou em duas raças: os Eloi e os Morlocks.", cover: coverMaquinaTempo },
];

const classicColors = [
  "from-[hsl(15,60%,32%)] to-[hsl(38,70%,50%)]",
  "from-[hsl(350,45%,30%)] to-[hsl(15,60%,42%)]",
  "from-[hsl(24,15%,18%)] to-[hsl(38,50%,40%)]",
  "from-[hsl(200,40%,25%)] to-[hsl(200,30%,45%)]",
  "from-[hsl(150,30%,25%)] to-[hsl(150,20%,40%)]",
  "from-[hsl(280,30%,28%)] to-[hsl(280,25%,45%)]",
];

const dystopiaColors = [
  "from-[hsl(0,50%,15%)] to-[hsl(0,40%,30%)]",
  "from-[hsl(270,40%,15%)] to-[hsl(300,30%,28%)]",
  "from-[hsl(210,30%,12%)] to-[hsl(210,40%,25%)]",
  "from-[hsl(30,20%,10%)] to-[hsl(15,40%,22%)]",
  "from-[hsl(180,20%,12%)] to-[hsl(160,30%,22%)]",
];

interface ClassicsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookGrid = ({ books, colors, onRequestDownload }: { books: ClassicBook[]; colors: string[]; onRequestDownload: (book: ClassicBook) => void }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
      {books.map((book, idx) => {
        const gradient = colors[idx % colors.length];
        return (
          <div
            key={idx}
            className="group flex flex-col rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
          >
            {book.cover ? (
              <div className="aspect-[2/3] overflow-hidden">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
              </div>
            ) : (
            <div
              className={`aspect-[2/3] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-3 text-center`}
            >
              <span className="text-[hsl(35,40%,95%)] font-display text-sm font-semibold leading-tight drop-shadow-md">
                {book.title}
              </span>
              <span className="text-[hsl(35,40%,95%)]/70 font-body text-[10px] mt-1.5">
                {book.author}
              </span>
              {book.year && (
                <span className="text-[hsl(35,40%,95%)]/50 font-body text-[9px] mt-1">
                  ({book.year})
                </span>
              )}
            </div>
            )}

            <div className="p-3 flex flex-col gap-2 flex-1">
              <h4 className="font-display text-xs font-semibold text-foreground leading-tight line-clamp-2">
                {book.title}
              </h4>
              <p className="font-body text-[10px] text-muted-foreground">
                {book.author}
              </p>
              {book.description && (
                <p className="font-body text-[10px] text-muted-foreground/80 line-clamp-3 leading-relaxed">
                  {book.description}
                </p>
              )}
              {book.file ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto gap-1.5 text-xs"
                  asChild
                >
                  <a href={book.file} download>
                    <Download className="w-3 h-3" />
                    Download grátis
                  </a>
                </Button>
              ) : (
                <p className="mt-auto font-body text-[10px] text-muted-foreground italic text-center">
                  Em breve
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const LeadCaptureForm = ({ book, onSuccess, onCancel }: { book: ClassicBook; onSuccess: () => void; onCancel: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const slug = book.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      const { error } = await supabase.from("book_leads").insert({
        email: email.trim(),
        name: name.trim() || null,
        book_slug: slug,
      });
      if (error) throw error;
      toast.success("Obrigado! Seu download começará em breve.");
      onSuccess();
    } catch {
      toast.error("Erro ao salvar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onCancel}>
      <div className="bg-card rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl border border-border" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          Download grátis
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Informe seus dados para baixar <strong>{book.title}</strong>.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label className="font-body text-sm font-medium text-foreground">Nome (opcional)</label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
            />
          </div>
          <div className="space-y-1">
            <label className="font-body text-sm font-medium text-foreground">E-mail *</label>
            <input
              type="email"
              required
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
            />
          </div>
          <div className="flex gap-2 pt-1">
            <Button type="button" variant="outline" size="sm" className="flex-1" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit" size="sm" className="flex-1 gap-1.5" disabled={loading}>
              <Download className="w-3 h-3" />
              {loading ? "Enviando..." : "Baixar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ClassicsModal = ({ open, onOpenChange }: ClassicsModalProps) => {
  const [selectedBook, setSelectedBook] = useState<ClassicBook | null>(null);

  const handleDownloadSuccess = () => {
    if (selectedBook?.file) {
      const a = document.createElement("a");
      a.href = selectedBook.file;
      a.download = "";
      a.click();
    }
    setSelectedBook(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="flex items-center gap-2 font-display text-2xl">
            <Library className="w-6 h-6 text-primary" />
            Biblioteca de Domínio Público
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Obras de domínio público disponíveis para download gratuito em EPUB.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="classicos" className="px-6 pb-6">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="classicos" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <Library className="w-4 h-4" />
              Clássicos
            </TabsTrigger>
            <TabsTrigger value="distopias" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <Skull className="w-4 h-4" />
              Distopias
            </TabsTrigger>
            <TabsTrigger value="contos" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <BookOpenText className="w-4 h-4" />
              Contos e Lendas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classicos" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              <BookGrid books={classicBooks} colors={classicColors} onRequestDownload={setSelectedBook} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="distopias" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              <BookGrid books={dystopiaBooks} colors={dystopiaColors} onRequestDownload={setSelectedBook} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="contos" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              <BookGrid books={talesBooks} colors={talesColors} onRequestDownload={setSelectedBook} />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>

      {selectedBook && (
        <LeadCaptureForm
          book={selectedBook}
          onSuccess={handleDownloadSuccess}
          onCancel={() => setSelectedBook(null)}
        />
      )}
    </Dialog>
  );
};

export default ClassicsModal;
