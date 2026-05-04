import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Crown, Trees, Sun, BookOpen, Sword, Link, Skull, ShieldAlert } from "lucide-react";

const factions = [
  {
    name: "Casas da Nobreza de Ambria",
    icon: Crown,
    color: "text-blue-300",
    borderColor: "border-l-blue-600",
    bgColor: "bg-blue-950/20",
    description: "Ambria é governada pela Rainha Korinthia e dividida em sete ducados, por sua vez divididos em condados e baronatos. Formalmente, a Rainha aponta os duques, que apontam condes e barões. A família real Kohinoor detém o poder, mas intrigas e ambições entre as casas são constantes.",
    details: [
      "Yndarien — Grande Ducado da Rainha Korinthia (direto). ~40% da população. Capital: Yndaros",
      "Mervidun — Duque Sesario (padrasto de Korinthia). Sede em Mergile. Rico em metais e granito",
      "Nova Beretor — Duque Ynedar (sobrinho). Boas relações com bárbaros. Extrai óleo de fogo dos Brejos",
      "Seragon — Duque Gadramei (primo órfão). Mais pobre e rebelde. Fronteira com clã Karohar",
      "Kasandrien — Duquesa Esmerelda (meia-irmã, 17 anos). Sede em Agrella. Sede da Ordo Magica",
      "Narugor — Duque Junio Berakka (herói de guerra). Contém Otra Senja e Otra Dorno. Fronteira com Davokar",
      "Nova Berendoria — Duque Alesaro Kohinoor (tio da Rainha). Sede em Sevona. Ressente não ter sucedido ao trono",
    ]
  },
  {
    name: "Os Clãs Bárbaros",
    icon: Trees,
    color: "text-green-300",
    borderColor: "border-l-green-600",
    bgColor: "bg-green-950/20",
    description: "Originalmente treze clãs habitavam a Davokar. Hoje são onze — o clã Kadiz foi integrado à civilização ambriana e o clã Jezora foi aniquilado. São liderados pelo Alto Chefe Tharaban em Karvosti. As bruxas, sob a Huldra Yeleta, são as líderes espirituais e possuem enorme influência.",
    details: [
      "Alto Chefe Tharaban — mais árbitro que governante. Protegido por 99 Guardas da Ira",
      "Huldra Yeleta — líder das bruxas. Reside em cavernas no penhasco de Karvosti",
      "Gaoia — mais ao norte, aliados do linnorme Avô Lint. Brutais e primitivos",
      "Enoai — povo arbóreo, vive nas copas ou sob raízes de pinheiros gigantes",
      "Godinja — alegam descendência da elite de Symbaroum. Chefe Vikomer (rumores de sangue élfico)",
      "Yedesa — 6 dos últimos 10 Altos Chefes vieram deste clã. Fortaleza de pedra do chefe Leonod",
      "Baiaga — lutam com baiagornes (ursos domados). Vagam em pequenos grupos nômades",
      "Zarek — costa norte do Lago Volgoma. Chefe Monovar. Aliados do Duque Alesaro",
      "Odaiova — entre Karvosti e Forte do Cardo. Intermediários comerciais. Chefe Embrasado",
      "Karohar — hostis aos ambrianos. Território invadido por caça-tesouros",
      "Vajvod — sudeste, fortaleza Vojvodar. Abertos ao comércio. Colônia ambriana Pântano de Karo",
      "Saar-Kahn — língua gutural, adoram a bestial Filha-de-Sangue. Isolados e perigosos",
      "Varakko — menor clã. Viajam em carroças. Atacados pelos Saars. Ficam no lado ambriano com permissão de Alesaro",
    ]
  },
  {
    name: "Igreja de Prios (Sol Moribundo)",
    icon: Sun,
    color: "text-amber-300",
    borderColor: "border-l-amber-600",
    bgColor: "bg-amber-950/20",
    description: "Prios é o Deus Sol, o Uno e Doador das Leis. Durante a Grande Guerra foi declarado o único deus verdadeiro. A Igreja governa o Domínio de Prios — território grande como um ducado ao redor de Muralha do Templo. Possui três divisões distintas com enorme influência política e militar.",
    details: [
      "Primeiro Padre Jeseebegai (Demeon Soleij) — líder supremo, resgatador de Korinthia. Cego, sem cabelo, coberto de cicatrizes",
      "Sacerdócio — teurgos e liturgos que interpretam os comandos de Prios. Representante na Cúria: Anabela Argona",
      "Cavaleiros do Sol Moribundo (Templários) — braço armado. Cavaleiro Comandante: Iakobo Vearra",
      "Frades do Crepúsculo (Mantos Negros) — ordem monástica de inteligência. Porta-voz: Irmão Eumenos",
      "Domínio de Prios — território próprio ao redor de Muralha do Templo",
      "Acreditam que Prios está morrendo porque humanos negligenciaram seus deveres",
      "Davokar deve ser purificada e seus recursos cultivados para fortalecer Prios",
      "Templo restaurado em Karvosti desde o Ano 15 — tensão com bárbaros",
    ]
  },
  {
    name: "Ordo Magica",
    icon: BookOpen,
    color: "text-purple-300",
    borderColor: "border-l-purple-600",
    bgColor: "bg-purple-950/20",
    description: "A ordem mais proeminente de Ambria dedicada a estudos e ensino místico. Há cerca de um ano realocou de Yndaros para Agrella, na costa do Lago Ebel. Capítulos em todos os assentamentos maiores. Busca conhecimento pelo conhecimento em si, baseando-se em filosofia e evidências em vez de fé.",
    details: [
      "Grande Mestre Seldonio — líder da ordem. Aparece em épicos de quase dois séculos atrás. Gasta mais tempo no capítulo de Yndaros que em Agrella",
      "Mestres da Ordem — especialistas em Botânica, Estudos Élficos, Conhecimento de Bestas, Magismo",
      "Outros Mestres poderosos: Variol (tempestades), Kullinan, Elionara Gatamarela (distorção mental)",
      "Mestre Mallianos — Mestre de Capítulo em Yndaros, altamente religioso",
      "Mestre Cornelio — Mestre de Capítulo em Forte do Cardo",
      "Vivisectório em Yndaros — show público de dissecações (animais, trolls, abominações)",
      "Organizam expedições a Davokar em busca de artefatos e conhecimento",
      "Conflito com a Igreja sobre jurisdição mística e métodos de pesquisa",
    ]
  },
  {
    name: "Exército da Rainha",
    icon: Sword,
    color: "text-slate-300",
    borderColor: "border-l-slate-500",
    bgColor: "bg-slate-950/20",
    description: "A Rainha Korinthia é Comandante Suprema de Ambria, mas as operações são lideradas pelo Marechal de Campo Beremo Herengol, quase setenta anos, em vigor sobrenaturalmente bom. O exército é dividido em seis divisões dos ducados mais uma sétima de Yndarien.",
    details: [
      "Marechal de Campo Beremo Herengol — segundo mais poderoso, quase 70 anos. Rumores de vigor sobrenatural",
      "6 divisões pagas pelos ducados + 1 de Yndarien sob a Rainha diretamente",
      "Cada divisão inclui infantaria, cavalaria, arqueiros e unidades de apoio",
      "Pansars (Guarda da Rainha) — General Jomilo. Fortaleza a oeste da capital",
      "Patrulheiros da Rainha — inteligência e reconhecimento. Coronel Revina Kalfas (amiga próxima da Rainha)",
      "Revina Kalfas é apontada como próxima Marechal de Campo — rumor que irrita os generais",
      "Patrulheiros operam na Davokar e nas rotas entre Forte do Cardo e Karvosti",
    ]
  },
  {
    name: "O Pacto de Ferro",
    icon: Link,
    color: "text-emerald-300",
    borderColor: "border-l-emerald-500",
    bgColor: "bg-emerald-950/20",
    description: "Os elfos alegam que a raça humana prometeu deixar a floresta a seus cuidados e jurou nunca pôr os pés nas profundezas. Supostamente endossado por uma longa lista de governantes humanos, incluindo o antepassado de Korinthia, Argalo. Selado com seis mil anéis de ferro dados ao lorde élfico Eneáno.",
    details: [
      "Emissário Elori — negocia em Yndaros, sempre escoltado por guardas reais",
      "Aloéna — ser feminino gigante que reside em arvoredo no penhasco de Karvosti. Visitou Elori em Yndaros",
      "Ambria oficialmente ignora o tratado — 'mentiras de orelhas-pontudas espertos'",
      "Elfos cumprem diariamente ameaças contra violadores do tratado com força letal",
      "Entre os bárbaros existem lendas que podem provar a existência do Pacto",
      "Elfos da Primavera — jovens, sujeitam humanos a peças mortais",
      "Elfos do Verão — guerreiros, usam humanos como alvos de flechas",
    ]
  },
  {
    name: "Feiticeiros & Cultos Sombrios",
    icon: Skull,
    color: "text-red-300",
    borderColor: "border-l-red-600",
    bgColor: "bg-red-950/20",
    description: "Praticantes de magia proibida que operam nas sombras. Fazem pactos com seres sombrios e usam poderes que geram corrupção permanente. Perseguidos por todas as facções — Igreja, Ordo Magica e até bruxas bárbaras.",
    details: [
      "Feitiçaria é considerada heresia e punida severamente em Ambria",
      "Alguns se escondem em Davokar, longe da lei ambriana",
      "Pactos com mortos-vivos e abominações",
      "Cultos secretos operam em cidades ambrianas",
      "Frades do Crepúsculo (Mantos Negros) são os caçadores internos de ameaças",
      "Alguns buscam poder nas ruínas de Symbaroum",
    ]
  },
  {
    name: "Caçadores de Tesouro & Exploradores",
    icon: ShieldAlert,
    color: "text-cyan-300",
    borderColor: "border-l-cyan-500",
    bgColor: "bg-cyan-950/20",
    description: "Aventureiros que exploram Davokar em busca de riquezas. Desde o Ano 15, precisam de Licença de Explorador, comprada em Yndaros ou na Legação da Rainha em Forte do Cardo. A Agência da Mãe Mehira organiza o mercado de mercenários e guias.",
    details: [
      "Licença mensal: 2 táleres (individual) a 55 táleres (até 10 pessoas). Anual: até 450 táleres",
      "Custos extras por incompetência, intenções suspeitas e outros adicionais",
      "Lasifor Campo Noturno — Prefeito do Forte do Cardo, ex-aventureiro",
      "Mãe Mehira — ex-caçadora que perdeu braço e olho. Gerencia agência de contratação",
      "Iasogoi Brigo — fez fortuna nas ruínas de Odaban",
      "Lysindra Aperto Dourado, Elmea Pé de Coelho, Goracai o Jovem — exploradores famosos",
      "Tensão constante com elfos do Pacto de Ferro",
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
          O mundo de Symbaroum é definido por tensões entre múltiplas facções com interesses conflitantes. 
          A expansão ambriana, a resistência bárbara, a vigilância élfica e as ambições religiosas 
          criam um cenário político complexo e volátil. Cada personagem inevitavelmente se envolverá 
          com uma ou mais destas facções.
        </p>
      </div>

      {/* Political Tensions */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tensões Políticas Principais
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-xs font-bold text-foreground mb-1">Ambria vs. Clãs Bárbaros</h4>
              <p className="text-[10px] text-muted-foreground">Ambria expande para terras bárbaras. Dois clãs já foram destruídos/integrados. Alguns clãs cooperam, outros resistem. As bruxas podem decidir o equilíbrio.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-xs font-bold text-foreground mb-1">Igreja vs. Ordo Magica</h4>
              <p className="text-[10px] text-muted-foreground">Disputam jurisdição sobre assuntos místicos. A Igreja depende de fé; a Ordo de filosofia e evidências. Teurgos e Mantos Negros desconfiam dos mestres da Ordo.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-xs font-bold text-foreground mb-1">Elfos vs. Humanos</h4>
              <p className="text-[10px] text-muted-foreground">O Pacto de Ferro proíbe exploração profunda. Elfos matam violadores. Ambria ignora o tratado. Os bárbaros ficam presos entre os dois lados.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-xs font-bold text-foreground mb-1">Intrigas na Nobreza</h4>
              <p className="text-[10px] text-muted-foreground">O tio da Rainha, Alesaro, ressente ter perdido o trono. Primos incompetentes. A mãe gravemente doente. As casas nobres buscam oportunidades para ganhar poder.</p>
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
                    <Icon className={`w-5 h-5 ${faction.color}`} />
                    <h3 className={`text-lg font-bold ${faction.color}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {faction.name}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                    {faction.description}
                  </p>
                  <div className={`${faction.bgColor} rounded p-3`}>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {faction.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
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
