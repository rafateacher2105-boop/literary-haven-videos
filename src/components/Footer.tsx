import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">
              Letras & Páginas
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Letras & Páginas. Feito com amor pela literatura.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
