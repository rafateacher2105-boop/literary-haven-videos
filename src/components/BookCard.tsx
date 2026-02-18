import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  backcover?: string;
  description: string;
  badge?: string;
  slug?: string;
}

const BookCard = ({ title, author, cover, backcover, description, badge, slug }: BookCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div
        className="relative aspect-[2/3] overflow-hidden cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => backcover && setFlipped(!flipped)}
      >
        <div
          className="w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front cover */}
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
            <img
              src={cover}
              alt={`Capa do livro ${title}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {badge && (
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-body px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
            {backcover && (
              <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs font-body px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Clique para virar
              </span>
            )}
          </div>

          {/* Back cover */}
          {backcover && (
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <img
                src={backcover}
                alt={`Contracapa do livro ${title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs font-body px-2 py-1 rounded backdrop-blur-sm">
                Clique para voltar
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-3">{author}</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-5">
          {description}
        </p>
        {slug && (
          <div className="mt-4 flex gap-2">
            <Link to={`/livro/${slug}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Ler online
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
