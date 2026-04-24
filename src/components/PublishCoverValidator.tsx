import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, RefreshCw, X } from "lucide-react";

/**
 * Validador de Capas Publicadas
 *
 * Compara as capas carregadas no preview (build atual) com as capas
 * servidas pelo domínio publicado (literary-haven-videos.lovable.app).
 * Avisa quando há divergência — útil antes de publicar uma nova versão.
 *
 * A comparação é feita por hash SHA-256 dos bytes,
 * o que detecta qualquer mudança binária na imagem.
 *
 * As capas devem estar em public/ (não em src/assets/) para manter
 * URLs estáveis entre preview e produção.
 */

const PUBLISHED_ORIGIN = "https://literary-haven-videos.lovable.app";

// Lista de capas a monitorar. Acrescente novas entradas conforme necessário.
const COVERS_TO_CHECK: { label: string; localPath: string }[] = [
  { label: "O Legado de Perseu", localPath: "/cover-perseu.jpg" },
];

type Status = "idle" | "checking" | "match" | "diff" | "error";

interface Result {
  label: string;
  status: Status;
  message?: string;
}

async function sha256(buf: ArrayBuffer): Promise<string> {
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function fetchHash(url: string): Promise<string> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = await res.arrayBuffer();
  return sha256(buf);
}

const PublishCoverValidator = () => {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [running, setRunning] = useState(false);

  // Só roda dentro do preview (não no domínio publicado).
  const isPreview =
    typeof window !== "undefined" &&
    !window.location.hostname.includes("literary-haven-videos.lovable.app");

  const runCheck = async () => {
    setRunning(true);
    const out: Result[] = [];
    for (const cover of COVERS_TO_CHECK) {
      try {
        // As capas devem estar em public/ para URLs estáveis.
        const localUrl = window.location.origin + cover.localPath;
        const localHash = await fetchHash(localUrl);
        const publishedUrl = PUBLISHED_ORIGIN + cover.localPath;
        let publishedHash = "";
        try {
          publishedHash = await fetchHash(publishedUrl);
        } catch (e) {
          out.push({
            label: cover.label,
            status: "diff",
            message: "Capa atualizada no preview ainda não está no ar.",
          });
          continue;
        }
        if (localHash === publishedHash) {
          out.push({ label: cover.label, status: "match", message: "Idêntica ao publicado." });
        } else {
          out.push({
            label: cover.label,
            status: "diff",
            message: "Versão do preview diferente da publicada.",
          });
        }
      } catch (err) {
        out.push({
          label: cover.label,
          status: "error",
          message: err instanceof Error ? err.message : "Falha na verificação",
        });
      }
    }
    setResults(out);
    setRunning(false);
    if (out.some((r) => r.status === "diff")) setOpen(true);
  };

  useEffect(() => {
    if (!isPreview || dismissed) return;
    runCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreview, dismissed]);

  if (!isPreview || dismissed) return null;

  const hasDiff = results.some((r) => r.status === "diff");
  const allMatch = results.length > 0 && results.every((r) => r.status === "match");

  // Botão flutuante minimizado
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 left-4 z-[60] flex items-center gap-2 rounded-full px-3 py-2 text-xs font-body shadow-lg border transition-colors ${
          hasDiff
            ? "bg-destructive text-destructive-foreground border-destructive"
            : allMatch
              ? "bg-primary/10 text-primary border-primary/30"
              : "bg-card text-card-foreground border-border"
        }`}
        aria-label="Validador de capas"
      >
        {hasDiff ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
        Capas: {hasDiff ? "divergência" : allMatch ? "ok" : running ? "verificando…" : "—"}
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-[60] w-80 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/40">
        <span className="font-display text-sm font-semibold text-foreground">
          Validação de Capas
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={runCheck}
            disabled={running}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Reverificar"
          >
            <RefreshCw className={`w-4 h-4 ${running ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Minimizar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
        {results.length === 0 && (
          <p className="text-xs text-muted-foreground font-body">Verificando capas…</p>
        )}
        {results.map((r) => (
          <div key={r.label} className="flex items-start gap-2 text-xs font-body">
            {r.status === "match" ? (
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            ) : r.status === "diff" ? (
              <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
            )}
            <div className="min-w-0">
              <p className="font-medium text-foreground">{r.label}</p>
              <p className="text-muted-foreground">{r.message}</p>
            </div>
          </div>
        ))}
        {hasDiff && (
          <div className="mt-2 p-2 rounded bg-destructive/10 border border-destructive/30">
            <p className="text-xs text-destructive font-body">
              Há capas no preview que ainda não foram publicadas. Clique em <strong>Publish → Update</strong> para sincronizar o site ao vivo.
            </p>
          </div>
        )}
        <button
          onClick={() => setDismissed(true)}
          className="w-full text-[11px] text-muted-foreground hover:text-foreground transition-colors pt-2"
        >
          Não verificar nesta sessão
        </button>
      </div>
    </div>
  );
};

export default PublishCoverValidator;
