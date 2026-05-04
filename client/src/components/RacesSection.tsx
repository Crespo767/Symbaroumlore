import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const races = [
  {
    name: "Humano (Ambriano)",
    traits: ["Contatos ou Privilegiado"],
    color: "border-l-blue-500",
    source: "Básico",
    description: "O povo da Rainha Korinthia, organizado em uma civilização estruturada com nobreza, clero e povo comum. Nomes masculinos terminam em -o e femininos em -a; nobres usam sufixos como -gai, -goi ou -mei.",
    culture: "Civilização urbana, hierárquica. Valorizam ordem, lei e a fé em Prios. Buscam expandir seu domínio sobre as terras bárbaras e explorar as ruínas da Davokar.",
    attributes: "Flexíveis, podem priorizar qualquer atributo dependendo da ocupação.",
  },
  {
    name: "Humano (Bárbaro)",
    traits: ["Mateiro ou Resistente a Venenos"],
    color: "border-l-green-500",
    source: "Básico",
    description: "Comumente aceitos como descendentes de Symbaroum, a civilização que governou a região até um milênio atrás. Vivem em mais harmonia desde a chegada ambriana. Nomes masculinos terminam em -mar, -mon ou -mer; femininos em -ona, -ola ou -ra.",
    culture: "Vivem em clãs na periferia da Davokar. Liderados por chefes e guiados espiritualmente por bruxas. Sob a orientação das bruxas, estão plenamente conscientes de que dependem da natureza para sua sobrevivência.",
    attributes: "Tendem a Vigoroso e Rápido altos. Bons guerreiros e caçadores.",
  },
  {
    name: "Cambiante",
    traits: ["Contatos ou Dedo Verde"],
    color: "border-l-purple-500",
    source: "Básico",
    description: "Crianças élficas deixadas em famílias humanas, substituindo bebês roubados. Na adolescência, desenvolvem características élficas como orelhas pontiagudas e olhos amendoados. Vivem muito tempo.",
    culture: "Exilados tanto da sociedade humana quanto da élfica. Vagam solitários, frequentemente confundidos com feiticeiros. Alguns encontram refúgio entre os bárbaros ou na Ordo Magica.",
    attributes: "Versáteis. Resoluto e Persuasivo são comuns para cambiantes místicos.",
  },
  {
    name: "Goblin",
    traits: ["Sobrevivente ou Escapista"],
    color: "border-l-amber-500",
    source: "Básico",
    description: "Origem misteriosa, vindos das profundezas da Davokar. Vida extremamente curta: adultos aos 5 anos, idosos aos 20, raridade chegar aos 30. Temperamento impetuoso e impulsivo. Podem evoluir para trolls via crisálida.",
    culture: "Trabalham em tarefas pesadas no Forte do Cardo e outros assentamentos. Apesar de serem tratados como párias, são surpreendentemente resilientes e adaptáveis. Formam comunidades caóticas mas funcionais.",
    attributes: "Rápido e Discreto altos. Bons ladinos e batedores.",
  },
  {
    name: "Ogro",
    traits: ["Pária", "Robusto"],
    color: "border-l-red-500",
    source: "Básico",
    description: "Criaturas solitárias das profundezas da Davokar. Grandes e incrivelmente fortes. Raramente vistos em assentamentos humanos, mas alguns poucos se aventuram fora da floresta. Possuem inteligência surpreendente.",
    culture: "Vivem isolados nas profundezas. Quando aparecem em sociedade, geralmente são contratados como guarda-costas ou trabalhadores braçais. São gentis por natureza, apesar da aparência intimidadora.",
    attributes: "Vigoroso muito alto (até 18). Força descomunal natural.",
  },
  {
    name: "Elfo",
    traits: ["Vida Longa", "Pária"],
    color: "border-l-emerald-400",
    source: "Avançado",
    description: "Membros do Pacto de Ferro, guardiões imortais da Davokar. Passam por um ciclo de vida em estações: Primavera (jovem, curioso), Verão (guerreiro, protetor), Outono (sábio, cansado) e Inverno (antigo, perigoso). Alguns abandonam o Pacto.",
    culture: "Vivem em comunidades ocultas na floresta. Dedicam-se a impedir que a corrupção se espalhe e que humanos perturbem ruínas antigas. Consideram-se superiores às raças mortais. Comunicam-se por cantos e gestos sutis.",
    attributes: "Rápido e Vigilante altos. Excelentes caçadores e guerreiros da floresta.",
  },
  {
    name: "Anão",
    traits: ["Herança Natural", "Memória Absoluta", "Pária"],
    color: "border-l-stone-400",
    source: "Avançado",
    description: "Povo misterioso, possivelmente criado durante a era de Symbaroum. Família é o centro de tudo, e os clãs anões são extremamente unidos. Memória perfeita que se estende por gerações. Poucos em número, mas resilientes.",
    culture: "Vivem em pequenos grupos familiares, frequentemente como artesãos ou comerciantes. Sua Memória Absoluta os torna excelentes arquivistas e historiadores. Desconfiados de estranhos, mas leais até a morte aos aliados.",
    attributes: "Vigoroso e Astuto altos. Bons artesãos e guerreiros resistentes.",
  },
  {
    name: "Humano Sequestrado",
    traits: ["Mateiro"],
    color: "border-l-teal-400",
    source: "Avançado",
    description: "Humanos roubados quando bebês e criados por elfos do Pacto de Ferro. Treinados como guerreiros e batedores desde a infância. Conhecem a floresta como poucos humanos. Vivem entre dois mundos.",
    culture: "Criados com valores élficos mas com corpo e vida humana. Alguns retornam à sociedade humana, outros permanecem servindo o Pacto. Possuem conhecimento profundo de Davokar que poucos humanos têm.",
    attributes: "Rápido, Vigilante e Discreto altos. Excelentes batedores e caçadores.",
  },
  {
    name: "Troll",
    traits: ["Vida Longa", "Pária"],
    color: "border-l-orange-600",
    source: "Avançado",
    description: "Seres poderosos do Submundo que evoluem de goblins através de uma crisálida misteriosa. Enormes e resistentes, com pele como casca de árvore. Podem viver séculos. Possuem uma cultura própria baseada no canto.",
    culture: "Vivem nas profundezas da Davokar ou em cavernas. Possuem a tradição do Canto do Troll, uma magia expressa pela voz. São solitários mas não hostis. Alguns trolls são cantores lendários cujas vozes ecoam pela floresta.",
    attributes: "Vigoroso extremamente alto. Podem ter Armadurado, Arma Natural, Regeneração ou Robusto como traços adicionais.",
  },
  {
    name: "Morto-Vivo",
    traits: ["Totalmente Corrompido", "Livre Arbítrio"],
    color: "border-l-gray-500",
    source: "Avançado",
    description: "Fenômeno recente e perturbador: pessoas que despertaram após a morte com mente intacta. Completamente corrompidos mas mantêm livre arbítrio e personalidade. Não são mortos-vivos tradicionais, são algo novo e inexplicável.",
    culture: "Rejeitados por todos. A Igreja de Prios os considera abominações. Alguns buscam entender sua condição, outros simplesmente tentam existir. Sua Sombra é completamente negra, revelando sua natureza a qualquer um com Visão de Bruxa.",
    attributes: "Resoluto alto (necessário para manter a sanidade). Não precisam comer, dormir ou respirar.",
  },
];

export default function RacesSection() {
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const filtered = sourceFilter === "all" ? races : races.filter(r => r.source === sourceFilter);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Raças Jogáveis
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          O mundo de Symbaroum oferece dez raças distintas para os jogadores. Cada uma possui traços 
          raciais gratuitos, cultura própria e posição única na sociedade. De nobres ambrianos a 
          trolls ancestrais, cada escolha define profundamente a experiência de jogo.
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

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((race, index) => (
          <motion.div
            key={race.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className={`bg-card border-border border-l-4 ${race.color} h-full`}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {race.name}
                  </h3>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                    race.source === "Avançado" ? "bg-purple-900/40 text-purple-300" : "bg-green-900/40 text-green-300"
                  }`}>
                    {race.source}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {race.traits.map((trait) => (
                    <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-amber-900/30 text-amber-200 border border-amber-800/40">
                      {trait}
                    </span>
                  ))}
                </div>
                <p className="text-[12px] text-foreground/85 leading-relaxed mb-3">
                  {race.description}
                </p>
                <div className="bg-secondary/50 rounded p-3 mb-2">
                  <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Cultura</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {race.culture}
                  </p>
                </div>
                <div className="bg-secondary/30 rounded p-2">
                  <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Atributos Sugeridos</h4>
                  <p className="text-[10px] text-muted-foreground">{race.attributes}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Race Lifecycle Note */}
      <Card className="bg-card border-border mt-6">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ciclos de Vida Especiais
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-950/20 rounded p-3 border border-emerald-900/30">
              <h4 className="text-sm font-semibold text-emerald-300 mb-1">Ciclo Élfico</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Primavera (jovem, curioso) → Verão (guerreiro, no auge) → Outono (sábio, melancólico) → Inverno (antigo, temível). Cada estação dura séculos.
              </p>
            </div>
            <div className="bg-orange-950/20 rounded p-3 border border-orange-900/30">
              <h4 className="text-sm font-semibold text-orange-300 mb-1">Evolução Goblin→Troll</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Goblins podem entrar em crisálida e emergir como trolls, um processo raro e misterioso. Trolls vivem séculos e crescem continuamente.
              </p>
            </div>
            <div className="bg-gray-800/40 rounded p-3 border border-gray-700/30">
              <h4 className="text-sm font-semibold text-gray-300 mb-1">Despertar Morto-Vivo</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Fenômeno recente sem explicação. A pessoa morre e desperta com mente intacta mas corpo morto. Corrupção total mas livre arbítrio preservado.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
