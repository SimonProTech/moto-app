import { Button } from "@/components/ui/button";
import { LocateFixed } from "lucide-react";
import React, { memo } from "react";
import { useMap } from "react-leaflet";

interface MapCenterButtonProps {
  position: [number, number];
}

export const MapCenterButton = memo(({ position }: MapCenterButtonProps) => {
  const map = useMap();
  const centerMeOnMap = () => map.flyTo(position);
  return (
    <Button
      onClick={centerMeOnMap}
      variant="fake-btn"
      className="absolute border border-gray-border hover:shadow-2xl cursor-pointer [&_svg:not([class*='size-'])]:size-5 left-2 bottom-2 z-[999] bg-my-white"
    >
      <LocateFixed />
    </Button>
  );
});
