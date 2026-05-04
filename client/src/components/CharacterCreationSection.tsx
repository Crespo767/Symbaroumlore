import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const steps = [
  {
    number: 1,
    title: "Escolher Raça",
    desc: "Defina a raça do personagem. Cada raça possui traços raciais gratuitos que definem características únicas.",
    details: [
      "Ambriano — Contatos ou Privilegiado",
      "Bárbaro — Mateiro ou Resistente a Venenos",
      "Cambiante — Contatos ou Dedo Verde",
      "Goblin — Sobrevivente ou Escapista",
      "Ogro — Pária e Robusto",
      "Elfo — Vida Longa e Pária",
      "Anão — Herança Natural e Memória Absoluta",
      "Troll — Vida Longa e Pária",
      "Morto-Vivo — Totalmente Corrompido",
    ]
  },
  {
    number: 2,
    title: "Escolher Arquétipo",
    desc: "Determine o papel geral do personagem. Cada arquétipo tem uma habilidade arquetípica exclusiva.",
    details: [
      "Guerreiro — Façanha de Força (combate corpo a corpo)",
      "Caçador — Instinto do Caçador (distância e rastreio)",
      "Ladino — Golpe Baixo (furtividade e astúcia)",
      "Místico — Dom Poderoso (magia e rituais)",
    ]
  },
  {
    number: 3,
    title: "Escolher Ocupação",
    desc: "A ocupação define o contexto narrativo e social do personagem. Algumas são Profissões com habilidades exclusivas.",
    details: [
      "Guerreiro: Cavaleiro, Guarda da Ira*, Templário*",
      "Caçador: Caçador de Monstros, Caçador de Recompensas, Jurado do Ferro*",
      "Ladino: Ladrão, Espião, Explorador",
      "Místico: Bruxo, Magista, Teurgo, Necromante*, Piromante*, Tecelã Verde*",
      "* = Profissão (habilidades exclusivas)",
    ]
  },
  {
    number: 4,
    title: "Distribuir Atributos",
    desc: "Distribua 80 pontos entre os 8 atributos. Cada atributo deve ter entre 5 (mínimo) e 15 (máximo).",
    details: [
      "Astuto — Inteligência, conhecimento, raciocínio",
      "Discreto — Furtividade, sutileza, disfarce",
      "Persuasivo — Carisma, liderança, manipulação",
      "Preciso — Pontaria, destreza, combate",
      "Rápido — Velocidade, reflexos, esquiva",
      "Resoluto — Força de vontade, coragem, resistência mental",
      "Vigilante — Percepção, atenção, intuição",
      "Vigoroso — Força física, resistência, vitalidade",
    ]
  },
  {
    number: 5,
    title: "Calcular Valores Derivados",
    desc: "Com base nos atributos, calcule os valores secundários do personagem.",
    details: [
      "Defesa = Rápido (- penalidade de armadura)",
      "Vitalidade = Vigoroso (pontos de vida)",
      "Limiar de Dor = Vigoroso ÷ 2 (arredondado para cima)",
      "Limiar de Corrupção = Resoluto ÷ 2 (arredondado para cima)",
      "Sombra = Escolha uma cor/aparência para a aura mística",
    ]
  },
  {
    number: 6,
    title: "Escolher Habilidades & Poderes",
    desc: "Gaste 50 XP iniciais em habilidades e poderes. Cada nível custa: Novato 10, Adepto 20, Mestre 30 XP.",
    details: [
      "Máximo: 1 habilidade em Mestre no início",
      "Místicos devem comprar uma Tradição Mística",
      "Habilidades de Profissão só para personagens da profissão",
      "Dádivas custam 10 XP cada (vantagens menores)",
      "Fardos concedem 5 XP cada (desvantagens)",
    ]
  },
  {
    number: 7,
    title: "Equipar o Personagem",
    desc: "Escolha armas, armadura e equipamento. O valor total inicial é de aproximadamente 50 táleres.",
    details: [
      "Arma principal + arma secundária ou escudo",
      "Armadura adequada ao estilo de combate",
      "Equipamento de aventura (corda, tocha, rações)",
      "Elixires alquímicos se tiver Alquimia",
      "Itens de ofício ou ferramentas especiais",
    ]
  },
  {
    number: 8,
    title: "Definir Personalidade",
    desc: "Crie a história, aparência, objetivo pessoal e conexões do personagem com o mundo.",
    details: [
      "Nome e aparência física",
      "Histórico pessoal (de onde veio, o que fazia)",
      "Objetivo pessoal (motivação para aventurar)",
      "Citação característica",
      "Conexões com outros personagens do grupo",
    ]
  },
];

const archetypeExamples = [
  {
    name: "Guerreiro Exemplo",
    archetype: "Guerreiro",
    data: [
      { attr: "AST", value: 7 },
      { attr: "DIS", value: 5 },
      { attr: "PER", value: 9 },
      { attr: "PRE", value: 13 },
      { attr: "RAP", value: 11 },
      { attr: "RES", value: 10 },
      { attr: "VIG", value: 10 },
      { attr: "VGR", value: 15 },
    ],
  },
  {
    name: "Místico Exemplo",
    archetype: "Místico",
    data: [
      { attr: "AST", value: 13 },
      { attr: "DIS", value: 9 },
      { attr: "PER", value: 10 },
      { attr: "PRE", value: 5 },
      { attr: "RAP", value: 10 },
      { attr: "RES", value: 15 },
      { attr: "VIG", value: 11 },
      { attr: "VGR", value: 7 },
    ],
  },
  {
    name: "Ladino Exemplo",
    archetype: "Ladino",
    data: [
      { attr: "AST", value: 11 },
      { attr: "DIS", value: 15 },
      { attr: "PER", value: 10 },
      { attr: "PRE", value: 13 },
      { attr: "RAP", value: 13 },
      { attr: "RES", value: 7 },
      { attr: "VIG", value: 5 },
      { attr: "VGR", value: 6 },
    ],
  },
  {
    name: "Caçador Exemplo",
    archetype: "Caçador",
    data: [
      { attr: "AST", value: 9 },
      { attr: "DIS", value: 11 },
      { attr: "PER", value: 5 },
      { attr: "PRE", value: 15 },
      { attr: "RAP", value: 13 },
      { attr: "RES", value: 7 },
      { attr: "VIG", value: 13 },
      { attr: "VGR", value: 7 },
    ],
  },
];

const gifts = [
  { name: "Animal de Estimação", desc: "Um animal companheiro leal que pode ajudar em situações específicas." },
  { name: "Arquivista", desc: "Acesso a bibliotecas e conhecimento acadêmico raro." },
  { name: "Cão de Caça", desc: "Um cão treinado para rastreio e combate básico." },
  { name: "Cartógrafo", desc: "Habilidade de criar e ler mapas com precisão." },
  { name: "Contatos", desc: "Rede de informantes e aliados em uma região." },
  { name: "Dedo Verde", desc: "Talento natural com plantas e ervas." },
  { name: "Desbravador", desc: "Experiência em navegar terrenos selvagens." },
  { name: "Empreendimento", desc: "Posse de um negócio que gera renda passiva." },
  { name: "Fofoqueiro", desc: "Acesso a rumores e informações sociais." },
  { name: "Forjado no Fogo", desc: "Resistência a condições extremas de calor." },
  { name: "Horripilante", desc: "Aparência assustadora que intimida outros." },
  { name: "Identidade Falsa", desc: "Uma segunda identidade completa e convincente." },
  { name: "Língua das Bestas", desc: "Comunicação básica com animais." },
  { name: "Marcha Duradoura", desc: "Capacidade de viajar longas distâncias sem fadiga." },
  { name: "Mateiro", desc: "Conhecimento profundo de sobrevivência na natureza." },
  { name: "Médium", desc: "Sensibilidade a presenças espirituais." },
  { name: "Memória Absoluta", desc: "Recordar detalhes com precisão perfeita." },
  { name: "Privilegiado", desc: "Status social elevado e acesso a círculos nobres." },
  { name: "Resistente a Venenos", desc: "Tolerância natural a toxinas." },
  { name: "Servo", desc: "Um assistente pessoal leal." },
  { name: "Transportador", desc: "Capacidade de carregar mais equipamento." },
  { name: "Vigarista", desc: "Talento para enganos e trapaças sociais." },
];

const burdens = [
  { name: "Arqui-Inimigo", desc: "Um inimigo poderoso que persegue o personagem.", xp: 5 },
  { name: "Código de Honra", desc: "Regras rígidas que limitam ações em certas situações.", xp: 5 },
  { name: "Enfermo", desc: "Doença ou condição física que causa penalidades.", xp: 5 },
  { name: "Impulsivo", desc: "Dificuldade em controlar impulsos e emoções.", xp: 5 },
  { name: "Lento", desc: "Movimento reduzido ou reações mais lentas.", xp: 5 },
  { name: "Pária", desc: "Rejeitado pela sociedade, tratado com desconfiança.", xp: 5 },
  { name: "Pesadelos", desc: "Sonhos terríveis que prejudicam o descanso.", xp: 5 },
  { name: "Procurado", desc: "Autoridades ou caçadores buscam o personagem.", xp: 5 },
  { name: "Sanguinário", desc: "Tendência violenta que pode causar problemas sociais.", xp: 5 },
  { name: "Segredo Sombrio", desc: "Um segredo perigoso que pode destruir a reputação.", xp: 5 },
  { name: "Vício", desc: "Dependência de uma substância ou comportamento.", xp: 5 },
];

export default function CharacterCreationSection() {
  const [selectedArchetype, setSelectedArchetype] = useState(0);
  const [showGifts, setShowGifts] = useState(true);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Criação de Personagem
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Guia passo a passo para criar seu personagem em Symbaroum. Siga os 8 passos abaixo 
          para dar vida a um aventureiro pronto para enfrentar os perigos da Davokar. 
          Lembre-se: em Symbaroum, a história do personagem é tão importante quanto suas estatísticas.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="bg-card border-border hover:border-amber-800/40 transition-colors">
              <CardContent className="p-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-900/40 border border-amber-700/50 flex items-center justify-center text-amber-200 font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-[11px] text-muted-foreground mb-3">{step.desc}</p>
                    <div className="grid md:grid-cols-2 gap-1">
                      {step.details.map((d, i) => (
                        <div key={i} className="text-[10px] text-muted-foreground bg-secondary/20 rounded px-2 py-1">
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Archetype Radar Charts */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Distribuição de Atributos por Arquétipo (Exemplo)
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {archetypeExamples.map((arch, i) => (
              <button
                key={arch.name}
                onClick={() => setSelectedArchetype(i)}
                className={`text-xs px-3 py-1.5 rounded transition-all ${
                  selectedArchetype === i
                    ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {arch.archetype}
              </button>
            ))}
          </div>
          <div className="h-72 w-full max-w-md mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={archetypeExamples[selectedArchetype].data}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="attr" tick={{ fill: '#a1a1aa', fontSize: 11 }} />
                <PolarRadiusAxis angle={90} domain={[0, 15]} tick={{ fill: '#666', fontSize: 9 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
                  labelStyle={{ color: '#d4a853' }}
                />
                <Radar
                  name={archetypeExamples[selectedArchetype].archetype}
                  dataKey="value"
                  stroke="#d4a853"
                  fill="#d4a853"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-[10px] text-muted-foreground mt-2">
            Total: 80 pontos | Mínimo: 5 | Máximo: 15
          </p>
        </CardContent>
      </Card>

      {/* Gifts and Burdens */}
      <Card className="bg-card border-border mt-6">
        <CardContent className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-lg font-bold text-amber-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Dádivas & Fardos
            </h3>
            <div className="flex gap-1">
              <button
                onClick={() => setShowGifts(true)}
                className={`text-[11px] px-2 py-1 rounded ${showGifts ? "bg-green-900/40 text-green-300 border border-green-800/50" : "bg-secondary text-muted-foreground"}`}
              >
                Dádivas (custo: 10 XP)
              </button>
              <button
                onClick={() => setShowGifts(false)}
                className={`text-[11px] px-2 py-1 rounded ${!showGifts ? "bg-red-900/40 text-red-300 border border-red-800/50" : "bg-secondary text-muted-foreground"}`}
              >
                Fardos (ganho: 5 XP)
              </button>
            </div>
          </div>

          {showGifts ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {gifts.map(g => (
                <div key={g.name} className="bg-green-950/10 border border-green-900/20 rounded p-2">
                  <span className="text-[11px] font-medium text-green-300">{g.name}</span>
                  <p className="text-[9px] text-muted-foreground mt-0.5">{g.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {burdens.map(b => (
                <div key={b.name} className="bg-red-950/10 border border-red-900/20 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-medium text-red-300">{b.name}</span>
                    <span className="text-[9px] text-amber-300">+{b.xp} XP</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-0.5">{b.desc}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Character Sheet Reference */}
      <Card className="bg-card border-border mt-6">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Campos da Ficha de Personagem
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold text-foreground mb-2">Frente da Ficha</h4>
              <div className="space-y-1 text-[10px] text-muted-foreground">
                <p>• Nome, Raça, Ocupação, Citação</p>
                <p>• 8 Atributos (valores de 5-15)</p>
                <p>• Vitalidade Máxima e Limiar de Dor</p>
                <p>• Corrupção Permanente e Limiar</p>
                <p>• Sombra (aparência da aura mística)</p>
                <p>• Habilidades & Poderes (nome, efeito, tipo, nível N/A/M)</p>
                <p>• Armas (nome, dano, qualidade, atributo)</p>
                <p>• Armadura (proteção, qualidade)</p>
                <p>• Defesa (valor calculado)</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground mb-2">Verso da Ficha</h4>
              <div className="space-y-1 text-[10px] text-muted-foreground">
                <p>• Idade, Altura, Peso</p>
                <p>• Aparência (descrição física)</p>
                <p>• Histórico (background narrativo)</p>
                <p>• Objetivo Pessoal</p>
                <p>• Equipamento (lista de itens)</p>
                <p>• Amigos & Companheiros</p>
                <p>• Nome e Objetivo do Grupo</p>
                <p>• Artefatos & Tesouros Místicos</p>
                <p>• Dinheiro e Outras Riquezas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* XP Cost Table */}
      <Card className="bg-card border-border mt-6">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tabela de Custos de Experiência
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left p-2 text-amber-200 font-medium text-xs">Tipo</th>
                  <th className="text-center p-2 text-amber-200 font-medium text-xs">Novato</th>
                  <th className="text-center p-2 text-amber-200 font-medium text-xs">Adepto</th>
                  <th className="text-center p-2 text-amber-200 font-medium text-xs">Mestre</th>
                  <th className="text-center p-2 text-amber-200 font-medium text-xs">Total</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-border/50">
                  <td className="p-2 text-foreground">Habilidade</td>
                  <td className="p-2 text-center text-green-300">10 XP</td>
                  <td className="p-2 text-center text-blue-300">20 XP</td>
                  <td className="p-2 text-center text-amber-300">30 XP</td>
                  <td className="p-2 text-center text-foreground font-bold">60 XP</td>
                </tr>
                <tr className="border-b border-border/50 bg-secondary/10">
                  <td className="p-2 text-foreground">Poder Místico</td>
                  <td className="p-2 text-center text-green-300">10 XP</td>
                  <td className="p-2 text-center text-blue-300">20 XP</td>
                  <td className="p-2 text-center text-amber-300">30 XP</td>
                  <td className="p-2 text-center text-foreground font-bold">60 XP</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-foreground">Tradição Mística</td>
                  <td className="p-2 text-center text-green-300">10 XP</td>
                  <td className="p-2 text-center text-blue-300">20 XP</td>
                  <td className="p-2 text-center text-amber-300">30 XP</td>
                  <td className="p-2 text-center text-foreground font-bold">60 XP</td>
                </tr>
                <tr className="border-b border-border/50 bg-secondary/10">
                  <td className="p-2 text-foreground">Dádiva</td>
                  <td className="p-2 text-center text-green-300" colSpan={3}>10 XP (nível único)</td>
                  <td className="p-2 text-center text-foreground font-bold">10 XP</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-foreground">Fardo</td>
                  <td className="p-2 text-center text-red-300" colSpan={3}>Concede +5 XP</td>
                  <td className="p-2 text-center text-red-300 font-bold">+5 XP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted-foreground mt-3">
            <strong className="text-foreground">XP Inicial:</strong> 50 XP para gastar na criação. 
            Limite: apenas 1 habilidade em Mestre no início. 
            XP adicional é ganho durante aventuras (tipicamente 5-10 por sessão).
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
