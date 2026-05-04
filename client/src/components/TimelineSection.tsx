import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  { year: "~1000 anos atrás", title: "Queda de Symbaroum", description: "O poderoso império de Symbaroum, cuja capital Symbar ficava no coração do que hoje é a floresta Davokar, cai no esquecimento. As razões exatas de sua queda são desconhecidas, e as lendas, numerosas, falam de um último imperador que irritou alguma forma de ser supremo e assim causou a ruína do império. A floresta Davokar cresceu e engoliu suas ruínas.", type: "ancient" },
  { year: "~500 anos atrás", title: "Clãs se Unem contra o Rei Aranha", description: "Os clãs da Davokar, descendentes da civilização de Symbaroum, se unem sob o primeiro Alto Chefe para enfrentar o Rei Aranha, uma ameaça que emergiu das profundezas da floresta. Nessa mesma época, a cidade-estado de Lindaros é fundada nas planícies ao sul de Davokar.", type: "ancient" },
  { year: "~200 anos atrás", title: "Extermínio de Lindaros", description: "A população inteira de Lindaros é exterminada por uma doença hemorrágica contagiosa. A cidade é abandonada e suas ruínas permanecem vazias por séculos, consideradas amaldiçoadas.", type: "ancient" },
  { year: "Ano -21", title: "Lordes Negros Conquistam Berendoria", description: "Os Lordes Negros, nobres e feiticeiros corrompidos de Alberetor que abraçaram poderes proibidos, conquistam a cidade fronteiriça de Berendoria, dando início à devastação do reino.", type: "war" },
  { year: "Ano -19", title: "Início da Grande Guerra", description: "Alberetor contra-ataca os Lordes Negros invasores e a Grande Guerra começa oficialmente. Os exércitos da noite reuniam mortos-vivos, e soldados eram frequentemente forçados a matar os mesmos inimigos vez após outra, inimigos que haviam sido irmãos e irmãs até serem vitimados pela magia assassina dos Lordes Negros.", type: "war" },
  { year: "Ano -10", title: "Morte do Rei Ynedar", description: "O Rei Ynedar de Alberetor é morto em batalha contra os Lordes Negros. Sua filha Korinthia, que não tinha mais que doze anos, é coroada Rainha de Alberetor em meio ao caos da guerra.", type: "war" },
  { year: "Ano -5", title: "Prios Declarado o Uno", description: "Onde os Lordes Negros representavam escuridão e morte, o deus sol Prios veio a simbolizar a luz de Alberetor. A Igreja declara Prios como o Uno, o único deus verdadeiro, e o Doador das Leis de Alberetor.", type: "war" },
  { year: "Ano -2", title: "Captura de Korinthia", description: "O corcel lendário de Korinthia, Mestre, é gravemente ferido por uma ponta de lança envenenada e morre. A Rainha é capturada pelos Lordes Negros. O desejo de resgatá-la deu aos cavaleiros tanta valentia que nem magia da morte podia fazê-los hesitar.", type: "war" },
  { year: "Ano 0 (outono)", title: "Resgate de Korinthia & Fim da Guerra", description: "O sacerdote Demeon Soleij caminha nu através da muralha de fogo profano que mantinha Korinthia cativa e a carrega para fora. Ele perde seus olhos e cabelo. Korinthia escapa com queimaduras médias e o rosto lacerado, que passa a cobrir com uma máscara de porcelana vitrificada, recebendo o título de 'Ruína da Noite'. A fortaleza dos Lordes Negros é invadida e a guerra acaba.", type: "turning" },
  { year: "Ano 0 (inverno)", title: "A Mudança Começa", description: "O reino de Alberetor está devastado: fome, pragas e terras corrompidas. O assentamento bárbaro de Kadizar se rende e é usado como base de Korinthia na terra nova. Começa a Grande Migração, e centenas de milhares cruzam as Montanhas Titãs rumo ao norte.", type: "turning" },
  { year: "Ano 5", title: "Estabelecimento de Ambria", description: "Os ducados do novo reino são estabelecidos, das Corvos a leste ao rio Eblis no oeste. A capital é construída sobre as ruínas de Lindaros e recebe o nome de Yndaros, em honra ao Rei Ynedar.", type: "ambria" },
  { year: "Ano 7", title: "Ambria é Proclamada", description: "A Rainha chega oficialmente e o novo reino, assim como a capital, ganha seu nome: Ambria, 'o brilhante'. As leis, a nobreza e as instituições são formalizadas.", type: "ambria" },
  { year: "Ano 8", title: "Catedral dos Mártires", description: "A Catedral dos Mártires em Yndaros é inaugurada, consagrando a memória dos caídos na Grande Guerra e simbolizando a devoção ambriana a Prios.", type: "ambria" },
  { year: "Ano 10", title: "Destruição do Clã Jezora", description: "O exército real destrói o clã Jezora e seu chefe, o lorde de guerra Haloban, é executado na Praça do Triunfo em Yndaros. O domínio ambriano se consolida nas planícies.", type: "ambria" },
  { year: "Ano 11", title: "Oitavo Ducado Estabelecido", description: "Um oitavo ducado é estabelecido e sua cidade principal, Sevona, é fundada. O ducado é confiado ao Duque Alesaro Kohinoor, tio da Rainha.", type: "ambria" },
  { year: "Ano 13", title: "Fundação do Forte do Cardo", description: "Lasifor Campo Noturno cura a mãe da Rainha com Cardo-do-Crepúsculo colhido nas profundezas de Davokar. Recebe o título de Príncipe do Reino e usa a recompensa para construir Forte do Cardo na fronteira da floresta, um porto seguro de exploradores e caçadores de fortuna.", type: "ambria" },
  { year: "Ano 15", title: "Batalha e Acordo de Karvosti", description: "A batalha de Karvosti resulta em um acordo no qual a Igreja do Sol recebe permissão para restaurar as ruínas do templo no platô sagrado dos bárbaros. Licenças de exploração da Davokar são formalizadas.", type: "conflict" },
  { year: "Ano 16", title: "Ascensão de Jeseebegai", description: "O Primeiro Padre Jeseebegai, o mesmo Demeon Soleij que resgatou a Rainha do cativeiro, ascende ao Alto Mandato da Igreja do Sol. A Cúria precisou de apenas uma hora para proclamar sua ascensão.", type: "ambria" },
  { year: "Ano 19", title: "Decreto das Guildas", description: "A Rainha dita que todos os artesãos devem se organizar em guildas, formalizando o comércio e a produção no reino.", type: "ambria" },
  { year: "Ano 21", title: "Dias Atuais", description: "Ambria se expande agressivamente. Tensões crescem entre ambrianos, bárbaros e elfos. A Davokar parece despertar, com criaturas mais agressivas e corrupção se espalhando. A ameaça crescente dos poderes corruptos pode exigir que as alianças mais improváveis sejam forjadas.", type: "present" },
];

const typeColors: Record<string, string> = {
  ancient: "border-l-purple-700 bg-purple-950/20",
  war: "border-l-red-700 bg-red-950/20",
  turning: "border-l-amber-600 bg-amber-950/20",
  ambria: "border-l-blue-600 bg-blue-950/20",
  conflict: "border-l-orange-600 bg-orange-950/20",
  present: "border-l-green-600 bg-green-950/20",
};

const typeDotColors: Record<string, string> = {
  ancient: "bg-purple-500",
  war: "bg-red-500",
  turning: "bg-amber-500",
  ambria: "bg-blue-500",
  conflict: "bg-orange-500",
  present: "bg-green-500",
};

export default function TimelineSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          A História do Mundo
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Desde a queda da antiga civilização de Symbaroum até a fundação do reino de Ambria, 
          a história desta região é marcada por guerras, migrações e mistérios antigos. 
          A Grande Guerra contra os Lordes Negros forçou o povo de Alberetor a buscar uma nova terra 
          além das Montanhas Titãs, a Terra Prometida. Este é o conhecimento público disponível 
          a qualquer habitante do mundo.
        </p>
      </div>

      {/* Grande Guerra Card */}
      <Card className="bg-card border-border overflow-hidden">
        <div className="relative">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663622705168/KdzVCAjsftQjBG3jYgoaKD/factions-ambria-iya4t8ZnFMzPYSVQ9ZkUNp.webp"
            alt="Reino de Ambria"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl text-amber-100" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
              A Grande Guerra & A Mudança
            </h3>
          </div>
        </div>
        <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-foreground/90">
          <p>
            A Grande Guerra durou cerca de duas décadas. Os <strong className="text-amber-200">Lordes Negros</strong>, nobres e feiticeiros 
            de Alberetor que abraçaram poderes proibidos, reuniram exércitos de mortos-vivos e monstros sombrios 
            contra o próprio reino que um dia governaram. Os soldados de Korinthia eram frequentemente forçados a 
            matar os mesmos inimigos vez após outra, irmãos e irmãs que haviam sido vitimados pela magia assassina dos Lordes Negros 
            e reanimados contra seus antigos companheiros.
          </p>
          <p>
            O Rei <strong className="text-amber-200">Ynedar</strong> foi morto em batalha. Sua filha Korinthia, coroada rainha com não mais que doze anos, 
            herdou sua montaria, o lendário <strong className="text-amber-200">Mestre</strong>, restaurou sua lança quebrada e liderou a contraofensiva por dez anos. 
            Dois anos antes do fim da guerra, Mestre morreu ferido por lança envenenada e Korinthia foi capturada.
          </p>
          <p>
            O sacerdote <strong className="text-amber-200">Demeon Soleij</strong> caminhou nu através da muralha de fogo profano que mantinha Korinthia cativa e a carregou para fora. 
            Ele perdeu seus olhos e cabelo, suportando queimaduras severas no corpo inteiro. Korinthia escapou com o rosto lacerado, 
            que desde então cobre com uma <strong className="text-amber-200">máscara de porcelana vitrificada</strong>, e recebeu o título honorário de <strong className="text-amber-200">Ruína da Noite</strong>. 
            A fortaleza inimiga foi destruída na ofensiva final.
          </p>
          <p>
            Após a vitória amarga, Alberetor estava devastado: fome, pragas e terras corrompidas. 
            Korinthia liderou seu povo para o norte, além das Montanhas Titãs, na <strong className="text-amber-200">Grande Migração (A Mudança)</strong>. 
            Fundou o reino de <strong className="text-amber-200">Ambria</strong>, "o brilhante", com a capital Yndaros construída sobre as ruínas 
            da antiga Lindaros, nomeada em honra ao pai. O sacerdote Demeon foi eleito como <strong className="text-amber-200">Primeiro Padre Jeseebegai</strong> 
            da Igreja do Sol no Ano 16.
          </p>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <h4 className="text-sm font-bold text-purple-300 mb-2">Symbaroum (Civilização Antiga)</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Império humano que existiu há mais de mil anos. Dominava magia poderosa e construiu cidades magníficas. 
              Caiu por razões desconhecidas; lendas falam de um último imperador que irritou algum ser supremo. 
              Suas ruínas jazem sob Davokar. A cidade perdida de Symbar, sua capital, é o sonho de todo explorador, 
              mas ninguém que a buscou retornou com histórias críveis.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <h4 className="text-sm font-bold text-red-300 mb-2">Os Lordes Negros</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Nobres e feiticeiros de Alberetor que abraçaram poderes proibidos. Comandavam mortos-vivos e abominações. 
              Devastaram Alberetor por cerca de 20 anos. Sua fortaleza foi destruída na ofensiva final, mas 
              os que estiveram lá se lembram dos horrores. Os ambrianos tentam olhar adiante, 
              determinados a crescer tão fortes que ninguém ouse atacá-los novamente.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <h4 className="text-sm font-bold text-blue-300 mb-2">A Rainha Korinthia</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Filha do Rei Ynedar, coroada durante a guerra com não mais que doze anos. 
              Sobreviveu a dois anos de cativeiro, resgatada por Demeon Soleij. 
              Usa máscara de porcelana vitrificada sobre o rosto lacerado. Liderou A Mudança e fundou Ambria. 
              Rumores sussurrados dizem que morreu no cativeiro e a mulher por trás da máscara é outra, 
              mas ninguém ousa dizê-lo em voz alta.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Profecia de Sarkomal */}
      <Card className="bg-card border-border border-l-4 border-l-amber-700">
        <CardContent className="p-5">
          <h4 className="text-base font-bold text-amber-200 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A Profecia de Sarkomal (Rumor)
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Segundo rumores que circulam em Yndaros e Forte do Cardo, a Igreja do Sol recuperou uma profecia 
            de um antigo templo em ruínas a alguns dias de viagem a leste de Karvosti. O Primeiro Padre nega 
            firmemente qualquer conhecimento, mas numerosas versões surgiram com o mesmo tema: 
            <em className="text-amber-200/80"> "Ambria deve ganhar o governo de toda a terra outrora governada pela antiga Symbaroum 
            e a Rainha Korinthia ascenderá ao trono do último imperador desse império."</em> A única estrofe 
            em comum diz: <em className="text-foreground/70">"...quando dia e noite não têm significado, onde a escuridão brilha e a luz se oculta 
            em sombras, lá repousa o trono que novamente deve carregar uma amante, uma regente, um par do divino..."</em>
          </p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="mt-12">
        <h3 className="text-2xl text-amber-100 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Linha do Tempo Completa
        </h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-700/50 via-border to-border" />
          
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className={`absolute left-3 md:left-5 top-4 w-3 h-3 rounded-full ${typeDotColors[event.type]} ring-2 ring-background`} />
                
                <div className={`border-l-4 rounded-r-md p-4 ${typeColors[event.type]}`}>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {event.year}
                  </span>
                  <h4 className="text-base font-bold text-foreground mt-1">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500" /> Era Antiga</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /> Grande Guerra</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-500" /> Ponto de Virada</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Era de Ambria</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500" /> Conflito</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500" /> Presente</span>
      </div>
    </div>
  );
}
