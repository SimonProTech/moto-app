import { MotoRideName } from "@/types/app";

export const MOTO_RIDE_DESCRIPTIONS: Record<
  MotoRideName,
  { title: string; text: string }
> = {
  Górska: {
    title: "Górskie serpentyny",
    text: "Wąskie zakręty, zmienne wysokości i widoki, które robią robotę.",
  },
  Krajobrazowa: {
    title: "Panoramiczne przejazdy",
    text: "Szerokie przestrzenie, spokojne tempo i krajobrazy, które same prowadzą wzrok.",
  },
  Miejska: {
    title: "Miejski rytm jazdy",
    text: "Dynamiczne ulice, charakterystyczne miejsca i energia miasta na wyciągnięcie ręki.",
  },
  "Off-road": {
    title: "Dzika przygoda",
    text: "Szutry, lasy, błoto i pełna swoboda poza utartymi szlakami.",
  },
  Rekreacyjna: {
    title: "Lekki, przyjemny cruising",
    text: "Spokojna jazda, dobre nawierzchnie i trasa idealna na moto‑relaks.",
  },
  Sportowa: {
    title: "Dynamiczne tempo",
    text: "Szybkie łuki, precyzyjne prowadzenie i trasa dla tych, którzy lubią czuć asfalt.",
  },
  Turystyczna: {
    title: "Podróż z klimatem",
    text: "Zwiedzanie, lokalne atrakcje i trasa, która sama opowiada historię.",
  },
  Wymagająca: {
    title: "Trasa dla ambitnych",
    text: "Techniczne odcinki, trudniejsze warunki i satysfakcja po każdym kilometrze.",
  },
};
