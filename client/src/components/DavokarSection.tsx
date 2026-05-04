import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DavokarSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          A Floresta Davokar
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          Davokar é uma floresta diferente de todas — tão vasta que demora semanas ou meses para cruzá-la. 
          Os bárbaros têm mais de cem palavras para descrever suas diferentes partes. 
          Alguns a retratam como um ser pensante, um organismo faminto e esforçado.
        </p>
        <blockquote className="text-sm md:text-base text-amber-200/90 italic leading-relaxed border-l-2 border-amber-500/50 pl-6 max-w-4xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          "Quem quer que você seja, de onde quer que venha, o que quer que acredite e pense que é capaz de realizar; nada disso importa! 
          Já vi cavaleiros completamente armadurados calejados de batalhas chorarem de exaustão... Não, deixe eu te dizer, nem um braço forte 
          nem uma cabeça cheia de sagacidade é capaz de sobreviver a Davokar... Sim, qualquer criança viveria melhor e mais tempo que o Rei Ladrão de Ambria, 
          simplesmente trocando arrogância por precaução. Você pode zombar, suspirar e revirar seus olhos azuis, mas esteja avisado! 
          Uma atitude bem desenvolvida, o tipo certo de instrução e equipamento não é o suficiente para o verdadeiro aventureiro. 
          Com isso você pode começar, mas raramente é o suficiente para chegar a seu destino, e nunca é o suficiente para voltar, 
          isso deve ser combinado com paciência, culhões e uma quantidade considerável de premeditação!"
        </blockquote>
      </div>

      {/* Map */}
      <Card className="bg-card border-border overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663622705168/KdzVCAjsftQjBG3jYgoaKD/map-stylized-DXF9ZKpgJG68KqweqHE9iS.webp"
          alt="Mapa de Davokar"
          className="w-full max-h-[500px] object-contain bg-amber-950/20 p-2"
        />
      </Card>

      {/* Regions Tabs */}
      <Tabs defaultValue="iluminada" className="mt-8">
        <TabsList className="bg-secondary border border-border w-full justify-start overflow-x-auto">
          <TabsTrigger value="iluminada" className="data-[state=active]:bg-green-900/40 data-[state=active]:text-green-200">
            Davokar Iluminada
          </TabsTrigger>
          <TabsTrigger value="selvagem" className="data-[state=active]:bg-amber-900/40 data-[state=active]:text-amber-200">
            Parte Selvagem
          </TabsTrigger>
          <TabsTrigger value="escura" className="data-[state=active]:bg-red-900/40 data-[state=active]:text-red-200">
            Davokar Escura
          </TabsTrigger>
        </TabsList>

        <TabsContent value="iluminada" className="mt-4">
          <Card className="bg-card border-border border-l-4 border-l-green-700">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-green-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                A Parte Aberta — Lar dos Clãs Bárbaros
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed">
                A região externa da Davokar pode ser visitada sem arriscar diretamente a vida — a vegetação é 
                comparativamente jovem e deixa mais luz solar passar. Árvores exuberantes coroam arbustos verdes claros 
                cheios de plantas frutíferas e adoráveis flores selvagens. Pinheiros formam salões majestosos com troncos 
                de até noventa metros de altura.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-950/20 rounded-md p-4 border border-green-900/30">
                  <h4 className="font-semibold text-green-300 text-sm mb-2">Perigos</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Frutas venenosas disfarçadas de comestíveis</li>
                    <li>• Atoleiros disfarçados de chão sólido</li>
                    <li>• Plantas carnívoras e vinhas com sede de sangue</li>
                    <li>• Fadas (prolelfos) com peças mortais</li>
                    <li>• Elfos guerreiros com flechas certeiras</li>
                  </ul>
                </div>
                <div className="bg-green-950/20 rounded-md p-4 border border-green-900/30">
                  <h4 className="font-semibold text-green-300 text-sm mb-2">Criaturas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pesadelinos e Jakaars em bandos</li>
                    <li>• Segue-rebanhos (aranhas)</li>
                    <li>• Trolls furiosos</li>
                    <li>• Abominações famintas</li>
                    <li>• Baiagorn e Gigavali</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mt-2">
                "Você precisa estar armado, viajar em grupos e ser capaz de suportar tentações caso queira sobreviver na Davokar!"
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="selvagem" className="mt-4">
          <Card className="bg-card border-border border-l-4 border-l-amber-700">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-amber-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                A Parte Selvagem — Apenas para Companhias Experientes
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Regiões tão perigosas que apenas companhias experientes e bem equipadas devem adentrar. 
                Dominada por floresta primeva — verde escura, cerrada, espinhenta e hostil. 
                Frutas letais se disfarçam como seus primos comestíveis; um pequeno riacho pode esconder 
                um abismo imenso; sumidouros gigantes espreitam sob finas camadas de trepadeiras.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-amber-950/20 rounded-md p-4 border border-amber-900/30">
                  <h4 className="font-semibold text-amber-300 text-sm mb-2">Natureza</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Floresta primeva verde escura e cerrada</li>
                    <li>• Frutas letais disfarçadas</li>
                    <li>• Abismos sob riachos aparentemente calmos</li>
                    <li>• Sumidouros gigantes sob trepadeiras</li>
                    <li>• Kelders (áreas especialmente perigosas)</li>
                  </ul>
                </div>
                <div className="bg-amber-950/20 rounded-md p-4 border border-amber-900/30">
                  <h4 className="font-semibold text-amber-300 text-sm mb-2">Criaturas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Abominações com fome insaciável</li>
                    <li>• Grupos de trolls furiosos e gigantes</li>
                    <li>• Colônias de segue-rebanhos e morde-crânios</li>
                    <li>• Seres metamórficos não classificados</li>
                    <li>• Lorde Brejo, Estriga do Espinheiro, Açougueiro</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="escura" className="mt-4">
          <Card className="bg-card border-border border-l-4 border-l-red-700">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-red-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                A Davokar Escura — Onde Ninguém Retorna
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed">
                As regiões mais profundas e perigosas da floresta. A vegetação é tão densa que tampa toda a luz. 
                Infestada com contágios e parasitas — doenças que afetam a carne e a mente com consequências horríveis. 
                As vítimas ficam insanas, retorcidas, aleijadas, raivosas ou mortas-vivas.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-red-950/20 rounded-md p-4 border border-red-900/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">Horrores Naturais</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mares de espinhos intransponíveis</li>
                    <li>• Florestas petrificadas</li>
                    <li>• Poças de água preta espessa</li>
                    <li>• Rios de magma subterrâneo</li>
                    <li>• Frio gélido no meio do verão</li>
                    <li>• Vegetação luminescente</li>
                    <li>• Lagos de ácido com vapores venenosos</li>
                  </ul>
                </div>
                <div className="bg-red-950/20 rounded-md p-4 border border-red-900/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">Criaturas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Elfos guerreiros pálidos como ossos</li>
                    <li>• Guarda da Ira de Symbaroum</li>
                    <li>• Monstros-sapo possuídos (2x tamanho humano)</li>
                    <li>• Dragões / Serpentes / Drackans</li>
                    <li>• O Clã Predatório em Saroklaw</li>
                    <li>• Besta Maculada Primordial</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-red-300/80 italic mt-2">
                "Enquanto houver ruínas intocadas em outro lugar, é tolice entrar na parte escura. 
                De minha parte, preferiria morrer a caçar lugares místicos como Symbar."
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Travel Table */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-amber-100 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Velocidades de Viagem
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Meio</th>
                  <th className="text-center py-2 px-3 text-green-300 font-semibold">Planícies</th>
                  <th className="text-center py-2 px-3 text-amber-300 font-semibold">Iluminada</th>
                  <th className="text-center py-2 px-3 text-red-300 font-semibold">Escura</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Marcha</td>
                  <td className="text-center py-2 px-3">20 km/dia</td>
                  <td className="text-center py-2 px-3">20 km/dia</td>
                  <td className="text-center py-2 px-3">10 km/dia</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Marcha Forçada</td>
                  <td className="text-center py-2 px-3">40 km/dia</td>
                  <td className="text-center py-2 px-3">30 km/dia</td>
                  <td className="text-center py-2 px-3">15 km/dia</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Marcha Mortal</td>
                  <td className="text-center py-2 px-3">60 km/dia</td>
                  <td className="text-center py-2 px-3">40 km/dia</td>
                  <td className="text-center py-2 px-3">20 km/dia</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Cavalgada</td>
                  <td className="text-center py-2 px-3">40 km/dia</td>
                  <td className="text-center py-2 px-3">30 km/dia</td>
                  <td className="text-center py-2 px-3">10 km/dia</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Marcha forçada impede cura natural. Marcha mortal causa 1+ ponto de Vitalidade perdido por dia.
          </p>
        </CardContent>
      </Card>

      {/* Explorer License */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Licença de Explorador
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Desde o outono do Ano 15, toda pessoa de origem ambriana que deseje se aventurar na Davokar 
            deve obter uma Licença de Explorador. Pode ser comprada nos quartéis de Yndaros ou na 
            Legação da Rainha em Forte do Cardo.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Tipo</th>
                  <th className="text-center py-2 px-3 text-amber-300 font-semibold">Mensal</th>
                  <th className="text-center py-2 px-3 text-amber-300 font-semibold">Anual</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Individual</td>
                  <td className="text-center py-2 px-3">2 táleres</td>
                  <td className="text-center py-2 px-3">9 táleres</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">2–5 pessoas</td>
                  <td className="text-center py-2 px-3">10 táleres</td>
                  <td className="text-center py-2 px-3">50 táleres</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">6–8 pessoas</td>
                  <td className="text-center py-2 px-3">25 táleres</td>
                  <td className="text-center py-2 px-3">90 táleres</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">9–10 pessoas</td>
                  <td className="text-center py-2 px-3">55 táleres</td>
                  <td className="text-center py-2 px-3">180 táleres</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Ilimitado</td>
                  <td className="text-center py-2 px-3">—</td>
                  <td className="text-center py-2 px-3">450 táleres</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            Custos adicionais: pegar recursos (3–10 táleres), colher (5–12), explorar (5/pessoa), 
            carroças (5/carroça), incompetência (5–15), intenções suspeitas (5–50) e outros (1–50).
          </p>
        </CardContent>
      </Card>

      {/* Symbar */}
      <Card className="bg-card border-border border-l-4 border-l-purple-700 mt-8">
        <CardContent className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-purple-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Symbar — O Coração Perdido
          </h3>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Todos os bárbaros na região da Davokar descendem da mesma civilização — um império chamado 
            <strong className="text-purple-200"> Symbaroum</strong> que supostamente teve sua sede no que hoje é o centro da Davokar. 
            As lendas sobre a queda de Symbaroum são numerosas, a maioria variações do tema de que seu 
            último imperador irritou alguma forma de ser supremo e causou a ruína do império.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Muitos sonham em encontrar o coração de Symbaroum, chamada de <strong className="text-purple-200">Symbar</strong> por bruxas e bárbaros. 
            Muitos tentaram, mas ninguém retornou com histórias críveis. Caçadores de fortunas continuam 
            planejando novas expedições, porque enquanto os contos sobre os tesouros de Symbar sobrepujarem 
            as histórias sobre seus horrores, a sedução do mito continuará a clamar vida após vida.
          </p>
          <p className="text-xs text-muted-foreground italic">
            "Quanto mais para dentro da Davokar se viaja, maiores as chances de encontrar ruínas ricas e 
            bem preservadas. Mas elas são sempre habitadas por alguém ou alguma coisa pronta para proteger seu território."
          </p>
        </CardContent>
      </Card>

      {/* Travel Tips */}
      <Card className="bg-card border-border mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Dicas de Viagem na Davokar
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-sm font-bold text-green-300 mb-2">Na Periferia</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Rotas entre Forte do Cardo e Karvosti são patrulhadas</li>
                <li>• Possível cavalgar, embora sem boa velocidade</li>
                <li>• Máximo 3-4 km/dia dependendo do terreno</li>
                <li>• Leve muita água e carne seca</li>
              </ul>
            </div>
            <div className="bg-secondary/30 rounded p-3 border border-border">
              <h4 className="text-sm font-bold text-red-300 mb-2">Nas Profundezas</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cavalgar raramente é opção — animais fogem de trolls</li>
                <li>• Nunca vá sem vários companheiros armados</li>
                <li>• Leve um guia que saiba encontrar água limpa</li>
                <li>• Fogueiras abertas atraem convidados indesejados</li>
                <li>• Cada refeição pode ser sua última</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
