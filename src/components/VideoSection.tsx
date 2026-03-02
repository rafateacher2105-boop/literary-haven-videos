import VideoCard from "./VideoCard";

const videos = [
  {
    title: "Resenha: 'O Crime Antecipado' — Por que esse livro vai te emocionar",
    thumbnail: "https://img.youtube.com/vi/pzSPEXzLino/maxresdefault.jpg",
    duration: "12:34",
    category: "Meus Livros",
    url: "https://youtu.be/pzSPEXzLino?si=GsxS3gs8R5E4t70z",
    caption: "Resenha do Clássico: O médico e o monstro de Louis Stevenson",
  },
  {
    title: "5 Livros de Literatura Brasileira que Todo Leitor Precisa Conhecer",
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=640&h=360&fit=crop",
    duration: "18:22",
    category: "Resenha",
  },
  {
    title: "Como a Leitura Transformou Minha Vida — Um Relato Pessoal",
    thumbnail: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=640&h=360&fit=crop",
    duration: "15:47",
    category: "Vlog Literário",
  },
  {
    title: "Resenha: 'O Guardião das Palavras' — Bastidores da Criação",
    thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=640&h=360&fit=crop",
    duration: "20:15",
    category: "Meus Livros",
  },
  {
    title: "Top 10 Romances Que Li Este Ano — Recomendações Imperdíveis",
    thumbnail: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=640&h=360&fit=crop",
    duration: "22:08",
    category: "Resenha",
  },
  {
    title: "Dicas Para Escritores Iniciantes — O Que Eu Gostaria de Ter Sabido Antes",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=640&h=360&fit=crop",
    duration: "16:55",
    category: "Dicas",
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
