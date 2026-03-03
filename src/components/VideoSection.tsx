import VideoCard from "./VideoCard";
import thumbResenhaJekyll from "@/assets/thumb-resenha-jekyll.png";
import thumbResenhaMetamorfose from "@/assets/thumb-resenha-metamorfose.png";
import thumbResenhaRevolucaoBichos from "@/assets/thumb-resenha-revolucao-bichos.png";
import thumbResenhaDorianGray from "@/assets/thumb-resenha-dorian-gray.png";
import thumbResenha1984 from "@/assets/thumb-resenha-1984.png";
import thumbResenhaAdmiravelMundoNovo from "@/assets/thumb-resenha-admiravel-mundo-novo.png";

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
    thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=640&h=360&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=640&h=360&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=640&h=360&fit=crop",
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
