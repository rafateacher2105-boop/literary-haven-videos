import { Star, BookOpen, Eye, Users } from "lucide-react";
import {
  rafaelTestimonials,
  getRafaelStats,
  getBookReach,
  type Testimonial,
} from "@/data/testimonials";

interface ReaderTestimonialsProps {
  authorSlug: string;
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const formatDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
};

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <article className="bg-card border border-border rounded-lg p-5 flex flex-col h-full">
    <div className="flex items-center justify-between gap-2">
      <Stars rating={t.rating} />
      {t.verifiedPurchase && (
        <span className="font-body text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full">
          ✓ Leitor verificado
        </span>
      )}
    </div>
    {t.headline && (
      <h4 className="font-display text-sm font-semibold text-foreground mt-3">
        {t.headline}
      </h4>
    )}
    <p className="font-body text-sm text-foreground leading-relaxed mt-2 mb-4 flex-1">
      “{t.text}”
    </p>
    <div className="border-t border-border pt-3">
      <p className="font-display text-sm font-semibold text-foreground">{t.reader}</p>
      <p className="font-body text-xs text-muted-foreground">{t.role}</p>
      <div className="flex items-center justify-between mt-1">
        <p className="font-body text-xs text-primary">sobre {t.bookTitle}</p>
        {t.datePublished && (
          <time
            dateTime={t.datePublished}
            className="font-body text-[10px] text-muted-foreground"
          >
            {formatDate(t.datePublished)}
          </time>
        )}
      </div>
    </div>
  </article>
);


const ReaderTestimonials = ({ authorSlug }: ReaderTestimonialsProps) => {
  // Por enquanto só temos depoimentos do Rafael; outros autores: nada a renderizar.
  if (authorSlug !== "rafael-s-l-aguiar") return null;

  const stats = getRafaelStats();
  const reach = getBookReach();
  const totalReach = reach.reduce((a, b) => a + b.reach, 0);

  return (
    <section
      aria-label="O que os leitores dizem"
      className="mt-16 mb-16 scroll-mt-20"
    >
      <header className="text-center mb-10">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Avaliações
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          O que os leitores dizem
        </h3>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Depoimentos selecionados e números do catálogo que mostram o alcance da obra.
        </p>
      </header>

      {/* Faixa de estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <Star className="w-5 h-5 fill-primary" />
            <span className="font-display text-2xl font-bold">{stats.averageRating.toFixed(1)}</span>
          </div>
          <p className="font-body text-xs text-muted-foreground">
            Média de {stats.totalRatings} avaliações
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <BookOpen className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="font-display text-2xl font-bold text-foreground">{stats.totalBooks}</p>
          <p className="font-body text-xs text-muted-foreground">livros publicados</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Users className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="font-display text-2xl font-bold text-foreground">
            {stats.totalChapters + stats.totalPoems}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            capítulos & poemas
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <Eye className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="font-display text-2xl font-bold text-foreground">
            {totalReach.toLocaleString("pt-BR")}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            leituras estimadas
          </p>
        </div>
      </div>

      {/* Grid de depoimentos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {rafaelTestimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      {/* Visualizações por livro */}
      <div className="mt-12 max-w-3xl mx-auto bg-card border border-border rounded-lg p-6">
        <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-primary" />
          Alcance por obra
        </h4>
        <ul className="space-y-3">
          {reach
            .slice()
            .sort((a, b) => b.reach - a.reach)
            .map((b) => {
              const max = Math.max(...reach.map((r) => r.reach));
              const pct = (b.reach / max) * 100;
              return (
                <li key={b.title}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-body text-sm text-foreground">{b.title}</span>
                    <span className="font-body text-xs text-muted-foreground">
                      {b.reach.toLocaleString("pt-BR")} leituras
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
        <p className="font-body text-xs text-muted-foreground mt-4 italic">
          * Números estimados a partir do tamanho do catálogo (capítulos e poemas) e das visualizações de prévia.
        </p>
      </div>
    </section>
  );
};

export default ReaderTestimonials;
