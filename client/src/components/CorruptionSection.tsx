import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const corruptionStages = [
  { stage: "Normal", corruption: 0, desc: "Sem corrupção. Sombra natural e limpa.", color: "#22c55e" },
  { stage: "Leve", corruption: 3, desc: "Marcas sutis na Sombra. Visíveis apenas com Visão de Bruxa.", color: "#84cc16" },
  { stage: "Moderada", corruption: 5, desc: "Alterações físicas menores. Olhos brilham, veias escurecem.", color: "#eab308" },
  { stage: "Severa", corruption: 8, desc: "Transformações visíveis. Pele rachada, membros distorcidos.", color: "#f97316" },
  { stage: "Crítica", corruption: 10, desc: "Próximo da transformação completa. Dor constante.", color: "#ef4444" },
  { stage: "Abominação", corruption: 12, desc: "Transformação completa. O personagem se torna um monstro e é perdido.", color: "#7f1d1d" },
];

const corruptionSources = [
  { source: "Usar Poderes Místicos (com tradição)", amount: "1 temporária", type: "Temporária" },
  { source: "Usar Poderes Místicos (sem tradição)", amount: "1D4 temporária", type: "Temporária" },
  { source: "Feitiçaria", amount: "1D4 permanente por uso", type: "Permanente" },
  { source: "Artefatos Corrompidos", amount: "Variável (ao usar)", type: "Permanente" },
  { source: "Locais Maculados (Davokar profunda)", amount: "1-3 por exposição", type: "Temporária" },
  { source: "Rituais", amount: "1 permanente por ritual", type: "Permanente" },
  { source: "Contato com Abominações", amount: "1 por encontro prolongado", type: "Temporária" },
  { source: "Exceder Limiar de Corrupção", amount: "1 temp. → 1 permanente", type: "Permanente" },
];

const traditions = [
  {
    name: "Bruxaria",
    origin: "Bárbaros / Bruxas",
    color: "border-l-green-600",
    bgColor: "bg-green-950/20",
    desc: "Magia da natureza, dos espíritos e dos ancestrais. Praticada pelas bruxas dos clãs bárbaros. Vinculada à terra, aos ciclos naturais e ao mundo espiritual. Bruxas são guias e curandeiras.",
    corruptionNote: "Corrupção padrão (1 por uso com tradição). Bruxas entendem o equilíbrio natural.",
    powers: "Maldição, Imposição de Mãos, Metamorfose, Abraço da Natureza, Herdar Ferimento, Flecha de Tempestade, Maltransformação, Vinhas Emaranhadoras"
  },
  {
    name: "Magismo",
    origin: "Ordo Magica",
    color: "border-l-blue-600",
    bgColor: "bg-blue-950/20",
    desc: "Magia acadêmica e estruturada. Estudo metódico das forças arcanas em capítulos e bibliotecas. Magistas usam cajados e círculos mágicos. Abordagem científica da magia.",
    corruptionNote: "Corrupção padrão. Magistas estudam como minimizar corrupção através de teoria.",
    powers: "Confusão, Anátema, Arremesso Mental, Cascata de Enxofre, Correção Ilusória, Dobrar Vontade, Muralha de Fogo, Levitação, Imperceptível"
  },
  {
    name: "Teurgia",
    origin: "Igreja de Prios",
    color: "border-l-amber-600",
    bgColor: "bg-amber-950/20",
    desc: "Magia divina canalizada pela fé em Prios, o Deus Sol. Teurgos são sacerdotes guerreiros que usam o poder da luz contra as trevas. Rituais de purificação e proteção.",
    corruptionNote: "Corrupção padrão. Teurgos acreditam que Prios os protege da corrupção.",
    powers: "Imposição de Mãos, Anátema, Escudo Abençoado, Martelo Bruxo, Aura Sagrada, Luz Ardente de Prios, Herdar Ferimento, Levitação"
  },
  {
    name: "Feitiçaria",
    origin: "Proibida / Lordes Negros",
    color: "border-l-red-600",
    bgColor: "bg-red-950/20",
    desc: "Magia sombria e proibida. Poder imenso com custo terrível — gera corrupção permanente a cada uso. Praticada por feiticeiros que fazem pactos com forças das trevas. Punida com morte por todas as facções.",
    corruptionNote: "1D4 PERMANENTE por uso. Extremamente perigosa. Caminho para se tornar abominação.",
    powers: "Maldição, Aura Profana, Golpe de Regresso, Raio Negro, Sopro Sombrio, Fervilhar Larvar, Retribuição"
  },
  {
    name: "Canto do Troll",
    origin: "Trolls (Guia Avançado)",
    color: "border-l-orange-600",
    bgColor: "bg-orange-950/20",
    desc: "Tradição mística exclusiva dos trolls, expressa através do canto. Magia vocal que ressoa com as forças primordiais da terra. Antiga e poderosa, mas pouco compreendida por outras raças.",
    corruptionNote: "Corrupção padrão. Trolls possuem alta resistência natural à corrupção.",
    powers: "Hino de Combate, Hino de Enfraquecimento, Hino Heroico, Confusão, Arma Dançante, Retribuição"
  },
  {
    name: "Magia do Cajado",
    origin: "Guia Avançado",
    color: "border-l-cyan-600",
    bgColor: "bg-cyan-950/20",
    desc: "Sub-tradição focada em combater a corrupção de perto, utilizando o cajado rúnico como foco mágico primário.",
    corruptionNote: "Corrupção padrão.",
    powers: "Anátema, Arma Dançante, Cajado Projétil, Esfera, Runas Protetivas"
  },
  {
    name: "Simbolismo",
    origin: "Guia Avançado",
    color: "border-l-pink-600",
    bgColor: "bg-pink-950/20",
    desc: "Tradição metódica que usa inscrições místicas e sinais. Muito resistente à corrupção devido à natureza indireta da ativação dos poderes.",
    corruptionNote: "Excepcionalmente seguro. Gera pouca ou nenhuma corrupção ao ativar símbolos preparados.",
    powers: "Glifo de Drenagem, Runas Protetivas, Selo de Banimento, Símbolo Cegante, Escrita Distante"
  },
];

const chartData = corruptionStages.map(s => ({
  name: s.stage,
  corrupção: s.corruption,
  fill: s.color,
}));

export default function CorruptionSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Sombra, Corrupção & Tradições Místicas
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Todo ser vivo possui uma Sombra — uma aura mística visível apenas com Visão de Bruxa. 
          A corrupção é a força que desfigura essa Sombra, transformando gradualmente seres 
          em abominações. É o preço da magia e o legado da antiga Symbaroum. Cada tradição mística 
          oferece um caminho diferente para canalizar poder sobrenatural.
        </p>
      </div>

      {/* Corruption Image */}
      <Card className="bg-card border-border overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663622705168/KdzVCAjsftQjBG3jYgoaKD/corruption-section-DLUVuWyXziHrMNcuQyFZcu.webp"
          alt="Corrupção na Davokar"
          className="w-full h-48 md:h-64 object-cover"
        />
      </Card>

      {/* Core Mechanics */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Mecânica da Corrupção
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Limiar de Corrupção:</span>
                <span className="text-foreground/80 ml-2">= Resoluto ÷ 2 (arredondado para cima)</span>
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Corrupção Temporária:</span>
                <span className="text-foreground/80 ml-2">Removida ao final da cena</span>
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Corrupção Permanente:</span>
                <span className="text-foreground/80 ml-2">Marca a Sombra para sempre. Quase impossível de remover.</span>
              </div>
              <div className="bg-red-950/30 rounded p-3 border border-red-900/30">
                <span className="font-semibold text-red-300">Exceder o Limiar:</span>
                <span className="text-foreground/80 ml-2">Cada ponto acima do limiar vira 1 permanente. Marcas físicas aparecem.</span>
              </div>
              <div className="bg-red-950/50 rounded p-3 border border-red-800/50">
                <span className="font-semibold text-red-400">Corrupção Total = Resoluto:</span>
                <span className="text-foreground/80 ml-2">Personagem se torna Abominação (perdido para sempre).</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Fontes de Corrupção
            </h3>
            <div className="space-y-2">
              {corruptionSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between bg-secondary/30 rounded p-2">
                  <span className="text-[11px] text-foreground/80">{source.source}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-muted-foreground">{source.amount}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded ${
                      source.type === "Permanente" ? "bg-red-900/40 text-red-300" : "bg-amber-900/40 text-amber-300"
                    }`}>
                      {source.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Corruption Stages Chart */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Estágios de Corrupção
          </h3>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 10 }} />
                <YAxis tick={{ fill: '#a1a1aa', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
                  labelStyle={{ color: '#d4a853' }}
                />
                <Bar dataKey="corrupção" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid md:grid-cols-3 gap-2">
            {corruptionStages.map((stage) => (
              <div key={stage.stage} className="bg-secondary/30 rounded p-2 border-l-2" style={{ borderLeftColor: stage.color }}>
                <h4 className="text-xs font-bold" style={{ color: stage.color }}>{stage.stage}</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">{stage.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sombra */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A Sombra
          </h3>
          <p className="text-sm text-foreground/85 leading-relaxed mb-4">
            Todo ser vivo possui uma Sombra — uma aura mística que reflete sua natureza interior. 
            Através da habilidade <strong className="text-amber-200">Visão de Bruxa</strong>, é possível 
            perceber a Sombra de outros seres, revelando sua corrupção, intenções e natureza verdadeira.
            A Sombra é definida na criação do personagem e pode incluir cores, texturas e até cheiros.
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-green-950/20 rounded p-3 border border-green-900/30">
              <h4 className="text-xs font-semibold text-green-300 mb-1">Sombra Pura</h4>
              <p className="text-[10px] text-muted-foreground">Cores vivas e naturais. Ser livre de corrupção. Exemplos: verde floresta, dourado solar.</p>
            </div>
            <div className="bg-amber-950/20 rounded p-3 border border-amber-900/30">
              <h4 className="text-xs font-semibold text-amber-300 mb-1">Sombra Maculada</h4>
              <p className="text-[10px] text-muted-foreground">Manchas escuras e distorções. Corrupção significativa mas não fatal.</p>
            </div>
            <div className="bg-red-950/20 rounded p-3 border border-red-900/30">
              <h4 className="text-xs font-semibold text-red-300 mb-1">Sombra Corrompida</h4>
              <p className="text-[10px] text-muted-foreground">Quase toda negra. Abominação iminente. Marcas físicas visíveis.</p>
            </div>
            <div className="bg-gray-800/40 rounded p-3 border border-gray-700/30">
              <h4 className="text-xs font-semibold text-gray-300 mb-1">Sombra Morta</h4>
              <p className="text-[10px] text-muted-foreground">Completamente negra. Mortos-vivos e abominações. Sem retorno.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mystical Traditions */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tradições Místicas
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Tradições Místicas são os caminhos através dos quais místicos canalizam poder sobrenatural. 
            Cada tradição tem uma filosofia, uma origem cultural e poderes característicos. 
            Um místico DEVE possuir uma tradição para usar magia com segurança (1 corrupção por uso). 
            Sem tradição, cada poder gera 1D4 de corrupção temporária.
          </p>
          <div className="grid gap-3">
            {traditions.map((trad, index) => (
              <motion.div
                key={trad.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`border-l-4 ${trad.color} ${trad.bgColor} rounded-r p-4`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm text-foreground">{trad.name}</h4>
                  <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded">{trad.origin}</span>
                </div>
                <p className="text-[11px] text-foreground/80 mb-2">{trad.desc}</p>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="bg-secondary/40 rounded px-2 py-1 flex-1">
                    <span className="text-[9px] text-amber-300 font-semibold">Corrupção: </span>
                    <span className="text-[9px] text-muted-foreground">{trad.corruptionNote}</span>
                  </div>
                  <div className="bg-secondary/40 rounded px-2 py-1 flex-1">
                    <span className="text-[9px] text-purple-300 font-semibold">Poderes: </span>
                    <span className="text-[9px] text-muted-foreground">{trad.powers}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
