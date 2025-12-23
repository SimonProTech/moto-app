"use client";

import "leaflet/dist/leaflet.css";

import React from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { useMapIcon } from "@/app/hooks/useMapIcon";

interface MapWrapperProps {
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
}

const MapWrapper = ({
  metaLat,
  metaLon,
  startLon,
  startLat,
}: MapWrapperProps) => {
  const positions = ["52.2297", "21.0122"];
  const startIcon = useMapIcon({
    categoryUrl: "/assets/mapIcons/startIcon.svg",
  });
  const metaIcon = useMapIcon({
    categoryUrl: "/assets/mapIcons/metaIcon.svg",
  });
  return (
    <MapContainer
      className="h-full w-full"
      center={[+positions[0], +positions[1]]}
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
