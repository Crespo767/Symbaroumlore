import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
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

const weapons = [
  { name: "Faca/Adaga", damage: "1D6", category: "Curta", qualities: "Curta", price: "1 táler" },
  { name: "Espada de 1 mão", damage: "1D8", category: "Uma mão", qualities: "—", price: "5 táleres" },
  { name: "Machado de 1 mão", damage: "1D8", category: "Uma mão", qualities: "—", price: "3 táleres" },
  { name: "Maça/Martelo", damage: "1D8", category: "Uma mão", qualities: "Impacto Profundo", price: "3 táleres" },
  { name: "Espada Bastarda", damage: "1D10", category: "Pesada", qualities: "Versátil", price: "8 táleres" },
  { name: "Machado Grande", damage: "1D10", category: "Pesada", qualities: "—", price: "5 táleres" },
  { name: "Claymore", damage: "1D10", category: "Pesada", qualities: "Longa", price: "10 táleres" },
  { name: "Lança", damage: "1D8", category: "Longa", qualities: "Longa", price: "2 táleres" },
  { name: "Alabarda", damage: "1D10", category: "Longa", qualities: "Longa, Pesada", price: "8 táleres" },
  { name: "Cajado", damage: "1D6", category: "Longa", qualities: "Longa", price: "1 táler" },
  { name: "Arco Curto", damage: "1D6", category: "Distância", qualities: "—", price: "3 táleres" },
  { name: "Arco Longo", damage: "1D8", category: "Distância", qualities: "—", price: "5 táleres" },
  { name: "Besta", damage: "1D10", category: "Distância", qualities: "Impacto Profundo", price: "8 táleres" },
  { name: "Arremesso (Machado)", damage: "1D6", category: "Distância", qualities: "Curta distância", price: "2 táleres" },
];

const armors = [
  { name: "Couro Leve", protection: "1D4", penalty: "-2 Defesa", category: "Leve", price: "2 táleres" },
  { name: "Couro Reforçado", protection: "1D4", penalty: "-2 Defesa", category: "Leve", qualities: "Reforçada (+1)", price: "5 táleres" },
  { name: "Cota de Malha", protection: "1D6", penalty: "-3 Defesa", category: "Média", price: "10 táleres" },
  { name: "Brigandina", protection: "1D6", penalty: "-3 Defesa", category: "Média", qualities: "Flexível", price: "15 táleres" },
  { name: "Placas Completas", protection: "1D8", penalty: "-4 Defesa", category: "Pesada", price: "25 táleres" },
  { name: "Escudo Leve", protection: "+1", penalty: "—", category: "Escudo", price: "2 táleres" },
  { name: "Escudo Pesado", protection: "+2", penalty: "—", category: "Escudo", price: "5 táleres" },
];

const elixirs = [
  { name: "Cura Herbal", level: "Novato", effect: "Cura 1D4 Vitalidade", price: "1 táler" },
  { name: "Antídoto (fraco)", level: "Novato", effect: "Cura veneno fraco", price: "1 táler" },
  { name: "Veneno (fraco)", level: "Novato", effect: "1D4 dano por turno, 2 turnos", price: "2 táleres" },
  { name: "Tintura de Guerra", level: "Novato", effect: "+1D4 dano por 1 cena", price: "2 táleres" },
  { name: "Pão de Viagem", level: "Novato", effect: "Sustenta por 1 dia inteiro", price: "5 ortegas" },
  { name: "Pó Luminoso", level: "Novato", effect: "Ilumina área por 1 cena", price: "5 ortegas" },
  { name: "Flecha Certeira", level: "Novato", effect: "+2 no ataque à distância, 1 uso", price: "1 táler" },
  { name: "Granada Alquímica", level: "Adepto", effect: "1D12 dano em área", price: "5 táleres" },
  { name: "Bomba de Fumaça", level: "Adepto", effect: "Obscurece área, -5 em ataques", price: "3 táleres" },
  { name: "Água Benta", level: "Adepto", effect: "1D8 dano vs mortos-vivos/abominações", price: "3 táleres" },
  { name: "Mágica Concentrada", level: "Adepto", effect: "+1D4 dano em poder místico", price: "5 táleres" },
  { name: "Vela Fantasma", level: "Adepto", effect: "Revela espíritos e invisíveis", price: "3 táleres" },
  { name: "Tintura Sombria", level: "Adepto", effect: "Esconde Sombra por 1 cena", price: "5 táleres" },
  { name: "Elixir da Vida", level: "Mestre", effect: "Cura total de Vitalidade", price: "20 táleres" },
  { name: "Bola Trovão", level: "Mestre", effect: "Atordoa todos em área", price: "10 táleres" },
  { name: "Tintura Crepuscular", level: "Mestre", effect: "Disfarça morto-vivo como vivo", price: "15 táleres" },
];

const economy = [
  { item: "1 Táler", value: 100, desc: "Moeda de ouro. Salário mensal de um artesão." },
  { item: "1 Xelim", value: 10, desc: "Moeda de prata. 10 xelins = 1 táler." },
  { item: "1 Ortega", value: 1, desc: "Moeda de cobre. 10 ortegas = 1 xelim." },
];

const economyChart = [
  { name: "Refeição", cost: 0.5, fill: "#22c55e" },
  { name: "Hospedagem", cost: 1, fill: "#84cc16" },
  { name: "Couro Leve", cost: 2, fill: "#eab308" },
  { name: "Espada", cost: 5, fill: "#f97316" },
  { name: "Cota Malha", cost: 10, fill: "#ef4444" },
  { name: "Placas", cost: 25, fill: "#dc2626" },
  { name: "Cavalo", cost: 30, fill: "#b91c1c" },
];

export default function EquipmentSection() {
  const [tab, setTab] = useState<"armas" | "armaduras" | "elixires" | "economia">("armas");

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Equipamentos & Economia
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          De espadas forjadas em Yndaros a elixires alquímicos destilados em Forte do Cardo, 
          o equipamento certo pode ser a diferença entre a vida e a morte na Davokar. 
          Personagens iniciam com aproximadamente 50 táleres em equipamento.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {[
          { id: "armas" as const, label: "Armas" },
          { id: "armaduras" as const, label: "Armaduras" },
          { id: "elixires" as const, label: "Elixires" },
          { id: "economia" as const, label: "Economia" },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              tab === t.id ? "bg-amber-900/50 text-amber-200 border border-amber-700/50" : "bg-secondary text-muted-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "armas" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Arma</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Dano</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Categoria</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Qualidades</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weapons.map((w, i) => (
                      <tr key={w.name} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-secondary/10"}`}>
                        <td className="p-3 text-foreground font-medium text-xs">{w.name}</td>
                        <td className="p-3 text-red-300 font-mono text-xs">{w.damage}</td>
                        <td className="p-3 text-muted-foreground text-xs">{w.category}</td>
                        <td className="p-3 text-muted-foreground text-xs">{w.qualities}</td>
                        <td className="p-3 text-amber-300 text-xs">{w.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-4">
            <CardContent className="p-5">
              <h3 className="text-sm font-bold text-amber-200 mb-3">Qualidades de Armas</h3>
              <div className="grid md:grid-cols-2 gap-2 text-[11px]">
                <div className="bg-secondary/30 rounded p-2"><strong className="text-foreground">Curta:</strong> <span className="text-muted-foreground">Pode ser usada em espaços apertados sem penalidade.</span></div>
                <div className="bg-secondary/30 rounded p-2"><strong className="text-foreground">Longa:</strong> <span className="text-muted-foreground">Ataque Livre contra quem se aproxima. Não funciona em espaços apertados.</span></div>
                <div className="bg-secondary/30 rounded p-2"><strong className="text-foreground">Impacto Profundo:</strong> <span className="text-muted-foreground">+1 de dano após penetrar armadura.</span></div>
                <div className="bg-secondary/30 rounded p-2"><strong className="text-foreground">Precisa:</strong> <span className="text-muted-foreground">+1 no Teste de ataque.</span></div>
                <div className="bg-secondary/30 rounded p-2"><strong className="text-foreground">Enredadora:</strong> <span className="text-muted-foreground">Pode prender o alvo, impedindo movimento.</span></div>
                <div className="bg-secondary/30 rounded p-2"><strong className="text-foreground">Equilibrada:</strong> <span className="text-muted-foreground">+1 em Defesa quando empunhada.</span></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {tab === "armaduras" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Armadura</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Proteção</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Penalidade</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Categoria</th>
                      <th className="text-left p-3 text-amber-200 font-medium text-xs">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {armors.map((a, i) => (
                      <tr key={a.name} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-secondary/10"}`}>
                        <td className="p-3 text-foreground font-medium text-xs">{a.name}</td>
                        <td className="p-3 text-blue-300 font-mono text-xs">{a.protection}</td>
                        <td className="p-3 text-red-300 text-xs">{a.penalty}</td>
                        <td className="p-3 text-muted-foreground text-xs">{a.category}</td>
                        <td className="p-3 text-amber-300 text-xs">{a.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-4">
            <CardContent className="p-5">
              <h3 className="text-sm font-bold text-amber-200 mb-3">Como Funciona a Armadura</h3>
              <div className="space-y-2 text-[11px] text-muted-foreground">
                <p><strong className="text-foreground">Defesa:</strong> Rápido - Penalidade da Armadura = Valor de Defesa</p>
                <p><strong className="text-foreground">Proteção:</strong> Ao ser atingido, role o dado de proteção e subtraia do dano recebido.</p>
                <p><strong className="text-foreground">Escudos:</strong> Somam proteção fixa (+1 ou +2) à armadura, sem penalidade extra.</p>
                <p><strong className="text-foreground">Homem-de-Armas:</strong> Habilidade que reduz a penalidade de armaduras pesadas.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {tab === "elixires" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <div className="space-y-4">
            {["Novato", "Adepto", "Mestre"].map(level => (
              <Card key={level} className="bg-card border-border">
                <CardContent className="p-5">
                  <h3 className={`text-sm font-bold mb-3 ${
                    level === "Novato" ? "text-green-300" : level === "Adepto" ? "text-blue-300" : "text-amber-300"
                  }`}>
                    Elixires de {level}
                  </h3>
                  <div className="grid gap-2">
                    {elixirs.filter(e => e.level === level).map(e => (
                      <div key={e.name} className="flex items-center justify-between bg-secondary/20 rounded p-2">
                        <div>
                          <span className="text-xs font-medium text-foreground">{e.name}</span>
                          <span className="text-[10px] text-muted-foreground ml-2">{e.effect}</span>
                        </div>
                        <span className="text-[10px] text-amber-300 whitespace-nowrap ml-2">{e.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {tab === "economia" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-amber-200 mb-3">Sistema Monetário</h3>
                <div className="space-y-3">
                  {economy.map(e => (
                    <div key={e.item} className="flex items-center gap-3 bg-secondary/20 rounded p-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold bg-amber-900/40 text-amber-200 border border-amber-700/50">
                        {e.value}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">{e.item}</span>
                        <p className="text-[10px] text-muted-foreground">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-secondary/30 rounded p-3 text-[11px] text-muted-foreground">
                  <strong className="text-foreground">Conversão:</strong> 1 Táler = 10 Xelins = 100 Ortegas
                  <br />
                  <strong className="text-foreground">Início:</strong> Personagens começam com ~50 táleres em equipamento total.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <h3 className="text-sm font-bold text-amber-200 mb-3">Custos Comparativos (em Táleres)</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={economyChart} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis type="number" tick={{ fill: '#a1a1aa', fontSize: 10 }} />
                      <YAxis type="category" dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 10 }} width={80} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
                        labelStyle={{ color: '#d4a853' }}
                        formatter={(value: number) => [`${value} táleres`, "Custo"]}
                      />
                      <Bar dataKey="cost" radius={[0, 4, 4, 0]}>
                        {economyChart.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border mt-4">
            <CardContent className="p-5">
              <h3 className="text-sm font-bold text-amber-200 mb-3">Recompensas por Crimes (Caçadores de Recompensa)</h3>
              <div className="grid md:grid-cols-2 gap-2 text-[11px]">
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Furtar bolsos</span><span className="text-amber-300">1 ortega</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Ladinagem</span><span className="text-amber-300">1 xelim</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Ladrão notório</span><span className="text-amber-300">1 táler</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Assassinato</span><span className="text-amber-300">10 táleres</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Cultista</span><span className="text-amber-300">10 táleres</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Desertor</span><span className="text-amber-300">10 táleres</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Assassinato em massa</span><span className="text-amber-300">50 táleres</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Feiticeiro</span><span className="text-amber-300">100 táleres</span></div>
                <div className="bg-secondary/20 rounded p-2 flex justify-between"><span className="text-muted-foreground">Espião</span><span className="text-amber-300">500 táleres</span></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
