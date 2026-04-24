import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { getRelatedBooks } from "@/data/related-books";

interface RelatedBooksProps {
  currentSlug: string;
}

const RelatedBooks = ({ currentSlug }: RelatedBooksProps) => {
  const related = getRelatedBooks(currentSlug, 3);
  if (related.length === 0) return null;

  return (
    <aside
      aria-label="Livros relacionados"
      className="mt-16 max-w-2xl mx-auto bg-card border border-border rounded-lg p-6"
    >
      <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        Continue explorando — Livros relacionados
      </h3>
      <ul className="space-y-2">
        {related.map((b) => (
          <li key={b.slug}>
            <Link
              to={`/livro/${b.slug}`}
              className="font-body text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              {b.title}
              <span className="font-body text-xs text-muted-foreground ml-2">
                · {b.theme}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedBooks;
