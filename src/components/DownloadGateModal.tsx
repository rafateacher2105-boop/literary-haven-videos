import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Heart, Download, Copy, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DownloadGateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookTitle: string;
  bookSlug: string;
  onDownload: () => void;
}

type Step = "email" | "donation";

const PIX_KEY = "rafateacher2105@gmail.com";

const DownloadGateModal = ({ open, onOpenChange, bookTitle, bookSlug, onDownload }: DownloadGateModalProps) => {
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
      setStep("donation");
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
    onDownload();
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
                <Mail className="w-5 h-5 text-primary" />
                Acesse o download gratuito
              </DialogTitle>
              <DialogDescription className="font-body">
                Informe seu e-mail para baixar <strong>{bookTitle}</strong> gratuitamente.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body">Nome (opcional)</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                />
              </div>
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading ? "Enviando..." : "Continuar"}
              </Button>
            </form>
          </>
        )}

        {step === "donation" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Apoie este projeto
              </DialogTitle>
              <DialogDescription className="font-body">
                Seu apoio é voluntário e nos ajuda a continuar criando conteúdo de qualidade.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                <p className="font-body text-sm font-medium text-foreground">
                  Valores sugeridos:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-background rounded-md p-3 border border-border text-center">
                    <p className="font-display text-lg font-bold text-primary">R$ 4,00</p>
                    <p className="font-body text-xs text-muted-foreground">libera 1 livro</p>
                  </div>
                  <div className="bg-background rounded-md p-3 border border-primary/50 text-center ring-1 ring-primary/20">
                    <p className="font-display text-lg font-bold text-primary">R$ 10,00</p>
                    <p className="font-body text-xs text-muted-foreground">libera 3 livros</p>
                  </div>
                </div>
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
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <Button onClick={handleDownload} className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Baixar {bookTitle}
                </Button>
                <p className="font-body text-xs text-center text-muted-foreground">
                  A doação é voluntária. Clique acima para baixar o livro.
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DownloadGateModal;
