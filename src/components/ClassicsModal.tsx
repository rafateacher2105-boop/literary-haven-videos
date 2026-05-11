import { Download, Library, Mail, Sparkles, BookOpenText, Coffee, Copy, Check, BookOpen, FileText, Image, Sword } from "lucide-react";
import coverPareDeProcrastinar from "@/assets/cover-pare-de-procrastinar.jpg";
import coverLiteraturaFuturistica from "@/assets/cover-literatura-futuristica.jpg";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";
import coverViagensGulliver from "@/assets/cover-viagens-gulliver.jpg";
import coverDivinaComedia from "@/assets/cover-divina-comedia.jpg";
import coverViagemCentroTerra from "@/assets/cover-viagem-centro-terra.png";
import coverVoltaMundo from "@/assets/cover-volta-mundo-80-dias.png";
import coverFrankenstein from "@/assets/cover-frankenstein.png";
import coverDracula from "@/assets/cover-dracula.png";
import coverDorianGray from "@/assets/cover-dorian-gray.png";
import coverLusiadas from "@/assets/cover-lusiadas.jpg";
import coverHamlet from "@/assets/cover-hamlet.png";
import coverRomeuJulieta from "@/assets/cover-romeu-julieta.png";
import coverIlhaTesouro from "@/assets/cover-ilha-tesouro.jpg";
import coverIlhaMisteriosa from "@/assets/cover-ilha-misteriosa.png";
import coverVinteMilLeguas from "@/assets/cover-vinte-mil-leguas.png";
import coverNuvemPurpura from "@/assets/cover-nuvem-purpura.jpg";
import coverTacaoFerro from "@/assets/cover-tacao-ferro.jpg";
import coverMaquinaParou from "@/assets/cover-maquina-parou.jpg";
import coverNos from "@/assets/cover-nos.jpg";
import coverUltimoHomem from "@/assets/cover-ultimo-homem.jpg";
import coverRur from "@/assets/cover-rur.jpg";
import coverParisSeculoXX from "@/assets/cover-paris-seculo-xx.jpg";
import coverKallocain from "@/assets/cover-kallocain.jpg";
import coverGuerraSalamandras from "@/assets/cover-guerra-salamandras.jpg";
import coverGuerraMundos from "@/assets/cover-guerra-mundos.png";
import coverMaquinaTempo from "@/assets/cover-maquina-tempo.jpg";
import cover1984 from "@/assets/cover-1984.png";
import coverFantasmaCanterville from "@/assets/cover-fantasma-canterville.jpg";
import coverRevolucaoBichos from "@/assets/cover-revolucao-bichos.png";
import coverHeroisEpicos from "@/assets/cover-herois-epicos.jpg";
import coverDomQuixote from "@/assets/cover-dom-quixote.png";
import coverPrimeirosHomensLua from "@/assets/cover-primeiros-homens-lua.png";
import coverPequenoPrincipe from "@/assets/cover-pequeno-principe.png";
import coverIlhaDrMoreau from "@/assets/cover-ilha-dr-moreau.png";
import coverHomemInvisivel from "@/assets/cover-homem-invisivel.png";
import coverMaquinaTempoClassic from "@/assets/cover-maquina-tempo-classic.png";
import coverOCortico from "@/assets/cover-o-cortico.png";
import coverIracema from "@/assets/cover-iracema.png";
import coverBrasCubas from "@/assets/cover-bras-cubas.png";
import coverSargentoMilicias from "@/assets/cover-sargento-milicias.png";
import coverDomCasmurro from "@/assets/cover-dom-casmurro.png";
import coverOrgulhoPreconceito from "@/assets/cover-orgulho-preconceito.png";
import coverRazaoSensibilidade from "@/assets/cover-razao-sensibilidade.png";
import coverPapeisAvulsos from "@/assets/cover-papeis-avulsos.jpg";
import coverCrimeCastigo from "@/assets/cover-crime-castigo.png";
import coverIrmaosKaramazov from "@/assets/cover-irmaos-karamazov.png";
import coverContosPoe from "@/assets/cover-contos-poe.jpg";
import coverMedicoMonstro from "@/assets/cover-medico-monstro.png";
import coverOdisseia from "@/assets/cover-odisseia.jpg";
import coverMetamorfose from "@/assets/cover-metamorfose.jpg";
import coverIlhaTesouroNew from "@/assets/cover-ilha-tesouro-new.jpg";
import coverHamletNew from "@/assets/cover-hamlet.jpg";
import coverRomeuJulietaNew from "@/assets/cover-romeu-julieta.jpg";
import coverAdmiravelMundoNovo from "@/assets/cover-admiravel-mundo-novo.jpg";
import coverOIdiota from "@/assets/cover-o-idiota.jpg";
import coverContosGrimm from "@/assets/cover-contos-grimm.jpg";
import coverContosAndersen from "@/assets/cover-contos-andersen.jpg";
import coverContosPerrault from "@/assets/cover-contos-perrault.jpg";
import coverLendasIndigenas from "@/assets/cover-lendas-indigenas.jpg";
import coverLendasAfricanas from "@/assets/cover-lendas-africanas.jpg";
import coverLendasUrbanas from "@/assets/cover-lendas-urbanas.jpg";
import coverLendasFolclore from "@/assets/cover-lendas-folclore.jpg";
import coverLendasChina from "@/assets/cover-lendas-china.jpg";
import coverMilUmaNoites from "@/assets/cover-mil-uma-noites.png";
import coverLendasJapao from "@/assets/cover-lendas-japao.png";
import coverMitosNordicos from "@/assets/cover-mitos-nordicos.png";
import coverLendasBrasil from "@/assets/cover-lendas-brasil.png";
import coverLendasBrasilIlustrado from "@/assets/cover-lendas-brasil-ilustrado.jpg";
import coverMitosGregos from "@/assets/cover-mitos-gregos.jpg";
import coverLendasMedievais from "@/assets/cover-lendas-medievais.jpg";
import coverLendasRussas from "@/assets/cover-lendas-russas.jpg";
import coverContosJudaicos from "@/assets/cover-contos-judaicos.jpg";
import coverContosPescador from "@/assets/cover-contos-pescador.jpg";
import coverContosGenioBagda from "@/assets/cover-contos-genio-bagda.jpg";
import coverContosSemPeNemCabeca from "@/assets/cover-contos-sem-pe-nem-cabeca.jpg";
import coverOndeEstaOAmor from "@/assets/cover-onde-esta-o-amor.png";
import coverPeterPan from "@/assets/cover-peter-pan.png";
import coverLivroSelva from "@/assets/cover-livro-selva.png";
import coverPinoquio from "@/assets/cover-pinoquio.png";
import coverAlice from "@/assets/cover-alice.png";
import coverHoraEstrela from "@/assets/cover-hora-da-estrela.jpg";
import coverSaoBernardo from "@/assets/cover-sao-bernardo.jpg";
import coverMobyDick from "@/assets/cover-moby-dick.jpg";
import coverFausto from "@/assets/cover-fausto.jpg";
import coverVelhoMar from "@/assets/cover-velho-e-o-mar.jpg";
import coverIliada from "@/assets/cover-iliada.jpg";
import coverCapitaesAreia from "@/assets/cover-capitaes-areia.jpg";
import coverVidasSecas from "@/assets/cover-vidas-secas.jpg";
import coverFantasmaOpera from "@/assets/cover-fantasma-opera.jpg";
import coverCorcundaNotreDame from "@/assets/cover-corcunda-notre-dame.jpg";
import coverIvanhoe from "@/assets/cover-ivanhoe.jpg";
import coverTristaoIsolda from "@/assets/cover-tristao-isolda.jpg";
import coverCondeMonteCristo from "@/assets/cover-conde-monte-cristo.jpg";
import coverTresMosqueteiros from "@/assets/cover-tres-mosqueteiros-new.png";
import coverAnaKarenina from "@/assets/cover-ana-karenina-new.png";
import coverGuerraEPaz from "@/assets/cover-guerra-e-paz-new.jpg";
import coverRobinHood from "@/assets/cover-robin-hood-new.png";
import coverOliverTwist from "@/assets/cover-oliver-twist.jpg";
import coverJaneEyre from "@/assets/cover-jane-eyre.jpg";
import coverMorroVentosUivantes from "@/assets/cover-morro-ventos-uivantes.jpg";
import coverDavidCopperfield from "@/assets/cover-david-copperfield.jpg";
import coverGrandeGatsby from "@/assets/cover-grande-gatsby.jpg";
import coverCaoBaskervilles from "@/assets/cover-cao-baskervilles.jpg";
import coverParaisoPerdido from "@/assets/cover-paraiso-perdido.jpg";
import coverHuckleberryFinn from "@/assets/cover-huckleberry-finn.jpg";
import coverTomSawyer from "@/assets/cover-tom-sawyer.jpg";
import coverLetraEscarlate from "@/assets/cover-letra-escarlate.jpg";
import coverCavaleiroSemCabeca from "@/assets/cover-cavaleiro-sem-cabeca.jpg";
import coverReinacoesNarizinho from "@/assets/cover-reinacoes-narizinho.jpg";
import coverOSaci from "@/assets/cover-o-saci.jpg";
import coverCacadasPedrinho from "@/assets/cover-cacadas-pedrinho.jpg";
import coverMarquesRabico from "@/assets/cover-marques-rabico.jpg";
import coverEmiliaGramatica from "@/assets/cover-emilia-gramatica.jpg";
import coverMemoriasEmilia from "@/assets/cover-memorias-emilia.jpg";
import coverPocoVisconde from "@/assets/cover-poco-visconde.jpg";
import coverPicapauAmarelo from "@/assets/cover-picapau-amarelo.jpg";
import coverReformaNatureza from "@/assets/cover-reforma-natureza.jpg";
import coverChaveTamanho from "@/assets/cover-chave-tamanho.jpg";
import coverOMinotauro from "@/assets/cover-o-minotauro.jpg";
import coverIdeiasJecaTatu from "@/assets/cover-ideias-jeca-tatu.jpg";
import coverDomQuixoteCriancas from "@/assets/cover-dom-quixote-criancas.jpg";
import coverAritmeticaEmilia from "@/assets/cover-aritmetica-emilia.jpg";
import coverViagemAoCeu from "@/assets/cover-viagem-ao-ceu.jpg";
import coverContosCriaturasFantasticas from "@/assets/cover-contos-criaturas-fantasticas.jpg";
import coverContosCarochinha from "@/assets/cover-contos-carochinha.jpg";
import coverQuartoSabio from "@/assets/cover-quarto-sabio.png";
import coverDeQuantaTerra from "@/assets/cover-de-quanta-terra.png";
import coverJornadaOeste from "@/assets/cover-jornada-oeste.jpg";
import cover12TrabalhosHercules from "@/assets/cover-12-trabalhos-hercules.jpg";
import coverJornadaUlisses from "@/assets/cover-jornada-ulisses.jpg";
import coverAquiles from "@/assets/cover-aquiles.jpg";
import coverSiegfried from "@/assets/cover-siegfried.jpg";
import coverJasao from "@/assets/cover-jasao.jpg";
import coverPerseu from "@/assets/cover-perseu.jpg";
import coverEneida from "@/assets/cover-eneida.jpg";
import coverGilgamesh from "@/assets/cover-gilgamesh.jpg";
import coverTeseu from "@/assets/cover-teseu.jpg";
import coverAntigona from "@/assets/cover-antigona.jpg";
import coverEdipo from "@/assets/cover-edipo.jpg";
import coverBeowulf from "@/assets/cover-beowulf.jpg";
import coverSansao from "@/assets/cover-sansao.jpg";
import coverDavi from "@/assets/cover-davi.jpg";
import coverPersival from "@/assets/cover-persival-graal.jpg";
import coverArthur from "@/assets/cover-arthur.jpg";
import coverMusashi from "@/assets/cover-musashi.jpg";
import coverElCid from "@/assets/cover-el-cid.jpg";
import coverArjuna from "@/assets/cover-arjuna.jpg";
import coverRostan from "@/assets/cover-rostan.jpg";
import cover300FeFerro from "@/assets/cover-300-fe-ferro.jpg";
import coverSundiataKeita from "@/assets/cover-sundiata-keita.jpg";
import coverAtalanta from "@/assets/cover-atalanta.jpg";
import coverMulan from "@/assets/cover-mulan.jpg";
import coverJoanaDarc from "@/assets/cover-joana-darc.jpg";
import coverGuilhermeTell from "@/assets/cover-guilherme-tell.jpg";
import coverBradamante from "@/assets/cover-bradamante.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClassicBook {
  title: string;
  author: string;
  year?: string;
  description?: string;
  file?: string;
  cover?: string;
  isPaid?: boolean;
}

const PIX_KEY = "rafateacher2105@gmail.com";

const classicBooks: ClassicBook[] = [
  // === Obras Internacionais ===
  { title: "A Divina Comédia", author: "Dante Alighieri", cover: coverDivinaComedia, file: "/divina-comedia.pdf" },
  { title: "As Viagens de Gulliver", author: "Jonathan Swift", cover: coverViagensGulliver, file: "/as-viagens-de-gulliver.pdf" },
  { title: "Os Lusíadas", author: "Luís de Camões", cover: coverLusiadas, file: "/os-lusiadas.pdf" },
  { title: "Hamlet", author: "William Shakespeare", cover: coverHamletNew, file: "/hamlet.pdf" },
  { title: "Romeu e Julieta", author: "William Shakespeare", cover: coverRomeuJulietaNew, file: "/romeu-e-julieta.pdf" },
  { title: "A Ilha do Tesouro", author: "Robert L. Stevenson", cover: coverIlhaTesouroNew, file: "/a-ilha-do-tesouro.pdf" },
  { title: "Alice no País das Maravilhas", author: "Lewis Carroll", cover: coverAlice, file: "/alice-pais-maravilhas.pdf" },
  { title: "O Médico e o Monstro", author: "Robert L. Stevenson", cover: coverMedicoMonstro, file: "/o-medico-e-o-monstro.pdf" },
  { title: "A Metamorfose", author: "Franz Kafka", cover: coverMetamorfose, file: "/a-metamorfose.pdf" },
  { title: "A Odisseia", author: "Homero", cover: coverOdisseia, file: "/a-odisseia.pdf" },
  { title: "Dom Quixote", author: "Miguel de Cervantes", cover: coverDomQuixote, file: "/dom-quixote.pdf" },
  { title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", cover: coverPequenoPrincipe, file: "/o-pequeno-principe.pdf" },
  { title: "O Livro da Selva", author: "Rudyard Kipling", cover: coverLivroSelva, file: "/livro-da-selva.pdf" },
  { title: "Peter Pan", author: "J.M. Barrie", cover: coverPeterPan, file: "/peter-pan.pdf" },
  { title: "Pinóquio", author: "Carlo Collodi", cover: coverPinoquio, file: "/pinoquio.pdf" },
  { title: "Orgulho e Preconceito", author: "Jane Austen", cover: coverOrgulhoPreconceito, file: "/orgulho-e-preconceito.pdf" },
  { title: "Razão e Sensibilidade", author: "Jane Austen", cover: coverRazaoSensibilidade, file: "/razao-e-sensibilidade.pdf" },
  { title: "Crime e Castigo", author: "Fiódor Dostoiévski", cover: coverCrimeCastigo, file: "/crime-e-castigo.pdf" },
  { title: "Os Irmãos Karamazov", author: "Fiódor Dostoiévski", cover: coverIrmaosKaramazov, file: "/os-irmaos-karamazov.pdf" },
  { title: "O Idiota", author: "Fiódor Dostoiévski", cover: coverOIdiota, file: "/o-idiota.pdf" },
  { title: "O Fantasma de Canterville", author: "Oscar Wilde", cover: coverFantasmaCanterville, file: "/o-fantasma-de-canterville.pdf" },
  { title: "Moby Dick", author: "Herman Melville", cover: coverMobyDick, file: "/moby-dick.pdf" },
  { title: "Fausto", author: "Johann W. von Goethe", cover: coverFausto, file: "/fausto.pdf" },
  { title: "A Ilíada", author: "Homero", cover: coverIliada, file: "/iliada.pdf" },
  { title: "A Revolução dos Bichos", author: "George Orwell", cover: coverRevolucaoBichos, file: "/revolucao-dos-bichos.pdf" },
  // === Sequência especificada após Revolução dos Bichos ===
  { title: "Frankenstein", author: "Mary Shelley", cover: coverFrankenstein, file: "/frankenstein.pdf" },
  { title: "1984", author: "George Orwell", cover: cover1984, file: "/e-book-1984.pdf" },
  { title: "Admirável Mundo Novo", author: "Aldous Huxley", cover: coverAdmiravelMundoNovo, file: "/admiravel-mundo-novo.pdf" },
  { title: "O Retrato de Dorian Gray", author: "Oscar Wilde", cover: coverDorianGray, file: "/retrato-dorian-gray.pdf" },
  { title: "Drácula", author: "Bram Stoker", cover: coverDracula, file: "/dracula.pdf" },
  // === Obras de Júlio Verne ===
  { title: "A Ilha Misteriosa", author: "Júlio Verne", cover: coverIlhaMisteriosa, file: "/a-ilha-misteriosa.pdf" },
  { title: "Viagem ao Centro da Terra", author: "Júlio Verne", cover: coverViagemCentroTerra, file: "/viagem-centro-terra.pdf" },
  { title: "A Volta ao Mundo em 80 Dias", author: "Júlio Verne", cover: coverVoltaMundo, file: "/volta-mundo-80-dias.pdf" },
  { title: "Vinte Mil Léguas Submarinas", author: "Júlio Verne", cover: coverVinteMilLeguas, file: "/vinte-mil-leguas-submarinas.pdf" },
  // === H.G. Wells ===
  { title: "A Máquina do Tempo", author: "H.G. Wells", cover: coverMaquinaTempoClassic, file: "/a-maquina-do-tempo.pdf" },
  { title: "A Guerra dos Mundos", author: "H.G. Wells", cover: coverGuerraMundos, file: "/a-guerra-dos-mundos.pdf" },
  { title: "O Homem Invisível", author: "H.G. Wells", cover: coverHomemInvisivel, file: "/o-homem-invisivel.pdf" },
  { title: "A Ilha do Doutor Moreau", author: "H.G. Wells", cover: coverIlhaDrMoreau, file: "/a-ilha-do-dr-moreau.pdf" },
  { title: "Os Primeiros Homens na Lua", author: "H.G. Wells", cover: coverPrimeirosHomensLua, file: "/os-primeiros-homens-na-lua.pdf" },
  // === Obras Brasileiras intercaladas com Internacionais ===
  { title: "Iracema", author: "José de Alencar", cover: coverIracema, file: "/iracema.pdf" },
  { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis", cover: coverBrasCubas, file: "/memorias-postumas-bras-cubas.pdf" },
  { title: "O Velho e o Mar", author: "Ernest Hemingway", cover: coverVelhoMar, file: "/o-velho-e-o-mar.pdf" },
  { title: "Dom Casmurro", author: "Machado de Assis", cover: coverDomCasmurro, file: "/dom-casmurro.pdf" },
  { title: "O Fantasma da Ópera", author: "Gaston Leroux", cover: coverFantasmaOpera, file: "/o-fantasma-da-opera.pdf" },
  { title: "O Cortiço", author: "Aluísio Azevedo", cover: coverOCortico, file: "/o-cortico.pdf" },
  { title: "O Corcunda de Notre-Dame", author: "Victor Hugo", cover: coverCorcundaNotreDame, file: "/o-corcunda-de-notre-dame.pdf" },
  { title: "Memórias de um Sargento de Milícias", author: "Manuel A. de Almeida", cover: coverSargentoMilicias, file: "/memorias-sargento-milicias.pdf" },
  { title: "Ivanhoé", author: "Sir Walter Scott", cover: coverIvanhoe, file: "/ivanhoe.pdf" },
  { title: "Papéis Avulsos", author: "Machado de Assis", cover: coverPapeisAvulsos, file: "/papeis-avulsos.pdf" },
  { title: "Tristão e Isolda", author: "Joseph Bédier", cover: coverTristaoIsolda, file: "/tristao-e-isolda.pdf" },
  { title: "Vidas Secas", author: "Graciliano Ramos", cover: coverVidasSecas, file: "/vidas-secas.pdf" },
  { title: "O Conde de Monte Cristo", author: "Alexandre Dumas", cover: coverCondeMonteCristo, file: "/o-conde-de-monte-cristo.pdf" },
  { title: "São Bernardo", author: "Graciliano Ramos", cover: coverSaoBernardo, file: "/sao-bernardo.pdf" },
  { title: "Os Três Mosqueteiros", author: "Alexandre Dumas", cover: coverTresMosqueteiros, file: "/os-tres-mosqueteiros.pdf" },
  { title: "Capitães da Areia", author: "Jorge Amado", cover: coverCapitaesAreia, file: "/capitaes-da-areia.pdf" },
  { title: "Robin Hood", author: "Alexandre Dumas", cover: coverRobinHood, file: "/robin-hood.pdf" },
  { title: "A Hora da Estrela", author: "Clarice Lispector", cover: coverHoraEstrela, file: "/a-hora-da-estrela.pdf" },
  { title: "Ana Karenina", author: "Liev Tolstói", cover: coverAnaKarenina, file: "/ana-karenina.pdf" },
  { title: "Guerra e Paz", author: "Liev Tolstói", cover: coverGuerraEPaz, file: "/guerra-e-paz.pdf" },
  { title: "Oliver Twist", author: "Charles Dickens", cover: coverOliverTwist, file: "/oliver-twist.pdf" },
  { title: "Jane Eyre", author: "Charlotte Brontë", cover: coverJaneEyre, file: "/jane-eyre.pdf" },
  { title: "O Morro dos Ventos Uivantes", author: "Emily Brontë", cover: coverMorroVentosUivantes, file: "/o-morro-dos-ventos-uivantes.pdf" },
  { title: "David Copperfield", author: "Charles Dickens", cover: coverDavidCopperfield, file: "/david-copperfield.pdf" },
  { title: "O Grande Gatsby", author: "F. Scott Fitzgerald", cover: coverGrandeGatsby, file: "/o-grande-gatsby.pdf" },
  { title: "O Cão dos Baskervilles", author: "Arthur Conan Doyle", cover: coverCaoBaskervilles, file: "/o-cao-dos-baskervilles.pdf" },
  { title: "O Paraíso Perdido", author: "John Milton", cover: coverParaisoPerdido, file: "/o-paraiso-perdido.pdf" },
  { title: "As Aventuras de Huckleberry Finn", author: "Mark Twain", cover: coverHuckleberryFinn, file: "/huckleberry-finn.pdf" },
  { title: "As Aventuras de Tom Sawyer", author: "Mark Twain", cover: coverTomSawyer, file: "/tom-sawyer.pdf" },
  { title: "A Letra Escarlate", author: "Nathaniel Hawthorne", cover: coverLetraEscarlate, file: "/a-letra-escarlate.pdf" },
  { title: "A Lenda do Cavaleiro sem Cabeça", author: "Washington Irving", cover: coverCavaleiroSemCabeca, file: "/cavaleiro-sem-cabeca.pdf" },
  // === Monteiro Lobato ===
  { title: "Reinações de Narizinho", author: "Monteiro Lobato", cover: coverReinacoesNarizinho, file: "/reinacoes-de-narizinho.pdf" },
  { title: "O Saci", author: "Monteiro Lobato", cover: coverOSaci, file: "/o-saci.pdf" },
  { title: "Caçadas de Pedrinho", author: "Monteiro Lobato", cover: coverCacadasPedrinho, file: "/cacadas-de-pedrinho.pdf" },
  { title: "O Marquês de Rabicó", author: "Monteiro Lobato", cover: coverMarquesRabico, file: "/marques-de-rabico.pdf" },
  { title: "Emília no País da Gramática", author: "Monteiro Lobato", cover: coverEmiliaGramatica, file: "/emilia-no-pais-da-gramatica.pdf" },
  { title: "Memórias da Emília", author: "Monteiro Lobato", cover: coverMemoriasEmilia, file: "/memorias-da-emilia.pdf" },
  { title: "O Poço do Visconde", author: "Monteiro Lobato", cover: coverPocoVisconde, file: "/o-poco-do-visconde.pdf" },
  { title: "O Picapau Amarelo", author: "Monteiro Lobato", cover: coverPicapauAmarelo, file: "/o-picapau-amarelo.pdf" },
  { title: "A Reforma da Natureza", author: "Monteiro Lobato", cover: coverReformaNatureza, file: "/a-reforma-da-natureza.pdf" },
  { title: "A Chave do Tamanho", author: "Monteiro Lobato", cover: coverChaveTamanho, file: "/a-chave-do-tamanho.pdf" },
  { title: "O Minotauro", author: "Monteiro Lobato", cover: coverOMinotauro, file: "/o-minotauro.pdf" },
  { title: "Ideias do Jeca Tatu", author: "Monteiro Lobato", cover: coverIdeiasJecaTatu, file: "/ideias-do-jeca-tatu.pdf" },
  { title: "Dom Quixote das Crianças", author: "Monteiro Lobato", cover: coverDomQuixoteCriancas, file: "/dom-quixote-das-criancas.pdf" },
  { title: "Aritmética da Emília", author: "Monteiro Lobato", cover: coverAritmeticaEmilia, file: "/aritmetica-da-emilia.pdf" },
  { title: "Viagem ao Céu", author: "Monteiro Lobato", cover: coverViagemAoCeu, file: "/viagem-ao-ceu.pdf" },
  { title: "De Quanta Terra Precisa um Homem? E Outros Contos", author: "Liev Tolstói", cover: coverDeQuantaTerra, description: "Uma das mais profundas parábolas sobre a ganância humana. Contos filosóficos de Tolstói que questionam o sentido da vida e da ambição." },
  { title: "O Quarto Sábio", author: "Henry Van Dyke", cover: coverQuartoSabio, description: "Um clássico sobre fé e sacrifício. A jornada de Artaban, o quarto mago, em busca do Cristo." },
];

const talesBooks: ClassicBook[] = [
  { title: "Contos de Poe", author: "Edgar Allan Poe", cover: coverContosPoe, file: "/contos-poe.pdf", description: "Mestre do terror e do mistério, Poe nos leva a labirintos psicológicos sombrios com contos como 'O Gato Preto', 'O Coração Delator' e 'A Queda da Casa de Usher'. Edição especial para o Blog Letras e Páginas." },
  { title: "Contos dos Irmãos Grimm — Edição de Luxo", author: "Irmãos Grimm", cover: coverContosGrimm, file: "/contos-grimm.pdf", description: "Edição de luxo ilustrada dos contos que definiram os contos de fadas modernos: Branca de Neve, Cinderela, Rapunzel, João e Maria e dezenas de outros clássicos imortais. Edição especial exclusiva para o Blog Letras e Páginas." },
  { title: "Contos de Andersen", author: "Hans Christian Andersen", cover: coverContosAndersen, file: "/contos-andersen.pdf", description: "O Patinho Feio, A Pequena Sereia, A Rainha da Neve — histórias encantadoras que misturam fantasia, melancolia e lições atemporais. Edição especial para o Blog Letras e Páginas." },
  { title: "Contos de Perrault", author: "Charles Perrault", cover: coverContosPerrault, file: "/contos-perrault.pdf", description: "O Gato de Botas, A Bela Adormecida, Chapeuzinho Vermelho — os contos que inauguraram a tradição literária dos contos de fadas na Europa. Edição especial com contos escolhidos pelo editor Rafael S.L. Aguiar para o Blog Letras e Páginas." },
  { title: "Lendas Indígenas", author: "Tradição Oral", cover: coverLendasIndigenas, file: "/lendas-indigenas.pdf", description: "Narrativas ancestrais dos povos originários do Brasil: o Curupira, o Boto, a Iara, o Saci-Pererê e outras histórias que explicam o mundo pela sabedoria da floresta." },
  { title: "Contos Essenciais da África", author: "Rafael S. L. Aguiar", cover: coverLendasAfricanas, file: "/lendas-africanas.pdf", description: "Uma coletânea encantadora dos contos mais fascinantes do continente africano, com histórias de sabedoria, coragem e tradição. Edição e curadoria de Rafael S. L. Aguiar para o Blog Letras e Páginas." },
  { title: "Lendas Urbanas", author: "Folclore Contemporâneo", cover: coverLendasUrbanas, file: "/lendas-urbanas.pdf", description: "A Loira do Banheiro, o Homem do Saco, a Maria Sangrenta — histórias que nascem nas cidades e se espalham de boca em boca, alimentando nossos medos modernos." },
  { title: "Lendas do Folclore Brasileiro", author: "Coletânea Especial", cover: coverLendasFolclore, file: "/lendas-folclore-brasileiro.pdf", description: "Curupira, Saci-Pererê, Iara, Boto Cor-de-Rosa e muito mais — uma coletânea especial das lendas mais fascinantes do folclore brasileiro. Edição especial Letras e Páginas." },
  { title: "Lendas Essenciais da China", author: "Coletânea Especial", cover: coverLendasChina, file: "/lendas-essenciais-china.pdf", description: "Dragões, fênix, o Rei Macaco e muito mais — uma coletânea especial das lendas mais fascinantes da mitologia chinesa. Edição especial Letras e Páginas." },
  { title: "Contos das Mil e Uma Noites", author: "Coletânea Especial", cover: coverMilUmaNoites, file: "/contos-mil-uma-noites.pdf", description: "Aladim, Ali Babá, Simbad e muito mais — uma edição especial das histórias mais encantadoras das Mil e Uma Noites. Edição especial Letras e Páginas." },
  { title: "Mitos e Lendas Ancestrais do Japão", author: "Coletânea Especial", cover: coverLendasJapao, file: "/lendas-japao.pdf", description: "Amaterasu, Kitsune, Tanuki, Raijin e muito mais — uma edição especial de luxo das lendas e mitos mais fascinantes do Japão ancestral. Edição especial Letras e Páginas." },
  { title: "Mitos Nórdicos — Edição Especial", author: "Coletânea Especial", cover: coverMitosNordicos, file: "/mitos-nordicos.pdf", description: "Odin, Thor, Loki, Fenrir e muito mais — uma edição de luxo das lendas e mitos mais épicos da mitologia nórdica. Edição especial Letras e Páginas." },
  { title: "Lendas do Brasil 2 — Edição Especial", author: "Rafael S. L. Aguiar", cover: coverLendasBrasil, file: "/lendas-brasil.pdf", description: "Uma viagem fascinante pelas lendas de cada região do Brasil: do Saci-Pererê e Curupira no Sudeste, ao Boto Cor-de-Rosa e Iara na Amazônia, passando pela Comadre Florzinha e o Papa-Figo no Nordeste, o Negrinho do Pastoreio no Sul e o Pé de Garrafa no Centro-Oeste. Edição especial de luxo Letras e Páginas." },
  { title: "Lendas do Brasil — Ilustrado com Xilogravuras", author: "Rafael S. L. Aguiar", cover: coverLendasBrasilIlustrado, file: "/lendas-brasil-ilustrado.pdf", description: "Edição especial completa e ilustrada com xilogravuras artísticas. 20 lendas organizadas por região: Norte (Curupira, Iara, Boto Cor-de-Rosa, Vitória-Régia, Mapinguari), Nordeste (Comadre Fulozinha, Papa-Figo, Boi Uná, Quibungo, Cabeça de Cuia), Centro-Oeste (Papai do Mato, Arranca-Línguas, Onça-Maneta), Sudeste (Mula Sem Cabeça, Corpo-Seco, Mãozinha-Preta, Bradador) e Sul (Negrinho do Pastoreio, Boitatá, Saci-Pererê). Curadoria literária Rafael S. L. Aguiar — Blog Letras e Páginas." },
  { title: "Mitos Gregos da Antiguidade — Edição de Luxo Ilustrada", author: "Rafael S. L. Aguiar", cover: coverMitosGregos, file: "/mitos-gregos-antiguidade.pdf", description: "Edição de luxo ilustrada com desenhos estilizados no estilo grego. Uma viagem épica pela mitologia grega: Zeus, Poseidon, Atena, Hércules, Perseu, Odisseu e muito mais. Conheça os deuses do Olimpo, os heróis lendários e as criaturas fantásticas que moldaram a cultura ocidental. Curadoria literária Rafael S. L. Aguiar — Blog Letras e Páginas." },
  { title: "Lendas Medievais — Edição de Luxo", author: "Rafael S. L. Aguiar", cover: coverLendasMedievais, file: "/lendas-medievais.pdf", description: "Edição de luxo ilustrada com arte medieval. Cavaleiros, dragões, damas encantadas e castelos misteriosos ganham vida nesta coletânea épica de lendas da Idade Média. Do Rei Artur à lenda de São Jorge, uma viagem fascinante pelo imaginário medieval europeu. Edição e seleção Rafael S. L. Aguiar — Blog Letras e Páginas." },
  { title: "Contos de Criaturas Fantásticas", author: "Coletânea Especial", cover: coverContosCriaturasFantasticas, file: "/contos-criaturas-fantasticas.pdf", description: "Dragões, fênix, unicórnios, grifos e outras criaturas lendárias ganham vida nesta coletânea encantadora de contos fantásticos. Uma viagem pelo imaginário de civilizações antigas e modernas. Edição especial Letras e Páginas." },
  { title: "Contos da Carochinha — Versão Especial", author: "Rafael S. L. Aguiar", cover: coverContosCarochinha, file: "/contos-carochinha.pdf", description: "Uma versão especial dos clássicos Contos da Carochinha, com histórias encantadoras que atravessam gerações. Fábulas, contos de fadas e narrativas populares reunidas em uma edição de luxo ilustrada. Edição especial Letras e Páginas." },
  { title: "Lendas Russas — Edição Especial", author: "Rafael S. L. Aguiar", cover: coverLendasRussas, file: "/lendas-russas.pdf", description: "Uma coletânea encantadora de lendas e contos populares russos, com histórias de Baba Yaga, o Pássaro de Fogo, cavaleiros e princesas. Ilustrações em aquarela trazem vida ao rico folclore eslavo. Edição especial Letras e Páginas." },
  { title: "Contos Judaicos Antigos e Ilustrados", author: "Rafael S. L. Aguiar", cover: coverContosJudaicos, file: "/contos-judaicos.pdf", description: "Uma coletânea encantadora de contos judaicos antigos, com histórias de sabedoria, fé e tradição. Edição especial com ilustrações exclusivas. Edição Letras e Páginas por Rafael S. L. Aguiar." },
  { title: "Contos de Pescador", author: "Rafael S. L. Aguiar", cover: coverContosPescador, file: "/contos-pescador.pdf", description: "Uma coletânea ilustrada com xilogravuras de contos clássicos de pescador, reunindo histórias de aventura, mistério e fantasia nas águas. Edição e seleção de Rafael S. L. Aguiar para o Blog Letras e Páginas." },
  { title: "Contos de Gênio pra lá de Bagdá", author: "Rafael S. L. Aguiar", cover: coverContosGenioBagda, file: "/contos-genio-bagda.pdf", description: "Uma coletânea encantadora de contos sobre gênios e lâmpadas mágicas, com histórias que vão além das Mil e Uma Noites. Edição Especial ilustrada por Rafael S. L. Aguiar para o Blog Letras e Páginas." },
  { title: "Contos sem Pé nem Cabeça", author: "Rafael S. L. Aguiar", cover: coverContosSemPeNemCabeca, file: "/contos-sem-pe-nem-cabeca.pdf", description: "Uma coletânea divertida e nonsense de contos clássicos sem pé nem cabeça, com histórias de João Preguiça, Golden Goose e The Bear Who Wasn't. Edição Especial de Luxo por Rafael S. L. Aguiar para o Blog Letras e Páginas." },
  { title: "Onde Está o Amor, Ali Deus Está", author: "Rafael Aguiar", cover: coverOndeEstaOAmor, file: "/onde-esta-o-amor.pdf", description: "Coletânea de contos clássicos sobre o verdadeiro amor. Uma seleção inspiradora organizada por Rafael Aguiar para o Blog Letras e Páginas." },
  { title: "A Jornada para o Oeste — A Lenda do Rei Macaco", author: "Rafael S. L. Aguiar", cover: coverJornadaOeste, file: "/jornada-oeste.pdf", description: "Uma das maiores epopeias da literatura mundial. Acompanhe Sun Wukong, o Rei Macaco, nascido de uma pedra mágica, em sua jornada épica de redenção ao lado do Monge Tripitaka rumo ao Oeste em busca das escrituras sagradas. Edição especial Letras e Páginas." },
];

const heroesBooks: ClassicBook[] = [
  { title: "Os 12 Trabalhos de Hércules", author: "Rafael S. L. Aguiar", cover: cover12TrabalhosHercules, file: "/os-12-trabalhos-de-hercules.pdf", description: "A saga do maior herói da mitologia grega. Acompanhe Hércules em seus doze trabalhos impossíveis: do Leão de Nemeia à captura de Cérbero, cada desafio testa os limites da força e da coragem humana. Edição especial Letras e Páginas." },
  { title: "A Incrível Jornada de Ulisses", author: "Rafael S. L. Aguiar", cover: coverJornadaUlisses, file: "/a-incrivel-jornada-de-ulisses.pdf", description: "A épica jornada do herói grego Ulisses, desde a criação do lendário Cavalo de Troia até seu triunfante retorno à ilha de Ítaca. Edição especial ilustrada com aquarelas exclusivas. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Aquiles — A Ira do Herói de Troia", author: "Rafael S. L. Aguiar", cover: coverAquiles, file: "https://drive.google.com/file/d/1N1QwrGRjfw3R2lPhilrBOtyZ5hiPLLks/view?usp=drivesdk", description: "A saga do maior guerreiro da Guerra de Troia. Acompanhe Aquiles em sua jornada épica: a fúria contra Agamenon, a perda de Pátroclo, o duelo lendário com Heitor e o destino traçado pelos deuses. Edição ilustrada de luxo da série Heróis Épicos. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Siegfried — Saga Livro II", author: "Rafael S. L. Aguiar", cover: coverSiegfried, file: "/siegfried-saga-livro-ii.pdf", description: "A lendária saga do herói germânico Siegfried: o duelo com o dragão Fafnir, a conquista do tesouro dos Nibelungos, a espada Balmung e o amor por Krimilda. Uma jornada épica pelas florestas e montanhas nórdicas. Edição ilustrada de luxo da série Heróis Épicos. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Jasão e os Argonautas — Livro III", author: "Rafael S. L. Aguiar", cover: coverJasao, file: "/jasao-argonautas-livro-iii.pdf", description: "A lendária expedição de Jasão e os Argonautas a bordo do navio Argo em busca do Velocino de Ouro. Enfrente monstros marinhos, harpias, dragões e os mistérios da Cólquida nesta épica jornada pela mitologia grega. Edição premium ilustrada da série Heróis Épicos. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Perseu — O Legado de Perseu, Livro IV", author: "Rafael S. L. Aguiar", cover: coverPerseu, file: "https://drive.google.com/file/d/1q6tg3Uhnk_XDLP6E7mmjC73A1riRVZtW/view?usp=drivesdk", description: "A jornada do herói filho de Zeus e Dânae: a profecia que o destinou à glória, a decapitação da Medusa com a espada harpe e o escudo espelhado, o resgate de Andrômeda das garras do monstro marinho e a fundação de Micenas. Uma saga sobre coragem, destino e o legado eterno de um semideus. Edição premium ilustrada da série Heróis Épicos — Livro IV. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: A Eneida — A Jornada de Eneias, Livro V", author: "Rafael S. L. Aguiar", cover: coverEneida, file: "/eneida-jornada-de-eneias.pdf", description: "A épica saga do herói troiano Eneias após a queda de Troia: a fuga das chamas carregando o pai Anquises, a longa travessia pelo Mediterrâneo, o trágico amor por Dido em Cartago, a descida ao mundo dos mortos e a fundação dos alicerces que dariam origem a Roma. Uma jornada sobre destino, dever e a glória de fundar uma civilização. Edição premium ilustrada da série Heróis Épicos — Livro V. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: A Epopeia de Gilgamesh, Livro VI", author: "Rafael S. L. Aguiar", cover: coverGilgamesh, file: "/gilgamesh-epopeia.pdf", description: "A mais antiga epopeia da humanidade revisitada: Gilgamesh, o rei-tirano de Uruk, encontra em Enkidu o amigo que humaniza seu coração. Juntos enfrentam Humbaba no Bosque dos Cedros e o Touro Celeste enviado por Ishtar. Diante da morte do companheiro, Gilgamesh parte em busca da imortalidade e descobre, nas águas do dilúvio e nas tábuas de argila, a sabedoria sobre o que torna uma vida eterna. Edição premium ilustrada da série Heróis Épicos — Livro VI. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Teseu e o Minotauro, Livro VII", author: "Rafael S. L. Aguiar", cover: coverTeseu, file: "https://drive.google.com/file/d/1R_6Yr4zyU1dAgtiNS277Vt7DohG8r6YD/view?usp=drivesdk", description: "A lendária jornada do herói ateniense Teseu: filho do rei Egeu, ele se oferece como tributo a Creta para enfrentar o Minotauro no labirinto construído por Dédalo. Com o fio de Ariadne guiando seu caminho e a coragem como única arma diante da fera, Teseu encara o monstro de cabeça de touro e o destino de toda Atenas. Uma saga sobre engenho, amor e o preço da glória. Edição premium ilustrada da série Heróis Épicos — Livro VII. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Antígona de Sófocles, Livro VIII", author: "Sófocles", cover: coverAntigona, file: "https://docs.google.com/document/d/1kXp5x4PnuPeVjpG8Uo3H939kwVq39Clv/edit?usp=drivesdk&ouid=108194703313871147127&rtpof=true&sd=true", description: "A imortal tragédia de Sófocles: Antígona desafia o decreto do rei Creonte para honrar seu irmão Polinices com o sepultamento sagrado. Entre a lei dos homens e a lei dos deuses, a heroína tebana enfrenta o tirano e o próprio destino, num confronto que ecoa por séculos como símbolo da consciência diante da injustiça. Edição da série Heróis Épicos — Livro VIII. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Édipo Rei de Sófocles, Livro IX", author: "Sófocles", cover: coverEdipo, file: "https://drive.google.com/file/d/1-b7aWbB9y4cuhDN8DTQmECbCA6oOvQs6/view?usp=drivesdk", description: "A trágica história de Édipo, rei de Tebas: diante da peste que assola a cidade, ele jura desvendar o assassino do rei Laio sem saber que persegue a si mesmo. Entre a profecia do oráculo de Delfos, o enigma da Esfinge e a verdade insuportável sobre suas origens, Édipo encarna o herói que cega os próprios olhos para enxergar o destino. Edição da série Heróis Épicos — Livro IX. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: A Lenda de Beowulf, Livro X", author: "Rafael S. L. Aguiar", cover: coverBeowulf, file: "/A_Lenda_de_Beowulf.pdf", description: "A mais antiga epopeia da língua inglesa em edição completa de luxo: Beowulf, o herói dos gautas, atravessa o mar para libertar o salão de Heorot do monstro Grendel. Após vencer a fera e sua mãe vingativa nas profundezas do pântano, retorna como rei e, décadas depois, encara seu destino final no duelo contra o dragão que ameaça seu povo. Uma saga nórdica sobre coragem, honra, lealdade e a glória eterna conquistada na batalha. Edição premium ilustrada da série Heróis Épicos — Livro X. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Sansão — O Herói Hebreu e a Força do Deus Vivo, Livro XI", author: "Rafael S. L. Aguiar", cover: coverSansao, file: "/sansao-heroi-hebreu.pdf", description: "A poderosa saga de Sansão em edição especial de luxo: escolhido desde o ventre para ser nazireu do Senhor, ele enfrenta leões, exércitos e a própria fraqueza humana até o momento supremo no templo dos filisteus. Entre vitórias prodigiosas, quedas dolorosas e redenção final, esta narrativa exalta a força que vem do Deus vivo. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XI. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Davi — O Homem Segundo o Coração de Deus, Livro XII", author: "Rafael S. L. Aguiar", cover: coverDavi, file: "/davi-homem-segundo-coracao-deus.pdf", description: "Edição Especial Premium dedicada a Davi, o pastor de Belém ungido por Samuel para ser rei de Israel. Da coragem juvenil ao enfrentar o gigante Golias no Vale de Elá — armado apenas com fé, funda e cinco pedras lisas — às harpas que aquietavam o espírito de Saul, das fugas no deserto às vitórias do reinado em Jerusalém, dos salmos de adoração às quedas e arrependimento profundo. Uma narrativa sobre fé, coragem e o coração que busca a Deus. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XII. Curadoria Letras e Páginas." },
  { title: "Persival e a Busca pelo Graal — Edição Especial de Luxo", author: "Rafael S. L. Aguiar", cover: coverPersival, file: "/persival-busca-graal.pdf", description: "Uma epopeia de cavalaria e fé em edição especial ilustrada com aquarelas originais. Acompanhe Persival, o jovem das florestas de Brocéliande, em sua jornada espiritual: do encontro com os cavaleiros do rei Artur na floresta encantada à investidura na Távola Redonda, da Ponte da Perdição à visão na catedral, do duelo com o Dragão Verde à Dama do Lago das Rosas, dos Mares Negros ao Torneio dos Corações Puros, até a revelação final do Santo Graal. Bordas ornamentadas, letras capitulares serigrafadas e o ar de um manuscrito iluminado medieval. Edição e curadoria de Rafael S. L. Aguiar para a série Contos e Mitos — Letras e Páginas." },
  { title: "Heróis Épicos: A Lenda de Arthur, Livro XIII", author: "Rafael S. L. Aguiar", cover: coverArthur, file: "/books/a-lenda-de-arthur.pdf", description: "A imortal saga do Rei Arthur em edição premium ilustrada: do menino que arranca Excalibur da pedra ao monarca que ergue Camelot e funda a Távola Redonda com seus cavaleiros — Lancelote, Gawain, Persival e Galaaz. Entre a sabedoria de Merlin, a Dama do Lago, a busca pelo Santo Graal, o amor proibido de Guinevere e a traição de Mordred na batalha de Camlann, esta é a epopeia da cavalaria, da honra e da promessa do rei que um dia retornará de Avalon. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XIII. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Musashi Minamoto — O Samurai das Duas Espadas, Livro XIV", author: "Rafael S. L. Aguiar", cover: coverMusashi, file: "/books/musashi-minamoto.pdf", description: "Edição Especial de Luxo, com diagramação premium, dedicada a Musashi Minamoto, o lendário samurai das duas espadas. Da infância marcada pela disciplina do bushidō aos duelos que forjaram a técnica Niten Ichi-ryū — o caminho das duas espadas como uma só —, acompanhe sua jornada por montanhas enevoadas, templos zen, campos de batalha e o histórico encontro com Sasaki Kojirō na ilha de Ganryū. Entre a katana e o wakizashi, entre a tinta do pincel e o aço, Musashi escreve com sangue e silêncio o seu Livro dos Cinco Anéis. Uma saga sobre honra, vazio, estratégia e o caminho solitário do guerreiro. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XIV. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: El Cid — O Campeador, Livro XV", author: "Rafael S. L. Aguiar", cover: coverElCid, file: "/books/el-cid-campeador.pdf", description: "Edição Premium ilustrada com aquarelas originais que se integram aos capítulos da obra. Acompanhe a saga de Rodrigo Díaz de Vivar, o lendário El Cid Campeador: do exílio imposto pelo rei Afonso VI à conquista de Valência, dos duelos com cavaleiros mouros e cristãos à fidelidade inabalável a Castela. Empunhando as espadas Tizona e Colada, montado em seu fiel Babieca, o herói castelhano cavalga entre a honra, a fé e o destino. Uma epopeia medieval ibérica sobre lealdade, coragem e a glória de um homem cujo nome ecoa para além da morte. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XV. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Arjuna — O Arqueiro do Infinito, Livro XVI", author: "Rafael S. L. Aguiar", cover: coverArjuna, file: "/books/arjuna-arqueiro-infinito.pdf", description: "Edição de Luxo ilustrada dedicada a Arjuna, o príncipe Pandava do Mahabharata e maior arqueiro de todos os tempos. Empunhando o arco divino Gandiva, ele enfrenta dilemas morais no campo de Kurukshetra, recebe de Krishna — seu condutor de carros — a sabedoria eterna do Bhagavad Gita e ergue suas flechas contra parentes, mestres e o próprio destino. Entre ascetismo no Himalaia, batalhas cósmicas e a busca pelo dharma, esta é a saga de um herói que aprende que vencer o mundo é, antes, vencer a si mesmo. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XVI. Curadoria Letras e Páginas." },
  { title: "Heróis Épicos: Rostan — O Escudo Indestrutível da Pérsia, Livro XVII", author: "Rafael S. L. Aguiar", cover: coverRostan, description: "Edição de Luxo dedicada a Rostan, o maior herói da antiga Pérsia, imortalizado no Shahnameh. Vestido com o manto de pele de tigre (babr-e bayan) e empunhando seu escudo indestrutível e a maça pesada (gorz), ele cavalga o lendário corcel Rakhsh por desertos, montanhas e ruínas de Persépolis. Enfrenta os Sete Trabalhos (Haft Khan), o Div Branco, dragões e exércitos inteiros para defender o trono persa e seu povo. Entre a honra do guerreiro, a tragédia do duelo com Sohrab e a fidelidade ao reino, esta é a saga do escudo que jamais se rompeu. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XVII. Curadoria Letras e Páginas." },
   { title: "Heróis Épicos: O Triunfo dos 300 — Fé e Ferro (Gideão & Leônidas), Livro XVIII", author: "Rafael S. L. Aguiar", cover: cover300FeFerro, file: "/books/triunfo-300-fe-ferro.pdf", description: "Edição Especial Dupla que reúne dois dos maiores triunfos da história contra exércitos colossais. De um lado, GIDEÃO, o juiz hebreu que, com apenas 300 homens armados de tochas, cântaros e trombetas, desbarata a multidão midianita pela fé no Deus de Israel (Juízes 6–8). Do outro, LEÔNIDAS, o rei espartano que, com 300 hoplitas, enfrenta o império persa de Xerxes nas Termópilas e escreve com o próprio sangue uma das páginas mais imortais da coragem humana. Dois povos, duas épocas, dois símbolos eternos da resistência: a fé que move montanhas e o ferro que não se curva. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XVIII. Curadoria Letras e Páginas." },
   { title: "Heróis Épicos: Sundiata Keita — O Leão do Mali, Livro XIX", author: "Rafael S. L. Aguiar", cover: coverSundiataKeita, file: "/books/sundiata-keita-leao-mali.pdf", description: "Edição Especial dedicada a SUNDIATA KEITA, o lendário fundador do Império do Mali e herói maior da África Ocidental. Imortalizado pelos griots mandinkas na grande Epopeia de Sundiata, ele nasce paralítico, é desprezado pela corte, mas se ergue do chão para reconquistar o trono usurpado e libertar seu povo do tirano Soumaoro Kanté na batalha de Kirina (1235). Com a coragem do leão que lhe dá o nome, funda um império que brilharia por séculos sobre Niani, Tombuctu e Djenné, e estabelece a Kouroukan Fouga — uma das mais antigas cartas de direitos humanos da história. Esta é a saga do menino que rastejava e se tornou rei dos reis. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XIX. Curadoria Letras e Páginas." },
   { title: "Heróis Épicos: Mulan — Família, Honra e Lealdade, Livro XXI", author: "Rafael S. L. Aguiar", cover: coverMulan, file: "/books/mulan-familia-honra-lealdade.pdf", description: "Edição de Luxo em aquarela serigrafada dedicada a HUA MULAN, a heroína imortal da China antiga. Quando o imperador convoca todas as famílias para a guerra contra os invasores do norte e seu pai idoso é chamado às armas, Mulan corta os longos cabelos, veste a armadura e parte em seu lugar — disfarçada de homem, montada em seu cavalo de batalha. Por doze anos serve nos exércitos imperiais sem que ninguém descubra seu segredo, conquistando vitórias, lealdade e a admiração dos generais. Quando lhe oferecem títulos e cargos no palácio, ela pede apenas um cavalo veloz para voltar para casa. Esta é a saga de coragem, devoção filial e fidelidade que atravessou os séculos desde a Balada de Mulan até os dias de hoje — o coração de uma mulher que carregou a honra de uma família inteira. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XXI. Curadoria Letras e Páginas." },
    { title: "Heróis Épicos: Atalanta — Uma Flecha de Ouro, Livro XX", author: "Rafael S. L. Aguiar", cover: coverAtalanta, file: "/books/atalanta-flecha-de-ouro.pdf", description: "Edição de Luxo em aquarela serigrafada dedicada a ATALANTA, a mais veloz das heroínas gregas. Abandonada ao nascer por ser mulher, é amamentada por uma ursa e criada por caçadores nas florestas da Arcádia, tornando-se a melhor arqueira de seu tempo. Sob a proteção de Ártemis, fere de morte o monstruoso Javali de Cálidon, vence os heróis na luta livre durante os jogos fúnebres de Pélias, embarca com os Argonautas em busca do Velocino de Ouro e desafia todos os pretendentes a uma corrida fatal — até que três maçãs douradas de Afrodite, lançadas por Hipômenes, decidem seu destino. Esta é a saga da mulher que correu mais que o vento e cuja flecha de ouro atravessou a própria mitologia. Edição e adaptação de Rafael S. L. Aguiar para a série Heróis Épicos — Livro XX. Curadoria Letras e Páginas." },
     { title: "Heróis Épicos: Guilherme Tell — A Seta da Liberdade, Livro XXIII", author: "Rafael S. L. Aguiar", cover: coverGuilhermeTell, file: "/books/guilherme-tell-seta-da-liberdade.pdf", description: "Edição Premium em aquarela serigrafada dedicada a GUILHERME TELL (Wilhelm Tell), o lendário besteiro suíço que se tornou símbolo eterno da luta pela liberdade. Nas montanhas dos cantões alpinos, sob o jugo do tirânico bailio austríaco Hermann Gessler — representante dos Habsburgos —, o camponês de Bürglen se recusa a curvar-se diante do chapéu do governador erguido como símbolo de submissão na praça de Altdorf. Como castigo, é forçado ao mais cruel dos desafios: acertar com sua besta uma maçã sobre a cabeça do próprio filho, Walter. A flecha cumpre seu destino — mas a segunda, escondida na túnica, estava destinada ao tirano. Da fuga pelo lago dos Quatro Cantões em meio à tempestade ao juramento do Rütli e à morte de Gessler na garganta de Küssnacht, esta é a saga que acendeu a chama da Confederação Suíça e ecoou nos versos de Schiller e na ópera de Rossini como hino imortal da liberdade dos povos. Adaptação de Rafael S. L. Aguiar — Edição Premium da série Heróis Épicos — Livro XXIII. Curadoria Letras e Páginas." },
     { title: "Heróis Épicos: Joana D'Arc — Fogo e Liberdade, Livro XXII", author: "Rafael S. L. Aguiar", cover: coverJoanaDarc, file: "/books/joana-darc-fogo-e-liberdade.pdf", description: "Edição Premium em aquarela serigrafada dedicada a JOANA D'ARC, a Donzela de Orléans, a camponesa de Domrémy que aos dezessete anos vestiu a armadura, ergueu o estandarte branco bordado com lírios e conduziu os exércitos da França à vitória contra o invasor inglês durante a Guerra dos Cem Anos. Guiada pelas vozes de São Miguel, Santa Catarina e Santa Margarida, libertou Orléans em nove dias, coroou o rei Carlos VII em Reims e enfrentou em campo aberto o terrível CAVALEIRO NEGRO, símbolo das trevas que se opunham à sua missão. Em meio aos céus em chamas e ao rugido do DRAGÃO que sobrevoava os campos de batalha, Joana fez do fogo a sua linguagem e da liberdade o seu juramento — até ser traída, vendida e queimada viva em Ruão, transformando-se em santa, mártir e símbolo eterno da França. Esta é a saga da donzela que ouviu os céus e devolveu uma nação a si mesma. Adaptação de Rafael S. L. Aguiar — Edição Premium da série Heróis Épicos — Livro XXII. Curadoria Letras e Páginas." },
 ];

const heroesColors = [
  "from-[hsl(15,55%,22%)] to-[hsl(38,65%,42%)]",
  "from-[hsl(0,45%,20%)] to-[hsl(15,55%,38%)]",
  "from-[hsl(40,50%,22%)] to-[hsl(30,55%,38%)]",
  "from-[hsl(220,35%,20%)] to-[hsl(210,40%,35%)]",
  "from-[hsl(120,30%,18%)] to-[hsl(100,35%,32%)]",
];

const talesColors = [
  "from-[hsl(270,35%,20%)] to-[hsl(280,40%,35%)]",
  "from-[hsl(140,30%,20%)] to-[hsl(120,35%,35%)]",
  "from-[hsl(200,40%,22%)] to-[hsl(210,35%,38%)]",
  "from-[hsl(30,50%,22%)] to-[hsl(40,45%,38%)]",
  "from-[hsl(100,35%,18%)] to-[hsl(80,40%,32%)]",
];

const selfHelpBooks: ClassicBook[] = [
  { title: "Pare de Procrastinar — O manual para fazer o que deve ser feito", author: "Rafael S. L. Aguiar", year: "2026", description: "Um manual prático e acolhedor para vencer a procrastinação em todas as áreas da vida — saúde, educação, finanças, emocional e desenvolvimento pessoal. Com histórias reais, reflexões e estratégias para reprogramar o cérebro, transformar ideias em ação e parar de adiar o que realmente importa. Por Rafael S. L. Aguiar.", cover: coverPareDeProcrastinar, file: "/pare-de-procrastinar.pdf" },
];

const dystopiaBooks: ClassicBook[] = [
  { title: "O Cromossomo de Ferro (O Tacão de Ferro)", author: "Jack London", year: "1908", description: "Uma das primeiras distopias modernas. Retrata a ascensão de uma oligarquia tirânica nos EUA que esmaga a liberdade individual.", cover: coverTacaoFerro },
  { title: "A Máquina Parou", author: "E.M. Forster", year: "1909", description: "A humanidade vive no subsolo, isolada em quartos individuais, comunicando-se apenas por telas. Todas as necessidades são supridas por 'A Máquina'.", cover: coverMaquinaParou },
  { title: "Nós", author: "Yevgeny Zamyatin", year: "1924", description: "No 'Estado Único', as paredes são de vidro para que ninguém tenha privacidade. A individualidade é uma doença.", cover: coverNos },
  { title: "O Último Homem", author: "Mary Shelley", year: "1826", description: "O primeiro grande romance pós-apocalíptico. Uma praga imparável varre o mundo no final do século XXI.", cover: coverUltimoHomem },
  { title: "R.U.R. (Robôs Universais de Rossum)", author: "Karel Čapek", year: "1920", description: "A peça onde surgiu o termo 'Robô'. Máquinas orgânicas criadas para servir ganham consciência e decidem exterminar seus criadores.", cover: coverRur },
  { title: "A Nuvem Púrpura", author: "M.P. Shiel", year: "1901", description: "Uma névoa tóxica mata toda a vida na Terra, restando apenas um homem vagando por cidades desertas.", cover: coverNuvemPurpura },
  { title: "Paris no Século XX", author: "Júlio Verne", year: "1863", description: "Uma Paris tecnológica onde a cultura foi assassinada pelo lucro. Poetas e músicos são párias numa sociedade que só valoriza o que pode ser vendido.", cover: coverParisSeculoXX },
  { title: "Kallocain", author: "Karin Boye", year: "1940", description: "Um cientista cria um soro que obriga as pessoas a confessarem seus pensamentos. O Estado passa a punir 'pensamentos proibidos'.", cover: coverKallocain },
  { title: "A Guerra das Salamandras", author: "Karel Čapek", year: "1936", description: "Criaturas marinhas inteligentes armadas pelos humanos acabam explodindo os continentes para criar mais espaço para viver.", cover: coverGuerraSalamandras },
  { title: "A Máquina do Tempo", author: "H.G. Wells", year: "1895", description: "No futuro distante, a humanidade se degenerou em duas raças: os Eloi e os Morlocks.", cover: coverMaquinaTempo },
];

const classicColors = [
  "from-[hsl(15,60%,32%)] to-[hsl(38,70%,50%)]",
  "from-[hsl(350,45%,30%)] to-[hsl(15,60%,42%)]",
  "from-[hsl(24,15%,18%)] to-[hsl(38,50%,40%)]",
  "from-[hsl(200,40%,25%)] to-[hsl(200,30%,45%)]",
  "from-[hsl(150,30%,25%)] to-[hsl(150,20%,40%)]",
  "from-[hsl(280,30%,28%)] to-[hsl(280,25%,45%)]",
];

const dystopiaColors = [
  "from-[hsl(0,50%,15%)] to-[hsl(0,40%,30%)]",
  "from-[hsl(270,40%,15%)] to-[hsl(300,30%,28%)]",
  "from-[hsl(210,30%,12%)] to-[hsl(210,40%,25%)]",
  "from-[hsl(30,20%,10%)] to-[hsl(15,40%,22%)]",
  "from-[hsl(180,20%,12%)] to-[hsl(160,30%,22%)]",
];

interface ClassicsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: string;
}

const BookGrid = ({ books, colors, onRequestDownload, onRequestPaidDownload }: { books: ClassicBook[]; colors: string[]; onRequestDownload: (book: ClassicBook) => void; onRequestPaidDownload?: (book: ClassicBook) => void }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
      {books.map((book, idx) => {
        const gradient = colors[idx % colors.length];
        return (
          <div
            key={idx}
            className="group flex flex-col rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
          >
            {book.cover ? (
              <div className="aspect-[2/3] overflow-hidden">
                <img src={book.cover} alt={book.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            ) : (
            <div
              className={`aspect-[2/3] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-3 text-center`}
            >
              <span className="text-[hsl(35,40%,95%)] font-display text-sm font-semibold leading-tight drop-shadow-md">
                {book.title}
              </span>
              <span className="text-[hsl(35,40%,95%)]/70 font-body text-[10px] mt-1.5">
                {book.author}
              </span>
              {book.year && (
                <span className="text-[hsl(35,40%,95%)]/50 font-body text-[9px] mt-1">
                  ({book.year})
                </span>
              )}
            </div>
            )}

            <div className="p-3 flex flex-col gap-2 flex-1">
              <h4 className="font-display text-xs font-semibold text-foreground leading-tight line-clamp-2">
                {book.title}
              </h4>
              <p className="font-body text-[10px] text-muted-foreground">
                {book.author}
              </p>
              {book.description && (
                <p className="font-body text-[10px] text-muted-foreground/80 line-clamp-3 leading-relaxed">
                  {book.description}
                </p>
              )}
              {book.file ? (
                book.isPaid && onRequestPaidDownload ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-auto gap-1.5 text-xs border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => onRequestPaidDownload(book)}
                  >
                    <Coffee className="w-3 h-3" />
                    Café + Download
                  </Button>
                ) : (
                  (() => {
                    const isExternal = /^https?:\/\//i.test(book.file);
                    return (
                      <div className="mt-auto flex flex-col gap-1.5">
                        <Button
                          variant="default"
                          size="sm"
                          className="gap-1.5 text-xs"
                          asChild
                        >
                          <a href={book.file} target="_blank" rel="noopener noreferrer">
                            <BookOpen className="w-3 h-3" />
                            Ler online
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1.5 text-xs"
                          asChild
                        >
                          {isExternal ? (
                            <a href={book.file} target="_blank" rel="noopener noreferrer">
                              <Download className="w-3 h-3" />
                              Abrir no Drive
                            </a>
                          ) : (
                            <a href={book.file} download>
                              <Download className="w-3 h-3" />
                              Download
                            </a>
                          )}
                        </Button>
                      </div>
                    );
                  })()
                )
              ) : (
                <p className="mt-auto font-body text-[10px] text-muted-foreground italic text-center">
                  Em breve
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const LeadCaptureForm = ({ book, onSuccess, onCancel }: { book: ClassicBook; onSuccess: () => void; onCancel: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const slug = book.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      const { error } = await supabase.from("book_leads").insert({
        email: email.trim(),
        name: name.trim() || null,
        book_slug: slug,
      });
      if (error) throw error;
      toast.success("Obrigado! Seu download começará em breve.");
      onSuccess();
    } catch {
      toast.error("Erro ao salvar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onCancel}>
      <div className="bg-card rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl border border-border" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          Download grátis
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Informe seus dados para baixar <strong>{book.title}</strong>.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label className="font-body text-sm font-medium text-foreground">Nome (opcional)</label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
            />
          </div>
          <div className="space-y-1">
            <label className="font-body text-sm font-medium text-foreground">E-mail *</label>
            <input
              type="email"
              required
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
            />
          </div>
          <div className="flex gap-2 pt-1">
            <Button type="button" variant="outline" size="sm" className="flex-1" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit" size="sm" className="flex-1 gap-1.5" disabled={loading}>
              <Download className="w-3 h-3" />
              {loading ? "Enviando..." : "Baixar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DonationGateModal = ({ book, onSuccess, onCancel }: { book: ClassicBook; onSuccess: () => void; onCancel: () => void }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    toast.success("Chave PIX copiada!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleConfirmDonation = () => {
    toast.success("Obrigado pela doação! Seu download começará em breve. ❤️");
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onCancel}>
      <div className="bg-card rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl border border-border" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
          <Coffee className="w-5 h-5 text-primary" />
          Pague um café e baixe o livro
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Esta é uma edição especial com curadoria de <strong>Rafael S. L. Aguiar</strong>. Apoie o autor com uma doação de <strong>R$ 5,00</strong> via PIX para baixar <strong>{book.title}</strong>.
        </p>

        <div className="bg-primary/10 rounded-lg p-4 text-center space-y-1 mb-4">
          <Coffee className="w-8 h-8 text-primary mx-auto" />
          <p className="font-display text-2xl font-bold text-primary">R$ 5,00</p>
          <p className="font-body text-xs text-muted-foreground">Pague um café ☕</p>
        </div>

        <div className="space-y-2 mb-4">
          <p className="font-body text-sm font-medium text-foreground">Chave PIX (e-mail):</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-muted px-3 py-2 rounded text-xs font-mono break-all">
              {PIX_KEY}
            </code>
            <Button variant="outline" size="icon" onClick={handleCopyPix} title="Copiar chave PIX" className="shrink-0">
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="flex gap-2">
          <Button type="button" variant="outline" size="sm" className="flex-1" onClick={onCancel}>
            Cancelar
          </Button>
          <Button size="sm" className="flex-1 gap-1.5" onClick={handleConfirmDonation}>
            <Download className="w-3 h-3" />
            Já doei, baixar!
          </Button>
        </div>

        <p className="font-body text-[10px] text-center text-muted-foreground mt-3">
          Obrigado pelo apoio! Cada café nos ajuda a continuar produzindo conteúdo de qualidade. ❤️
        </p>
      </div>
    </div>
  );
};

const ClassicsModal = ({ open, onOpenChange, defaultTab = "classicos" }: ClassicsModalProps) => {
  const [selectedBook, setSelectedBook] = useState<ClassicBook | null>(null);
  const [paidBook, setPaidBook] = useState<ClassicBook | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const handleDownloadSuccess = () => {
    if (selectedBook?.file) {
      const a = document.createElement("a");
      a.href = selectedBook.file;
      a.download = "";
      a.click();
    }
    setSelectedBook(null);
  };

  const handlePaidDownloadSuccess = () => {
    if (paidBook?.file) {
      const a = document.createElement("a");
      a.href = paidBook.file;
      a.download = "";
      a.click();
    }
    setPaidBook(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="flex items-center gap-2 font-display text-2xl">
            <Library className="w-6 h-6 text-primary" />
            Biblioteca de Domínio Público
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Obras de domínio público disponíveis para download gratuito em PDF.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} key={defaultTab} className="px-6 pb-6">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="classicos" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <Library className="w-4 h-4" />
              Clássicos
            </TabsTrigger>
            <TabsTrigger value="contos" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <BookOpenText className="w-4 h-4" />
              Contos e Lendas
            </TabsTrigger>
            <TabsTrigger value="herois" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <Sword className="w-4 h-4" />
              Heróis Épicos
            </TabsTrigger>
            <TabsTrigger value="artigos" className="flex-1 gap-1.5 text-xs sm:text-sm">
              <FileText className="w-4 h-4" />
              Artigos do Blog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classicos" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              <BookGrid books={classicBooks} colors={classicColors} onRequestDownload={setSelectedBook} onRequestPaidDownload={setPaidBook} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="herois" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              <div className="mb-4 p-3 rounded-lg border border-primary/30 bg-primary/5">
                <p className="font-display text-xs font-semibold text-foreground mb-1.5">
                  ⚔️ Série Heróis Épicos — {heroesBooks.length} {heroesBooks.length === 1 ? "livro" : "livros"} disponíveis
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {heroesBooks.map((b) => (
                    <span key={b.title} className="text-[10px] bg-primary/15 text-primary px-2 py-0.5 rounded-full font-body">
                      ✓ {b.title.replace("Heróis Épicos: ", "").split(" — ")[0]}
                    </span>
                  ))}
                </div>
              </div>
              <BookGrid books={heroesBooks} colors={heroesColors} onRequestDownload={setSelectedBook} onRequestPaidDownload={setPaidBook} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="contos" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              <BookGrid books={talesBooks} colors={talesColors} onRequestDownload={setSelectedBook} onRequestPaidDownload={setPaidBook} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="artigos" className="mt-0">
            <ScrollArea className="h-[58vh] pr-3">
              {!selectedArticle && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    title: "A Revolução dos Bichos",
                    author: "George Orwell",
                    cover: coverRevolucaoBichos,
                    subtitle: "O chicote mudou de mãos, mas o peso continua o mesmo",
                    published: true,
                  },
                  {
                    title: "O Médico e o Monstro",
                    author: "Robert L. Stevenson",
                    cover: coverMedicoMonstro,
                    subtitle: "A droga da dualidade e o álibi do mal",
                    published: true,
                  },
                  {
                    title: "Série Heróis Épicos",
                    author: "Rafael S. L. Aguiar",
                    cover: coverHeroisEpicos,
                    subtitle: "O maior catálogo de heróis da literatura universal — atualizado 10/05/2026",
                    published: true,
                  },
                   {
                     title: "A Metamorfose",
                     author: "Franz Kafka",
                     cover: coverMetamorfose,
                     subtitle: "Quem é o monstro: Gregor ou a família?",
                     published: true,
                   },
                   {
                     title: "Pare de Procrastinar",
                     author: "Rafael S. L. Aguiar",
                     cover: coverPareDeProcrastinar,
                     subtitle: "O manual definitivo para vencer a procrastinação",
                     published: true,
                   },
                   {
                     title: "Literatura Futurística",
                     author: "Rafael S. L. Aguiar",
                     cover: coverLiteraturaFuturistica,
                     subtitle: "Distopias, utopias, sci-fi e cyberpunk no Letras & Páginas",
                     published: true,
                   },
                 ].map((artigo, idx) => (
                  <div
                    key={idx}
                    className={`group flex flex-col rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer ${!artigo.published ? 'opacity-60' : ''}`}
                    onClick={() => {
                      if (artigo.published) {
                        setSelectedArticle(artigo.title);
                      }
                    }}
                  >
                    <div className="aspect-[2/3] overflow-hidden">
                      <img src={artigo.cover} alt={artigo.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 flex flex-col gap-2 flex-1">
                      <h4 className="font-display text-xs font-semibold text-foreground leading-tight line-clamp-2">
                        {artigo.title}
                      </h4>
                      <p className="font-body text-[10px] text-muted-foreground">{artigo.author}</p>
                      <p className="font-body text-[10px] text-muted-foreground/80">{artigo.subtitle}</p>
                      <p className={`mt-auto font-body text-[10px] font-medium italic text-center ${artigo.published ? 'text-green-600' : 'text-primary'}`}>
                        {artigo.published ? "Ler artigo" : "Em breve"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>}

              {selectedArticle === "Série Heróis Épicos" && (
                <div className="mt-6 p-5 rounded-lg border border-border bg-card">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4 underline"
                  >
                    ← Voltar aos artigos
                  </button>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Série Heróis Épicos: o maior catálogo de heróis da literatura universal — um presente de aniversário aos leitores
                  </h3>
                  <p className="font-body text-[10px] text-muted-foreground mb-4">
                    Por Rafael S. L. Aguiar · Atualizado em 10/05/2026
                  </p>
                  <div className="font-body text-sm text-foreground/90 space-y-4 leading-relaxed">
                    <p>
                      Há livros que nascem de um projeto. Outros, de uma obsessão. A <strong>Série Heróis Épicos</strong> nasceu das duas coisas — e, neste mês de maio, em que completo <strong>40 anos de vida</strong>, ela se transforma em algo ainda maior: um presente que ofereço aos leitores do <em>Letras &amp; Páginas</em>. Hoje, com orgulho e gratidão, posso afirmar que reunimos <strong>o maior catálogo de livros de heróis épicos da literatura universal e das culturas ao redor do mundo</strong> publicado em língua portuguesa, em edições ilustradas com aquarelas originais e diagramação de luxo.
                    </p>
                    <p>
                      Cada volume foi pesquisado nas fontes clássicas, recontado com fôlego de epopeia e ilustrado à mão para que o leitor sinta, ao virar cada página, o peso dos escudos, o brilho das espadas e o silêncio dos templos. É a literatura como ela merece ser tratada: com elegância, carinho e respeito pelos séculos que sustentam cada história.
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Vinte e um volumes, vinte e uma civilizações</h4>
                    <p>
                      A série atravessa continentes e milênios. Da Mesopotâmia à Mali, de Tebas a Camelot, do Mediterrâneo ao Japão feudal, da China imperial ao Mahabharata indiano — nenhum outro catálogo brasileiro reúne tantos heróis sob a mesma curadoria editorial:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>Grécia clássica:</strong> Aquiles (a ira de Troia), Hércules (os doze trabalhos), Ulisses (o regresso a Ítaca), Jasão e os Argonautas (o Velocino de Ouro), Perseu (a Medusa e Andrômeda), Teseu (o Minotauro no labirinto) e <strong>Atalanta — Uma Flecha de Ouro</strong>, a heroína que correu mais rápido que os homens e abateu o javali de Cálidon.</li>
                      <li><strong>Tragédia grega:</strong> Antígona e Édipo Rei, de Sófocles, em edições que preservam o vigor do teatro ateniense.</li>
                      <li><strong>Roma:</strong> Eneias e a fundação mítica do Império, na <em>Eneida</em>.</li>
                      <li><strong>Mesopotâmia:</strong> Gilgamesh, a mais antiga epopeia da humanidade, e a busca pela imortalidade.</li>
                      <li><strong>Tradição hebraica e bíblica:</strong> Sansão, o nazireu da força sobrenatural, e Davi, o pastor que enfrentou Golias com fé, funda e cinco pedras lisas — além do <strong>Triunfo dos 300: Fé e Ferro</strong>, que aproxima Gideão e Leônidas em uma só meditação sobre coragem.</li>
                      <li><strong>Norte da Europa:</strong> Beowulf, herói dos gautas contra Grendel e o dragão, e Siegfried, o matador do dragão Fafnir nas florestas germânicas.</li>
                      <li><strong>Mundo arturiano:</strong> A Lenda de Arthur, com Excalibur, Merlin e a Távola Redonda, e <em>Persival e a Busca pelo Graal</em> em edição especial de luxo.</li>
                      <li><strong>Ibéria medieval:</strong> El Cid Campeador, com Tizona e Colada, cavalgando Babieca entre cristãos e mouros.</li>
                      <li><strong>Pérsia:</strong> Rostan, o escudo indestrutível do <em>Shahnameh</em>.</li>
                      <li><strong>Índia:</strong> Arjuna, o arqueiro do infinito, herói do <em>Mahabharata</em>, em edição premium.</li>
                      <li><strong>Japão feudal:</strong> Musashi Minamoto, o samurai das duas espadas, autor do <em>Livro dos Cinco Anéis</em>.</li>
                      <li><strong>China imperial:</strong> <strong>Mulan — Família, Honra e Lealdade</strong>, a guerreira que tomou o lugar do pai na guerra e serviu doze anos disfarçada nos exércitos do imperador, transformando a devoção filial em epopeia.</li>
                      <li><strong>África:</strong> <strong>Sundiata Keita, o Leão do Mali</strong>, fundador do maior império da África Ocidental — uma voz épica que faltava nas estantes brasileiras.</li>
                    </ul>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Por que reunir tantos heróis?</h4>
                    <p>
                      Porque o herói épico é uma linguagem que toda cultura humana inventou — e, até hoje, nenhuma editora havia reunido tantas dessas vozes em um único catálogo, com o mesmo padrão de cuidado. Quis mostrar que <strong>o herói grego e o herói africano, o samurai e o cavaleiro, o pastor de Belém e o arqueiro indiano</strong> dialogam entre si: todos enfrentam o medo, o destino, a perda e a tentação da glória. Mudam os deuses, mudam os cenários — a coragem é a mesma.
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Edições de luxo, ilustradas em aquarela</h4>
                    <p>
                      Cada livro recebeu tratamento de obra-prima: capas em estilo serigrafia ou aquarela de luxo, miolo diagramado com tipografia clássica, capítulos abertos por ilustrações originais que traduzem em cor e gesto a dramaticidade de cada cena — o brilho do escudo de Aquiles, o ouro do arco de Atalanta, o céu vermelho sobre Niani, o silêncio zen de Musashi. Nada foi terceirizado: tudo foi pensado, editado e revisado com o mesmo carinho com que se folheia um livro raro.
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Um presente de 40 anos</h4>
                    <p>
                      Faço 40 anos este mês. E, em vez de pedir presentes, prefiro oferecer um. Toda a Série Heróis Épicos está disponível na <strong>Biblioteca Pública</strong> do <em>Letras &amp; Páginas</em> — para ler online, baixar e compartilhar. Que estes vinte volumes sejam, para cada leitor, o que sempre foram para mim: um lembrete de que ainda vale a pena ser corajoso, fiel e generoso, mesmo num mundo que parece ter esquecido seus heróis.
                    </p>
                    <p className="italic text-foreground/80">
                      Boa leitura — e que a jornada dos heróis seja também a sua.<br />
                      <strong>Rafael S. L. Aguiar</strong>, editor e curador do Blog Letras &amp; Páginas.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {["#heróisépicos", "#mitologia", "#literaturauniversal", "#aquarela", "#ediçãodeluxo", "#bibliotecapública", "#LetrasEPáginas", "#RafaelAguiar", "#40anos"].map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedArticle === "Literatura Futurística" && (
                <div className="mt-6 p-5 rounded-lg border border-border bg-card">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4 underline"
                  >
                    ← Voltar aos artigos
                  </button>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Literatura Futurística: Distopias, Utopias, Sci-Fi e Cyberpunk — quando a ficção pensa o amanhã
                  </h3>
                  <p className="font-body text-[10px] text-muted-foreground mb-4">
                    Por Rafael S. L. Aguiar · Publicado em 10/05/2026
                  </p>
                  <div className="font-body text-sm text-foreground/90 space-y-4 leading-relaxed">
                    <p>
                      Toda grande época precisa de uma literatura que olhe de frente para o seu próprio futuro. A nossa não é diferente. <strong>Inteligência artificial, vigilância de massa, mudança climática, redes sociais, biotecnologia, colapso de instituições</strong> — tudo isso já é matéria de romance antes mesmo de ser manchete. É aí que entram a <strong>literatura futurística</strong>, as <strong>distopias</strong>, as <strong>utopias</strong> e a <strong>literatura especulativa</strong>: gêneros que não tentam adivinhar o amanhã, mas sim <em>pensar</em> o amanhã antes que ele nos atropele.
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">O que é, afinal, literatura especulativa?</h4>
                    <p>
                      Chamamos de <strong>literatura especulativa</strong> o grande guarda-chuva que abriga ficção científica, distopia, utopia, cyberpunk, pós-apocalíptico, ucronias e fantasias filosóficas. O que une todos esses gêneros é uma única pergunta: <em>"e se?"</em>. E se um algoritmo prendesse pessoas pelos seus pensamentos? E se a humanidade tivesse uma única chance de recomeçar depois de quase se destruir? E se a esperança virasse mercadoria? Cada livro é um experimento mental — uma utopia testando o melhor de nós, uma distopia testando o pior.
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Distopia: o espelho deformado do presente</h4>
                    <p>
                      A distopia não é uma profecia: é um diagnóstico. Quando Orwell escreveu <em>1984</em> e <em>A Revolução dos Bichos</em>, não estava prevendo o futuro — estava radicalizando o presente até a caricatura. É essa mesma tradição que move duas das obras autorais publicadas aqui no <em>Letras &amp; Páginas</em>:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong>Os Atribulados</strong> — uma distopia social brasileira sobre famílias esmagadas pela burocracia, pela violência institucional e por um sistema que aprende a normalizar o sofrimento. Um livro sobre <em>resiliência ordinária</em> num país onde sobreviver já é um ato político.
                      </li>
                      <li>
                        <strong>O Crime Antecipado</strong> — Rio de Janeiro, 2050. Uma inteligência artificial pública prende cidadãos com base na <em>intenção</em> criminal: 99,8% de probabilidade já basta para a contenção preventiva. O livro pergunta o que sobra do livre-arbítrio quando o pensamento vira prova, e o que acontece com a justiça quando a margem de erro é tratada como falha de sistema. <em>Minority Report</em> encontra Foucault sob o céu carioca.
                      </li>
                    </ul>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Pós-apocalíptico e ficção científica: o recomeço como tema</h4>
                    <p>
                      Onde a distopia mostra a queda, a ficção científica pós-apocalíptica mostra o que se faz com os escombros. É o terreno de:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong>Impacto 2070, o Recomeço</strong> — uma fábula científica sobre a colisão entre tecnologia, fé e sobrevivência. Quando o mundo conhecido desaba, o que decide quem reconstrói: o poder, a esperança ou a memória? Sci-fi com alma humanista, na melhor tradição de Bradbury, Asimov e Saramago.
                      </li>
                    </ul>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Cyberpunk: neon, algoritmo e desigualdade</h4>
                    <p>
                      O cyberpunk é a estética visual desse pensamento crítico: cidades hiperconectadas, megacorporações no lugar do Estado, identidades híbridas entre carne e código, e ruas onde a chuva ácida brilha contra letreiros de neon. <strong>O Crime Antecipado</strong> bebe diretamente desse imaginário ao desenhar um Rio futuro em que drones substituem PMs, painéis holográficos julgam emoções e a "ordem pública" é mantida por uma IA que não conhece dúvida — só probabilidade.
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">E a utopia?</h4>
                    <p>
                      A utopia anda fora de moda — e talvez seja exatamente por isso que ela seja necessária. Toda distopia honesta carrega, em silêncio, a saudade de uma utopia possível: famílias inteiras, cidades justas, tecnologias a serviço da vida. Os livros do <em>Letras &amp; Páginas</em> não fingem que essa utopia é fácil; eles convidam o leitor a desejá-la com lucidez. <strong>Imaginar o melhor é o primeiro ato de resistência contra o pior.</strong>
                    </p>

                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Convite ao leitor</h4>
                    <p>
                      Tudo isso está aqui, ao alcance de um clique. Você pode <strong>ler online gratuitamente</strong> ou <strong>baixar em PDF</strong> os livros autorais de futurismo e distopia diretamente no blog:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><em>Os Atribulados</em> — distopia social brasileira</li>
                      <li><em>O Crime Antecipado</em> — cyberpunk jurídico no Rio de 2050</li>
                      <li><em>Impacto 2070, o Recomeço</em> — ficção científica pós-apocalíptica</li>
                    </ul>
                    <p>
                      Basta abrir a aba <strong>"Os meus livros"</strong> ou a <strong>Biblioteca Pública</strong> aqui no <em>Letras &amp; Páginas</em>, escolher o título e clicar em <em>"Ler online"</em> ou <em>"Baixar PDF"</em>. Leitura livre, partilha incentivada — porque pensar o futuro não pode ser privilégio de poucos.
                    </p>
                    <p className="italic text-foreground/80">
                      Que estes livros sejam, para você, o que sempre foram para mim: uma forma de imaginar o amanhã com coragem — e de exigir dele algo melhor.<br />
                      <strong>Rafael S. L. Aguiar</strong>, autor e curador do Blog Letras &amp; Páginas.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {["#literaturafuturística", "#distopia", "#utopia", "#ficçãocientífica", "#cyberpunk", "#pósapocalíptico", "#literaturaespeculativa", "#OsAtribulados", "#OCrimeAntecipado", "#Impacto2070", "#RafaelAguiar", "#LetrasEPáginas", "#livrosgrátis", "#PDFgrátis", "#bibliotecapública"].map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedArticle === "A Metamorfose" && (
                <div className="mt-6 p-5 rounded-lg border border-border bg-card">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4 underline"
                  >
                    ← Voltar aos artigos
                  </button>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Quem é o monstro: Gregor ou a família?
                  </h3>
                  <p className="font-body text-[10px] text-muted-foreground mb-4">
                    Por Professor Rafael S. L. Aguiar · 14/04/2026
                  </p>
                  <div className="font-body text-sm text-foreground/90 space-y-4 leading-relaxed">
                    <p>
                      Imagine acordar em uma manhã comum e descobrir que você se transformou em um inseto monstruoso. Logo você, o pilar da casa, o provedor que sustenta a família e cujo valor é medido estritamente pela sua capacidade de trabalho. De repente, você está reduzido a um ser asqueroso que "não serve para muita coisa".
                    </p>
                    <p>
                      Diante desse absurdo, o que aconteceria? Será que sua família cuidaria de você com compaixão? Estenderiam uma mão amiga ou o rejeitariam como um erro da natureza?
                    </p>
                    <p>
                      Franz Kafka utiliza essa premissa brilhante em um livro curto, mas com a densidade de um calhamaço. A obra é uma crítica feroz ao utilitarismo: a ideia de que o indivíduo só tem valor enquanto tem algo a oferecer à engrenagem da sociedade ou ao conforto do lar. No momento em que essa capacidade produtiva cessa, o sujeito torna-se descartável.
                    </p>
                    <p>
                      Ao fechar o livro, a pergunta que fica é um verdadeiro soco no estômago: se hoje você ficasse doente e deixasse de prover, sua família cuidaria de você pelo que você é, ou descartariam você assim como fizeram com Gregor Samsa?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Assista a resenha no blog Letras & Páginas:{" "}
                      <a href="https://www.youtube.com/watch?v=MGL_DhMl_KY" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                        Clique aqui
                      </a>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["#literatura", "#Kafka", "#Ametamorfose", "#criticasocial", "#filosofia", "#analiseliterária"].map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-4 p-4 rounded-md bg-muted/50 border border-border">
                      <p className="font-display text-xs font-semibold text-foreground mb-1">No próximo post...</p>
                      <p className="text-xs text-muted-foreground">
                        Se em A Metamorfose o indivíduo é descartado quando deixa de ser produtivo, o que acontece quando uma sociedade inteira decide que todos devem ser iguais, mas alguns acabam se tornando "mais iguais que os outros"? Na próxima semana, mergulharemos no pasto político de George Orwell para analisar A Revolução dos Bichos. Prepare-se: o chicote mudou de mãos, mas o peso nas costas continua o mesmo.
                      </p>
                      <p className="text-xs text-primary font-medium mt-2 italic">
                        Não perca a próxima análise aqui no Letras & Páginas!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedArticle === "A Revolução dos Bichos" && (
                <div className="mt-6 p-5 rounded-lg border border-border bg-card">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4 underline"
                  >
                    ← Voltar aos artigos
                  </button>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    A Revolução dos Bichos: O Chicote Mudou de Mãos, mas o Peso Continua o Mesmo
                  </h3>
                  <p className="font-body text-[10px] text-muted-foreground mb-4">
                    Por Professor Rafael S. L. Aguiar · 14/04/2026
                  </p>
                  <div className="font-body text-sm text-foreground/90 space-y-4 leading-relaxed">
                    <p>
                      Se em A Metamorfose de Kafka discutimos o descarte do indivíduo pela utilidade, na obra-prima de George Orwell, A Revolução dos Bichos, o cenário se expande: o que acontece quando a promessa de liberdade se torna uma nova forma de escravidão?
                    </p>
                    <p>
                      A premissa é universal. Cansados da exploração humana, os animais da Granja do Solar expulsam seu opressor sob a bandeira do Animalismo. O sonho era lindo: "Todos os bichos são iguais". Mas, conforme o tempo passa, a utopia apodrece. A inteligência dos porcos, que deveria servir à coletividade, torna-se a ferramenta de sua própria ascensão ao privilégio.
                    </p>
                    <p>
                      Orwell nos entrega uma anatomia da corrupção. Vemos Napoleão e sua cúpula reescreverem o passado e as leis para justificar seus excessos. O cavalo Sansão (Boxer), o trabalhador mais leal, ilustra a face mais cruel do sistema: ele trabalha até a exaustão e, quando não serve mais, é enviado ao abatedouro pelos próprios "companheiros".
                    </p>
                    <p>
                      A frase que encerra o livro é, talvez, a mais triste da literatura política: "Todos os bichos são iguais, mas alguns bichos são mais iguais que os outros". No final das contas, quando os porcos começam a andar sobre duas pernas e a vestir roupas, quem ainda consegue distinguir o porco do homem?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Assista nossas resenhas no blog Letras & Páginas:{" "}
                      <a href="https://www.youtube.com/watch?v=6HtxpnRi3J8" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                        Clique aqui
                      </a>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["#literatura", "#GeorgeOrwell", "#RevoluçãodosBichos", "#Distopia", "#Política", "#LetrasEPáginas", "#AnáliseLiterária"].map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-4 p-4 rounded-md bg-muted/50 border border-border">
                      <p className="font-display text-xs font-semibold text-foreground mb-1">No próximo post...</p>
                      <p className="text-xs text-muted-foreground">
                        Depois de observarmos como o poder corrompe o coletivo em Orwell, vamos mergulhar na dualidade do indivíduo. O que acontece quando a ciência tenta separar o bem do mal dentro de um único homem? Na próxima semana, exploraremos os segredos sombrios de O Médico e o Monstro, de Robert Louis Stevenson. Até onde vai a sua sombra quando ninguém está olhando?
                      </p>
                      <p className="text-xs text-primary font-medium mt-2 italic">
                        Não perca a próxima análise aqui no Letras & Páginas!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedArticle === "O Médico e o Monstro" && (
                <div className="mt-6 p-5 rounded-lg border border-border bg-card">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4 underline"
                  >
                    ← Voltar aos artigos
                  </button>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    O Médico e o Monstro: A Droga da Dualidade e o Álibi do Mal
                  </h3>
                  <p className="font-body text-[10px] text-muted-foreground mb-4">
                    Por Professor Rafael S. L. Aguiar · 15/04/2026
                  </p>
                  <div className="font-body text-sm text-foreground/90 space-y-4 leading-relaxed">
                    <p>
                      Até onde você iria para libertar seus desejos mais sombrios sem sentir o peso da culpa? Na puritana sociedade vitoriana, onde as aparências eram a moeda de troca mais valiosa, Robert Louis Stevenson nos apresentou um espelho perturbador da alma humana em O Médico e o Monstro.
                    </p>
                    <p>
                      A trama nos confronta com uma questão visceral: o uso de uma substância que não apenas transforma o corpo, mas revela o que há de pior no indivíduo. Dr. Jekyll, um homem respeitável e acima de qualquer suspeita, cria uma fórmula que dá vida ao Sr. Hyde — uma criatura asquerosa que personifica seus instintos mais baixos.
                    </p>
                    <p>
                      Mas fica a provocação: seria isso apenas o efeito de uma droga ou a hipocrisia de quem deseja externalizar sua maldade sem assumir a responsabilidade? Hyde não é um invasor; ele é uma parte de Jekyll que foi destrancada. O médico utiliza o monstro como um álibi moral, uma forma de soltar seu eu interior e cometer atrocidades sem se culpabilizar pelas consequências causadas ao próximo.
                    </p>
                    <p>
                      A transformação de um indivíduo comum em um monstro à solta nos faz pensar sobre as nossas próprias "substâncias" e máscaras sociais. Afinal, as aparências podem enganar o mundo, mas o que sobra de nós quando as luzes se apagam e a nossa essência — por mais terrível que seja — ganha a liberdade?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Assista nossas resenhas no blog Letras & Páginas:{" "}
                      <a href="https://youtu.be/pzSPEXzLino?si=GsxS3gs8R5E4t70z" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                        Clique aqui
                      </a>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["#literatura", "#Stevenson", "#OMédicoeoMonstro", "#DualidadeHumana", "#Filosofia", "#LetrasEPáginas", "#AnáliseLiterária"].map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-4 p-4 rounded-md bg-accent/30 border border-primary/20 flex items-center gap-3">
                      <Image className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-sm text-foreground">
                        Confira também nossos infográficos do clássico <span className="font-semibold">O Médico e o Monstro</span> na seção{" "}
                        <a href="/infograficos" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-medium">
                          Infográficos
                        </a>
                      </p>
                    </div>
                    <div className="mt-4 p-4 rounded-md bg-muted/50 border border-border">
                      <p className="font-display text-xs font-semibold text-foreground mb-1">No próximo post...</p>
                      <p className="text-xs text-muted-foreground">
                        Depois de conhecermos um médico que criou um monstro dentro de si mesmo, vamos analisar outro médico e outro monstro que mudaram a história da literatura. O que acontece quando o homem decide brincar de Deus e abandona sua criação à própria sorte? Na próxima semana, vamos desbravar as páginas geladas e melancólicas de Frankenstein, de Mary Shelley.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        Quem é o verdadeiro vilão: a criatura que busca amor ou o criador que a rejeita?
                      </p>
                      <p className="text-xs text-primary font-medium mt-2 italic">
                        Não perca a próxima análise aqui no Letras & Páginas!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedArticle === "Pare de Procrastinar" && (
                <div className="mt-6 p-5 rounded-lg border border-border bg-card">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs text-muted-foreground hover:text-foreground mb-4 underline"
                  >
                    ← Voltar aos artigos
                  </button>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Pare de Procrastinar: O Manual Definitivo para Quem Quer Vencer o "Depois Eu Faço"
                  </h3>
                  <p className="font-body text-[10px] text-muted-foreground mb-4">
                    Resenha · Por Letras &amp; Páginas · 2025
                  </p>
                  <div className="font-body text-sm text-foreground/90 space-y-4 leading-relaxed">
                    <p>
                      Existem livros que entretêm. Existem livros que ensinam. E existem livros que, sem cerimônia, sentam ao seu lado, olham nos seus olhos e dizem: <em>"Chega. Levante e faça."</em> <strong>Pare de Procrastinar — O manual para fazer o que deve ser feito</strong>, segundo livro de <strong>Rafael S. L. Aguiar</strong>, pertence à terceira categoria — e essa é, justamente, a sua maior virtude.
                    </p>
                    <p>
                      Publicada em 2025, a obra chega ao catálogo do Letras &amp; Páginas como um divisor de águas no projeto literário do autor. Conhecido por sua ficção distópica e por seus mergulhos poéticos, Rafael agora se desnuda como educador. Não por acaso: são <strong>quinze anos de sala de aula</strong>, somados à atuação como editor, curador literário e escritor. Toda essa bagagem se converte em páginas de um manual prático, direto e profundamente humano.
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Um livro que conversa, não sermoneia</h4>
                    <p>
                      O grande mérito de <em>Pare de Procrastinar</em> está no tom. Rafael não escreve do alto de um pedestal motivacional — escreve do banco da frente, ao lado do leitor, como quem já andou pelos mesmos atalhos do adiamento e voltou para contar. Há acolhimento em cada capítulo, mas há também uma firmeza serena: a de quem sabe que <strong>compaixão sem ação não transforma ninguém</strong>.
                    </p>
                    <p>
                      O resultado é um texto que evita os clichês da autoajuda barata. Em vez de promessas mágicas, o livro entrega <strong>estratégias concretas para reprogramar o cérebro</strong>, desmontar o ciclo do "amanhã eu começo" e converter intenção em hábito.
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Procrastinar é mais do que preguiça</h4>
                    <p>
                      Uma das contribuições mais valiosas do livro é desmistificar a procrastinação. Rafael deixa claro logo nos primeiros capítulos: adiar não é, na maioria das vezes, falta de vontade — é <strong>medo, perfeccionismo, exaustão e ruído mental</strong>. Ao reconhecer isso, o leitor para de se culpar e começa a se entender. E é nesse ponto que o livro deixa de ser apenas um manual e passa a ser uma espécie de espelho — daqueles que devolvem coragem.
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Cinco frentes da vida, um só compromisso</h4>
                    <p>
                      O autor organiza a obra em torno de cinco áreas essenciais: <strong>saúde, educação, finanças, vida emocional e desenvolvimento pessoal</strong>. Em cada uma, traz histórias reais, reflexões breves e exercícios aplicáveis no mesmo dia. Nada é abstrato. Tudo é convidativo a virar prática.
                    </p>
                    <p>
                      É leitura para quem quer parar de adiar a academia, retomar os estudos, sair das dívidas, cuidar do que sente e, sobretudo, recuperar a autoria da própria vida. Um livro que, lido com lápis na mão, vira um plano de ação.
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground pt-2">A maturidade de um segundo livro</h4>
                    <p>
                      Como segunda obra de Rafael, <em>Pare de Procrastinar</em> mostra a evolução de um escritor que passou a confiar mais na voz do educador. Há ali um amadurecimento autoral: frases mais limpas, capítulos curtos, ritmo de quem respeita o tempo do leitor moderno — sem nunca abdicar da profundidade.
                    </p>
                    <p>
                      Quem acompanha o blog Letras &amp; Páginas reconhecerá a marca da casa: cuidado editorial, português impecável e uma ética de comunicação que privilegia clareza acima de qualquer ostentação intelectual.
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Para quem é este livro?</h4>
                    <p>
                      Para todos. E isso não é exagero. É para o estudante que sabota o estudo, para o profissional que adia o projeto da vida, para o pai ou mãe que diz "depois eu volto a treinar", para o jovem que sonha mas não começa, para o adulto que reconhece a urgência de mudar mas não dá o primeiro passo. Se você se reconheceu em alguma dessas frases, <strong>este livro foi escrito para você</strong>.
                    </p>
                    <h4 className="font-display text-base font-semibold text-foreground pt-2">Veredicto</h4>
                    <p>
                      <em>Pare de Procrastinar</em> é, sem rodeios, um dos lançamentos mais úteis do ano — e provavelmente um daqueles títulos que ficarão por muito tempo na cabeceira de quem o ler. Não é um livro para ser apenas lido: é um livro para ser <strong>aplicado</strong>.
                    </p>
                    <p>
                      Indicação enfática do Letras &amp; Páginas: leia, releia, sublinhe e, principalmente, <strong>aja</strong>. Porque, como o próprio Rafael lembra ao longo da obra, <em>a vida não premia quem planeja melhor — premia quem começa hoje</em>.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["#PareDeProcrastinar", "#RafaelAguiar", "#Autoajuda", "#Produtividade", "#Hábitos", "#LetrasEPáginas", "#Resenha"].map(tag => (
                        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-4 p-4 rounded-md bg-muted/50 border border-border">
                      <p className="font-display text-xs font-semibold text-foreground mb-1">Onde encontrar?</p>
                      <p className="text-xs text-muted-foreground">
                        O livro <strong>Pare de Procrastinar — O manual para fazer o que deve ser feito</strong> está disponível na <strong>Biblioteca Pública</strong> do Letras &amp; Páginas, na aba <strong>Autoajuda</strong>. Leitura imperdível para quem decidiu que o "depois" virou "agora".
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>

      {selectedBook && (
        <LeadCaptureForm
          book={selectedBook}
          onSuccess={handleDownloadSuccess}
          onCancel={() => setSelectedBook(null)}
        />
      )}
      {paidBook && (
        <DonationGateModal
          book={paidBook}
          onSuccess={handlePaidDownloadSuccess}
          onCancel={() => setPaidBook(null)}
        />
      )}
    </Dialog>
  );
};

export default ClassicsModal;
