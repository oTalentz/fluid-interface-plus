type Props = { title: string; description: string };

export const PlaceholderSection = ({ title, description }: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="glass-card rounded-lg border p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="glass-card rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Dica</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Use o menu lateral para navegar e aproveite as transições suaves. Nós cuidamos para que tudo fique amigável e rápido.
        </p>
      </div>
    </div>
  );
};
