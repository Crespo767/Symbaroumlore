import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const locations = [
  {
    name: "Yndaros",
    subtitle: "A Joia de Ambria",
    description: "Reconstruída sobre as cinzas de Lindaros (uma antiga cidade-estado destruída por uma praga hemorrágica trezentos anos antes). É a capital do Grande Ducado de Yndarien e sede do poder da Rainha Korinthia. Uma cidade de contrastes violentos: a aristocracia esbanja riquezas no Palácio de Paládio, enquanto os guetos transbordam de refugiados miseráveis recém-chegados das montanhas.",
    features: ["Capital de Ambria", "Catedral dos Mártires", "Palácio de Paládio", "Vivisectório da Ordo Magica", "Acomoda ~40% da população ambriana"],
    type: "cidade",
  },
  {
    name: "Forte do Cardo",
    subtitle: "O Portão para a Morte e a Glória",
    description: "Uma paliçada de troncos fortificados encostada na borda da Davokar. Fundada no Ano 13 por Lasifor Campo Noturno, ex-aventureiro. É o refúgio seguro mais avançado para os caçadores de tesouros antes de adentrarem as sombras. O cheiro de resina, fogueiras e medo é onipresente.",
    features: ["Paliçada de 9 metros", "O Farol da Noite-Arca", "Praça do Sapo", "Agência da Mãe Mehira", "Único local legal para emitir Licenças de Exploração na fronteira"],
    type: "fortaleza",
  },
  {
    name: "Karvosti",
    subtitle: "O Platô Sagrado",
    description: "Um colossal penhasco de pedra erguendo-se no meio da Davokar, antigo local de paz e assembleia para os clãs bárbaros desde que se uniram contra o Rei Aranha. Nenhuma violência é tolerada no topo. Divide-se em áreas estritas: a fortaleza do Alto Chefe, as cavernas das Bruxas, e o polêmico Templo do Sol.",
    features: ["Assembleia dos Clãs", "O Poste das punições", "Fortaleza do Alto Chefe", "Cavernas da Huldra Yeleta", "Bosque restrito de Aloéna"],
    type: "sagrado",
  },
  {
    name: "Muralha do Templo",
    subtitle: "Coração da Inquisição",
    description: "O epicentro militar e espiritual da Igreja de Prios. Localiza-se no cruzamento das principais rotas comerciais do reino. É uma fortaleza sagrada onde o Primeiro Padre Jeseebegai prega a purificação do mundo no Trono do Anoitecer. As fornalhas e campos de treinamento dos Templários nunca dormem.",
    features: ["Domínio de Prios", "Trono do Anoitecer", "Quartel-General dos Templários e Mantos Negros", "Cercada por fazendas clericais"],
    type: "sagrado",
  },
  {
    name: "Agrella",
    subtitle: "A Cidade de Ouro e Luz",
    description: "A bela capital do ducado de Kasandrien, assentada às margens do cintilante Lago Ebel. A jovem Duquesa Esmerelda decretou que os mortos vitoriosos de Alberetor devem ser celebrados com festa, não choro. Tornou-se um refúgio de banquetes eternos e agora sedia o quartel-general da Ordo Magica.",
    features: ["Sede principal da Ordo Magica", "Governado pela Duquesa Esmerelda (17 anos)", "Cidade de festivais eternos", "Rota comercial fluvial"],
    type: "cidade",
  },
  {
    name: "Cidades Menores: Corvênia, Kurun & Kastor",
    subtitle: "Nós de Civilização",
    description: "Assentamentos que sustentam a economia e a logística ambriana. Corvênia, no norte, lida com grandes fluxos de caravanas. Kurun possui o Capítulo da Ordo Magica liderado pelo excêntrico Mestre Argoi. Kastor, recentemente assolada por misteriosos horrores alados que deixaram dezenas de mortos.",
    features: ["Bastiões econômicos", "Capítulos regionais da Ordo", "Frequentes alvos de ataques ou tragédias fronteiriças"],
    type: "cidade",
  },
  {
    name: "Mergile & Sevona",
    subtitle: "Os Polos de Riqueza e Vento",
    description: "Mergile é o coração próspero do Duque Sesario (Mervidun), dominando o rio Noora e o comércio de pedras e metais. Já Sevona (Nova Berendoria) é a capital isolada e flagelada por vendavais do ressentido Duque Alesaro Kohinoor, próxima aos clãs de bárbaros aliados (Zarek).",
    features: ["Comércio de Minérios (Mergile)", "Alianças fronteiriças questionáveis (Sevona)"],
    type: "cidade",
  },
  {
    name: "Brejonegro (Repreensão do Cardo)",
    subtitle: "A Favela dos Desesperados",
    description: "Um mar interminável de tendas, cabanas e lama fora das muralhas do Forte do Cardo. Lar de aventureiros falidos, fugitivos e goblins escravizados. A lei lá é o aço e o sangue. A única esperança é o 'Sopão do Padre Sarvola', um clérigo tido como herético pela Cúria.",
    features: ["Crescimento populacional descontrolado", "Centro de contrabando", "Total ausência de leis ambrianas"],
    type: "fortaleza",
  },
  {
    name: "Davokar Brilhante",
    subtitle: "A Orla da Floresta",
    description: "As regiões periféricas da floresta de Davokar. Aqui a luz do sol ainda perfura a folhagem. Embora abençoada com farta vida animal, ervas e recursos que enriquecem Ambria, ainda é extremamente perigosa devido a goblins, feras territoriais, elfos da primavera patrulheiros e bestas peçonhentas.",
    features: ["Luz solar visível", "Rica em ervas e caça", "Ruínas saqueáveis mais 'seguras'"],
    type: "natural",
  },
  {
    name: "Davokar Escura",
    subtitle: "O Abismo Verde",
    description: "As profundezas sufocantes e gélidas da floresta onde a luz do sol nunca toca o chão molhado. O domínio das Abominações, dos Trolls Vorazes e das ruínas mortais do Império de Symbaroum. O Pacto de Ferro mata sem aviso qualquer humano que ouse entrar aqui.",
    features: ["Escuridão eterna", "Concentração de Corrupção", "Abominações Primordiais", "Patrulhas letais dos Elfos do Verão"],
    type: "natural",
  },
  {
    name: "Symbar & Odaban",
    subtitle: "As Cidades Mortas",
    description: "Symbar é a lendária e mitológica capital de Symbaroum, dita abrigar tesouros infinitos e o próprio Trono de Espinhos; ninguém documentado jamais retornou de lá. Odaban, mais periférica, foi uma cidade ruinosa onde exploradores como Iasogoi Brigo fizeram fortuna colossal, superando horrores profanos.",
    features: ["Symbar: A Lenda Suprema", "Odaban: Cidade saqueada mas ainda letal", "Focos de Corrupção avassaladora"],
    type: "ruina",
  },
  {
    name: "Colunas de Haganor, Poço Claro & Pirâmide de Serand",
    subtitle: "Mausoléus da Antiguidade",
    description: "Ruínas descobertas e debatidas ao redor da Davokar. O Poço Claro revelou ser uma cidade inteira submersa em um aqueduto arcano. A Pirâmide de Serand apresenta inscrições indecifráveis. São a prova cabal da escala megalomaníaca e da feitiçaria arquitetônica do Império Caído.",
    features: ["Misteriosos textos arcanos", "Construções pré-bárbaras", "Armadilhas místicas intocadas"],
    type: "ruina",
  },
  {
    name: "O Mundo Subterrâneo",
    subtitle: "As Veias de Yndaros e Davokar",
    description: "O subterrâneo de Symbaroum não é apenas lama e rocha. Existem vastas passagens, rios sem luz, abismos (Sinkholes) e cidades escavadas esquecidas. Desde os misteriosos esgotos abaixo de Yndaros até o Reino Anão de Küam Zamok sob as Montanhas Corvos. Lar de horrores que rastejam e cultistas exilados.",
    features: ["Küam Zamok (Reino Anão)", "Esgotos de Lindaros", "Passagens de Trolls e Cultistas", "Falta de leis ou luz"],
    type: "natural",
  },
  {
    name: "Montanhas Titãs",
    subtitle: "A Muralha do Gelo Quebrado",
    description: "A colossal cadeia de montanhas com picos nevados que divide as planícies férteis de Ambria das terras cinzentas e mortas do sul. A Passagem das Titãs ainda recebe um gotejar constante de refugiados famintos e traumatizados fugindo das trevas de Alberetor.",
    features: ["Fronteira sul", "Rota mortal dos refugiados", "Monastérios gélidos dos Mantos Negros"],
    type: "natural",
  },
  {
    name: "Alberetor",
    subtitle: "O Sul Morto",
    description: "A terra natal de Ambria. O que antes eram campos verdejantes e cidades felizes tornou-se um pesadelo efervescente de magia negra, tempestades de cinzas e necromancia descontrolada deixada pelos Lordes Negros na Grande Guerra. Está afundando irremediavelmente na morte.",
    features: ["Origem do Povo Ambriano", "Devastada por armas mágicas", "Solo e águas apodrecidos", "Lar de mortos-vivos e flagelos"],
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
  fortaleza: "Fortaleza & Assentamento",
  sagrado: "Local Sagrado",
  ruina: "Ruína Histórica",
  natural: "Natureza & Selvageria",
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
          De capitais iluminadas onde teias de intriga são tecidas a ruínas sufocantes esquecidas pelo tempo, o mundo de Symbaroum é um caldeirão geográfico de perigos. Cada local guarda seus próprios horrores, sua própria política e sua promessa de riquezas letais.
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
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 shadow-sm ${typeColors[loc.type]}`} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {loc.name}
                    </h3>
                    <span className="text-sm font-medium text-amber-200/70">{loc.subtitle}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed mb-4 flex-grow">
                  {loc.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/50">
                  {loc.features.map((feat) => (
                    <span key={feat} className="text-xs px-2 py-1 rounded bg-background/50 text-muted-foreground border border-border">
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
