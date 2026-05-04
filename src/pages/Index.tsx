import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const SITE = "https://literary-haven-videos.lovable.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Blog Letras & Páginas",
      alternateName: ["Letras e Páginas", "Letras & Páginas"],
      description:
        "Blog Letras & Páginas: livros em PDF grátis, edições especiais dos clássicos, resenhas e e-books autorais de Rafael S. L. Aguiar — autor, editor, curador e pesquisador.",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE}/#publisher` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Blog",
      "@id": `${SITE}/#blog`,
      url: SITE,
      name: "Blog Letras & Páginas",
      description:
        "Blog literário com livros em PDF grátis, edições especiais dos clássicos e e-books autorais.",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE}/#publisher` },
      author: { "@id": `${SITE}/#rafael` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#rafael`,
      name: "Rafael S. L. Aguiar",
      alternateName: "Rafael Silveira Lima Aguiar",
      url: `${SITE}/autor/rafael-s-l-aguiar`,
      jobTitle: ["Autor", "Editor", "Curador", "Pesquisador literário", "Professor"],
      description:
        "Rafael S. L. Aguiar é autor, editor, curador e pesquisador literário. Escreve ficção distópica, ficção científica e poesia, e cura edições especiais dos clássicos no Blog Letras & Páginas.",
      knowsAbout: [
        "Literatura brasileira",
        "Ficção científica",
        "Distopia",
        "Poesia",
        "Clássicos da literatura",
        "Mitologia",
        "Curadoria literária",
        "Edição de livros",
      ],
      sameAs: [`${SITE}/autor/rafael-s-l-aguiar`],
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#publisher`,
      name: "Blog Letras & Páginas",
      url: SITE,
      founder: { "@id": `${SITE}/#rafael` },
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/og-image.jpg`,
      },
    },
  ],
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
