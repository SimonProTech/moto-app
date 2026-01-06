import React from "react";
import { fetchSimilarRoutes } from "@/helpers/fetchers/fetchSimilarRoutes";
import { CHOOSE_LVL, REGIONS } from "@/types/app";
import TripSimilarCarousel from "@/app/trasa/components/TripSimilarCarousel";
import { shuffleArray } from "@/helpers/shuffleArray";

interface TripSimilarPlacesProps {
  region: REGIONS;
  diff: CHOOSE_LVL;
}

const TripSimilarPlaces = async ({ diff, region }: TripSimilarPlacesProps) => {
  const data = await fetchSimilarRoutes({
    difficulty: diff.toString(),
    region_name: region.toString(),
  });

  if (!data || data.length === 0) return null;

  const today = new Date();
  const seed = Number(
    `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`,
  );

  const routes = shuffleArray(data, seed).slice(0, 8);

  return (
    <section className="mt-20 mb-10 relative">
      <div className="relative pb-20 w-full">
        <div className="absolute inset-0 border-t border-gray-300 border-dashed" />
      </div>
      <h2 className="text-xl select-none font-bold mb-6 text-foreground">
        Sprawdź podobne trasy
      </h2>
      <TripSimilarCarousel routes={routes} />
    </section>
  );
};

export default TripSimilarPlaces;
