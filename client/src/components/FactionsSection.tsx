import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Crown, Trees, Sun, BookOpen, Sword, Link, Skull, ShieldAlert, Tent } from "lucide-react";

const factions = [
  {
    name: "A Casa de Kohinoor & A Nobreza",
    icon: Crown,
    color: "text-blue-300",
    borderColor: "border-l-blue-600",
    bgColor: "bg-blue-950/20",
    description: "Ambria é um império recém-forjado pelo fogo e pelo luto, governado pela Rainha Korinthia e dividido em sete ducados formados após a fuga de Alberetor. A Corte em Yndaros dita o ritmo de expansão, mas as intrigas constantes entre as Casas Nobres ameaçam a frágil união humana.",
    details: [
      "Rainha Korinthia Kohinoor, a Matadora da Noite — venerada quase como divindade. Resgatada dos Lordes Negros após anos de cativeiro na queda de Alberetor, ela governa com mão de ferro.",
      "A Disputa dos Ducados — Ambria é dividida em ducados comandados por sobreviventes e generais da Grande Guerra. O Grande Ducado de Yndarien detém a capital e abriga 40% da população.",
      "Duque Alesaro Kohinoor (Nova Berendoria) — Tio de Korinthia que assumiu a regência durante seu cativeiro e agora governa de forma ressentida e ambiciosa.",
      "Duque Ynedar (Nova Beretor) — O jovem sobrinho da Rainha, idealista, mantendo as mais promissoras relações diplomáticas com os clãs bárbaros (principalmente Odaiova).",
      "Duquesa Esmerelda (Kasandrien) — A meia-irmã mais nova de Korinthia, regendo Agrella, um ducado famoso pela cultura, festas e por abrigar grandes mentes da Ordo Magica."
    ]
  },
  {
    name: "Igreja do Sol (A Cúria de Prios)",
    icon: Sun,
    color: "text-amber-300",
    borderColor: "border-l-amber-600",
    bgColor: "bg-amber-950/20",
    description: "Durante a devastadora Grande Guerra, a religião mudou: o Sol tornou-se o Uno e o Doador das Leis, e todos os outros deuses foram abandonados. A Igreja prega o dogma do 'Sol Moribundo' — a crença de que Prios está morrendo pela negligência humana, e a floresta de Davokar deve ser expurgada para reavivar Sua luz divina.",
    details: [
      "Primeiro Padre Jeseebegai — Líder Supremo da Cúria em Templewall. Um herói ferrenho, cego e marcado pelas chamas das trevas, cujo governo tem se tornado cada vez mais extremista e paranoico.",
      "Templários (Cavaleiros do Sol Moribundo) — O braço armado e dogmático, liderado pelo Primeiro Comandante Iakobo Vearra, agindo como juízes, júris e executores contra abominações e hereges.",
      "Frades do Crepúsculo (Mantos Negros) — A temida Inquisição. Monges eruditos e especialistas ocultos em demonologia sob a égide do Irmão Eumenos. Operam do mosteiro dos Titãs com grande autonomia.",
      "As Leis Solares e as 'Cruzadas' — A Igreja financia expedições não oficiais contra cultistas, elfos e forças místicas que não se curvam à luz, frequentemente colidindo com a Ordo Magica."
    ]
  },
  {
    name: "Ordo Magica",
    icon: BookOpen,
    color: "text-purple-300",
    borderColor: "border-l-purple-600",
    bgColor: "bg-purple-950/20",
    description: "A mais proeminente e elitista ordem mística, financiada por nobres e pela Coroa. Eles se movem por evidências matemáticas, repudiando a 'fé cega' dos teurgos e as superstições bárbaras. Buscam explorar as ruínas de Davokar para extrair tesouros, alquimia avançada e o conhecimento arcaico do Império de Symbaroum.",
    details: [
      "Grande Mestre Seldonio — Centenário líder absoluto da ordem. Passa a maior parte de seu tempo trancafiado e protegido no monumental Capítulo de Yndaros.",
      "Os Mestres de Capítulo — Guiam filiais em cada grande cidade. Destacam-se Magos Magistrais (Kullinan Furia) e Mestra Cornélia (em Forte do Cardo), pesquisando Artefatos, Botânica e Estudos Élficos.",
      "O Vivisectório — Um salão em Yndaros onde magos realizam dissecações públicas de abominações e Trolls mortos, frequentemente chocando a Cúria de Prios.",
      "Tensões Religiosas — A Ordem é constantemente supervisionada pelos Frades do Crepúsculo, que pressionam para que pesquisas sobre Corrupção e feitiçaria sejam proibidas."
    ]
  },
  {
    name: "O Pacto de Ferro (Elfos)",
    icon: Link,
    color: "text-emerald-300",
    borderColor: "border-l-emerald-500",
    bgColor: "bg-emerald-950/20",
    description: "Um antigo tratado misterioso e uma coalizão militar de elfos. O Pacto alega que os príncipes originais da humanidade juraram com anéis de ferro nunca mais adentrar a Davokar para não despertar os horrores incontroláveis de Symbaroum. Ambria hoje ignora o tratado, resultando em uma guerra florestal sangrenta.",
    details: [
      "O Ciclo de Vida Élfico — Elfos começam como Fadas (Primavera), transformam-se em impiedosos guerreiros Elfos do Verão, evoluem para Elfos do Outono (diplomatas e líderes) e, muito raramente, atingem a misteriosa e transcendental fase do Inverno.",
      "Príncipes Élficos — Os verdadeiros comandantes dos Salões da floresta, orquestrando as letais caçadas contra aventureiros e mercenários ambrianos.",
      "Aloéna e os Bosques de Karvosti — Uma semideusa monumental que reside em um bosque inviolável. Ela é uma força da própria natureza, anterior aos elfos, e representa a vontade silenciosa da Davokar.",
      "Emissário Elori — O único representante elfo em Yndaros. Ele vive isolado em uma embaixada, suportando ameaças diárias para atrasar uma guerra total entre as raças."
    ]
  },
  {
    name: "Os Clãs Bárbaros",
    icon: Trees,
    color: "text-green-300",
    borderColor: "border-l-green-600",
    bgColor: "bg-green-950/20",
    description: "Antes treze, agora onze clãs sobreviventes habitam as sombras e planícies da floresta. Eles são os vigias fronteiriços que sempre evitaram as ruínas perigosas através dos severos tabus das Bruxas. Estão em uma constante tensão política com a civilização invasora de Ambria.",
    details: [
      "Líderes de Karvosti: A sábia Huldra Yeleta (líder das Bruxas) e o Alto Chefe Tharaban (árbitro e diplomata) tentam manter a união dos clãs a partir do penhasco sagrado.",
      "Os Aliados (Odaiova, Zarek e Vajvod): Clãs mais dispostos a tolerar a presença de Ambria; Odaiova prospera no comércio e Vajvod vive nas distantes planícies leste.",
      "A Linha de Frente (Karohar e Godeta): Clãs fronteiriços agressivos, enfrentando constantes escaramuças com lenhadores, patrulheiros e mercenários.",
      "Os Isolados (Gaoia, Saar-Kaan, Varakko e Yedza): Povoam as profundezas do norte selvagem, adorando bestas ancestrais e divindades de sangue. Gaoia reverencia enormes serpentes-da-neve.",
      "Os Selvagens do Coração (Baiaga e Enoai): Clãs perigosamente enraizados na floresta escura. Os Baiagas lutam lado a lado com grandes ursos, e os Enoais vivem escondidos no alto das copas das árvores.",
      "Clãs Perdidos: Kadiz foi conquistado na Grande Guerra (formando a atual Velha Kadizar em Yndaros), enquanto o clã Jezora (liderado por Haloban) foi brutalmente aniquilado pelo aço ambriano."
    ]
  },
  {
    name: "Exército da Rainha & Patrulheiros",
    icon: Sword,
    color: "text-slate-300",
    borderColor: "border-l-slate-500",
    bgColor: "bg-slate-950/20",
    description: "Veteranos endurecidos forjados nos horrores da guerra contra os Lordes Negros em Alberetor. As Forças Armadas de Ambria estão agora em processo de transição, vigiando a sombria fronteira florestal, controlando rebeliões dos Colonos Livres e exterminando ameaças inumanas que cruzam a divisa da floresta.",
    details: [
      "O Comando Maior e as 6 Divisões — O exército é liderado pelo Marechal de Campo Beremo Herengol, um veterano de 70 anos incansável. É sustentado pelos ducados e composto por infantaria, piqueiros, arqueiros e artilharia de cerco.",
      "Os Pansars — A lendária, ostentosa e temida Guarda Pessoal da Rainha Korinthia, os cavaleiros de elite liderados pelo formidável General Jomilo.",
      "Patrulheiros da Rainha — Comandados pela tática Coronel Revina Kalfas. São as tropas de vanguarda especializadas em emboscadas, sobrevivência na selva e rastreamento de Elfos e bestas.",
      "Conflitos de Jurisdição — Existe uma rivalidade latente (e perigosa) entre o Exército Regular de Ambria e os exércitos privados financiados pela Igreja do Sol."
    ]
  },
  {
    name: "Colonos Livres",
    icon: Tent,
    color: "text-stone-300",
    borderColor: "border-l-stone-600",
    bgColor: "bg-stone-950/20",
    description: "Nem todo ambriano aceitou submeter-se à tirania dos Ducados e aos dogmas extremistas da Igreja de Prios. Os Colonos Livres são desertores, refugiados sem teto e visionários pioneiros que fugiram para arriscar a vida estabelecendo comunidades não registradas nas bordas da selva selvagem.",
    details: [
      "Os Assentamentos Rebeldes — Há dezenas de grandes acampamentos (cerca de 20 bem estabelecidos) escondidos na Davokar, sustentando-se de caça perigosa e comércio clandestino.",
      "Os Deuses Abolidos — Muitos colonos rejeitaram Prios para venerar velhos panteões animistas de Alberetor (O Desbravador, a Mãe Terra, o Executor), aproximando-os culturalmente dos bárbaros.",
      "Heréticos Perseguidos — Para a Igreja de Prios e a Coroa de Yndaros, os Colonos Livres não são pioneiros heroicos, mas hereges, criminosos, estelionatários e alvos frequentes da Inquisição.",
      "Sobrevivência Frágil — Quando não são mortos pelas fogueiras dos Templários, os colonos frequentemente viram comida para bandos de bestas predadoras, arañas de Davokar ou elfos territorialistas."
    ]
  },
  {
    name: "Feitiçaria & Cultos Sombrios",
    icon: Skull,
    color: "text-red-300",
    borderColor: "border-l-red-600",
    bgColor: "bg-red-950/20",
    description: "Células secretas, dispersas e descentralizadas. Feiticeiros não pertencem a uma guilda única, mas são unidos pela ambição sombria, pela manipulação perversa da magia natural e pela disposição em abraçar a Corrupção em troca de poder bruto que pode desafiar o mundo mortal.",
    details: [
      "Simbaristas — Pesquisadores e arcanistas hereges (muitos caídos da Ordo Magica) fascinados pelo antigo Império; eles buscam dominar Abominações para atingir a imortalidade profana.",
      "Cultistas dos Soberanos Negros (Lordes das Trevas) — Fanáticos e desertores que ainda honram os príncipes sombrios mortos em Alberetor, conspirando nos esgotos da Velha Kadizar para recriar as legiões demoníacas.",
      "A Magia de Sangue e Profanação — Feiticeiros usam ritos sangrentos e sacrifícios humanos. Sua simples prática mancha o tecido da Davokar, escurecendo a terra.",
      "Caçados e Desesperados — São os maiores alvos dos Caçadores de Bruxas, dos Templários e das próprias Bruxas Bárbaras. Um feiticeiro descoberto tem garantia de tortura e fogueira letal."
    ]
  },
  {
    name: "A Legação de Caçadores e Prefeito Noturno",
    icon: ShieldAlert,
    color: "text-cyan-300",
    borderColor: "border-l-cyan-500",
    bgColor: "bg-cyan-950/20",
    description: "Uma vasta guilda mercenária capitalista alicerçada no icônico Forte do Cardo (Thistle Hold). Reunindo arqueólogos brutais, mercenários veteranos e contrabandistas endinheirados, eles fazem fortunas rasgando sepulturas e ruínas perigosas para saciar o apetite insaciável da nobreza por artefatos Symbaranos.",
    details: [
      "Prefeito Lasifor Campo Noturno (Noite-Arca) — O infame e rico fundador do Forte do Cardo. Antigo aventureiro que lucrou imensamente com a floresta e agora governa a cidade mercenária cercado por guardas brutais.",
      "Mãe Mehira — Ex-caçadora veterana que perdeu braço e olho para as sombras de Davokar. Hoje, gerencia a maior e mais respeitada agência mercenária e estalagem do Forte.",
      "As Licenças de Explorador — Impostos caríssimos cobrados por agentes de Ambria para entrar em Davokar, criando um vasto e corrupto mercado clandestino de contrabandistas de relíquias.",
      "A Febre de Davokar e as Baixas — Apesar do ouro, a Legação sofre mais mortes do que o próprio Exército, vítimas de armadilhas mortais Symbaranas, toxinas das feras, flechas élficas e a loucura da Corrupção."
    ]
  },
];

export default function FactionsSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Facções & Poderes
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          O mundo de Symbaroum é definido por tensões avassaladoras entre múltiplos poderes de moralidade duvidosa. 
          A colonização implacável ambriana, a preservação furiosa bárbara, a proteção genocida élfica, as intrigas da Cúria de Prios e 
          o avanço da Corrupção criam um cenário político denso. Todo herói ou explorador é uma peça no tabuleiro do trono de Yndaros ou na teia da floresta de Davokar.
        </p>
      </div>

      {/* Political Tensions */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tensões Políticas Fundamentais
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-sm font-bold text-foreground mb-1">Ambria vs. A Natureza Selvagem</h4>
              <p className="text-xs text-muted-foreground">A ambição sem limites de Ambria em extrair recursos da Davokar colide com o isolacionismo bárbaro. Leis são feitas em Yndaros e esmagadas nos limites das ruínas, com vidas pagando o preço da lenha e do ouro.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-sm font-bold text-foreground mb-1">A Igreja de Prios vs. O Livre Pensamento</h4>
              <p className="text-xs text-muted-foreground">A Inquisição de Prios vê a magia da Ordo Magica como perigosa e os Colonos Livres como hereges a serem expurgados. Tudo que não glorifica o Sol é suspeito e pode ser destruído pelo fogo templário.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-sm font-bold text-foreground mb-1">Pacto de Ferro vs. Ganância</h4>
              <p className="text-xs text-muted-foreground">O tratado com os Elfos é motivo de chacota para a Realeza e lucro clandestino para os contrabandistas. Os elfos, sabendo a verdade absoluta sobre Symbaroum, lutam uma guerra solitária e silenciosa contra intrusos.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-sm font-bold text-foreground mb-1">As Sombras do Antigo Império</h4>
              <p className="text-xs text-muted-foreground">Nas brechas do poder, Cultistas e Simbaristas semeiam veneno, enquanto Trolls, Arañas e Lordes de Corrupção observam as nações mortais brincarem com magias e relíquias que afundaram o império passado.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {factions.map((faction, index) => {
          const Icon = faction.icon;
          return (
            <motion.div
              key={faction.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className={`bg-card border-border border-l-4 ${faction.borderColor} h-full`}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-full ${faction.bgColor}`}>
                      <Icon className={`w-5 h-5 ${faction.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${faction.color}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {faction.name}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-4 font-medium italic">
                    {faction.description}
                  </p>
                  <div className="bg-background/40 rounded-md p-4 border border-border">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {faction.details.map((detail, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={`mt-1 font-bold ${faction.color}`}>•</span> 
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
