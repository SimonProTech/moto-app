"use client";

import dynamic from "next/dynamic";
import MapWrapperSkeleton from "@/app/trasa/components/MapWrapperSkeleton";
import React from "react";
import { MotoRideName } from "@/types/app";
import { LocateFixed } from "lucide-react";
import { Button } from "@/components/ui/button";
const TripDetailsMap = dynamic(
  () => import("@/app/trasa/components/MapWrapper"),
  {
    ssr: false,
    loading: () => <MapWrapperSkeleton />,
  },
);

interface TripDetailsLocationInfoMapWrapperProps {
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
}

const TripDetailsLocationInfoMapWrapper = ({
  metaLat,
  metaLon,
  startLon,
  startLat,
  moto_ride_types,
}: TripDetailsLocationInfoMapWrapperProps) => {
  return (
    <div className="w-full col-span-2 border relative border-gray-border rounded-xl mb-10">
      <TripDetailsMap
        startLon={startLon}
        metaLon={metaLon}
        metaLat={metaLat}
        startLat={startLat}
        moto_ride_types={moto_ride_types}
      />
    </div>
  );
};

export default TripDetailsLocationInfoMapWrapper;
