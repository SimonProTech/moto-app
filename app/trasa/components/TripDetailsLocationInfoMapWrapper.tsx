"use client";

import dynamic from "next/dynamic";
import MapWrapperSkeleton from "@/app/trasa/components/MapWrapperSkeleton";
import React from "react";
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
}

const TripDetailsLocationInfoMapWrapper = ({
  metaLat,
  metaLon,
  startLon,
  startLat,
}: TripDetailsLocationInfoMapWrapperProps) => {
  return (
    <div className="w-full col-span-2 h-[400px] border border-gray-border rounded-xl overflow-hidden mb-10">
      <TripDetailsMap
        startLon={startLon}
        metaLon={metaLon}
        metaLat={metaLat}
        startLat={startLat}
      />
    </div>
  );
};

export default TripDetailsLocationInfoMapWrapper;
