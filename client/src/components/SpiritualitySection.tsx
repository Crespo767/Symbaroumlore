import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sun, TreePine, Sparkles, Flame, Moon, Skull, Eye, Crosshair } from "lucide-react";

export default function SpiritualitySection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-amber-100 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Espiritualidade & Crenças
        </h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Três visões espirituais coexistem na região de Davokar e Ambria: a fé em Prios dos ambrianos, 
          a adoração diversa dos clãs bárbaros, e a gratidão à natureza do Povo Antigo. 
          Nas sombras, a corrupção atrai cultistas para reverenciar antigas entidades esquecidas.
          Essas diferenças estão na raiz de quase todos os conflitos entre os povos.
        </p>
      </div>

      {/* Prios */}
      <Card className="bg-card border-border border-l-4 border-l-amber-600">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Sun className="w-6 h-6 text-amber-300" />
            <h3 className="text-xl font-bold text-amber-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Prios, O Deus Sol, O Uno
            </h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Durante a Grande Guerra, Prios foi de uma das muitas divindades aceitas a ser reconhecido como <strong className="text-amber-200">o Uno</strong>. 
            Onde os Lordes Negros representavam escuridão e morte, Prios veio a simbolizar a luz de Alberetor e o poder vital do sol. 
            A Rainha Korinthia e a Cúria governam sob Sua bênção.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Hoje, Prios é reconhecido como o <strong className="text-amber-200">Doador das Leis</strong>. Quase todos os ambrianos seguem Seus mandamentos, 
            pregados pelos padres e teurgos da Igreja do Sol. Dizem que Prios está em todos os lugares entre os céus 
            e que os humanos têm a tarefa de cultivar Sua criação, expurgando a Davokar.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-amber-950/20 rounded-md p-4 border border-amber-900/30">
              <h4 className="font-semibold text-amber-300 text-sm mb-2 flex items-center gap-2">
                <Flame className="w-4 h-4" /> O Sol Moribundo
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                De acordo com a Igreja, o homem vem negligenciando seu dever. Por isso, <strong className="text-amber-200">Prios está morrendo</strong>. 
                Se os humanos trabalharem duro e colonizarem mais ermos, purificando a floresta selvagem, Prios ficará forte novamente.
              </p>
            </div>
            
            <div className="bg-amber-950/20 rounded-md p-4 border border-amber-900/30">
              <h4 className="font-semibold text-amber-300 text-sm mb-2 flex items-center gap-2">
                <Crosshair className="w-4 h-4" /> Os Frades do Crepúsculo
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conhecidos como <strong className="text-amber-200">Mantos Negros</strong>, são a Inquisição de Ambria. Especialistas em rastrear hereges, erradicar cultos e expurgar a corrupção de feitiçaria profana que ameaça o domínio de Prios.
              </p>
            </div>
          </div>
          <blockquote className="border-l-2 border-amber-700/50 pl-4 py-1 text-xs italic text-muted-foreground">
            "No abismo, na escuridão absoluta, estava a fagulha que deu esperança ao mundo, a fagulha que com o 
            cuidado de nós, ambrianos, fará Prios arder como nunca." — Primeiro Padre Jeseebegai
          </blockquote>
        </CardContent>
      </Card>

      {/* Divindades Abolidas */}
      <Card className="bg-card border-border border-l-4 border-l-blue-700">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Moon className="w-6 h-6 text-blue-300" />
            <h3 className="text-xl font-bold text-blue-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Divindades Abolidas de Ambria
            </h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Nas sombras de Prios, as divindades abolidas continuam vivendo. Antes de Prios ser declarado o Uno, 
            os ambrianos adoravam múltiplos deuses que possuem forte similaridade com as divindades dos clãs bárbaros: 
            a <strong className="text-blue-200">Mãe Terra</strong>, o <strong className="text-blue-200">Desbravador</strong>, o <strong className="text-blue-200">Executor</strong>, entre outros.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Muitos ambrianos que não se conformam com a Igreja de Prios tornaram-se <strong className="text-blue-200">Colonos Livres</strong>, 
            refugiados que fugiram para as bordas de Davokar formando assentamentos próprios onde adoram livremente os velhos deuses da terra e da natureza.
          </p>
        </CardContent>
      </Card>

      {/* Crenças Bárbaras */}
      <Card className="bg-card border-border border-l-4 border-l-green-700">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <TreePine className="w-6 h-6 text-green-300" />
            <h3 className="text-xl font-bold text-green-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Crenças dos Clãs Bárbaros
            </h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Não existe um sistema religioso unificado entre os bárbaros. Cada clã reverencia suas próprias bestas-divindades, 
            espíritos ancestrais e locais de poder. As <strong className="text-green-200">bruxas</strong> atuam como as líderes espirituais dos clãs e intermediárias com as forças da floresta.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <div className="bg-green-950/20 rounded-md p-3 border border-green-900/30">
              <h4 className="font-semibold text-green-300 text-sm mb-2">Divindades Animistas Conhecidas</h4>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• <strong className="text-green-200">Uron</strong> (clã Gaoia): o deus serpente</li>
                <li>• <strong className="text-green-200">Arex</strong> (clã Baiaga): o gigantesco lobo de sangue</li>
                <li>• <strong className="text-green-200">Oroke</strong> (muitos clãs): a aranha tecelã</li>
                <li>• <strong className="text-green-200">Filha-de-Sangue</strong> (clã Saar-Kahn): divindade bestial impiedosa</li>
              </ul>
            </div>
            <div className="bg-green-950/20 rounded-md p-3 border border-green-900/30">
              <h4 className="font-semibold text-green-300 text-sm mb-2">Práticas</h4>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Oferendas às bestas-divindades e adoração de ancestrais</li>
                <li>• Rituais xamânicos conduzidos pelas bruxas do clã</li>
                <li>• Enoais se deixam picar por aranhas venenosas para sentir Oroke</li>
                <li>• Estrita submissão aos tabus que proíbem explorar certas ruínas</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-950/30 rounded-md p-4 border border-green-900/40 mt-2">
            <h4 className="font-semibold text-green-300 text-sm mb-2">As Bruxas e a Huldra</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A líder das bruxas é a <strong className="text-green-200">Huldra Yeleta</strong>, que reside no alto do penhasco de Karvosti. 
              Quatro vezes por ano ela convoca as <strong className="text-green-200">Guardiãs</strong> (líderes espirituais dos clãs) para conselhos de guerra e magia, monitorando o despertar de ameaças antigas.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Povo Antigo */}
      <Card className="bg-card border-border border-l-4 border-l-purple-700">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-300" />
            <h3 className="text-xl font-bold text-purple-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Espiritualidade do Povo Antigo
            </h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Elfos, goblins, ogros e trolls parecem ter uma relação muito mais pragmática e visceral com os assuntos espirituais. 
            Em vez de adorar entidades transcendentes, o Povo Antigo costuma <strong className="text-purple-200">demonstrar gratidão direta aos espíritos e animas</strong> que habitam todos os aspectos físicos da Davokar.
          </p>
          <div className="bg-purple-950/20 rounded-md p-4 border border-purple-900/30">
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Agradecem ao <strong className="text-purple-200">rio</strong> por deixá-los atravessar suas águas rápidas incólumes</li>
              <li>• Oferecem gratidão à <strong className="text-purple-200">árvore</strong> por deixar seus frutos caírem</li>
              <li>• Sussurram agradecimentos ao <strong className="text-purple-200">veado</strong> por se permitir ser caçado e virar sustento</li>
            </ul>
          </div>
          <blockquote className="border-l-2 border-purple-700/50 pl-4 py-1 text-xs italic text-muted-foreground">
            "É uma presunção vã pensar que o mundo se importa se é adorado ou que ele iria responder a preces; 
            é uma presunção que espelha os desejos do homem de ser adorado e sua expectativa de que pode forçar 
            sua vontade sobre o mundo." — Emissário Elori
          </blockquote>
        </CardContent>
      </Card>

      {/* Cultos Sombrios */}
      <Card className="bg-card border-border border-l-4 border-l-red-900">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-red-400" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cultos Sombrios & Feitiçaria
            </h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Nos becos de Yndaros e nas ruínas esquecidas de Davokar, reúnem-se os Hereges. Diferente dos colonos que adoram deuses antigos e benevolentes, os cultistas buscam poder nas forças da Corrupção, prestando homenagens macabras a entidades sombrias.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <div className="bg-red-950/20 rounded-md p-3 border border-red-900/30">
              <h4 className="font-semibold text-red-400 text-sm mb-2">Simbaristas e Cultistas</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Muitos nobres ambrianos e feiticeiros enlouquecidos formam cabalas secretas para adorar o extinto <strong className="text-red-300">Império de Symbaroum</strong>. Eles buscam os rituais proibidos de dominação da carne e do espírito, seduzidos pela promessa de imortalidade e poder profano, ignorando o preço pago em Corrupção.
              </p>
            </div>
            <div className="bg-red-950/20 rounded-md p-3 border border-red-900/30">
              <h4 className="font-semibold text-red-400 text-sm mb-2">Adoradores de Abominações</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Outros hereges das margens da sociedade adoram os <strong className="text-red-300">Lordes Negros</strong> de Alberetor ou bestas terríveis como o <strong className="text-red-300">Rei Aranha</strong>. Suas cerimônias bizarras são a principal razão da existência e da ferocidade implacável dos Frades do Crepúsculo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabus */}
      <Card className="bg-card border-border">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Skull className="w-6 h-6 text-red-300" />
            <h3 className="text-xl font-bold text-red-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Tabus da Davokar
            </h3>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Como contrapartida às leis de Prios, as bruxas ditam tabus rigorosos que os clãs bárbaros (e exploradores sábios) devem respeitar. Violar um tabu na floresta pode despertar horrores adormecidos.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-red-950/20 rounded-md p-3 border border-red-900/30 space-y-2">
              <p className="text-sm text-muted-foreground">⚠️ <strong>Evite as encostas do Cume da Cripta</strong>, onde Grabando descansa em sono leve</p>
              <p className="text-sm text-muted-foreground">⚠️ <strong>Não mencione a Andarilha do Água Branca pelo nome</strong>, pois ela ouvirá seu chamado</p>
              <p className="text-sm text-muted-foreground">⚠️ <strong>Nunca devore os frutos do Sino Vermelho</strong>, pois seu néctar implanta a Semente da Corrupção</p>
            </div>
            <div className="bg-red-950/20 rounded-md p-3 border border-red-900/30 space-y-2">
              <p className="text-sm text-muted-foreground">⚠️ <strong>Nunca beba da água cor-de-arco-íris</strong>, pois ela agrava a sede permanentemente</p>
              <p className="text-sm text-muted-foreground">⚠️ <strong>Não ouça a canção de gargantas não vistas</strong>, isso é um aviso e um prenúncio de caça</p>
              <p className="text-sm text-muted-foreground italic mt-2">Os éditos ditados pela Huldra não são dogmas religiosos, são regras essenciais de sobrevivência para manter o frágil pacto de não agressão com a floresta.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cultural Practices */}
      <Card className="bg-card border-border">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-amber-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Expressões Culturais da Fé
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-green-300">Contadores de Histórias Bárbaros</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O povo bárbaro reverencia um bom narrador quase tanto quanto reverencia os espíritos guerreiros. 
                Escolhidos anualmente no <strong className="text-green-200">equinócio de outono em Karvosti</strong>, eles memorizam contos sobre quebra de tabus para garantir que a trágica história de Symbaroum não seja esquecida pela juventude.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-blue-300">Artes e Obras Ambrianas</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As apresentações de bardos e poetas focam fortemente em cantos sacros da Grande Guerra. Obras sobre as vitórias da Rainha e os sacrifícios dos <strong className="text-blue-200">Portadores da Luz</strong> são financiadas pela Igreja para exaltar a fé no Uno e inspirar as Cruzadas pela purificação de Davokar.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
