import { Link } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { getRelatedBooks } from "@/data/related-books";
import { bookToAuthor, authors } from "@/data/authors";

interface RelatedBooksProps {
  currentSlug: string;
}

const RelatedBooks = ({ currentSlug }: RelatedBooksProps) => {
  const related = getRelatedBooks(currentSlug, 3);
  const authorSlug = bookToAuthor[currentSlug];
  const author = authorSlug ? authors[authorSlug] : undefined;

  if (related.length === 0 && !author) return null;

  return (
    <aside
      aria-label="Livros relacionados"
      className="mt-16 max-w-2xl mx-auto bg-card border border-border rounded-lg p-6"
    >
      {related.length > 0 && (
        <>
          <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Continue explorando — Livros relacionados
          </h3>
          <ul className="space-y-2 mb-6">
            {related.map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/livro/${b.slug}`}
                  className="font-body text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {b.title}
                  <span className="font-body text-xs text-muted-foreground ml-2">· {b.theme}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {author && (
        <div className="pt-4 border-t border-border">
          <Link
            to={`/autor/${author.slug}`}
            className="font-body text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <User className="w-4 h-4 text-primary" />
            Ver todas as obras de <span className="font-semibold">{author.name}</span>
          </Link>
        </div>
      )}
    </aside>
  );
};

export default RelatedBooks;
