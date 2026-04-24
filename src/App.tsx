import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import UpdatesBanner from "./components/UpdatesBanner";
import PublishCoverValidator from "./components/PublishCoverValidator";
import Index from "./pages/Index";
import BookReader from "./pages/BookReader";
import Indicacoes from "./pages/Indicacoes";
import Infograficos from "./pages/Infograficos";
import Autor from "./pages/Autor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <UpdatesBanner />
          <PublishCoverValidator />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/livro/:slug" element={<BookReader />} />
            <Route path="/indicacoes" element={<Indicacoes />} />
            <Route path="/infograficos" element={<Infograficos />} />
            <Route path="/autor/:slug" element={<Autor />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
