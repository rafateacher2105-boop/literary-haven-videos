import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Letras & Páginas",
  url: "https://literary-haven-videos.lovable.app",
  description:
    "Blog literário com resenhas em vídeo, e-books gratuitos e indicações de leitura.",
  author: {
    "@type": "Person",
    name: "Rafael Aguiar",
    jobTitle: "Escritor e Professor",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <BooksSection />
        <VideoSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
