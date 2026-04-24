import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import infograficoMedicoMonstro from "@/assets/infografico-medico-monstro.jpg";

interface Infografico {
  title: string;
  subtitle: string;
  image: string;
}

const infograficos: Infografico[] = [
  {
    title: "O Médico e o Monstro",
    subtitle: "A Máscara da Hipocrisia — Análise dos temas psicológicos e sociais",
    image: infograficoMedicoMonstro,
  },
];

const Infograficos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Infográficos Literários — Resumos Visuais | Letras & Páginas</title>
        <meta name="description" content="Galeria de infográficos com resumos visuais das resenhas críticas dos grandes clássicos da literatura. Material didático ideal para estudantes." />
        <link rel="canonical" href="https://literary-haven-videos.lovable.app/infograficos" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Infográficos Literários — Resumos Visuais" />
        <meta property="og:description" content="Resumos visuais das resenhas críticas dos clássicos da literatura." />
        <meta property="og:url" content="https://literary-haven-videos.lovable.app/infograficos" />
        <meta property="og:site_name" content="Letras & Páginas" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://literary-haven-videos.lovable.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Infográficos Literários — Resumos Visuais" />
        <meta name="twitter:description" content="Resumos visuais das resenhas críticas dos clássicos." />
        <meta name="twitter:image" content="https://literary-haven-videos.lovable.app/og-image.jpg" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Resumos Visuais
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Infográficos
            </h1>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Resumos visuais das resenhas críticas de grandes clássicos da literatura.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
            {infograficos.map((info) => (
              <article
                key={info.title}
                className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg"
              >
                <div className="p-6 border-b border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {info.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {info.subtitle}
                  </p>
                </div>
                <img
                  src={info.image}
                  alt={`Infográfico: ${info.title}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Infograficos;
