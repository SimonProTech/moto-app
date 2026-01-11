import { DivIcon, LatLng } from "leaflet";
import React from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import { useOpenPopupForMap } from "@/app/store/openPopupForMap";

interface MapStarterMarkerProps {
  metaLat: number;
  metaLon: number;
  startLat: number;
  startLon: number;
  icon: DivIcon | undefined;
  type: "start" | "meta";
}

const MapMarker = ({
  metaLat,
  metaLon,
  icon,
  startLon,
  startLat,
  type,
}: MapStarterMarkerProps) => {
  const map = useMap();
  const position: LatLng | [number, number] =
    type === "meta" ? [metaLat, metaLon] : [startLat, startLon];

  const { setPopupOpen, setPopupType } = useOpenPopupForMap();

  const openPopup = () => {
    setPopupOpen({ open: true });
    setPopupType({ type });
  };

  return (
    <Marker
      eventHandlers={{
        click: () => {
          openPopup();
          map.flyTo(position, 11);
        },
      }}
      position={position}
      icon={icon}
    />
  );
};

export default MapMarker;
