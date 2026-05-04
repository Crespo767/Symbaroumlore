import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sword,
  Trees,
  Crown,
  Skull,
  BookOpen,
  Map,
  Users,
  Sparkles,
  ChevronDown,
  Shield,
  Wand2,
  Package,
  UserPlus,
} from "lucide-react";
import TimelineSection from "@/components/TimelineSection";
import DavokarSection from "@/components/DavokarSection";
import FactionsSection from "@/components/FactionsSection";
import RacesSection from "@/components/RacesSection";
import GameSystemSection from "@/components/GameSystemSection";
import LocationsSection from "@/components/LocationsSection";
import CorruptionSection from "@/components/CorruptionSection";
import AbilitiesSection from "@/components/AbilitiesSection";
import PowersSection from "@/components/PowersSection";
import EquipmentSection from "@/components/EquipmentSection";
import CharacterCreationSection from "@/components/CharacterCreationSection";
import SpiritualitySection from "@/components/SpiritualitySection";
import ImageGallerySection from "@/components/ImageGallerySection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("historia");

  const sections = [
    { id: "historia", label: "História", icon: BookOpen },
    { id: "geografia", label: "Davokar", icon: Trees },
    { id: "locais", label: "Locais", icon: Map },
    { id: "faccoes", label: "Facções", icon: Crown },
    { id: "espiritualidade", label: "Crenças", icon: Sparkles },
    { id: "racas", label: "Raças", icon: Users },
    { id: "corrupcao", label: "Corrupção", icon: Skull },
    { id: "sistema", label: "Sistema", icon: Sword },
    // { id: "habilidades", label: "Habilidades", icon: Shield },
    // { id: "poderes", label: "Poderes", icon: Wand2 },
    // { id: "equipamentos", label: "Equipamentos", icon: Package },
    // { id: "criacao", label: "Criar Personagem", icon: UserPlus },
    // { id: "galeria", label: "Galeria Visual", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663622705168/KdzVCAjsftQjBG3jYgoaKD/hero-davokar-CkR6HAVXApT9TwTTbiYHja.webp"
            alt="Floresta Davokar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 rounded-full bg-amber-400/60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl text-amber-100 mb-6"
            style={{ fontFamily: "'Uncial Antiqua', cursive" }}
          >
            Symbaroum
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl"
          >
            <blockquote className="text-sm md:text-base lg:text-lg text-amber-200/90 italic leading-relaxed border-l-2 border-amber-500/50 pl-6 text-left" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "Como um couraçado em uma tempestade de relâmpagos, ela cortou as ondas de escuridão e terror... 
              Eu fui um dos poucos que ficaram maravilhados quando a primeira luz da aurora banhou sua armadura, 
              transformando nossa jovem Rainha em um sol cavalgando e empunhando uma espada — Korinthia Ruína da Noite, nossa soberana. 
              [...] Porque nós somos o povo de Korinthia Ruína da Noite e jamais seremos derrotados!"
            </blockquote>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-xs text-amber-300/60 max-w-lg uppercase tracking-widest font-semibold"
          >
            A Terra Prometida
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8"
          >
            <ChevronDown className="w-8 h-8 text-amber-400/60 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container">
          <ScrollArea className="w-full">
            <div className="flex gap-1 py-3 w-max mx-auto md:w-full md:justify-center">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === section.id
                        ? "bg-amber-900/40 text-amber-200 border border-amber-700/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </nav>

      {/* Content */}
      <main className="container py-8 md:py-12">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === "historia" && <TimelineSection />}
          {activeSection === "geografia" && <DavokarSection />}
          {activeSection === "locais" && <LocationsSection />}
          {activeSection === "faccoes" && <FactionsSection />}
          {activeSection === "espiritualidade" && <SpiritualitySection />}
          {activeSection === "racas" && <RacesSection />}
          {activeSection === "corrupcao" && <CorruptionSection />}
          {activeSection === "sistema" && <GameSystemSection />}
          {/* {activeSection === "habilidades" && <AbilitiesSection />}
          {activeSection === "poderes" && <PowersSection />}
          {activeSection === "equipamentos" && <EquipmentSection />}
          {activeSection === "criacao" && <CharacterCreationSection />}
          {activeSection === "galeria" && <ImageGallerySection />} */}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 mt-12">
        <div className="container text-center text-muted-foreground text-sm space-y-6">
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-base italic text-amber-200/60">
            "Nas ruínas de Symbaroum, uma visão em meus sonhos revelou um poço, um caldeirão e um sumidouro."
          </p>

          <div className="max-w-2xl mx-auto space-y-3">
            <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-4">
              <p className="text-sm text-amber-200/70 font-medium mb-2">⚠️ Material de Fã, Não Oficial</p>
              <p className="text-sm leading-relaxed">
                Este compêndio é um projeto de fã sem fins lucrativos, criado apenas como ferramenta de referência para jogadores. 
                Não substitui os livros oficiais e não contém informações exclusivas do Mestre de Jogo.
              </p>
            </div>

            <p className="text-sm leading-relaxed">
              <strong className="text-foreground/80">Symbaroum™</strong> é um jogo de RPG criado por{" "}
              <strong className="text-foreground/80">Mattias Johnsson Haake</strong> e{" "}
              <strong className="text-foreground/80">Mattias Lilja</strong>.
              Todos os direitos reservados a{" "}
              <strong className="text-foreground/80">Free League Publishing (Fria Ligan AB)</strong>.
            </p>
            <p className="text-sm leading-relaxed">
              Symbaroum é publicado no Brasil pela{" "}
              <strong className="text-foreground/80">Tria Editora</strong>, que oficializou parceria com a Free League Publishing 
              em 2023, sendo responsável pelos lançamentos do livro básico, guias avançados, bestiários e suplementos de cenário em português.
            </p>

            <a
              href="https://triaeditora.com.br/loja/symbaroum/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-900/40 border border-amber-700/50 text-amber-200 text-sm font-medium hover:bg-amber-900/60 transition-all duration-300"
            >
              🛒 Compre os livros oficiais na Tria Editora
            </a>

            <p className="text-xs text-muted-foreground/60 mt-4">
              Baseado nos livros oficiais publicados pela Free League Publishing e Tria Editora.
              <br />
              Nenhum conteúdo, arte ou texto dos livros oficiais foi reproduzido integralmente. 
              Todo conteúdo aqui é resumo e interpretação para fins educacionais.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
