"use client";

import "leaflet/dist/leaflet.css";

import React from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { useMapIcon } from "@/app/hooks/useMapIcon";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { MotoRideName } from "@/types/app";

interface MapWrapperProps {
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
}

const MapWrapper = ({
  metaLat,
  metaLon,
  startLon,
  startLat,
  moto_ride_types,
}: MapWrapperProps) => {
  const gradient = surfaceGradients[moto_ride_types.moto_ride];

  const startIcon = useMapIcon({
    categoryUrl: "/assets/mapIcons/startIcon.svg",
    gradient,
  });
  const metaIcon = useMapIcon({
    categoryUrl: "/assets/mapIcons/metaIcon.svg",
    gradient,
  });

  return (
    <MapContainer
      className="h-full w-full"
      center={[+startLat, +startLon]}
      zoom={10}
      scrollWheelZoom={false}
      maxZoom={12}
      minZoom={5}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={startIcon.icon} position={[startLat, startLon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[metaLat, metaLon]} icon={metaIcon.icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWrapper;
