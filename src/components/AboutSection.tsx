import { BookOpen, Feather, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-parchment">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Sobre
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Quem Sou Eu
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
            Sou escritor(a) apaixonado(a) por literatura, acreditando que as palavras têm o poder de
            transformar vidas. Este blog é meu cantinho para compartilhar minhas obras, resenhas e
            reflexões sobre o universo literário. Cada livro que escrevo carrega um pedaço da minha
            alma — e espero que toque a sua também.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, label: "Livros Publicados", value: "4+" },
              { icon: Feather, label: "Anos Escrevendo", value: "10+" },
              { icon: Heart, label: "Leitores", value: "2.000+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-6 border border-border">
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
