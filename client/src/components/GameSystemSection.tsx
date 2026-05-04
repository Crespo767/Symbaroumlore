import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const attributes = [
  { name: "Astuto", abbr: "AST", desc: "Inteligência, raciocínio, dedução, conhecimento", value: 10 },
  { name: "Discreto", abbr: "DIS", desc: "Furtividade, sutileza, engano, prestidigitação", value: 10 },
  { name: "Persuasivo", abbr: "PER", desc: "Carisma, influência social, liderança, intimidação", value: 10 },
  { name: "Preciso", abbr: "PRE", desc: "Pontaria, destreza manual, combate corpo a corpo", value: 10 },
  { name: "Rápido", abbr: "RAP", desc: "Velocidade, reflexos, agilidade, esquiva (= Defesa)", value: 10 },
  { name: "Resoluto", abbr: "RES", desc: "Resistência mental, vontade, coragem (= Limiar Corrupção)", value: 10 },
  { name: "Vigilante", abbr: "VIG", desc: "Percepção, sentidos aguçados, intuição, atenção", value: 10 },
  { name: "Vigoroso", abbr: "VGR", desc: "Força física, resistência, vitalidade (= HP)", value: 10 },
];

const archetypes = [
  { name: "Guerreiro", color: "#ef4444", ability: "Façanha de Força", desc: "Combatentes de linha de frente. Mestres de armas e armaduras. Dominam o campo de batalha com força bruta e técnica marcial.", occupations: "Cavaleiro, Guarda da Ira*, Templário*" },
  { name: "Caçador", color: "#22c55e", ability: "Instinto do Caçador", desc: "Especialistas em combate à distância e rastreamento. Sobrevivem na natureza selvagem e caçam qualquer presa.", occupations: "Caçador de Monstros, Caçador de Recompensas, Jurado do Ferro*" },
  { name: "Ladino", color: "#8b5cf6", ability: "Golpe Baixo", desc: "Mestres da furtividade e astúcia. Sobrevivem pela esperteza, exploram fraquezas e atacam quando menos se espera.", occupations: "Ladrão, Espião, Explorador" },
  { name: "Místico", color: "#f59e0b", ability: "Dom Poderoso", desc: "Praticantes de magia e rituais. Canalizam forças sobrenaturais através de tradições místicas ancestrais.", occupations: "Bruxo, Magista, Teurgo, Necromante*, Piromante*, Tecelã Verde*" },
];

const radarData = attributes.map(a => ({ subject: a.abbr, A: 10, fullMark: 15 }));

const combatFlow = [
  { step: "1. Iniciativa", desc: "Determinada pelo atributo Rápido. Maior Rápido age primeiro." },
  { step: "2. Turno", desc: "Cada turno: 1 Ação de Movimento + 1 Ação de Combate (ou 2 Movimentos)." },
  { step: "3. Ataque", desc: "Teste de [Preciso] para corpo a corpo ou [Preciso/Rápido] para distância." },
  { step: "4. Defesa", desc: "Alvo rola Defesa (baseado em Rápido - penalidade de armadura)." },
  { step: "5. Dano", desc: "Se acertar: role dado de dano da arma. Alvo rola dado de armadura." },
  { step: "6. Resultado", desc: "Dano final = Dano da arma - Proteção da armadura. Aplicar à Vitalidade." },
];

export default function GameSystemSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Sistema de Jogo
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Symbaroum utiliza um sistema baseado em D20 onde apenas os jogadores rolam dados. 
          Testes são feitos contra atributos (igual ou menor = sucesso). O sistema é elegante 
          e direto, priorizando narrativa sobre complexidade mecânica. Quando um NPC ataca, 
          o jogador rola Defesa; quando um NPC resiste, o jogador rola o ataque.
        </p>
      </div>

      {/* Core Mechanics */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Mecânica Central
            </h3>
            <div className="space-y-3 text-sm text-foreground/85">
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Teste Simples:</span> D20 ≤ Atributo = Sucesso
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Teste Resistido:</span> D20 ≤ [Atributo + (10 - Atributo do Oponente)]
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Modificadores:</span> +5 (muito fácil) a -5 (muito difícil)
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Regra de Ouro:</span> Apenas jogadores rolam dados
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Resultado 1:</span> Sempre sucesso (crítico)
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Resultado 20:</span> Sempre falha (falha crítica)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-amber-200 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Valores Derivados
            </h3>
            <div className="space-y-3 text-sm text-foreground/85">
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Vitalidade:</span> = Vigoroso (pontos de vida)
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Limiar de Dor:</span> = Vigoroso ÷ 2 (arredondado ↑). Abaixo disso: penalidades.
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Defesa:</span> = Rápido – Penalidade da Armadura
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Limiar de Corrupção:</span> = Resoluto ÷ 2. Exceder = marcas físicas.
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Sombra:</span> Aura mística visível com Visão de Bruxa
              </div>
              <div className="bg-secondary/50 rounded p-3">
                <span className="font-semibold text-amber-300">Experiência:</span> 50 XP iniciais. 5-10 XP por sessão.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attributes Chart */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Os 8 Atributos (80 pontos, 5-15 cada)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#d4a853', fontSize: 11 }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }} />
                  <Radar name="Atributos" dataKey="A" stroke="#d4a853" fill="#d4a853" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {attributes.map((attr) => (
                <div key={attr.name} className="bg-secondary/30 rounded p-2">
                  <span className="text-sm font-bold text-amber-300">{attr.abbr}</span>
                  <p className="text-sm text-foreground/80">{attr.name}</p>
                  <p className="text-xs text-muted-foreground">{attr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Combat Flow */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Fluxo de Combate
          </h3>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Coluna Esquerda: Imagem */}
            <div className="order-2 lg:order-1">
              <img 
                src="/images/Guia_Rapido_de_Combate.png" 
                alt="Guia Rápido de Combate" 
                className="w-full h-auto rounded-md shadow-lg border border-border object-contain" 
              />
            </div>

            {/* Coluna Direita: Informações */}
            <div className="order-1 lg:order-2 space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                {combatFlow.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary/30 rounded p-3 border border-border"
                  >
                    <h4 className="text-sm font-bold text-amber-300 mb-1">{item.step}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-red-950/20 rounded p-3 border border-red-900/30">
                  <h4 className="text-sm font-bold text-red-300 mb-1">Ataque Livre</h4>
                  <p className="text-xs text-muted-foreground">Ao se afastar de um inimigo em corpo a corpo ou ao passar por um inimigo com arma Longa, o inimigo recebe um ataque gratuito.</p>
                </div>
                <div className="bg-amber-950/20 rounded p-3 border border-amber-900/30">
                  <h4 className="text-sm font-bold text-amber-300 mb-1">Limiar de Dor</h4>
                  <p className="text-xs text-muted-foreground">Quando a Vitalidade cai abaixo do Limiar de Dor, todas as rolagens ganham uma segunda chance de falha (role duas vezes, use o pior).</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Archetypes */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Os 4 Arquétipos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {archetypes.map((arch) => (
              <div key={arch.name} className="bg-secondary/20 rounded p-4 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: arch.color + '20', border: `2px solid ${arch.color}` }}>
                    <span className="text-sm font-bold" style={{ color: arch.color }}>{arch.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-foreground">{arch.name}</h4>
                    <span className="text-xs text-amber-300">Habilidade: {arch.ability}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{arch.desc}</p>
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Ocupações:</strong> {arch.occupations}</p>
                <p className="text-xs text-muted-foreground mt-1 italic">* = Profissão (habilidades exclusivas)</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions in Combat */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ações em Combate
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-bold text-green-300 mb-2">Ações de Movimento</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Mover-se ~10 metros</p>
                <p>• Levantar-se do chão</p>
                <p>• Sacar/guardar arma</p>
                <p>• Montar/desmontar</p>
                <p>• Beber elixir</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-300 mb-2">Ações de Combate</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Atacar (corpo a corpo ou distância)</p>
                <p>• Usar habilidade ativa</p>
                <p>• Usar poder místico ativo</p>
                <p>• Aplicar primeiro socorros</p>
                <p>• Usar item/equipamento</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-purple-300 mb-2">Ações Livres/Reações</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Defender-se (reação automática)</p>
                <p>• Falar brevemente</p>
                <p>• Usar poder de Reação</p>
                <p>• Largar item</p>
                <p>• Ataque Livre (quando provocado)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rest and Recovery */}
      <Card className="bg-card border-border">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Descanso & Recuperação
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded p-3">
              <h4 className="text-sm font-bold text-foreground mb-2">Descanso Curto (1 cena)</h4>
              <p className="text-xs text-muted-foreground">Corrupção temporária é removida ao final de cada cena. Não cura Vitalidade automaticamente.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3">
              <h4 className="text-sm font-bold text-foreground mb-2">Descanso Longo (noite)</h4>
              <p className="text-xs text-muted-foreground">Recupera toda a Vitalidade com descanso adequado. Sem descanso adequado: recupera apenas metade.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3">
              <h4 className="text-sm font-bold text-foreground mb-2">Morte</h4>
              <p className="text-xs text-muted-foreground">Vitalidade 0 = inconsciente. Sem ajuda em tempo: morte. Habilidade Médico pode estabilizar.</p>
            </div>
            <div className="bg-secondary/30 rounded p-3">
              <h4 className="text-sm font-bold text-foreground mb-2">Cura Mística</h4>
              <p className="text-xs text-muted-foreground">Poderes como Imposição de Mãos e elixires de cura restauram Vitalidade imediatamente.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
