import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const traditions = [
  { id: "all", name: "Todas", color: "text-gray-300" },
  { id: "bruxaria", name: "Bruxaria", color: "text-green-300" },
  { id: "feiticaria", name: "Feitiçaria", color: "text-purple-300" },
  { id: "magismo", name: "Magismo", color: "text-blue-300" },
  { id: "teurgia", name: "Teurgia", color: "text-yellow-300" },
  { id: "canto", name: "Canto do Troll", color: "text-orange-300" },
  { id: "cajado", name: "Magia do Cajado", color: "text-cyan-300" },
  { id: "simbolismo", name: "Simbolismo", color: "text-red-300" },
  { id: "profissao", name: "Profissão", color: "text-pink-300" },
];

const powers = [
  { name: "Abraço da Natureza", traditions: ["bruxaria"], desc: "Invocar o poder da natureza para curar ou proteger, canalizando a energia viva da floresta." },
  { name: "Alma de Fogo", traditions: ["profissao"], desc: "Piromante. Chamas protegem o místico e retaliam atacantes. Imunidade crescente ao fogo." },
  { name: "Anátema", traditions: ["magismo", "cajado", "teurgia"], desc: "Dissipar poderes místicos ativos, cancelando efeitos mágicos de outros." },
  { name: "Arma Dançante", traditions: ["canto", "cajado"], desc: "Fazer uma arma lutar sozinha pela força de vontade, atacando independentemente." },
  { name: "Arremesso Mental", traditions: ["magismo"], desc: "Arremessar objetos ou criaturas com a força da mente. Telecinese ofensiva." },
  { name: "Aura Profana", traditions: ["feiticaria"], desc: "Emanar uma aura de medo e desespero que enfraquece inimigos próximos." },
  { name: "Aura Sagrada", traditions: ["teurgia"], desc: "Irradiar luz divina que fortalece aliados e repele abominações." },
  { name: "Caçada Selvagem", traditions: ["profissao"], desc: "Ave de Sangue. Convocar bestas da floresta para lutar ao lado do místico." },
  { name: "Cajado Projétil", traditions: ["cajado"], desc: "Arremessar o cajado rúnico como projétil devastador que retorna ao místico." },
  { name: "Caminhada Espiritual", traditions: ["profissao"], desc: "Necromante. Assumir forma imaterial de espírito, atravessando paredes e evitando ataques." },
  { name: "Cascata de Enxofre", traditions: ["magismo"], desc: "Despejar fogo alquímico sobre inimigos, causando dano contínuo de queimadura." },
  { name: "Confusão", traditions: ["canto", "magismo"], desc: "Desorientar a mente do alvo, fazendo-o atacar aliados ou ficar inerte." },
  { name: "Correção Ilusória", traditions: ["magismo"], desc: "Criar ilusões que enganam os sentidos, alterando a percepção da realidade." },
  { name: "Doador de Vida", traditions: ["profissao"], desc: "Confessor. Transferir a própria vitalidade para curar outros." },
  { name: "Dobrar Vontade", traditions: ["magismo"], desc: "Dominar a mente de um alvo, forçando-o a obedecer comandos." },
  { name: "Escudo Abençoado", traditions: ["teurgia"], desc: "Criar um escudo de luz divina que protege contra ataques físicos e místicos." },
  { name: "Esfera", traditions: ["cajado"], desc: "Girar o cajado criando uma esfera protetora impenetrável ao redor do místico." },
  { name: "Espelhamento", traditions: ["profissao"], desc: "Ilusionista. Criar cópias ilusórias de si mesmo para confundir inimigos." },
  { name: "Espíritos Atormentadores", traditions: ["profissao"], desc: "Espiritualista/Necromante. Invocar espíritos para atormentar e danificar inimigos." },
  { name: "Exorcizar", traditions: ["profissao"], desc: "Demonologista. Expulsar entidades possessoras de corpos hospedeiros." },
  { name: "Fervilhar Larvar", traditions: ["feiticaria", "magismo"], desc: "Invocar larvas místicas que devoram a carne do alvo por dentro." },
  { name: "Flecha de Tempestade", traditions: ["bruxaria"], desc: "Disparar um raio de energia natural devastador contra um alvo." },
  { name: "Forma Verdadeira", traditions: ["magismo", "teurgia"], desc: "Revelar a verdadeira forma de criaturas disfarçadas ou transformadas." },
  { name: "Glifo de Drenagem", traditions: ["simbolismo"], desc: "Inscrever um símbolo que drena energia mística de quem o ativar." },
  { name: "Golpe de Regresso", traditions: ["feiticaria"], desc: "Atacar com energia necrótica que retorna parte do dano como cura." },
  { name: "Herdar Ferimento", traditions: ["bruxaria", "teurgia"], desc: "Transferir ferimentos de um aliado para si mesmo ou para um inimigo." },
  { name: "Hino de Combate", traditions: ["canto"], desc: "Cantar um hino que fortalece aliados em combate, aumentando dano e moral." },
  { name: "Hino de Enfraquecimento", traditions: ["canto"], desc: "Entoar um canto que debilita inimigos, reduzindo suas capacidades." },
  { name: "Hino Heroico", traditions: ["canto"], desc: "Inspirar feitos heroicos nos aliados, concedendo resistência e determinação." },
  { name: "Imperceptível", traditions: ["magismo", "teurgia"], desc: "Tornar-se invisível ou extremamente difícil de notar." },
  { name: "Imposição de Mãos", traditions: ["bruxaria", "teurgia"], desc: "Curar ferimentos pelo toque, restaurando Vitalidade de aliados." },
  { name: "Impulso Psíquico", traditions: ["profissao"], desc: "Mentalista. Onda de força mental que empurra e danifica inimigos." },
  { name: "Levitação", traditions: ["magismo", "teurgia"], desc: "Flutuar no ar, ganhando mobilidade vertical e evitando terreno." },
  { name: "Luz Ardente de Prios", traditions: ["teurgia"], desc: "Invocar a luz sagrada de Prios para queimar abominações e iluminar trevas." },
  { name: "Maldição", traditions: ["bruxaria", "feiticaria"], desc: "Amaldiçoar um alvo, trazendo azar e penalidades persistentes." },
  { name: "Maltransformação", traditions: ["bruxaria"], desc: "Transformar um inimigo em uma criatura menor e inofensiva." },
  { name: "Manto de Espinhos", traditions: ["profissao"], desc: "Tecelã Verde. Criar um manto vivo de espinhos que protege e retalia." },
  { name: "Martelo Bruxo", traditions: ["teurgia"], desc: "Imbuir uma arma com poder divino, causando dano extra sagrado." },
  { name: "Metamorfose", traditions: ["bruxaria"], desc: "Transformar-se em um animal, ganhando suas capacidades físicas." },
  { name: "Muralha de Fogo", traditions: ["magismo"], desc: "Erguer uma parede de chamas que bloqueia passagem e causa dano." },
  { name: "Purgatório", traditions: ["profissao"], desc: "Inquisidor. Infligir dor purificadora que causa dano e revela verdades." },
  { name: "Raio Negro", traditions: ["feiticaria"], desc: "Disparar um raio de energia sombria pura que devasta o alvo." },
  { name: "Retribuição", traditions: ["canto", "feiticaria"], desc: "Refletir dano recebido de volta ao atacante. Poder dos anões." },
  { name: "Runas Protetivas", traditions: ["cajado", "simbolismo"], desc: "Inscrever runas que criam barreiras protetoras contra ataques." },
  { name: "Selo de Banimento", traditions: ["simbolismo"], desc: "Criar um selo que bane ou aprisiona criaturas místicas." },
  { name: "Símbolo Cegante", traditions: ["simbolismo"], desc: "Ativar um símbolo que emite luz cegante, incapacitando inimigos." },
  { name: "Sopro Sombrio", traditions: ["feiticaria"], desc: "Exalar escuridão corrosiva que envenena e enfraquece." },
  { name: "Teleporte", traditions: ["profissao"], desc: "Demonologista. Mover-se instantaneamente entre dois pontos." },
  { name: "Vinhas Emaranhadoras", traditions: ["bruxaria"], desc: "Invocar vinhas que prendem e imobilizam inimigos no lugar." },
];

const rituals = [
  { name: "Círculo Mágico", tradition: "Magismo", desc: "Criar uma área protegida contra poderes místicos e criaturas corrompidas." },
  { name: "Círculo de Bruxa", tradition: "Bruxaria", desc: "Estabelecer um círculo de proteção natural contra forças sobrenaturais." },
  { name: "Erguer os Mortos", tradition: "Feitiçaria", desc: "Reanimar cadáveres como servos mortos-vivos obedientes." },
  { name: "Familiar", tradition: "Magismo/Bruxaria", desc: "Vincular um animal como familiar místico, compartilhando sentidos." },
  { name: "Rito de Santificação", tradition: "Teurgia", desc: "Consagrar um local, tornando-o sagrado e protegido contra o mal." },
  { name: "Trocar Sombra", tradition: "Feitiçaria", desc: "Alterar a aparência da própria Sombra para esconder corrupção." },
  { name: "Crescimento Rápido", tradition: "Bruxaria", desc: "Acelerar o crescimento de plantas, criando barreiras ou caminhos." },
  { name: "Conto de Cinzas", tradition: "Magismo", desc: "Criar um servo flamejante a partir de cinzas e fogo." },
  { name: "Servo Flamejante", tradition: "Magismo", desc: "Invocar uma criatura de fogo para servir como guardião." },
  { name: "Armadilha de Feitiços", tradition: "Simbolismo", desc: "Inscrever uma runa que dispara um poder quando ativada." },
  { name: "Escrita Distante", tradition: "Simbolismo", desc: "Enviar mensagens místicas através de runas à distância." },
  { name: "Esculpir Tatuagem Rúnica", tradition: "Simbolismo", desc: "Criar tatuagens permanentes com propriedades mágicas." },
  { name: "Guardião Rúnico", tradition: "Simbolismo", desc: "Criar um guardião de pedra animado por runas." },
];

export default function PowersSection() {
  const [tradFilter, setTradFilter] = useState("all");
  const [showRituals, setShowRituals] = useState(false);

  const filtered = tradFilter === "all"
    ? powers
    : powers.filter(p => p.traditions.includes(tradFilter));

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Poderes Místicos & Rituais
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Poderes místicos são as magias do mundo de Symbaroum. Cada poder pertence a uma ou mais 
          tradições e tem três níveis de maestria. Usar poderes gera corrupção — o preço da magia. 
          Rituais são poderes mais elaborados que requerem tempo e preparação.
        </p>
      </div>

      {/* Toggle Powers/Rituals */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setShowRituals(false)}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            !showRituals ? "bg-amber-900/50 text-amber-200 border border-amber-700/50" : "bg-secondary text-muted-foreground"
          }`}
        >
          Poderes ({powers.length})
        </button>
        <button
          onClick={() => setShowRituals(true)}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            showRituals ? "bg-amber-900/50 text-amber-200 border border-amber-700/50" : "bg-secondary text-muted-foreground"
          }`}
        >
          Rituais ({rituals.length})
        </button>
      </div>

      {!showRituals ? (
        <>
          {/* Tradition Filter */}
          <div className="flex flex-wrap gap-1">
            {traditions.map(t => (
              <button
                key={t.id}
                onClick={() => setTradFilter(t.id)}
                className={`text-[11px] px-2.5 py-1 rounded transition-all ${
                  tradFilter === t.id
                    ? "bg-amber-900/50 text-amber-200 border border-amber-700/50"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">{filtered.length} poderes encontrados</p>

          {/* Powers Grid */}
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((power, index) => (
              <motion.div
                key={power.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <Card className="bg-card border-border h-full hover:border-amber-800/50 transition-colors">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-bold text-foreground mb-1">{power.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {power.traditions.map(t => {
                        const trad = traditions.find(tr => tr.id === t);
                        return (
                          <span key={t} className={`text-[9px] px-1.5 py-0.5 rounded bg-secondary ${trad?.color || "text-gray-300"}`}>
                            {trad?.name || t}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{power.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        /* Rituals */
        <div className="grid gap-3 md:grid-cols-2">
          {rituals.map((ritual, index) => (
            <motion.div
              key={ritual.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-bold text-foreground">{ritual.name}</h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary text-amber-300">
                      {ritual.tradition}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{ritual.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Traditions Overview */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-amber-200 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            As 7 Tradições Místicas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-green-950/20 rounded p-3 border border-green-900/30">
              <h4 className="text-sm font-semibold text-green-300 mb-1">Bruxaria</h4>
              <p className="text-[10px] text-muted-foreground">Tradição das bruxas bárbaras, ligada à natureza e aos espíritos da floresta. Protege contra corrupção ao usar poderes da tradição.</p>
            </div>
            <div className="bg-purple-950/20 rounded p-3 border border-purple-900/30">
              <h4 className="text-sm font-semibold text-purple-300 mb-1">Feitiçaria</h4>
              <p className="text-[10px] text-muted-foreground">Magia proibida baseada em pactos com seres sombrios. Poder imenso, mas gera corrupção permanente. Perseguida por todas as facções.</p>
            </div>
            <div className="bg-blue-950/20 rounded p-3 border border-blue-900/30">
              <h4 className="text-sm font-semibold text-blue-300 mb-1">Magismo</h4>
              <p className="text-[10px] text-muted-foreground">Tradição acadêmica da Ordo Magica. Estudo disciplinado da magia. Protege contra corrupção permanente ao usar poderes da tradição.</p>
            </div>
            <div className="bg-yellow-950/20 rounded p-3 border border-yellow-900/30">
              <h4 className="text-sm font-semibold text-yellow-300 mb-1">Teurgia</h4>
              <p className="text-[10px] text-muted-foreground">Magia divina da Igreja de Prios. Poder sagrado contra abominações. Protege contra corrupção ao usar poderes da tradição.</p>
            </div>
            <div className="bg-orange-950/20 rounded p-3 border border-orange-900/30">
              <h4 className="text-sm font-semibold text-orange-300 mb-1">Canto do Troll</h4>
              <p className="text-[10px] text-muted-foreground">Tradição dos trolls expressa pelo canto e música. Kulning para longas distâncias. Protege contra corrupção permanente.</p>
            </div>
            <div className="bg-cyan-950/20 rounded p-3 border border-cyan-900/30">
              <h4 className="text-sm font-semibold text-cyan-300 mb-1">Magia do Cajado</h4>
              <p className="text-[10px] text-muted-foreground">Sub-tradição do magismo focada no cajado rúnico como foco de poder. Combina combate e magia de forma única.</p>
            </div>
            <div className="bg-red-950/20 rounded p-3 border border-red-900/30">
              <h4 className="text-sm font-semibold text-red-300 mb-1">Simbolismo</h4>
              <p className="text-[10px] text-muted-foreground">Tradição baseada em runas e símbolos. Originária do leste. Resiliente à corrupção: apenas 1 ponto temporário por símbolo ativado.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
