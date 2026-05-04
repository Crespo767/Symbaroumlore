import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const abilities = [
  // Livro Básico
  { name: "Amoque", attr: "Vigoroso", source: "Básico", desc: "Entrar em fúria berserker, ignorando dor e penalidades. Em fúria, o guerreiro não pode fazer testes de Defesa mas ganha dano extra." },
  { name: "Acrobacias", attr: "Rápido", source: "Básico", desc: "Evitar Ataques Livres e mover-se livremente pelo campo de batalha. Permite esquivas acrobáticas e movimentos ágeis." },
  { name: "Alquimia", attr: "Astuto", source: "Básico", desc: "Criar elixires, venenos e substâncias alquímicas. Níveis mais altos desbloqueiam receitas mais poderosas." },
  { name: "Ataque Gêmeo", attr: "Preciso", source: "Básico", desc: "Lutar com duas armas simultaneamente, realizando ataques extras com a arma secundária." },
  { name: "Atirador", attr: "Preciso", source: "Básico", desc: "Especialização em armas à distância. Aumenta dano e precisão com arcos, bestas e armas de arremesso." },
  { name: "Combatente de Escudo", attr: "Preciso", source: "Básico", desc: "Usar o escudo ofensivamente e defensivamente. Permite ataques com escudo e proteção aprimorada." },
  { name: "Dominação", attr: "Persuasivo", source: "Básico", desc: "Intimidar e subjugar oponentes pela força de personalidade. Pode forçar rendição ou hesitação." },
  { name: "Equestre", attr: "Geral", source: "Básico", desc: "Combate montado e manejo de montarias. Bônus em ataques e mobilidade quando cavalgando." },
  { name: "Finta", attr: "Discreto", source: "Básico", desc: "Enganar o oponente em combate, criando aberturas para ataques devastadores." },
  { name: "Força da Empunhadura Dupla", attr: "Preciso", source: "Básico", desc: "Empunhar armas de duas mãos com maestria, causando dano massivo." },
  { name: "Golpe Baixo", attr: "Discreto", source: "Básico", desc: "Atacar de surpresa ou de posição vantajosa, causando dano extra contra alvos desprevenidos." },
  { name: "Golpe com Flecha", attr: "Preciso", source: "Básico", desc: "Usar arco em combate próximo, disparando flechas em curta distância sem penalidade." },
  { name: "Guarda-Costas", attr: "Resoluto", source: "Básico", desc: "Proteger aliados interceptando ataques direcionados a eles. Sacrifício tático." },
  { name: "Homem-de-Armas", attr: "Geral", source: "Básico", desc: "Usar armaduras pesadas com eficiência, reduzindo penalidades e aumentando proteção." },
  { name: "Inabalável", attr: "Resoluto", source: "Básico", desc: "Resistir a efeitos de medo, dor e controle mental. Força de vontade inabalável." },
  { name: "Líder", attr: "Persuasivo", source: "Básico", desc: "Inspirar e comandar aliados em combate, concedendo bônus de ação e moral." },
  { name: "Luta de Cajado", attr: "Preciso", source: "Básico", desc: "Combate com cajados e bastões, combinando defesa e ataque fluido." },
  { name: "Maestria em Armas de Haste", attr: "Preciso", source: "Básico", desc: "Especialização em lanças, alabardas e armas longas. Controle de distância." },
  { name: "Mestre do Saber", attr: "Astuto", source: "Básico", desc: "Conhecimento enciclopédico sobre o mundo, culturas, criaturas e história." },
  { name: "Médico", attr: "Astuto", source: "Básico", desc: "Curar ferimentos, tratar doenças e estabilizar aliados caídos." },
  { name: "Passo do Martelo", attr: "Preciso", source: "Básico", desc: "Ataques poderosos com armas de impacto, quebrando defesas e atordoando." },
  { name: "Punho de Ferro", attr: "Vigoroso", source: "Básico", desc: "Combate desarmado devastador. Socos e chutes que rivalizam com armas." },
  { name: "Recuperação", attr: "Geral", source: "Básico", desc: "Curar-se mais rapidamente, recuperando Vitalidade durante e após combates." },
  { name: "Ritualista", attr: "Geral", source: "Básico", desc: "Realizar rituais místicos. Pré-requisito para muitos rituais poderosos." },
  { name: "Saber de Bestas", attr: "Astuto", source: "Básico", desc: "Conhecimento sobre criaturas, seus pontos fracos e comportamentos." },
  { name: "Saque Rápido", attr: "Rápido", source: "Básico", desc: "Sacar armas instantaneamente, trocar equipamento sem perder ações." },
  { name: "Sexto Sentido", attr: "Vigilante", source: "Básico", desc: "Perceber perigos ocultos, emboscadas e ameaças antes que se manifestem." },
  { name: "Tiro Rápido", attr: "Rápido", source: "Básico", desc: "Disparar múltiplas flechas ou projéteis em sequência rápida." },
  { name: "Visão de Bruxa", attr: "Vigilante", source: "Básico", desc: "Ver a Sombra de criaturas, revelando corrupção, natureza mística e disfarces." },
  // Guia Avançado
  { name: "Armadilheiro", attr: "Astuto", source: "Avançado", desc: "Instalar e desarmar armadilhas mecânicas e minas alquímicas. Criar armadilhas improvisadas em combate." },
  { name: "Artista do Machado", attr: "Preciso", source: "Avançado", desc: "Técnicas especiais com machados: golpe duplo, empurrão com ponta curta e golpe poderoso." },
  { name: "Canalização", attr: "Resoluto", source: "Avançado", desc: "Absorver corrupção de outros ou transferi-la para inimigos. Manipulação da corrupção." },
  { name: "Combate Ágil", attr: "Preciso", source: "Avançado", desc: "Profissão: Jurado do Ferro. Alternar entre armas corpo a corpo e à distância fluidamente." },
  { name: "Combate Sangrento", attr: "Vigoroso", source: "Avançado", desc: "Profissão: Guarda da Ira. Usar o poder do sangue derramado para fortalecer ataques." },
  { name: "Criar Artefatos", attr: "Astuto", source: "Avançado", desc: "Profissão: Criador de Artefatos. Forjar itens mágicos de poder crescente." },
  { name: "Dança da Adaga", attr: "Rápido", source: "Avançado", desc: "Combate com facas em espaços restritos. Ataques múltiplos e proximidade letal." },
  { name: "Dom Poderoso", attr: "Resoluto", source: "Avançado", desc: "Arquetípica: Místico. Resistência singular à corrupção e poderes improvisados." },
  { name: "Enredar", attr: "Preciso", source: "Avançado", desc: "Usar redes, laços e correntes para prender inimigos, restringindo movimento." },
  { name: "Espada Abençoada", attr: "Geral", source: "Avançado", desc: "Arma consagrada que causa dano extra contra abominações e mortos-vivos." },
  { name: "Façanha de Força", attr: "Vigoroso", source: "Avançado", desc: "Arquetípica: Guerreiro. Feitos sobre-humanos de força bruta em combate." },
  { name: "Instinto do Caçador", attr: "Vigilante", source: "Avançado", desc: "Arquetípica: Caçador. Sentido sobrenatural para rastrear e localizar presas." },
  { name: "Mangualeiro", attr: "Preciso", source: "Avançado", desc: "Especialização em mangual e corrente. Ataques que ignoram escudos." },
  { name: "Místico Blindado", attr: "Resoluto", source: "Avançado", desc: "Profissão: Templário. Usar armadura pesada sem penalidade em poderes místicos." },
  { name: "Oportunista", attr: "Geral", source: "Avançado", desc: "Explorar aberturas em combate, realizando ataques extras quando inimigos erram." },
  { name: "Perito em Cerco", attr: "Astuto", source: "Avançado", desc: "Operar armas de cerco e armas alquímicas pesadas com maestria." },
  { name: "Pirotecnia", attr: "Astuto", source: "Avançado", desc: "Usar minas alquímicas e explosivos com segurança e eficácia máxima." },
  { name: "Tatuagem Rúnica", attr: "Geral", source: "Avançado", desc: "Tatuagens mágicas que concedem proteção e poderes passivos permanentes." },
  { name: "Tático", attr: "Astuto", source: "Avançado", desc: "Planejar emboscadas e manobras de grupo, concedendo vantagens posicionais." },
  { name: "Veneficista", attr: "Astuto", source: "Avançado", desc: "Especialização em venenos: aplicar, resistir e criar venenos mais potentes." },
];

const attrColors: Record<string, string> = {
  "Astuto": "text-blue-300",
  "Discreto": "text-purple-300",
  "Persuasivo": "text-pink-300",
  "Preciso": "text-red-300",
  "Rápido": "text-green-300",
  "Resoluto": "text-amber-300",
  "Vigilante": "text-cyan-300",
  "Vigoroso": "text-orange-300",
  "Geral": "text-gray-300",
};

export default function AbilitiesSection() {
  const [filter, setFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const filtered = abilities.filter(a => {
    const attrMatch = filter === "all" || a.attr === filter;
    const sourceMatch = sourceFilter === "all" || a.source === sourceFilter;
    return attrMatch && sourceMatch;
  });

  const attrs = ["all", "Astuto", "Discreto", "Persuasivo", "Preciso", "Rápido", "Resoluto", "Vigilante", "Vigoroso", "Geral"];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Habilidades
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Habilidades definem o que seu personagem sabe fazer. Cada habilidade tem três níveis 
          (Novato, Adepto, Mestre) e está associada a um atributo principal. Qualquer personagem 
          pode aprender qualquer habilidade, exceto as marcadas como Profissão ou Arquetípica.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Filtrar por Atributo:</span>
          <div className="flex flex-wrap gap-1">
            {attrs.map(a => (
              <button
                key={a}
                onClick={() => setFilter(a)}
                className={`text-[11px] px-2 py-1 rounded transition-all ${
                  filter === a
                    ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {a === "all" ? "Todos" : a}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Fonte:</span>
          <div className="flex gap-1">
            {["all", "Básico", "Avançado"].map(s => (
              <button
                key={s}
                onClick={() => setSourceFilter(s)}
                className={`text-[11px] px-2 py-1 rounded transition-all ${
                  sourceFilter === s
                    ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {s === "all" ? "Todos" : s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">{filtered.length} habilidades encontradas</p>

      {/* Abilities Grid */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ability, index) => (
          <motion.div
            key={ability.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <Card className="bg-card border-border h-full hover:border-amber-800/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-bold text-foreground">{ability.name}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    ability.source === "Avançado" ? "bg-purple-900/40 text-purple-300" : "bg-green-900/40 text-green-300"
                  }`}>
                    {ability.source}
                  </span>
                </div>
                <span className={`text-[10px] font-medium ${attrColors[ability.attr] || "text-gray-300"}`}>
                  {ability.attr}
                </span>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  {ability.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Levels Explanation */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Níveis de Habilidade
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-950/20 rounded p-3 border border-green-900/30">
              <h4 className="text-sm font-semibold text-green-300 mb-1">Novato</h4>
              <p className="text-[11px] text-muted-foreground">Conhecimento básico. Custo: 10 XP. Efeito inicial da habilidade.</p>
            </div>
            <div className="bg-blue-950/20 rounded p-3 border border-blue-900/30">
              <h4 className="text-sm font-semibold text-blue-300 mb-1">Adepto</h4>
              <p className="text-[11px] text-muted-foreground">Domínio intermediário. Custo: 20 XP. Efeito aprimorado e novas opções.</p>
            </div>
            <div className="bg-amber-950/20 rounded p-3 border border-amber-900/30">
              <h4 className="text-sm font-semibold text-amber-300 mb-1">Mestre</h4>
              <p className="text-[11px] text-muted-foreground">Maestria total. Custo: 30 XP. Efeito máximo, frequentemente transformador.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
