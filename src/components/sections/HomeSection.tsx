import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export const HomeSection = () => {
  const versions = [
    { v: "1.19.2", title: "The Wild Update" },
    { v: "1.18.2", title: "Caves & Cliffs II" },
    { v: "1.16.5", title: "Nether Update" },
  ];

  const servers = [
    { name: "Hypixel", address: "mc.hypixel.net", players: "24.531" },
    { name: "Lunar Network", address: "play.lunar.gg", players: "12.874" },
  ];

  const handlePlay = (label: string) => toast(`Iniciando ${label}…`);

  return (
    <div className="space-y-6">
      {/* Game Versions */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold">Game Versions</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground">Gerenciar</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {versions.map((item, i) => (
            <Card key={i} className="glass-card hover-scale">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Minecraft {item.v}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground"><Box className="size-4" /> Vanilla</div>
                <Button variant="secondary" onClick={() => handlePlay(`Minecraft ${item.v}`)}>Play</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Servers */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold">Recent Servers</h3>
          <Button type="button" variant="link" className="text-sm text-muted-foreground p-0 h-auto">Ver todos</Button>
        </div>
        <div className="space-y-3">
          {servers.map((s, i) => (
            <Card key={i} className="glass-card">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.address}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-muted-foreground">{s.players} players</div>
                  <Button size="sm" variant="hero" onClick={() => handlePlay(s.name)}>
                    Join <ChevronRight className="ml-1 size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
