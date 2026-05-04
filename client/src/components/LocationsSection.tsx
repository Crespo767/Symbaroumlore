import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const locations = [
  {
    name: "Yndaros",
    subtitle: "Capital de Ambria",
    description: "Reconstruída sobre as ruínas de Lindaros (destruída por praga hemorrágica ~200 anos antes). Capital do Grande Ducado de Yndarien, governado diretamente pela Rainha. Cerca de 40% da população ambriana vive na região. Novos refugiados chegam das Titãs todos os dias. A maior cidade de Ambria, centro político, religioso e comercial.",
    features: ["Capital do reino", "Catedral dos Mártires (inaugurada Ano 8)", "Capítulo da Ordo Magica", "Emissário élfico Elori reside aqui", "Vivisectório da Ordo Magica", "Refugiados chegam continuamente"],
    type: "cidade",
  },
  {
    name: "Forte do Cardo",
    subtitle: "Portão para a Davokar",
    description: "Fundado no Ano 13 por Lasifor Campo Noturno, financiado pela recompensa do Cardo-do-Crepúsculo que curou a mãe da Rainha. Paliçada de bétula com 9 metros de altura. Cerca de 6.000 residentes permanentes e 10.000 contando visitantes. Porto seguro de exploradores na fronteira de Davokar.",
    features: ["Prefeito Lasifor Campo Noturno", "Farol de ~90 metros", "Poço de Bronze (vestígio de Symbaroum)", "Praça do Sapo (esqueleto de monstro-sapo)", "Agência da Mãe Mehira", "~150 guardas, 3 capitães"],
    type: "fortaleza",
  },
  {
    name: "Karvosti",
    subtitle: "Platô Sagrado dos Bárbaros",
    description: "Platô rochoso na floresta, a cerca de 5 dias de cavalgada a nordeste de Forte do Cardo. Local de Assembleia dos clãs bárbaros desde que se uniram contra o Rei Aranha. Dividido em territórios: a fortaleza do Alto Chefe, as cavernas da Huldra, e desde o Ano 15, o templo restaurado da Igreja do Sol.",
    features: ["Alto Chefe Tharaban (fortaleza murada)", "Huldra Yeleta (cavernas no penhasco)", "99 Guardas da Ira Dormente", "Aloéna (ser feminino gigante, arvoredo no penhasco)", "Templo do Sol restaurado", "O Poste (resolução de conflitos)"],
    type: "sagrado",
  },
  {
    name: "Muralha do Templo",
    subtitle: "Sede da Igreja de Prios",
    description: "Sede administrativa e espiritual da Igreja de Prios, onde o Primeiro Padre Jeseebegai se senta no Trono do Anoitecer. Localizada onde as maiores estradas de Ambria se cruzam — entre Yndaros e Forte do Cardo, e entre Kurun e Corvênia. Cercada por planícies de plantações e pastagens.",
    features: ["Trono do Anoitecer", "Primeiro Padre Jeseebegai", "Cúria (corpo governante)", "Quartel dos Templários", "Domínio de Prios (grande como um ducado)"],
    type: "sagrado",
  },
  {
    name: "Agrella",
    subtitle: "Sede da Ordo Magica",
    description: "Cidade na costa do Lago Ebel, capital do ducado de Kasandrien governado pela jovem Duquesa Esmerelda (meia-irmã de Korinthia, 17 anos). Há cerca de um ano, a Ordo Magica realocou sua sede principal para cá. Famosa pelo decreto de Esmerelda: 'Os mortos vitoriosos devem ser celebrados e louvados, não lamentados!' — uma cidade de comemorações eternas.",
    features: ["Sede principal da Ordo Magica", "Duquesa Esmerelda (17 anos)", "Lago Ebel (transporte fluvial)", "Cidade de celebrações eternas"],
    type: "cidade",
  },
  {
    name: "Mergile",
    subtitle: "Centro Comercial de Mervidun",
    description: "Sede do Duque Sesario (segundo marido da mãe de Korinthia) no ducado de Mervidun. Capitaneia o comércio de metais, granito e madeira. Graças ao transporte rápido ao longo do rio Noora, tornou Mervidun um dos ducados mais ricos de Ambria.",
    features: ["Duque Sesario governa", "Comércio de metais e granito", "Rio Noora (transporte)", "Um dos ducados mais ricos"],
    type: "cidade",
  },
  {
    name: "Sevona",
    subtitle: "Sede de Nova Berendoria",
    description: "Cidade principal de Nova Berendoria, fundada no Ano 11 como o oitavo ducado. Governada pelo Duque Alesaro Kohinoor, tio da Rainha que ressente não ter sucedido ao trono. Localizada na fronteira estéril assolada por vendavais. Relatórios dizem que Alesaro está fazendo novos amigos entre os clãs do oeste.",
    features: ["Duque Alesaro Kohinoor", "Fundada Ano 11", "Fronteira estéril e ventosa", "Aliança com clã Zarek (Chefe Monovar)"],
    type: "cidade",
  },
  {
    name: "Brejonegro",
    subtitle: "Favela Fora dos Muros",
    description: "Acampamento permanente de tendas na estrada para Yndaros, fora dos muros de Forte do Cardo. Também chamado 'Repreensão do Cardo'. Refúgio de trabalhadores, exploradores independentes e todos que não podem pagar pela proteção do Prefeito. Cresce tão rapidamente que pode superar o Forte em população.",
    features: ["Sopão do Padre Sarvola (herético)", "Crescimento descontrolado", "Sem lei formal", "Também chamado 'Repreensão do Cardo'"],
    type: "fortaleza",
  },
  {
    name: "Karabbadokk",
    subtitle: "Tribo Goblin",
    description: "Tribo goblin a uma hora de cavalgada do Forte do Cardo. Construíram a maior parte do Forte e até hoje fazem o trabalho pesado — cortam lenha, varrem ruas, servem como mensageiros. O chefe Idelfons e o guia Garm Verminquieto são figuras notáveis. Os irmãos ogros Kulds e Klagga são contratados para trabalhos pesados.",
    features: ["Chefe Idelfons", "Garm Verminquieto (guia)", "Construíram o Forte do Cardo", "Ogros Kulds e Klagga"],
    type: "fortaleza",
  },
  {
    name: "Otra Senja & Otra Dorno",
    subtitle: "Fortificações da Fronteira",
    description: "Torres fortificadas na fronteira norte de Ambria, no ducado de Narugor governado pelo Duque Junio Berakka. Mantiveram seus nomes dos tempos do chefe de guerra Haloban. Torres de vigia a cada mil passos e um fosso defensivo protegem as terras baixas das bestas da Davokar.",
    features: ["Ducado de Narugor", "Duque Junio Berakka", "Antigas defesas de Haloban", "Fosso em construção"],
    type: "fortaleza",
  },
  {
    name: "Symbar",
    subtitle: "Coração Perdido de Symbaroum",
    description: "A lendária capital do antigo império de Symbaroum, supostamente localizada no centro mais profundo da Davokar. Ninguém a encontrou e retornou com histórias críveis. Mas isso não impede que caçadores de fortunas planejem novas expedições — porque enquanto os contos sobre seus tesouros sobrepujarem as histórias sobre seus horrores, a sedução do mito viverá.",
    features: ["Localização desconhecida", "Capital do império caído", "Tesouros intocados (rumor)", "Ninguém retornou"],
    type: "ruina",
  },
  {
    name: "Odaban",
    subtitle: "Cidade Arruinada",
    description: "Ruínas de uma grande cidade na Davokar. Iasogoi Brigo fez sua fortuna em uma única visita às ruínas de Odaban. Fica a alguns dias de viagem do Forte do Cardo, mas a jornada é extremamente perigosa — expedições frequentemente perdem membros para trolls furiosos, elfos, fadas traiçoeiras e outras ameaças.",
    features: ["Iasogoi Brigo fez fortuna aqui", "Alguns dias de Forte do Cardo", "Extremamente perigoso", "Parcialmente explorada"],
    type: "ruina",
  },
  {
    name: "Pirâmide de Serand",
    subtitle: "Ruína Misteriosa",
    description: "Uma das ruínas descobertas na periferia de Davokar pelos Patrulheiros da Rainha e expedições da Ordo Magica. Na entrada norte, há um texto amplamente debatido que possivelmente diz o nome do arquiteto da pirâmide.",
    features: ["Periferia de Davokar", "Texto debatido na entrada", "Descoberta pelos Patrulheiros"],
    type: "ruina",
  },
  {
    name: "Colunas de Haganor & Poço Claro",
    subtitle: "Descobertas na Fronteira",
    description: "As Colunas de Haganor são outro local descoberto na periferia. Poço Claro é um grande aqueduto com uma cidade afundada, descoberto pelo explorador Goracai, o Jovem. Mesmo nas bordas da floresta, exploradores sortudos e bem-preparados ainda encontram ruínas intocadas.",
    features: ["Colunas de Haganor", "Aqueduto de Poço Claro", "Cidade afundada", "Descoberta de Goracai"],
    type: "ruina",
  },
  {
    name: "Lago Volgoma",
    subtitle: "Espelho da Floresta",
    description: "Grande lago no interior de Davokar. Na costa sul, novos assentamentos ambrianos foram estabelecidos. O clã Zarek, cujo principal assentamento fica na costa norte, desenvolveu parceria próxima com o Duque Alesaro Kohinoor.",
    features: ["Clã Zarek na costa norte", "Colônias ambrianas na costa sul", "A um dia da linha das árvores"],
    type: "natural",
  },
  {
    name: "Montanhas Titãs",
    subtitle: "Muralha do Sul",
    description: "Cordilheira colossal ao sul de Ambria. Picos eternamente nevados e vales profundos formam uma barreira quase intransponível. Além delas fica Alberetor, a terra natal devastada pela Grande Guerra. Os Frades do Crepúsculo mantêm um monastério nas Titãs, ao sul de Yndaros. Refugiados ainda atravessam a passagem.",
    features: ["Barreira entre Ambria e Alberetor", "Rota da Grande Migração", "Monastério dos Frades do Crepúsculo", "Refugiados continuam chegando"],
    type: "natural",
  },
  {
    name: "Montanhas Corvos",
    subtitle: "Fronteira Leste",
    description: "Ficam mais altas e íngremes quanto mais ao sul. Os ambrianos ainda não estabeleceram assentamentos notáveis nas montanhas, exceto algumas colônias de mineração. São um refúgio para salteadores, pensadores livres e bárbaros rebeldes. O reino anão de Küam Zamok fica nas Corvos — seus habitantes são indiferentes aos humanos.",
    features: ["Refúgio de fora-da-lei", "Colônias de mineração", "Küam Zamok (reino anão)", "Bárbaros rebeldes"],
    type: "natural",
  },
  {
    name: "Alberetor",
    subtitle: "Terra Natal Perdida",
    description: "O antigo reino dos ambrianos, ao sul das Montanhas Titãs. Devastado por duas décadas de Grande Guerra contra os Lordes Negros. Fome, pragas e terras corrompidas forçaram a migração. Hoje é uma terra de ruínas e horrores. Refugiados ainda fogem de lá, mas muitos argumentam que a passagem da montanha deveria ser fechada.",
    features: ["Devastado pela Grande Guerra", "Terra de origem dos ambrianos", "Refugiados continuam fugindo", "Debate sobre fechar a passagem"],
    type: "ruina",
  },
];

const typeColors: Record<string, string> = {
  cidade: "bg-blue-500",
  fortaleza: "bg-amber-500",
  sagrado: "bg-purple-500",
  ruina: "bg-red-500",
  natural: "bg-green-500",
};

const typeBorders: Record<string, string> = {
  cidade: "border-l-blue-600",
  fortaleza: "border-l-amber-600",
  sagrado: "border-l-purple-600",
  ruina: "border-l-red-600",
  natural: "border-l-green-600",
};

const typeLabels: Record<string, string> = {
  cidade: "Cidade",
  fortaleza: "Fortaleza",
  sagrado: "Local Sagrado",
  ruina: "Ruína",
  natural: "Natural",
};

export default function LocationsSection() {
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filtered = typeFilter === "all" ? locations : locations.filter(l => l.type === typeFilter);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Locais Importantes
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          De capitais em crescimento a ruínas perdidas, o mundo de Symbaroum é pontilhado por locais 
          que guardam histórias, perigos e oportunidades. Cada lugar tem seu papel no equilíbrio 
          delicado entre civilização e selvageria.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setTypeFilter("all")}
          className={`text-xs px-3 py-1.5 rounded transition-all ${
            typeFilter === "all"
              ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          Todos ({locations.length})
        </button>
        {Object.entries(typeLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTypeFilter(key)}
            className={`text-xs px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
              typeFilter === key
                ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${typeColors[key]}`} />
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((loc, index) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Card className={`bg-card border-border border-l-4 ${typeBorders[loc.type]} h-full`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${typeColors[loc.type]}`} />
                  <div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {loc.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">{loc.subtitle}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                  {loc.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {loc.features.map((feat) => (
                    <span key={feat} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                      {feat}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
