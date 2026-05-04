import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sun, TreePine, Sparkles, Flame, Moon, Skull } from "lucide-react";

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
          Essas diferenças estão na raiz de muitos conflitos entre os povos.
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
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Hoje, Prios é reconhecido como o <strong className="text-amber-200">Doador das Leis</strong>. Quase todos os ambrianos seguem Seus mandamentos, 
            como pregados pelos padres e teurgos da Igreja do Sol. Dizem que Prios está em todos os lugares entre os céus 
            e que os humanos têm a tarefa de cultivar Sua criação.
          </p>
          <div className="bg-amber-950/20 rounded-md p-4 border border-amber-900/30">
            <h4 className="font-semibold text-amber-300 text-sm mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4" /> O Sol Moribundo
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              De acordo com a Igreja, o homem vem negligenciando seu dever há muito tempo, o que significa que 
              <strong className="text-amber-200"> Prios perdeu muito de Sua força</strong>, tanta que está, na verdade, morrendo. 
              Mas ainda há esperança: se os humanos trabalharem duro, extraírem mais colheitas do solo, 
              colherem mais recursos das florestas e montanhas, e colonizarem mais ermos, então Prios ficará forte novamente.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-2">
              Nessa missão, Davokar é vital. A floresta selvagem é considerada o exemplo perfeito do que acontece 
              quando os humanos não fazem o que são obrigados a fazer. <strong className="text-amber-200">Davokar deve ser purificada</strong>, 
              sua potência disciplinada e seus recursos cultivados.
            </p>
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
            os ambrianos adoravam múltiplos deuses que possuem similaridade com as divindades dos clãs bárbaros: 
            a <strong className="text-blue-200">Mãe Terra</strong>, o <strong className="text-blue-200">Desbravador</strong>, o <strong className="text-blue-200">Executor</strong>, entre outros.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Muitos ambrianos que não se conformam com a Igreja de Prios tornaram-se <strong className="text-blue-200">Colonos Livres</strong>, 
            refugiados que aproveitaram a oportunidade de se libertar e formar sociedades próprias, 
            professando lealdade a divindades proibidas. Cerca de vinte assentamentos livres 
            em florestas e montanhas se recusam a se submeter.
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
            Não existe um sistema religioso unificado entre os bárbaros. Cada clã tem suas próprias divindades, 
            espíritos e rituais. Teurgos e mestres ambrianos tentaram categorizar essas crenças sem sucesso. 
            As <strong className="text-green-200">bruxas</strong> são as líderes espirituais dos clãs e conselheiras dos chefes.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <div className="bg-green-950/20 rounded-md p-3 border border-green-900/30">
              <h4 className="font-semibold text-green-300 text-sm mb-2">Divindades Conhecidas</h4>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>• <strong className="text-green-200">Uron</strong> (clã Gaoia): deus serpente, similar à Mãe Terra ambriana</li>
                <li>• <strong className="text-green-200">Arex</strong> (clã Baiaga): lobo de sangue, similar ao Desbravador</li>
                <li>• <strong className="text-green-200">Oroke</strong> (muitos clãs): a aranha, similar ao Executor</li>
                <li>• <strong className="text-green-200">Filha-de-Sangue</strong> (clã Saar-Kahn): bestial e temida</li>
              </ul>
            </div>
            <div className="bg-green-950/20 rounded-md p-3 border border-green-900/30">
              <h4 className="font-semibold text-green-300 text-sm mb-2">Práticas</h4>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>• Adoração de ancestrais e solos sagrados</li>
                <li>• Sessões de orações coletivas até costumes mortais</li>
                <li>• Enoais se deixam picar por aranhas venenosas (mais perto de Oroke)</li>
                <li>• Sob orientação das bruxas, gratidão à floresta que os alimenta</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-950/30 rounded-md p-4 border border-green-900/40 mt-2">
            <h4 className="font-semibold text-green-300 text-sm mb-2">As Bruxas e a Huldra</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A líder das bruxas é a <strong className="text-green-200">Huldra Yeleta</strong>, que reside em Karvosti junto do Alto Chefe. 
              Quatro vezes por ano, nos solstícios e equinócios, ela reúne as <strong className="text-green-200">Guardiãs</strong>, 
              as líderes dos nodos de encantos de cada clã. Os encontros discutem o estado da Davokar e buscam soluções para conflitos. 
              A Huldra tem poder sobre os bárbaros possivelmente maior que o de Korinthia sobre os ambrianos.
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
            Elfos, goblins e ogros, o chamado Povo Antigo, parecem ter uma relação mais tranquila com assuntos espirituais. 
            Em vez de adorar ou rezar para seres divinos, eles parecem satisfeitos em <strong className="text-purple-200">mostrar gratidão aos espíritos</strong> que, 
            de acordo com eles, habitam todos os aspectos da natureza.
          </p>
          <div className="bg-purple-950/20 rounded-md p-4 border border-purple-900/30">
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Agradecem ao <strong className="text-purple-200">rio</strong> por deixá-los atravessar suas águas rápidas incólumes</li>
              <li>• Oferecem gratidão à <strong className="text-purple-200">castanheira</strong> por deixar suas castanhas caírem</li>
              <li>• Sussurram agradecimentos ao <strong className="text-purple-200">veado</strong> por se permitir ser capturado</li>
            </ul>
          </div>
          <blockquote className="border-l-2 border-purple-700/50 pl-4 py-1 text-xs italic text-muted-foreground">
            "É uma presunção vã pensar que o mundo se importa se é adorado ou que ele iria responder a preces; 
            é uma presunção que espelha os desejos do homem de ser adorado e sua expectativa de que pode forçar 
            sua vontade sobre o mundo." — Emissário Elori, questionado sobre suas crenças na corte da Rainha
          </blockquote>
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
            As bruxas ditam tabus rigorosos que os clãs devem respeitar. Os contadores de histórias têm 
            um papel vital em recontar o que pode acontecer se alguém violar esses éditos. 
            Exemplo: os tabus do clã Baiaga:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-red-950/20 rounded-md p-3 border border-red-900/30 space-y-2">
              <p className="text-xs text-muted-foreground">⚠️ <strong>Evite as encostas do Cume da Cripta</strong>, onde Grabando descansa em sono leve e não deve ser perturbado</p>
              <p className="text-xs text-muted-foreground">⚠️ <strong>Não mencione a Andarilha do Água Branca pelo nome</strong>, pois ela ouvirá seu chamado e responderá com força</p>
              <p className="text-xs text-muted-foreground">⚠️ <strong>Nunca devore os frutos do Sino Vermelho</strong>, pois seu néctar é maculado e planta a corrupção</p>
            </div>
            <div className="bg-red-950/20 rounded-md p-3 border border-red-900/30 space-y-2">
              <p className="text-xs text-muted-foreground">⚠️ <strong>Nunca beba da água cor-de-arco-íris</strong>, pois ela agrava a sede e prejudica a saúde</p>
              <p className="text-xs text-muted-foreground">⚠️ <strong>Não ouça a canção de gargantas não vistas</strong>, isso é um aviso, não um chamado</p>
              <p className="text-xs text-muted-foreground italic mt-2">Cada clã tem seus próprios tabus. Violar os éditos ditados pela Huldra traz consequências terríveis.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cultural Practices */}
      <Card className="bg-card border-border">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-amber-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Práticas Culturais
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-green-300">Contadores de Histórias Bárbaros</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                O povo bárbaro valoriza um bom narrador quase tanto quanto um guerreiro talentoso. 
                O Alto Chefe em Karvosti quase sempre tem um ou dois contadores de histórias selecionados. 
                São escolhidos entre participantes do <strong className="text-green-200">desafio anual no equinócio de outono</strong> e têm 
                a responsabilidade de lembrar e recontar eventos históricos.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-blue-300">Artes Ambrianas</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bardos, poetas, atores e dançarinos se apresentam em tavernas, restaurantes e estalagens. 
                Representações da Grande Guerra são comuns. Contos sobre <strong className="text-blue-200">Portadores da Luz e Mártires</strong> são populares. 
                Recentemente, contos da Davokar ganharam os palcos, de caçadores de fortunas, encontros com 
                arquitrolls e câmaras de tesouros. Contadores ambrianos visitam colegas bárbaros para aprender histórias, 
                incluindo poemas da lendária Huldra Aroaleta.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
