import VideoCard from "./VideoCard";
import thumbResenhaJekyll from "@/assets/thumb-resenha-jekyll.png";

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
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=640&h=360&fit=crop",
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: Revolução dos Bichos de George Orwell",
    thumbnail: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=640&h=360&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=640&h=360&fit=crop",
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
    thumbnail: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=640&h=360&fit=crop",
    duration: "Em breve",
    category: "Resenha",
  },
  {
    title: "Resenha do Clássico: 1984 de George Orwell",
    thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=640&h=360&fit=crop",
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
