import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Coffee, Copy, Check, Heart } from "lucide-react";
import { toast } from "sonner";

const PIX_KEY = "rafateacher2105@gmail.com";

interface SupportAuthorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SupportAuthorModal = ({ open, onOpenChange }: SupportAuthorModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    toast.success("Chave PIX copiada!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Apoie o Autor
          </DialogTitle>
          <DialogDescription className="font-body">
            Seu apoio faz a diferença! Pague um café e ajude a manter este projeto literário vivo.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div className="bg-primary/10 rounded-lg p-6 text-center space-y-2">
            <Coffee className="w-10 h-10 text-primary mx-auto" />
            <p className="font-display text-3xl font-bold text-primary">R$ 5,00</p>
            <p className="font-body text-sm text-muted-foreground">Pague um café ☕</p>
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

          <Button onClick={handleCopyPix} className="w-full gap-2">
            <Coffee className="w-4 h-4" />
            {copied ? "Chave copiada!" : "Copiar chave PIX"}
          </Button>

          <p className="font-body text-xs text-center text-muted-foreground">
            Obrigado pelo seu apoio! Cada café nos ajuda a continuar escrevendo. ❤️
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportAuthorModal;
