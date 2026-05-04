import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end">
      <img
        src={heroImage}
        alt="Estante aconchegante de livros — Blog Letras e Páginas"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-warm-overlay" />
      <div className="relative container mx-auto px-6 pb-24 pt-40">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-body text-base md:text-lg uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Blog Literário
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gradient-warm">
            Letras & Páginas
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
            Livros em PDF grátis, edições especiais dos clássicos e e-books autorais de
            Rafael S. L. Aguiar — autor, editor, curador e pesquisador literário.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#livros"
              className="inline-flex items-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Explorar Livros
            </a>
            <a
              href="#resenhas"
              className="inline-flex items-center px-8 py-3.5 rounded-lg border border-border text-foreground font-body text-sm font-medium hover:bg-secondary transition-all"
            >
              Ver Resenhas
            </a>
          </div>
        </div>
        <a
          href="#livros"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-7 h-7" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
