import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const races = [
  // LIVRO BÁSICO
  {
    name: "Humano (Ambriano)",
    source: "Básico",
    color: "border-l-blue-500",
    description: "Refugiados e conquistadores que fugiram de sua terra natal corrompida, Alberetor, e cruzaram os Titãs para fundar o reino de Ambria sobre as ruínas de Lindaros.",
    lore: "Acreditam compartilhar uma árvore genealógica comum com os bárbaros, oriunda da antiga Symbaroum. Chegaram trazendo arquitetura monumental, exércitos disciplinados e uma economia agressiva baseada na conquista.",
    culture: "Uma sociedade hierárquica dividida entre nobreza, plebe e Igreja. Governam através da força e da lei, com grande ambição de dominar as riquezas perdidas nas profundezas de Davokar.",
  },
  {
    name: "Humano (Bárbaro)",
    source: "Básico",
    color: "border-l-green-500",
    description: "O povo originário das bordas de Davokar, organizados em clãs. Historicamente mais conectados aos segredos e limites da grande floresta.",
    lore: "Seus clãs levam vidas independentes e respeitam acordos ancestrais, liderados por chefes bélicos e orientados pelas Bruxas. O Alto Chefe em Karvosti age como um árbitro entre os clãs e um elo de união contra invasores.",
    culture: "Guiados por tabus rígidos que prezam pelo equilíbrio: honrar a natureza, não abusar de seus recursos e evitar as partes mais sombrias de Davokar, temendo o despertar da antiga corrupção.",
  },
  {
    name: "Cambiante",
    source: "Básico",
    color: "border-l-purple-500",
    description: "Crianças deixadas em berços humanos no lugar de bebês roubados por elfos. Parecem humanos na infância, mas desenvolvem características élficas na adolescência.",
    lore: "Seu ciclo de vida não avança como o dos elfos autênticos. Alguns estudiosos acreditam que são uma raça própria criada por magia, enquanto outros defendem que são elfos verdadeiros cujo desenvolvimento foi atrofiado pelo convívio humano.",
    culture: "Exilados tanto da sociedade humana quanto da élfica. Costumam ter vidas difíceis e solitárias, tornando-se amargurados ou frívolos. Alguns encontram abrigo com bruxas ou magos da Ordo Magica, mas a maioria luta para sobreviver nas ruas.",
  },
  {
    name: "Goblin",
    source: "Básico",
    color: "border-l-amber-500",
    description: "Vindos das profundezas da Davokar, possuem uma vida extremamente curta. São considerados adultos aos dez anos e raramente alcançam os trinta, frequentemente retornando à floresta para morrer.",
    lore: "No Forte do Cardo e outros locais de fronteira, sua presença ruidosa e impetuosa os torna impopulares. Aceitam os trabalhos mais sujos e perigosos, mas alguns quebram esse ciclo para se tornarem caçadores de tesouros ou pupilos em monastérios.",
    culture: "Sua cultura é caótica e energética, com jogos excêntricos que forasteiros acham repulsivos ou confusos. Os goblins vivem o agora com intensidade, sabendo que seu tempo no mundo é efêmero.",
  },
  {
    name: "Ogro",
    source: "Básico",
    color: "border-l-red-500",
    description: "Criaturas gigantescas, curiosas e muitas vezes silenciosas que emergem do âmago de Davokar sem lembranças de sua própria origem ou de quem são.",
    lore: "Eles saem das matas já adultos, como quadros em branco. Sem memória ou identidade, são frequentemente abrigados por goblins, humanos ou bruxas, que lhes dão um nome e ensinam sobre o mundo.",
    culture: "Não possuem sociedade própria conhecida. Muitos acabam servindo como seguranças pesados nas favelas de Yndaros ou trabalhadores de força bruta nas fazendas fronteiriças. São notáveis por sua calma taciturna.",
  },

  // GUIA AVANÇADO
  {
    name: "Elfo",
    source: "Avançado",
    color: "border-l-emerald-400",
    description: "Mais do que uma raça, os elfos da Davokar formam uma ordem sagrada de guardiões, o Pacto de Ferro. Sua missão é impedir que o mal adormecido sob o musgo da floresta desperte.",
    lore: "Vivem um ciclo de vida em fases (estações): fadas primaveris, elfos de verão (guerreiros vigilantes), elfos de outono (sábios e melancólicos) e o letal inverno da alma. Poucos conhecem as terras ancestrais do oeste; seu dever está nas sombras de Davokar.",
    culture: "Carregam a triste responsabilidade do mundo, e os mais velhos lamentam por trazerem os mais jovens à existência para uma vida de eterno combate e sacrifício. Lidam ativamente contra os exploradores de tesouros do sul.",
  },
  {
    name: "Anão",
    source: "Avançado",
    color: "border-l-stone-400",
    description: "Um povo cuja história está envolta em mistério, fugindo de um passado sombrio em direção ao futuro. Para eles, \"a família é seu escudo, a língua sua arma, e o mundo seu campo de batalha\".",
    lore: "Dizem que surgiram como vermes na carcaça apodrecida da Serpente do Mundo e receberam intelecto dos feiticeiros do antigo Império de Symbaroum para serem escravos. Esse vínculo com seus mestres forjou uma contracultura resistente e códigos ocultos na sua fala.",
    culture: "Eles nunca escrevem nada, temendo que seus textos fossem lidos pelos antigos senhores. Possuem uma língua rica em duplos sentidos. A família é o centro absoluto de sua sociedade em Yndaros, e o exílio familiar é pior que a morte.",
  },
  {
    name: "Humano Sequestrado",
    source: "Avançado",
    color: "border-l-teal-400",
    description: "Bebês e crianças tomadas de famílias humanas pelos elfos, criados entre as fileiras do Pacto de Ferro no coração de Davokar.",
    lore: "Originalmente não passavam de reféns ou peões, mas recentemente os elfos têm usado esses humanos para aprender sobre o comportamento de seus vizinhos do sul ou atuar como embaixadores em tempos de crise.",
    culture: "Crescem absorvendo a cultura, a sabedoria e a língua élfica, divididos entre sua biologia humana e a filosofia do Pacto. Alguns tornam-se aliados inestimáveis de seus mestres de orelhas pontudas.",
  },
  {
    name: "Troll",
    source: "Avançado",
    color: "border-l-orange-600",
    description: "Seres antigos e poderosos que habitam o Mundo Subterrâneo ou cavernas recônditas, possuindo um profundo vínculo orgânico com a terra.",
    lore: "Muitos sábios afirmam que trolls derivam dos goblins através de um místico processo de crisálida. Eles crescem e envelhecem ao longo de séculos, transformando-se em autênticas forças da natureza vivas.",
    culture: "Os Trolls têm culturas secretas focadas no ritual e na música. Eles resolvem disputas através de desafios de força, resistência e até performances de sua mágica cantoria ancestral. Valorizam paciência e o respeito absoluto às suas antigas tradições.",
  },
  {
    name: "Morto-Vivo",
    source: "Avançado",
    color: "border-l-gray-500",
    description: "Um fenômeno novo, estranho e profano: indivíduos que morreram, mas retornaram com suas mentes e memórias perfeitamente preservadas.",
    lore: "Apesar de seus corpos estarem sem vida, inertes e frios, eles caminham e agem com livre-arbítrio, alheios à necessidade de comer, respirar ou dormir. Eles são a prova física e inquietante da perturbação no equilíbrio natural.",
    culture: "Caçados pela inquisição e temidos pela população, vivem reclusos ou disfarçados. Muitos buscam entender por que não encontraram a paz e o que os prende ao mundo dos vivos.",
  },
];

export default function RacesSection() {
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const filtered = sourceFilter === "all" ? races : races.filter(r => r.source === sourceFilter);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Povos do Mundo
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          No mundo de Symbaroum, a variedade de povos reflete o peso da história e os segredos enterrados na floresta da Davokar. Cada raça possui sua própria herança, seus conflitos e suas maneiras únicas de lidar com o legado sombrio do antigo império.
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {["all", "Básico", "Avançado"].map(s => (
          <button
            key={s}
            onClick={() => setSourceFilter(s)}
            className={`text-xs px-3 py-1.5 rounded transition-all ${
              sourceFilter === s
                ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {s === "all" ? `Todas (${races.length})` : `${s} (${races.filter(r => r.source === s).length})`}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((race, index) => (
          <motion.div
            key={race.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className={`bg-card border-border border-l-4 ${race.color} h-full`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {race.name}
                    </h3>
                    <p className="text-sm text-amber-200/80 italic">
                      {race.description}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded whitespace-nowrap ml-4 ${
                    race.source === "Avançado" ? "bg-purple-900/40 text-purple-300" : "bg-green-900/40 text-green-300"
                  }`}>
                    {race.source}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Visão Geral</h4>
                    <p className="text-sm text-foreground/85 leading-relaxed">
                      {race.lore}
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded p-3">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Cultura e Vida</h4>
                    <p className="text-sm text-foreground/85 leading-relaxed">
                      {race.culture}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Race Lifecycle Note */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ciclos de Vida Especiais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-950/20 rounded p-4 border border-emerald-900/30">
              <h4 className="text-sm font-semibold text-emerald-300 mb-2">Ciclo Élfico</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As fadas da Primavera amadurecem em guerreiros de Verão; com o passar dos séculos e perdas, tornam-se melancólicos elfos de Outono, e os raros sobreviventes entram em seu temível Inverno da alma.
              </p>
            </div>
            <div className="bg-orange-950/20 rounded p-4 border border-orange-900/30">
              <h4 className="text-sm font-semibold text-orange-300 mb-2">A Ascensão dos Trolls</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diz-se que a linhagem dos trolls tem início com a impetuosa e breve vida dos goblins. Aqueles que encontram seu caminho de volta às profundezas podem se fechar em uma crisálida e emergir como novos trolls.
              </p>
            </div>
            <div className="bg-gray-800/40 rounded p-4 border border-gray-700/30">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">O Enigma dos Mortos</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Um despertar que desafia qualquer lei da natureza ou do sol: indivíduos cujos corações pararam de bater e sangues de fluir, mas cuja vontade e memória permanecem inexplicavelmente vivas e intactas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
