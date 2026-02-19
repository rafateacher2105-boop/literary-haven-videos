import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Download, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadGateModal from "./DownloadGateModal";
import PaidDownloadModal from "./PaidDownloadModal";
import { generateEpub, generateProseEpub } from "@/lib/epub-generator";
import { poesiaDaAlmaInfo, poesiaDaAlmaPoems } from "@/data/poesia-da-alma";
import { poesiaDaNaturezaInfo, poesiaDaNaturezaPoems } from "@/data/poesia-da-natureza";
import { poesiaSocialInfo, poesiaSocialPoems } from "@/data/poesia-social";
import { osAtribuladosInfo, osAtribuladosChapters } from "@/data/os-atribulados";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  backcover?: string;
  description: string;
  badge?: string;
  slug?: string;
  price?: string;
  previewSlug?: string;
}

const booksDataMap: Record<string, { info: any; poems: any[] }> = {
  "poesia-da-alma": { info: poesiaDaAlmaInfo, poems: poesiaDaAlmaPoems },
  "poesia-da-natureza": { info: poesiaDaNaturezaInfo, poems: poesiaDaNaturezaPoems },
  "poesia-social": { info: poesiaSocialInfo, poems: poesiaSocialPoems },
};

const proseDataMap: Record<string, { info: any; chapters: any[] }> = {
  "os-atribulados": { info: osAtribuladosInfo, chapters: osAtribuladosChapters },
};

const BookCard = ({ title, author, cover, backcover, description, badge, slug, price, previewSlug }: BookCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPaidModal, setShowPaidModal] = useState(false);

  const handleDownload = async () => {
    if (slug && booksDataMap[slug]) {
      const { info, poems } = booksDataMap[slug];
      await generateEpub(
        { title: info.title, author: info.author, year: info.year, aboutAuthor: info.aboutAuthor },
        poems
      );
    }
  };

  const handlePaidDownload = async () => {
    const key = previewSlug || slug;
    if (key && proseDataMap[key]) {
      const { info, chapters } = proseDataMap[key];
      await generateProseEpub(
        { title: info.title, author: info.author, year: info.year, aboutAuthor: info.aboutAuthor },
        chapters
      );
    }
  };

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
        {/* Poetry books: read online + free EPUB */}
        {slug && !price && (
          <div className="mt-4 flex gap-2">
            <Link to={`/livro/${slug}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Ler online
              </Button>
            </Link>
            <Button
              variant="default"
              size="sm"
              className="gap-1.5"
              onClick={() => setShowDownloadModal(true)}
            >
              <Download className="w-3.5 h-3.5" />
              EPUB
            </Button>
          </div>
        )}
        {/* Paid books: preview + paid download */}
        {previewSlug && price && (
          <div className="mt-4 flex gap-2">
            <Link to={`/livro/${previewSlug}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Leitura prévia
              </Button>
            </Link>
            <Button
              variant="default"
              size="sm"
              className="gap-1.5"
              onClick={() => setShowPaidModal(true)}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              {price}
            </Button>
          </div>
        )}
        {slug && !price && (
          <DownloadGateModal
            open={showDownloadModal}
            onOpenChange={setShowDownloadModal}
            bookTitle={title}
            bookSlug={slug}
            onDownload={handleDownload}
          />
        )}
        {previewSlug && price && (
          <PaidDownloadModal
            open={showPaidModal}
            onOpenChange={setShowPaidModal}
            bookTitle={title}
            bookSlug={previewSlug}
            price={price}
            onDownload={handlePaidDownload}
          />
        )}
      </div>
    </div>
  );
};

export default BookCard;
