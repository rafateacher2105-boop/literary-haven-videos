import { BookOpen, Library, Menu, X, Heart, ShoppingBag, Image, FileText, User, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClassicsModal from "./ClassicsModal";
import SupportAuthorModal from "./SupportAuthorModal";
import UpdatesHistoryButton from "./UpdatesHistoryButton";
import SearchDialog from "./SearchDialog";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [classicsOpen, setClassicsOpen] = useState(false);
  const [classicsDefaultTab, setClassicsDefaultTab] = useState("classicos");
  const [supportOpen, setSupportOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Atalho Ctrl/Cmd+K abre a busca
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Meus Livros", href: "#livros" },
    { label: "Vídeo Resenhas", href: "#resenhas" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <BookOpen className="w-7 h-7 text-primary transition-transform group-hover:rotate-[-8deg]" />
          <span className="font-display text-xl font-semibold text-foreground">
            Letras & Páginas
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setClassicsDefaultTab("classicos"); setClassicsOpen(true); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Library className="w-4 h-4" />
            Clássicos
          </button>
          <button
            onClick={() => setSupportOpen(true)}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Heart className="w-4 h-4" />
            Apoie o Autor
          </button>
          <button
            onClick={() => navigate("/indicacoes")}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Minhas Indicações
          </button>
          <button
            onClick={() => navigate("/infograficos")}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Image className="w-4 h-4" />
            Infográficos
          </button>
          <button
            onClick={() => navigate("/autor/rafael-s-l-aguiar")}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="w-4 h-4" />
            Autor
          </button>
          <button
            onClick={() => { setClassicsDefaultTab("artigos"); setClassicsOpen(true); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            Artigos
          </button>
        </nav>

        {/* Desktop history bell (next to nav) */}
        <div className="hidden md:flex items-center ml-2">
          <UpdatesHistoryButton variant="icon" />
        </div>

        {/* Mobile actions: history bell + menu toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <UpdatesHistoryButton variant="icon" onNavigate={() => setMenuOpen(false)} />
          <button
            className="text-foreground p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setClassicsDefaultTab("classicos"); setClassicsOpen(true); setMenuOpen(false); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Library className="w-4 h-4" />
            Clássicos
          </button>
          <button
            onClick={() => { setSupportOpen(true); setMenuOpen(false); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Heart className="w-4 h-4" />
            Apoie o Autor
          </button>
          <button
            onClick={() => { navigate("/indicacoes"); setMenuOpen(false); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Minhas Indicações
          </button>
          <button
            onClick={() => { navigate("/infograficos"); setMenuOpen(false); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Image className="w-4 h-4" />
            Infográficos
          </button>
          <button
            onClick={() => { navigate("/autor/rafael-s-l-aguiar"); setMenuOpen(false); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="w-4 h-4" />
            Autor
          </button>
          <button
            onClick={() => { setClassicsDefaultTab("artigos"); setClassicsOpen(true); setMenuOpen(false); }}
            className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            Artigos
          </button>
        </nav>
      )}

      <ClassicsModal open={classicsOpen} onOpenChange={setClassicsOpen} defaultTab={classicsDefaultTab} />
      <SupportAuthorModal open={supportOpen} onOpenChange={setSupportOpen} />
    </header>
  );
};

export default Header;
