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
            <Popup className="custom-popup">
              <div className="flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 rounded-full bg-indigo-500 text-my-white text-sm font-medium shadow-sm">
                    START
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-base mb-3 font-semibold text-gray-900">
                      {startCity}
                    </h2>
                    <span className="text-xs text-gray-500 tracking-wide">
                      Punkt rozpoczęcia trasy
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200"></div>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  To tutaj zaczyna się Twoja podróż. Złap spokojny oddech, ustaw
                  motocykl i pozwól, by trasa poprowadziła Cię dalej. Każdy
                  start ma swój klimat — ten jest Twój.
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span className="text-sm text-indigo-600 font-medium">
                    Wszystko gotowe — LWG 👋🏻
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
          <Marker position={[metaLat, metaLon]} icon={metaIcon.icon}>
            <Popup className="custom-popup">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 rounded-full bg-indigo-500 text-my-white text-sm font-medium shadow-sm">
                    META
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-base mb-3 font-semibold text-gray-900">
                      {startCity}
                    </h2>
                    <span className="text-xs text-gray-500 tracking-wide">
                      Punkt zakończenia trasy
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200"></div>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  Dotarłeś do końca trasy. To moment, by złapać oddech, spojrzeć
                  wstecz na przejechane kilometry i poczuć satysfakcję z dobrze
                  zakończonej przygody. Każda meta to małe zwycięstwo.
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-sm text-emerald-600 font-medium">
                    Gratulacje — trasa ukończona
                  </span>
                </div>
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
