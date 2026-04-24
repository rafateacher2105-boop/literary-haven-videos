import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Service Worker: garante que reabrir o preview/aba traga sempre a versão mais nova.
// - Detecta novo SW em "waiting" e envia SKIP_WAITING para ativá-lo imediatamente.
// - Recarrega a página uma única vez quando o novo SW assume o controle.
// - Verifica atualizações ao ganhar foco (visibilitychange) e ao voltar online.
if ("serviceWorker" in navigator) {
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloading) return;
    reloading = true;
    window.location.reload();
  });

  const promptUpdate = (reg: ServiceWorkerRegistration) => {
    const sw = reg.waiting;
    if (sw) sw.postMessage({ type: "SKIP_WAITING" });
  };

  const watchRegistration = (reg: ServiceWorkerRegistration) => {
    if (reg.waiting) promptUpdate(reg);
    reg.addEventListener("updatefound", () => {
      const installing = reg.installing;
      if (!installing) return;
      installing.addEventListener("statechange", () => {
        if (installing.state === "installed" && navigator.serviceWorker.controller) {
          promptUpdate(reg);
        }
      });
    });
  };

  const checkForUpdates = () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((reg) => {
        watchRegistration(reg);
        reg.update().catch(() => {});
      });
    });
  };

  checkForUpdates();

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForUpdates();
  });
  window.addEventListener("online", checkForUpdates);
  window.addEventListener("focus", checkForUpdates);
}

createRoot(document.getElementById("root")!).render(<App />);
