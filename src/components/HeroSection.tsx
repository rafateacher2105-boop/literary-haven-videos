import heroImage from "@/assets/hero-books.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-end">
      <img
        src={heroImage}
        alt="Estante aconchegante de livros"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-warm-overlay" />
      <div className="relative container mx-auto px-6 pb-20 pt-40">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Blog Literário
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gradient-warm">
            Letras & Páginas
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
            Um refúgio para amantes da literatura. Descubra novos mundos através de livros,
            resenhas em vídeo e histórias que transformam.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#livros"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explorar Livros
            </a>
            <a
              href="#resenhas"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-secondary transition-colors"
            >
              Ver Resenhas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
