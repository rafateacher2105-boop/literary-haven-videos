import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Força atualização do service worker para sempre buscar conteúdo novo
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.update();
    });
  });
  // Escuta atualizações e recarrega para aplicar mudanças
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}

createRoot(document.getElementById("root")!).render(<App />);
