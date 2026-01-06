import { Card } from "@/components/ui/card";

export const MainPageMood = () => {
  const moods = [
    { label: "Widokowe", emoji: "🌄" },
    { label: "Nad jeziorami", emoji: "🌊" },
    { label: "Zabytki", emoji: "🏰" },
    { label: "Spokojne", emoji: "🌿" },
    { label: "Dynamiczne", emoji: "🏍️" },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-6">Odkrywaj według nastroju</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {moods.map((m) => (
          <Card
            key={m.label}
            className="p-6 flex flex-col items-center justify-center hover:bg-accent cursor-pointer transition"
          >
            <div className="text-4xl mb-2">{m.emoji}</div>
            <p className="font-medium">{m.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
