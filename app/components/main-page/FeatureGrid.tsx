import {
  MapPinned,
  Bike,
  Users,
  Compass,
  Motorbike,
  Landmark,
  CalendarDays,
  Target,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LANDING_FEATURES = [
  {
    id: 1,
    icon: <MapPinned size={40} />,
    title: "550+ tras w całej Polsce",
    description:
      "Od Bałtyku po Bieszczady — odkrywaj sprawdzone trasy z lokalnymi atrakcjami.",
  },
  {
    id: 2,
    icon: <Motorbike size={40} />,
    title: "Różne typy motocykli",
    description:
      "Sportowe, turystyczne, adventure, klasyki — każda trasa dopasowana do stylu jazdy.",
  },
  {
    id: 3,
    icon: <Users size={40} />,
    title: "Społeczność Motocrew",
    description:
      "Dołącz do ekipy — dziel się trasami, oceniaj i poznawaj innych riderów.",
  },
  {
    id: 4,
    icon: <Compass size={40} />,
    title: "Intuicyjna mapa tras",
    description:
      "Wyszukuj po regionie, typie jazdy, nawierzchni i atrakcjach. Wszystko pod ręką.",
  },
  {
    id: 5,
    icon: <Landmark size={40} />,
    title: "Miejsca na odpoczynek i atrakcje",
    description:
      "Sprawdź gdzie warto się zatrzymać — restauracje, punkty widokowe i lokalne zabytki.",
  },
  {
    id: 6,
    icon: <CalendarDays size={40} />,
    title: "Eventy i spotkania",
    description:
      "Bierz udział w zlotach, rajdach i lokalnych wydarzeniach motocyklowych w całej Polsce.",
  },
  {
    id: 7,
    icon: <Target size={40} />,
    title: "Personalizacja tras",
    description:
      "Filtruj trasy według długości, trudności i stylu jazdy, aby dopasować je do siebie.",
  },
  {
    id: 8,
    icon: <Compass size={40} />,
    title: "Zobacz dostępne trasy",
    description: "Przeglądaj wszystkie trasy.",
    action: {
      label: "Przejdź do mapy",
      href: "/trasy", // lub "/mapa", zależnie od Twojej struktury
    },
  },
];

const FeatureGrid = () => {
  return (
    <section className="pb-20 pt-24">
      <h1 className="text-3xl md:text-4xl leading-snug font-bold text-foreground">
        Dołącz do Motocrew — ekipy, która łączy motocyklistów w całej Polsce.
        Ponad{" "}
        <span className="font-instrument rounded-xl italic text-indigo-600">
          550+
        </span>{" "}
        tras, różne typy moto i wspólna pasja do jazdy, gdzie każdy kilometr to
        nowe doświadczenie i historia do opowiedzenia.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {LANDING_FEATURES.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-xl ${LANDING_FEATURES.length === feature.id ? "border-2 border-gray-300" : ""} last:border-2 p-6 relative border flex flex-col items-start gap-4`}
          >
            <div className="bg-ring p-3 rounded-full">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-md text-gray-700">{feature.description}</p>
            {feature.action ? (
              <Link
                href={feature.action.href}
                aria-label={feature.action.label}
                className="py-2 hover:scale-95 hover:shadow-none translate-y-1 hover:translate-y-2 shadow-sm shadow-ring font-medium transition-all px-6 w-full text-center rounded-xl bg-ring duration-500 text-foreground"
              >
                Przeglądaj trasy
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
