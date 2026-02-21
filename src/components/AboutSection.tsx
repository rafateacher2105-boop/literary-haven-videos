import { BookOpen, Feather, Heart, Music, Cross } from "lucide-react";
import authorPhoto from "@/assets/author-rafael.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Sobre
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Quem Sou Eu
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
                Olá, eu sou Rafael Aguiar.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Seja bem-vindo ao <strong className="text-foreground">Letras &amp; Páginas</strong>, meu blog literário. Este espaço é o reflexo de uma vida dedicada às palavras, aos sons e à imaginação.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Sou professor de Português e Música, e acredito que essas duas áreas caminham juntas: ambas buscam a harmonia e a expressão do que há de mais profundo no ser humano. Leciono em duas escolas, onde compartilho diariamente o poder da linguagem e da arte com meus alunos.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
            <p className="font-body text-muted-foreground leading-relaxed">
              Minha história com a escrita começou em 2010. Desde então, as letras deixaram de ser apenas uma ferramenta de trabalho para se tornarem minha principal forma de explorar o mundo. Sou um apaixonado confesso por literatura, poesia e, especialmente, pela ficção distópica e futurística — gêneros que nos permitem questionar o presente enquanto olhamos para o amanhã.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Além dos livros, sou entusiasta da tecnologia e das inovações. Amo observar como o novo transforma nossa maneira de viver e contar histórias. Acima de tudo, sou cristão e casado; minha fé e minha família são os alicerces que dão sentido a tudo o que produzo.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">Letras &amp; Páginas</strong> nasceu para ser o meu refúgio criativo. Escrevo nas horas vagas, transformando o silêncio do descanso em narrativas e reflexões. Aqui, você encontrará um pouco de tudo o que me move: do rigor da língua portuguesa à liberdade da ficção científica.
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
