interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
  badge?: string;
}

const BookCard = ({ title, author, cover, description, badge }: BookCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[2/3] overflow-hidden">
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
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-3">{author}</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
