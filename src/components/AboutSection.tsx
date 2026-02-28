import { BookOpen, Feather, Heart, Music, Cross } from "lucide-react";
import authorPhoto from "@/assets/author-rafael.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              O Autor
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre Mim
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <img
              src={authorPhoto}
              alt="Rafael Aguiar"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-lg flex-shrink-0"
            />
            <div className="text-left space-y-4">
              <p className="font-display text-2xl font-bold text-foreground">
                Rafael Aguiar
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Professor de Português, Inglês e Música, escritor e criador do blog <strong className="text-foreground">Letras &amp; Páginas</strong> — um espaço dedicado à literatura, à poesia e à ficção especulativa. Também é criador do método <strong className="text-foreground">Easy English — Inglês Lúdico para Crianças</strong>, com o livro <em>Activity</em>, que reúne mais de 300 atividades com jogos, músicas e exercícios de vocabulário.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Leciono em duas escolas, onde exploro diariamente o poder da linguagem e da arte com meus alunos. Acredito que a palavra e a música caminham juntas: ambas buscam a harmonia e a expressão do que há de mais profundo no ser humano.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
            <p className="font-body text-muted-foreground leading-relaxed">
              Escrevo desde 2010. Ao longo desses anos, as letras deixaram de ser apenas uma ferramenta de trabalho para se tornarem minha principal forma de interpretar o mundo. Sou apaixonado por literatura, poesia e, especialmente, pela ficção distópica e futurística — gêneros que nos convidam a questionar o presente enquanto imaginamos o amanhã.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Entusiasta da tecnologia e das inovações, observo com fascínio como o novo transforma nossa maneira de viver e contar histórias. Cristão e casado, encontro na fé e na família os alicerces que dão sentido a tudo o que produzo.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">Letras &amp; Páginas</strong> é meu refúgio criativo: nas horas vagas, transformo o silêncio em narrativas e reflexões que transitam do rigor da língua portuguesa à liberdade da ficção científica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: BookOpen, label: "Livros Publicados", value: "4+" },
              { icon: Feather, label: "Anos Escrevendo", value: "15+" },
              { icon: Heart, label: "Leitores", value: "2.000+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-6 border border-border text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
