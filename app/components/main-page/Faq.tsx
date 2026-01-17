"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { BadgeQuestionMark, Mail } from "lucide-react";
import Link from "next/link";

type Category =
  | "Ogólne"
  | "Trasy i funkcje"
  | "Mapy i integracje"
  | "Bezpieczeństwo";

interface FAQItem {
  q: string;
  a: string;
}

const categories: Category[] = [
  "Ogólne",
  "Trasy i funkcje",
  "Mapy i integracje",
  "Bezpieczeństwo",
];

const questions: Record<Category, FAQItem[]> = {
  Ogólne: [
    {
      q: "Czym właściwie jest ta platforma?",
      a: "To miejsce, w którym znajdziesz najlepsze motocyklowe w Polsce — dopracowane, opisane i gotowe do jazdy.",
    },
    {
      q: "Czy trasy są darmowe?",
      a: "Tak. Przeglądanie tras i korzystanie z map jest w pełni darmowe.",
    },
    {
      q: "Czy platforma działa na telefonie?",
      a: "Tak — strona jest w pełni responsywna i działa świetnie na smartfonach.",
    },
    {
      q: "Czy muszę się rejestrować?",
      a: "Nie — dostęp do tras jest otwarty. Rejestracja będzie potrzebna tylko przy dodawaniu własnych tras (w przyszłości).",
    },
    {
      q: "Czy są jakieś ukryte opłaty?",
      a: "Nie. Platforma jest darmowa i nie zawiera żadnych ukrytych kosztów.",
    },
  ],
  "Trasy i funkcje": [
    {
      q: "Skąd pochodzą trasy?",
      a: "Każda trasa jest zweryfikowana, żebyś wiedział dokładnie, czego się spodziewać.",
    },
    {
      q: "Czy znajdę tu trasy dla początkujących?",
      a: "Tak — trasy są podzielone na poziomy trudności, więc każdy znajdzie coś dla siebie.",
    },
    {
      q: "Czy mogę dodać własną trasę?",
      a: "Jeszcze nie, ale ta funkcja jest w planach.",
    },
    {
      q: "Czy trasy mają punkty pośrednie?",
      a: "Tak — każda trasa zawiera punkty widokowe, atrakcje i miejsca postoju.",
    },
    {
      q: "Czy trasy mają realne czasy przejazdu?",
      a: "Tak — czas przejazdu jest szacowany na podstawie rzeczywistej jazdy i warunków drogowych*.",
    },
  ],
  "Mapy i integracje": [
    {
      q: "Czy mogę otworzyć trasę w Google Maps lub Waze?",
      a: "Tak — każda trasa ma gotowe linki do Google Maps, Apple Maps i Waze.",
    },
    {
      q: "Czy trasy mają integrację z nawigacją?",
      a: "Tak — możesz jednym kliknięciem otworzyć trasę w wybranej aplikacji nawigacyjnej.",
    },
    {
      q: "Czy mogę pobrać trasę jako GPX?",
      a: "Na razie nie, ale planujemy dodać eksport GPX w przyszłości.",
    },
    {
      q: "Czy mapa pokazuje atrakcje po drodze?",
      a: "Tak — na mapie zaznaczone są punkty widokowe, zabytki i miejsca warte zatrzymania.",
    },
  ],
  Bezpieczeństwo: [
    {
      q: "Czy moje dane są bezpieczne?",
      a: "Tak — nie zbieramy danych osobowych, a cała komunikacja odbywa się przez szyfrowane połączenia.",
    },
    {
      q: "Czy trasy są aktualizowane?",
      a: "Tak — stale aktualizuję trasę, usuwam błędy i dodajemy nowe rzeczy.",
    },
    {
      q: "Czy mogę zgłosić błąd w trasie?",
      a: "Tak — każda trasa ma opcję zgłoszenia błędu lub sugestii.",
    },
  ],
};

export function FAQ() {
  const [activeCategory, setActiveCategory] =
    React.useState<Category>("Ogólne");

  return (
    <section className="mt-24 space-y-12 mb-24">
      <BadgeQuestionMark size={36} className="mx-auto text-indigo-600" />
      <h2 className="text-3xl font-bold text-foreground text-center">
        Najczęstsze pytania
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Zebrałem tutaj odpowiedzi na pytania, które najczęściej pojawiają się
        podczas korzystania z mojej platformy. Dzięki temu szybciej odnajdziesz
        się w funkcjach i łatwiej zaplanujesz swoją kolejną motocyklową trasę.
      </p>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "w-full cursor-pointer text-left px-4 py-2 rounded-md transition",
                    activeCategory === cat
                      ? "bg-indigo-500 text-my-white font-normal shadow-md"
                      : "text-gray-600 hover:bg-muted/50",
                  )}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Questions */}
        <div className="md:w-3/4">
          <Accordion
            type="single"
            key={activeCategory}
            collapsible
            className="space-y-4"
          >
            {questions[activeCategory].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border/40 rounded-xl px-4"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-[15px] pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <section className="mt-20 bg-muted/50 rounded-xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Masz jeszcze jakieś pytania?
          </h3>
          <p className="text-muted-foreground max-w-md">
            Jeśli czegoś brakuje albo chcesz zapytać o trasę, funkcję lub mapę —
            odezwij się. Chętnie pomogę.
          </p>
        </div>

        <Link
          href="/kontakt"
          className="relative px-6 py-3 hover:w-[240px] w-[209px]  flex items-center gap-4 rounded-2xl transition-all bg-indigo-500 text-primary-foreground font-medium whitespace-nowrap group"
        >
          Skontaktuj się ze mną
          <Mail
            className="
      absolute right-4
      top-1/2 -translate-y-1/2
      opacity-0 translate-x-3
      transition-all duration-300 ease-out
      group-hover:scale-105
      group-hover:opacity-100 group-hover:translate-x-0
    "
          />
        </Link>
      </section>
    </section>
  );
}
