import VideoCard from "./VideoCard";
import thumbResenhaJekyll from "@/assets/thumb-resenha-jekyll.png";
import thumbResenhaMetamorfose from "@/assets/thumb-resenha-metamorfose.png";
import thumbResenhaRevolucaoBichos from "@/assets/thumb-resenha-revolucao-bichos.png";
import thumbResenhaDorianGray from "@/assets/thumb-resenha-dorian-gray.png";
import thumbResenha1984 from "@/assets/thumb-resenha-1984.png";
import thumbResenhaAdmiravelMundoNovo from "@/assets/thumb-resenha-admiravel-mundo-novo.png";
import thumbResenhaIracema from "@/assets/thumb-resenha-iracema.png";
import thumbResenhaFrankenstein from "@/assets/thumb-resenha-frankenstein.png";
import thumbResenhaHamlet from "@/assets/thumb-resenha-hamlet.png";
import thumbResenhaDracula from "@/assets/thumb-resenha-dracula.png";
import thumbResenhaIlhaTesouro from "@/assets/thumb-resenha-ilha-tesouro.png";
import thumbResenhaNaoSobrouNenhum from "@/assets/thumb-resenha-nao-sobrou-nenhum.png";
import thumbResenhaViagensGulliver from "@/assets/thumb-resenha-viagens-gulliver.png";
import thumbResenhaCrimeCastigo from "@/assets/thumb-resenha-crime-castigo.png";
import thumbResenhaVoltaMundo80Dias from "@/assets/thumb-resenha-volta-mundo-80-dias.png";
import thumbResenhaAlice from "@/assets/thumb-resenha-alice.png";
import thumbResenhaHobbit from "@/assets/thumb-resenha-hobbit.png";
import thumbResenhaDonQuixote from "@/assets/thumb-resenha-don-quixote.png";
import thumbResenhaEuRobo from "@/assets/thumb-resenha-eu-robo.png";
import thumbResenhaOsMiseraveis from "@/assets/thumb-resenha-os-miseraveis.png";
import thumbResenhaMobyDick from "@/assets/thumb-resenha-moby-dick.png";
import thumbResenhaBrasCubas from "@/assets/thumb-resenha-bras-cubas.png";
import thumbResenhaOCortico from "@/assets/thumb-resenha-o-cortico.png";
import thumbResenhaDomCasmurro from "@/assets/thumb-resenha-dom-casmurro.png";
import thumbResenhaVidasSecas from "@/assets/thumb-resenha-vidas-secas.png";
import thumbResenhaOliverTwist from "@/assets/thumb-resenha-oliver-twist.png";
import thumbResenhaOdisseia from "@/assets/thumb-resenha-odisseia.png";
import thumbResenhaPequenoPrincipe from "@/assets/thumb-resenha-pequeno-principe.png";
import thumbResenhaRomeuJulieta from "@/assets/thumb-resenha-romeu-julieta.png";
import thumbResenhaRobinsonCrusoe from "@/assets/thumb-resenha-robinson-crusoe.png";
import thumbResenhaFausto from "@/assets/thumb-resenha-fausto.png";
import thumbResenhaEnsaioCegueira from "@/assets/thumb-resenha-ensaio-cegueira.png";
import thumbResenhaVelhoMar from "@/assets/thumb-resenha-velho-e-o-mar.png";

const videos = [
  {
    title: "Resenha do Clássico: O médico e o monstro de Louis Stevenson",
    thumbnail: thumbResenhaJekyll,
    duration: "12:34",
    category: "Resenha",
    url: "https://youtu.be/pzSPEXzLino?si=GsxS3gs8R5E4t70z",
  },
  {
    title: "Resenha do Clássico: A Metamorfose de Franz Kafka",
    thumbnail: thumbResenhaMetamorfose,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Revolução dos Bichos de George Orwell",
    thumbnail: thumbResenhaRevolucaoBichos,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Iracema de José de Alencar",
    thumbnail: thumbResenhaIracema,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Admirável Mundo Novo de Aldous Huxley",
    thumbnail: thumbResenhaAdmiravelMundoNovo,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Frankenstein de Mary Shelley",
    thumbnail: thumbResenhaFrankenstein,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: O Retrato de Dorian Gray de Oscar Wilde",
    thumbnail: thumbResenhaDorianGray,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: 1984 de George Orwell",
    thumbnail: thumbResenha1984,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Hamlet de William Shakespeare",
    thumbnail: thumbResenhaHamlet,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Drácula de Bram Stoker",
    thumbnail: thumbResenhaDracula,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: A Ilha do Tesouro de Robert Louis Stevenson",
    thumbnail: thumbResenhaIlhaTesouro,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: As Viagens de Gulliver de Jonathan Swift",
    thumbnail: thumbResenhaViagensGulliver,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Crime e Castigo de Fiódor Dostoiévski",
    thumbnail: thumbResenhaCrimeCastigo,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: A Volta ao Mundo em 80 Dias de Júlio Verne",
    thumbnail: thumbResenhaVoltaMundo80Dias,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Alice no País das Maravilhas de Lewis Carroll",
    thumbnail: thumbResenhaAlice,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: E Não Sobrou Nenhum de Agatha Christie",
    thumbnail: thumbResenhaNaoSobrouNenhum,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: O Hobbit de J.R.R. Tolkien",
    thumbnail: thumbResenhaHobbit,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Don Quixote de Miguel de Cervantes",
    thumbnail: thumbResenhaDonQuixote,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Eu, Robô de Isaac Asimov",
    thumbnail: thumbResenhaEuRobo,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Os Miseráveis de Victor Hugo",
    thumbnail: thumbResenhaOsMiseraveis,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Moby Dick de Herman Melville",
    thumbnail: thumbResenhaMobyDick,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Memórias Póstumas de Brás Cubas de Machado de Assis",
    thumbnail: thumbResenhaBrasCubas,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: O Cortiço de Aluísio Azevedo",
    thumbnail: thumbResenhaOCortico,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Dom Casmurro de Machado de Assis",
    thumbnail: thumbResenhaDomCasmurro,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Vidas Secas de Graciliano Ramos",
    thumbnail: thumbResenhaVidasSecas,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Oliver Twist de Charles Dickens",
    thumbnail: thumbResenhaOliverTwist,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: A Odisseia de Homero",
    thumbnail: thumbResenhaOdisseia,
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: O Pequeno Príncipe de Antoine de Saint-Exupéry",
    thumbnail: thumbResenhaPequenoPrincipe,
    duration: "Em breve",
    category: "Resenha",
  },
];

const VideoSection = () => {
  return (
    <section id="resenhas" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Canal Literário
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vídeo Resenhas
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Assista resenhas dos meus livros e de outras obras que marcaram minha jornada literária.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
