import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Copy, Check, ShoppingCart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Map of book slugs to their static EPUB files (stored in /public)
const EPUB_FILES: Record<string, string> = {
  "crime-antecipado": "/O_Crime_Antecipado.epub",
  "impacto-2070": "/Impacto_2070.epub",
};

interface PaidDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookTitle: string;
  bookSlug: string;
  price: string;
  onDownload: () => void;
}

type Step = "email" | "payment";

const PIX_KEY = "rafateacher2105@gmail.com";

const PaidDownloadModal = ({ open, onOpenChange, bookTitle, bookSlug, price, onDownload }: PaidDownloadModalProps) => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("book_leads").insert({
        email: email.trim(),
        name: name.trim() || null,
        book_slug: bookSlug,
      });

      if (error) throw error;
      setStep("payment");
    } catch {
      toast.error("Erro ao salvar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyPix = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    toast.success("Chave PIX copiada!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const staticEpub = EPUB_FILES[bookSlug];
    if (staticEpub) {
      // Direct download of the static EPUB file
      const a = document.createElement("a");
      a.href = staticEpub;
      a.download = `${bookTitle}.epub`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      onDownload();
    }
    onOpenChange(false);
    setStep("email");
    setEmail("");
    setName("");
  };

  const handleClose = (value: boolean) => {
    if (!value) {
      setStep("email");
      setEmail("");
      setName("");
    }
    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === "email" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                Adquira o livro completo
              </DialogTitle>
              <DialogDescription className="font-body">
                Informe seu e-mail para adquirir <strong>{bookTitle}</strong> em EPUB por <strong>{price}</strong>.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="paid-name" className="font-body">Nome (opcional)</Label>
                <Input
                  id="paid-name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paid-email" className="font-body">E-mail *</Label>
                <Input
                  id="paid-email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                />
              </div>
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading ? "Enviando..." : "Continuar para pagamento"}
              </Button>
            </form>
          </>
        )}

        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                Pagamento via PIX
              </DialogTitle>
              <DialogDescription className="font-body">
                Faça o pagamento de <strong>{price}</strong> via PIX para receber o livro completo.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <p className="font-display text-3xl font-bold text-primary">{price}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Livro completo em EPUB</p>
              </div>

              <div className="space-y-2">
                <p className="font-body text-sm font-medium text-foreground">
                  Chave PIX (e-mail):
                </p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-muted px-3 py-2 rounded text-sm font-mono break-all">
                    {PIX_KEY}
                  </code>
                  <Button variant="outline" size="icon" onClick={handleCopyPix} title="Copiar chave PIX">
                    {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-3">
                <p className="font-body text-xs text-muted-foreground">
                  Após o pagamento, clique no botão abaixo para baixar o livro. O comprovante pode ser enviado para <strong>{PIX_KEY}</strong>.
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <Button onClick={handleDownload} className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Baixar {bookTitle}
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaidDownloadModal;
