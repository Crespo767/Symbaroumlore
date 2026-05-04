import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const creatureCategories = [
  {
    id: "elfos",
    name: "Elfos",
    creatures: [
      { name: "Elfo da Primavera", danger: 2, desc: "Cautelosos, usam peças mortais e armadilhas. Encontrados na periferia da Davokar." },
      { name: "Elfo do Verão (Início)", danger: 3, desc: "Irritadiços, atacam com flechas certeiras. Patrulham a parte selvagem." },
      { name: "Elfo do Verão (Fim)", danger: 4, desc: "Guerreiros experientes com séculos de combate. Extremamente perigosos." },
      { name: "Elfo do Outono", danger: 5, desc: "Nas profundezas da Davokar Escura. Pálidos como ossos, guardiões implacáveis." },
    ]
  },
  {
    id: "trolls",
    name: "Trolls",
    creatures: [
      { name: "Troll Furioso (Faminto)", danger: 3, desc: "Movido pela fome insaciável. Ataca qualquer coisa que se mova." },
      { name: "Troll Furioso (Gregário)", danger: 3, desc: "Viaja em grupos, mais organizado que o faminto mas igualmente violento." },
      { name: "Troll Soberano", danger: 4, desc: "Inteligente e territorial. Governa grupos menores de trolls." },
      { name: "Arquitroll", danger: 5, desc: "Imenso e antigo. Raramente visto, devastadoramente poderoso." },
    ]
  },
  {
    id: "abominacoes",
    name: "Abominações",
    creatures: [
      { name: "Nascido da Mácula (Humano)", danger: 3, desc: "Humano transformado pela corrupção. Mantém resquícios de inteligência." },
      { name: "Nascido da Mácula (Alce)", danger: 3, desc: "Animal corrompido com chifres retorcidos e olhos brilhantes." },
      { name: "Nascido da Mácula (Gigavali)", danger: 4, desc: "Javali gigante corrompido. Extremamente agressivo e resistente." },
      { name: "Besta Maculada Primordial", danger: 5, desc: "Criatura ancestral completamente consumida pela corrupção. Quase indestrutível." },
    ]
  },
  {
    id: "mortos",
    name: "Mortos-Vivos",
    creatures: [
      { name: "Dragoul", danger: 3, desc: "Morto-vivo guerreiro, mantém habilidades de combate da vida." },
      { name: "Necromago", danger: 4, desc: "Feiticeiro que transcendeu a morte. Comanda outros mortos-vivos." },
      { name: "Andarilho da Cripta", danger: 2, desc: "Morto-vivo básico encontrado em ruínas antigas." },
      { name: "Luz Gélida", danger: 3, desc: "Espírito luminoso que atrai viajantes para armadilhas mortais." },
    ]
  },
  {
    id: "predadores",
    name: "Predadores & Outros",
    creatures: [
      { name: "Pesadelino", danger: 2, desc: "Predador noturno que caça em bandos na periferia da floresta." },
      { name: "Baiagorn", danger: 3, desc: "Grande predador territorial das profundezas." },
      { name: "Gigavali", danger: 3, desc: "Javali gigante, extremamente territorial e agressivo." },
      { name: "Kanaran", danger: 3, desc: "Serpente constritora de 6 metros. Silenciosa e mortal." },
      { name: "Linnorme", danger: 5, desc: "Serpente mística inteligente. Capaz de falar e usar magia." },
      { name: "Segue-rebanho", danger: 2, desc: "Aranha que segue grupos à distância, atacando os retardatários." },
      { name: "Violentino", danger: 2, desc: "Corvos imensos que atacam em bandos coordenados." },
    ]
  },
];

function DangerIndicator({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? "bg-red-500" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function CreaturesSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Criaturas & Monstros
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          A Davokar abriga uma variedade assustadora de criaturas — desde elfos guardiões até 
          abominações nascidas da corrupção. Cada região da floresta possui seus próprios horrores, 
          e quanto mais fundo se vai, mais terríveis são os encontros.
        </p>
      </div>

      {/* Creatures Image */}
      <Card className="bg-card border-border overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663622705168/KdzVCAjsftQjBG3jYgoaKD/creatures-section-czrHXFp6SmFzLhuwvf3erE.webp"
          alt="Criaturas da Davokar"
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" />
      </Card>

      {/* Categories */}
      <Tabs defaultValue="elfos" className="mt-6">
        <TabsList className="bg-secondary border border-border w-full justify-start overflow-x-auto">
          {creatureCategories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-amber-900/40 data-[state=active]:text-amber-200">
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {creatureCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            <div className="grid gap-3 md:grid-cols-2">
              {category.creatures.map((creature, index) => (
                <motion.div
                  key={creature.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-foreground">{creature.name}</h4>
                        <DangerIndicator level={creature.danger} />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{creature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Danger Legend */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
        <span className="font-semibold">Nível de Perigo:</span>
        <span className="flex items-center gap-1"><DangerIndicator level={1} /> Baixo</span>
        <span className="flex items-center gap-1"><DangerIndicator level={3} /> Médio</span>
        <span className="flex items-center gap-1"><DangerIndicator level={5} /> Extremo</span>
      </div>
    </div>
  );
}
