"use client";

import "leaflet/dist/leaflet.css";

import React, { memo, useMemo } from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { MapContainer } from "react-leaflet/MapContainer";
import { useMapIcon } from "@/app/hooks/useMapIcon";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { MotoRideName } from "@/types/app";
import { MapCenterButton } from "@/app/trasa/components/MapCenterButton";
import MapMarker from "@/app/trasa/components/MapMarker";
import { MapPopup } from "@/app/trasa/components/MapPopup";

interface MapWrapperProps {
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
  startCity: string;
  endCity: string;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
}

const MapWrapper = memo(
  ({
    metaLat,
    metaLon,
    startLon,
    startLat,
    endCity,
    startCity,
    moto_ride_types,
  }: MapWrapperProps) => {
    const position: [number, number] = [startLat, startLon];
    const gradient = surfaceGradients[moto_ride_types.moto_ride];

    const startIcon = useMapIcon(
      useMemo(
        () => ({ categoryUrl: "/assets/mapIcons/startIcon.svg", gradient }),
        [gradient],
      ),
    );
    const metaIcon = useMapIcon(
      useMemo(
        () => ({ categoryUrl: "/assets/mapIcons/metaIcon.svg", gradient }),
        [gradient],
      ),
    );

    return (
      <div className="w-full h-[400px] relative overflow-hidden rounded-xl">
        <MapContainer
          className="h-full w-full relative"
          center={position}
          zoom={11}
          scrollWheelZoom={true}
          maxZoom={13}
          minZoom={6}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapMarker
            icon={startIcon.icon}
            metaLat={metaLat}
            metaLon={metaLon}
            startLat={startLat}
            startLon={startLon}
            type="meta"
          />
          <MapMarker
            icon={metaIcon.icon}
            metaLat={metaLat}
            metaLon={metaLon}
            startLat={startLat}
            startLon={startLon}
            type="start"
          />
          <MapCenterButton position={position} />
        </MapContainer>
        <MapPopup
          moto_ride_types={moto_ride_types}
          startLon={startLon}
          startLat={startLat}
          metaLat={metaLat}
          metaLon={metaLon}
          endingCity={endCity}
          startingCity={startCity}
        />
      </div>
    );
  },
);

export default MapWrapper;
