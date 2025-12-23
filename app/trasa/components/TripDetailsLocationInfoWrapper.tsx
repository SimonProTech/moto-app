import { MotoRideName } from "@/types/app";
import TripDetailsLocationSection from "@/app/trasa/components/TripDetailsLocationSection";
import React from "react";
import TripDetailsLocationInfoMapWrapper from "@/app/trasa/components/TripDetailsLocationInfoMapWrapper";

interface TripDetailsLocationInfoProps {
  startCity?: string | null;
  endCity?: string | null;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
}

export const TripDetailsLocationInfoWrapper = ({
  startCity,
  endCity,
  moto_ride_types,
  startLat,
  startLon,
  metaLat,
  metaLon,
}: TripDetailsLocationInfoProps) => {
  return (
    <section className="mt-10 mb-14">
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        Lokalizacja trasy
      </h2>

      <div className="grid grid-cols-3 max-h-[400px] gap-6">
        <TripDetailsLocationInfoMapWrapper
          startLat={startLat}
          metaLat={metaLat}
          metaLon={metaLon}
          startLon={startLon}
          moto_ride_types={moto_ride_types}
        />

        <TripDetailsLocationSection
          moto_ride_types={moto_ride_types}
          endCity={endCity}
          startCity={startCity}
        />
      </div>
    </section>
  );
};
