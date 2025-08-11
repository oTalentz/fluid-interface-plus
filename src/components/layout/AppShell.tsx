import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Play, Server, Package, Folder, Trophy, Info, MoreVertical, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import heroBanner from "@/assets/hero-banner.jpg";
import { SEO } from "@/components/SEO";
import { HomeSection } from "@/components/sections/HomeSection";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "play", label: "Play", icon: Play },
  { id: "servers", label: "Servers", icon: Server },
  { id: "mods", label: "Mods", icon: Package },
  { id: "resources", label: "Resource Packs", icon: Folder },
  { id: "achievements", label: "Achievements", icon: Trophy },
] as const;

export type SectionId = typeof sections[number]["id"];

export const AppShell = () => {
  const [active, setActive] = useState<SectionId>("home");

  return (
    <SidebarProvider>
      <SEO title="Launcher UI – animações fluidas e amigável" description="Interface inspirada em launcher de jogos com animações suaves e navegação moderna." />
      <h1 className="sr-only">Launcher UI com animações fluidas</h1>
      <div className="dark">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1">
              <div className="size-7 rounded-md bg-sidebar-ring/20 flex items-center justify-center text-sidebar-ring">LC</div>
              <span className="font-semibold">LunarCraft</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sections.map(({ id, label, icon: Icon }) => (
                    <SidebarMenuItem key={id}>
                      <SidebarMenuButton
                        isActive={active === id}
                        onClick={() => setActive(id)}
                      >
                        <Icon />
                        <span>{label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel className="flex items-center justify-between">
                Ajuda
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Info />
                      <span>Sobre</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <Card className="glass-card">
              <CardContent className="p-3 text-xs text-muted-foreground">
                Versão 1.0 • Memória 4GB/8GB
              </CardContent>
            </Card>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          {/* Top bar */}
          <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-2 px-4">
              <SidebarTrigger />
              <div className="ml-auto flex items-center gap-2">
                <Button variant="secondary" size="sm" className="hover-scale">Atualizações</Button>
                <Button variant="hero" size="sm" className="hover-scale">Entrar</Button>
              </div>
            </div>
          </div>

          {/* Main grid with aside */}
          <div className="mx-auto w-full max-w-screen-2xl px-4 py-6">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px]">
              {/* Main content */}
              <div>
                {/* Hero */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-xl border shadow-elegant"
                >
                  <img src={heroBanner} alt="Plano de fundo do launcher com estilo futurista" className="h-48 w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-between p-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold">Temporada 5 — disponível agora!</h2>
                      <p className="text-sm text-muted-foreground">Novas aventuras, desempenho otimizado e muito mais.</p>
                    </div>
                    <Button variant="hero" className="hover-scale">Saiba mais</Button>
                  </div>
                </motion.div>

                {/* Content with animated section switch */}
                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    {active === "home" && (
                      <motion.div key="home" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                        <HomeSection />
                      </motion.div>
                    )}
                    {active === "play" && (
                      <motion.div key="play" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25 }}>
                        <PlaceholderSection title="Play" description="Escolha o perfil e inicie sua sessão com um clique." />
                      </motion.div>
                    )}
                    {active === "servers" && (
                      <motion.div key="servers" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                        <PlaceholderSection title="Servers" description="Navegue pelos seus servidores favoritos e junte-se rapidamente." />
                      </motion.div>
                    )}
                    {active === "mods" && (
                      <motion.div key="mods" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                        <PlaceholderSection title="Mods" description="Gerencie e atualize seus mods com facilidade." />
                      </motion.div>
                    )}
                    {active === "resources" && (
                      <motion.div key="resources" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                        <PlaceholderSection title="Resource Packs" description="Aplique pacotes para personalizar texturas e sons." />
                      </motion.div>
                    )}
                    {active === "achievements" && (
                      <motion.div key="achievements" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                        <PlaceholderSection title="Achievements" description="Veja seu progresso e conquistas mais recentes." />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Aside */}
              <aside className="hidden md:block">
                <div className="sticky top-20">
                  <div className="flex h-12 items-center justify-between px-1">
                    <div className="text-sm font-medium">Amigos</div>
                    <Button size="sm" variant="secondary"><UserPlus className="mr-1 size-4" />Adicionar</Button>
                  </div>
                  <div className="space-y-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <Card key={i} className="glass-card">
                        <CardContent className="flex items-center justify-between p-3">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-sidebar-ring/30" />
                            <div>
                              <div className="text-sm font-medium">Jogador{i + 1}</div>
                              <div className="text-xs text-muted-foreground">Online</div>
                            </div>
                          </div>
                          <MoreVertical className="size-4 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};
