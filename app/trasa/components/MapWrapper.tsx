"use client";

import "leaflet/dist/leaflet.css";

import React, { memo, useMemo } from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { useMapIcon } from "@/app/hooks/useMapIcon";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { MotoRideName } from "@/types/app";
import { MapCenterButton } from "@/app/trasa/components/MapCenterButton";
interface MapWrapperProps {
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
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
      <div className="w-full h-[400px] overflow-hidden rounded-xl">
        <MapContainer
          className="h-full w-full   relative"
          center={position}
          zoom={11}
          scrollWheelZoom={false}
          maxZoom={13}
          minZoom={6}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={startIcon.icon} position={[startLat, startLon]}>
            <Popup>
              <div className="p-2 flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏁</span>
                  <h3 className="text-base font-semibold text-gray-900">
                    Punkt startowy
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  To tutaj zaczyna się Twój przejazd. Idealny moment, by złapać
                  rytm i ruszyć.
                </p>
              </div>
            </Popup>
          </Marker>
          <Marker position={[metaLat, metaLon]} icon={metaIcon.icon}>
            <Popup>
              <div className="p-2 flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <h3 className="text-base font-semibold text-gray-900">
                    Meta
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Ostatni punkt na mapie. Droga za Tobą, wspomnienia przed Tobą.
                </p>
              </div>
            </Popup>
          </Marker>
          <MapCenterButton position={position} />
        </MapContainer>
      </div>
    );
  },
);

export default MapWrapper;
