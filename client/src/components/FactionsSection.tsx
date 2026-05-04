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
    description: "Ambria é governada pela Rainha Korinthia e dividida em sete ducados. A Corte em Yndaros dita o ritmo do novo império, mas as intrigas entre as Casas Nobres ameaçam a frágil paz. Nobres famintos por glória e recursos lutam por influência na Cúria e na exploração da floresta.",
    details: [
      "Korinthia Kohinoor, a Matadora da Noite — venerada quase como divindade por seu povo. Resgatada dos Lordes Negros após perder sua juventude em cativeiro.",
      "Duque Alesaro Kohinoor (Nova Berendoria) — tio de Korinthia que ressentidamente esperava herdar o trono durante a prisão dela.",
      "Duquesa Esmerelda (Kasandrien) — meia-irmã mais nova de Korinthia, sede da Ordo Magica em Agrella.",
      "Duque Ynedar (Nova Beretor) — sobrinho da Rainha, jovem líder com visão diplomática, mantendo boas relações com os bárbaros de Odaiova.",
      "O Grande Ducado de Yndarien detém a capital e abriga cerca de 40% de toda a população ambriana."
    ]
  },
  {
    name: "Igreja do Sol (A Cúria de Prios)",
    icon: Sun,
    color: "text-amber-300",
    borderColor: "border-l-amber-600",
    bgColor: "bg-amber-950/20",
    description: "Durante a Grande Guerra, o Sol tornou-se o Uno e o Doador das Leis. A Igreja prega que Prios está morrendo pela negligência humana, e a Davokar deve ser expurgada e cultivada para reavivar Sua chama. A Igreja de Prios governa um domínio próprio tão rico quanto um ducado.",
    details: [
      "Primeiro Padre Jeseebegai (nascido Demeon Soleij) — cego, marcado e ferrenho líder da Cúria, herói que encontrou e libertou Korinthia.",
      "Templários (Cavaleiros do Sol Moribundo) — o braço armado e implacável da Igreja, liderado pelo Comandante Iakobo Vearra.",
      "Frades do Crepúsculo (Mantos Negros) — a Inquisição secreta, operando em silêncio sob a égide do Irmão Eumenos. Eles não reportam ao Primeiro Padre, mas mantêm autonomia perigosa.",
      "A Cúria possui jurisdição absoluta sobre a moral e financia as 'Cruzadas' não oficiais contra feitiçaria e abominações."
    ]
  },
  {
    name: "Ordo Magica",
    icon: BookOpen,
    color: "text-purple-300",
    borderColor: "border-l-purple-600",
    bgColor: "bg-purple-950/20",
    description: "A mais proeminente e elitista ordem mística. Movem-se pela filosofia e por evidências matemáticas, repudiando a 'fé cega' dos teurgos. Buscam explorar Davokar para recuperar os tesouros e a magia arcaica do Império de Symbaroum.",
    details: [
      "Grande Mestre Seldonio — supostamente centenário. Passa a maior parte de seu tempo trancafiado no Capítulo de Yndaros.",
      "Os Mestres de Capítulo dominam esferas teóricas: Magismo, Artefatos, Botânica, e Estudos Élficos e Bestiais.",
      "Possuem o Vivisectório em Yndaros, uma arena de anatomia onde realizam dissecações públicas de abominações e Trolls, muitas vezes chocando (e fascinando) os ambrianos.",
      "Sofrem pressão da Igreja de Prios para abandonarem pesquisas consideradas 'heréticas'."
    ]
  },
  {
    name: "O Pacto de Ferro (Elfos)",
    icon: Link,
    color: "text-emerald-300",
    borderColor: "border-l-emerald-500",
    bgColor: "bg-emerald-950/20",
    description: "Um antigo tratado e uma coalizão militar de elfos da Davokar. O Pacto alega que príncipes humanos assinaram o acordo com anéis de ferro para nunca adentrar a Davokar e não despertar os horrores de Symbaroum. Ambria ignora este tratado, o que resulta em mortes diárias.",
    details: [
      "Emissário Elori — um dos poucos elfos em Yndaros, tolerado sob severa guarda militar. Ouve insultos diários na esperança de conter a expansão humana.",
      "Aloéna — a mítica semideusa gigante que reside num bosque inacessível de Karvosti, de enorme poder místico.",
      "O Pacto caça caçadores de tesouros incansavelmente usando Elfos do Verão (guerreiros plenos) treinados por séculos.",
      "Sofrem uma tragédia populacional: cada elfo morto em combate não retorna do Inverno, reduzindo o número total da raça."
    ]
  },
  {
    name: "Os Clãs Bárbaros",
    icon: Trees,
    color: "text-green-300",
    borderColor: "border-l-green-600",
    bgColor: "bg-green-950/20",
    description: "Antes treze, agora onze clãs sobreviventes habitam as sombras e planícies. Eles são os vigias fronteiriços que sempre evitaram as ruínas perigosas através dos tabus mágicos das Bruxas. Estão em uma constante queda de braço com a civilização invasora.",
    details: [
      "Huldra Yeleta — Líder suprema das Bruxas, sábia, pragmática, e temida tanto pelo seu povo quanto pela Coroa Ambriana.",
      "Alto Chefe Tharaban — Reside em Karvosti, cercado pela sagrada 'Guarda da Ira'. Ele é mais um árbitro da paz entre clãs do que um rei conquistador.",
      "Gaoia e Saar-Kahn — Clãs primitivos e isolados do norte, guiados por divindades profanas de sangue e de feras.",
      "Karohar e Odaiova — Clãs próximos da fronteira, com Karohar extremamente hostil aos saques e Odaiova prosperando como mercadores.",
      "Dois clãs originais foram dizimados: Kadiz (assimilado) e Jezora (destruído na Grande Guerra)."
    ]
  },
  {
    name: "Exército da Rainha & Patrulheiros",
    icon: Sword,
    color: "text-slate-300",
    borderColor: "border-l-slate-500",
    bgColor: "bg-slate-950/20",
    description: "Os soldados de Ambria são veteranos disciplinados forjados contra os exércitos das trevas de Alberetor. Divididos em infantaria pesada, piquetes, cavalaria blindada e patrulheiros de elite que supervisionam as matas sombrias.",
    details: [
      "Marechal de Campo Beremo Herengol — veterano de 70 anos cujo vigor parece inexplicavelmente congelado no tempo.",
      "Os Pansars — A temida Guarda Pessoal da Rainha Korinthia, a elite da cavalaria de choque sob o general Jomilo.",
      "Patrulheiros da Rainha — Comandados pela Coronel Revina Kalfas. Especialistas em espionagem, sobrevivência na Davokar e extermínio focado de grupos elfos hostis.",
      "Constante disputa logística com a Ordem dos Templários, que preferiria guiar todos os soldados de Ambria como ferramentas de Prios."
    ]
  },
  {
    name: "Colonos Livres",
    icon: Tent,
    color: "text-stone-300",
    borderColor: "border-l-stone-600",
    bgColor: "bg-stone-950/20",
    description: "Nem todo ambriano aceitou submeter-se ao jugo da Rainha Korinthia e aos dogmas estritos da Igreja de Prios. Refugiados, desertores e visionários que preferiram o perigo da selva à tirania da cidade de Yndaros.",
    details: [
      "Habitam acampamentos dispersos e bem escondidos nos limites ou no interior da Davokar, somando cerca de 20 grandes assentamentos.",
      "Adoram os Deuses Abolidos (O Desbravador, a Mãe Terra, o Executor), praticando rituais de agradecimento muito próximos às tradições bárbaras.",
      "São frequentemente alvos mortais dos Mantos Negros, que os consideram hereges em potencial.",
      "Trabalham em harmonia e trocas com alguns clãs, mas sofrem terrivelmente quando abominações de Davokar esbarram com suas cabanas."
    ]
  },
  {
    name: "Feitiçaria & Cultos Sombrios",
    icon: Skull,
    color: "text-red-300",
    borderColor: "border-l-red-600",
    bgColor: "bg-red-950/20",
    description: "Um mal sussurrante e corrosivo. Nem uma facção unida, mas sim células independentes de ambrianos corrompidos, bruxos caídos e bestas de Symbaroum em busca de reviver o pesadelo do Antigo Império. Eles dominam a arte da feitiçaria, aceitando o abraço letal da Corrupção.",
    details: [
      "Operam sob ritos de sangue e sacrifício carnal nos esgotos de Yndaros e em refúgios esquecidos.",
      "Simbaristas — estudiosos fanáticos que acreditam que dominar as Abominações lhes concederá imortalidade.",
      "Cultistas dos Lordes Negros — agentes desertores que buscam reanimar os demônios da guerra que destruíram Alberetor.",
      "São os alvos primários da Inquisição e até das Bruxas, pois sua simples existência envenena o tecido de Symbaroum."
    ]
  },
  {
    name: "A Legação de Caçadores e Prefeito Noturno",
    icon: ShieldAlert,
    color: "text-cyan-300",
    borderColor: "border-l-cyan-500",
    bgColor: "bg-cyan-950/20",
    description: "Um grupo mercenário e capitalista baseado no infame Forte do Cardo. Exploradores, arqueólogos sem escrúpulos e mercenários cuja vida é invadir ruínas bárbaras para saciar a sede ambriana por ouro e mistérios.",
    details: [
      "Prefeito Lasifor Campo Noturno (Noite-Arca) — Um dos primeiros grandes exploradores e atual governante do Forte do Cardo, sempre protegido pelos brutais guardas de capacete-de-sapo.",
      "Mãe Mehira — Ex-aventureira, perdeu braço e olho, e gerencia a mais rica agência mercenária e estalagem do Forte.",
      "Licenças de Explorador — Impostos abusivos criados por Ambria que fomentaram um mercado clandestino sangrento e contrabandistas de relíquias.",
      "Enfrentam a morte em três frentes: Elfos assassinos, bestas peçonhentas de Davokar, e a própria Corrupção ao tocar nos tesouros sombrios."
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
