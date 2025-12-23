import React from "react";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { styleIconsDetailPage } from "@/app/trasy/components/FilterStyleIcons";
import { MotoRideName } from "@/types/app";

interface TripDetailsTopHeaderProps {
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
}

const TripDetailsTopHeader = ({
  moto_ride_types,
}: TripDetailsTopHeaderProps) => {
  return (
    <section className="mt-8">
      <div
        className={`relative w-full p-10 flex gap-2 flex-col items-center rounded-lg overflow-hidden bg-gradient-to-br ${surfaceGradients[moto_ride_types.moto_ride]} flex items-center justify-center`}
      >
        {styleIconsDetailPage[moto_ride_types.moto_ride] && (
          <span className="text-my-white">
            {styleIconsDetailPage[moto_ride_types.moto_ride]}
          </span>
        )}
        <span className="text-my-white text-xl">
          {moto_ride_types.moto_ride}
        </span>
      </div>
    </section>
  );
};

export default TripDetailsTopHeader;
