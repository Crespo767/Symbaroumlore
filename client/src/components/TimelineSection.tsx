import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  { year: "Séculos Atrás", title: "A Queda de Symbaroum", description: "O formidável império de Symbaroum, que dominava com sua magia e proeza a vasta região da atual floresta Davokar, ruiu. Dizem as lendas que seu último imperador irritou poderes maiores, selando o destino da nação e deixando suas maravilhas e horrores perdidos no tempo.", type: "ancient" },
  { year: "Séculos Atrás", title: "União dos Clãs Bárbaros", description: "Pela primeira vez na história, os clãs descendentes de Symbaroum se unem sob o estandarte de um único Alto Chefe no platô de Karvosti para combater o terrível Rei Aranha e suas hordas aracnídeas.", type: "ancient" },
  { year: "Dois Séculos Atrás", title: "O Extermínio de Lindaros", description: "Uma praga hemorrágica varre a próspera cidade-estado de Lindaros, localizada na planície sul de Davokar. A população inteira é exterminada e a cidade considerada amaldiçoada.", type: "ancient" },
  { year: "Ano -21", title: "A Sombra dos Lordes Negros", description: "Nobres sedentos por poder de Alberetor abraçam artes arcanas obscuras e tornam-se os Lordes Negros. Sua primeira investida resulta na conquista da província fronteiriça de Berendoria, iniciando uma era de dor.", type: "war" },
  { year: "Ano -19", title: "O Início da Grande Guerra", description: "Alberetor reúne suas forças e a Grande Guerra estoura oficialmente. Magia necrótica reanima os mortos; soldados do reino veem-se forçados a lutar contra os próprios companheiros caídos no campo de batalha.", type: "war" },
  { year: "Ano -10", title: "A Morte de Ynedar e a Coroação", description: "Rei Ynedar tomba em batalha. Sua filha, Korinthia, é coroada rainha com apenas doze anos. Ela empunha a lança do pai e cavalga seu corcel lendário, Mestre, para liderar os exércitos ambrianos contra as trevas.", type: "war" },
  { year: "Ano -5", title: "Prios Elevado a Uno", description: "Enquanto as trevas assolam a terra, a Igreja eleva Prios, o Deus Sol, a divindade única de Alberetor, banindo as velhas crenças para dar lugar à Lei de Prios, a luz guia na escuridão.", type: "war" },
  { year: "Ano -2", title: "A Captura da Rainha", description: "Após a morte de sua leal montaria por uma lança envenenada, a Rainha Korinthia é capturada pelos Lordes Negros. Seus exércitos lutam com fervor implacável, preferindo a morte a deixá-la nas mãos do inimigo.", type: "war" },
  { year: "Ano 0 (Outono)", title: "O Resgate e o Fim", description: "O clérigo Demeon Soleij caminha nu através das chamas profanas da fortaleza dos Lordes Negros e resgata Korinthia. Desfigurada, ela passa a usar uma máscara de porcelana vitrificada e ganha o título de Ruína da Noite. Os Lordes Negros são derrotados e a guerra termina.", type: "turning" },
  { year: "Ano 0 (Inverno)", title: "A Grande Mudança", description: "Fome, solo estéril e pragas consumem Alberetor. Korinthia ordena a marcha ao norte através das Montanhas Titãs em direção à Terra Prometida, outrora sob o domínio de Lindaros.", type: "turning" },
  { year: "Ano 5", title: "A Fundação de Yndaros", description: "O novo reino ganha fundações reais. Sobre a terra sangrenta e as ruínas de Lindaros, a nova capital é erguida e batizada de Yndaros, em homenagem ao falecido Rei Ynedar.", type: "ambria" },
  { year: "Ano 7", title: "O Triunfo de Ambria", description: "A Rainha Korinthia e sua corte chegam ao novo reino. Ele é oficialmente declarado 'Ambria', o Brilhante, demarcando as fronteiras entre os clãs bárbaros ao norte e os novos ducados.", type: "ambria" },
  { year: "Ano 8", title: "A Catedral dos Mártires", description: "Concluída a grande construção religiosa na Praça do Triunfo, a Catedral consagra as almas de todos os caídos na Grande Guerra. Prios firma suas raízes definitivas no coração ambriano.", type: "ambria" },
  { year: "Ano 10", title: "A Ruína do Clã Jezora", description: "A Coroa Ambriana esmaga as forças bárbaras do clã Jezora. O temido Lorde de Guerra Haloban é capturado, levado a Yndaros e executado publicamente na Praça do Triunfo.", type: "ambria" },
  { year: "Ano 11", title: "O Oitavo Ducado", description: "As terras de Sevona são consolidadas como o oitavo ducado ambriano e confiadas ao Tio da Rainha, o Duque Alesaro Kohinoor.", type: "ambria" },
  { year: "Ano 13", title: "O Forte do Cardo É Construído", description: "Lasifor Campo Noturno recebe favores da Coroa após curar a mãe da Rainha com ingredientes da floresta. Com sua recém-adquirida fortuna, Lasifor ergue o lendário Forte do Cardo na borda de Davokar.", type: "ambria" },
  { year: "Ano 15", title: "O Acordo do Templo", description: "Um tratado tenso no platô de Karvosti cede à Igreja de Prios o direito de restaurar um antigo templo nas terras sagradas bárbaras. Ao mesmo tempo, Yndaros decreta a Lei das Licenças de Explorador.", type: "conflict" },
  { year: "Ano 16", title: "O Ataque dos Templários e Ascensão", description: "Os Cavaleiros Templários da Igreja tentam tomar todo o platô de Karvosti pela força de armas, sendo humilhantemente rechaçados pelos guardas da Ira e clãs. No mesmo ano, o herói Demeon Soleij assume como Primeiro Padre Jeseebegai.", type: "conflict" },
  { year: "Ano 19", title: "Decreto das Guildas", description: "Para frear os crescentes conflitos comerciais por falta de leis trabalhistas em Ambria, a Rainha impõe um sistema rígido de Guildas sobre todos os artesãos e produtores mercantes do reino.", type: "ambria" },
  { year: "Ano 20", title: "A Rebelião de Nova Dekanor", description: "No final da primavera, o Barão Mergai declara o Baronato de Nova Dekanor independente e se intitula 'Rei'. A Coroa o acusa de traição e a Igreja do Sol o condena à morte como herege, enviando os Templários.", type: "conflict" },
  { year: "Ano 21", title: "Dias Atuais", description: "A floresta Davokar desperta enquanto as tensões explodem em todos os lados. Os elfos intensificam a matança através do Pacto de Ferro, abominações emergem do Abismo Verde, e caçadores de fortuna preparam-se para a letal expedição a Symbar.", type: "present" },
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
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold text-purple-300 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Symbaroum
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O império perdido cuja majestade ainda assombra os sonhos dos tolos. Dominava vasta extensão da terra onde hoje reside a floresta Davokar, 
              controlando magia primordial e abrigando metrópoles grandiosas. Seus segredos caíram após a arrogância do seu último imperador corromper a terra;
              a mítica cidade de <strong className="text-purple-200/80">Symbar</strong>, o coração deste reino, continua sendo a perdição de qualquer caçador de fortunas fútil o suficiente para procurá-la.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold text-red-400 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Os Lordes Negros
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Membros da alta nobreza e estudiosos mágicos de Alberetor que trocaram suas almas pela promessa de poder absoluto.
              Com as trevas, forjaram legiões infindáveis com os cadáveres de seus conterrâneos. Ainda que a fortaleza negra 
              tenha sucumbido ao fogo sagrado de Prios e aos exércitos da Rainha, a cicatriz que deixaram na psique humana garante 
              que Ambria jamais esquecerá que o preço da fraqueza é o fim do mundo.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              A Coroa de Ambria
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Rainha Korinthia Kohinoor, coroada em meio à catástrofe com apenas doze anos.
              Chamada de a <strong className="text-blue-200/80">Ruína da Noite</strong> após sobreviver ao terror do cativeiro nos salões necróticos de Alberetor. 
              Hoje, lidera seu povo de Yndaros, mascarando seu rosto eternamente ferido sob porcelana fria. Ela é o símbolo supremo da 
              resistência e conquista ambriana.
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
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            De acordo com rumores que circulam em Yndaros e Forte do Cardo, a Igreja do Sol recuperou uma profecia 
            de um antigo templo em ruínas há alguns dias de viagem a leste de Karvosti. O Primeiro Padre Jeseebegai nega 
            firmemente qualquer conhecimento desse achado, mas isso não impediu que o rumor crescesse e se espalhasse. Em pouco tempo, numerosas versões da profecia surgiram, todas refletindo o mesmo tema básico — 
            <strong className="text-amber-200/80"> Ambria deve ganhar o governo de toda a terra outrora governada pela antiga Symbaroum 
            e a Rainha Korinthia ascenderá ao trono do último imperador desse império.</strong>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Exceto pelo tema básico, as versões diferem muito uma da outra. Só existe uma estrofe 
            em comum em todas as versões, alegadamente traduzida pela Cúria: <em className="text-foreground/80">"...quando dia e noite não têm significado, onde a escuridão brilha e a luz se oculta 
            em sombras, lá repousa o trono que novamente deve carregar uma amante, uma regente, um par do divino..."</em>. Como sempre ocorre com profecias, ainda há espaço para inúmeras traduções e interpretações.
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
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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
      <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
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
