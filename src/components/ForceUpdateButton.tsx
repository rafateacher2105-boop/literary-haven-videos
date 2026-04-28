import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ForceUpdateButton = () => {
  const [loading, setLoading] = useState(false);

  const handleForceUpdate = async () => {
    setLoading(true);
    try {
      // 1. Desregistra todos os Service Workers
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((r) => r.unregister()));
      }

      // 2. Limpa todos os caches (PWA / Workbox)
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }

      // 3. Limpa storage local que poderia segurar versão antiga
      try {
        sessionStorage.clear();
      } catch {}

      toast({
        title: "Cache limpo!",
        description: "Recarregando a versão mais recente do site…",
      });

      // 4. Recarrega forçando bypass de cache HTTP
      setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.set("_v", Date.now().toString());
        window.location.replace(url.toString());
      }, 600);
    } catch (err) {
      console.error("Erro ao forçar atualização:", err);
      toast({
        title: "Não foi possível limpar tudo",
        description: "Tente Ctrl+Shift+R como alternativa.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleForceUpdate}
      disabled={loading}
      className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
      title="Limpa cache do PWA e recarrega a versão mais nova do site"
    >
      <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
      {loading ? "Atualizando…" : "Atualizar site"}
    </button>
  );
};

export default ForceUpdateButton;
