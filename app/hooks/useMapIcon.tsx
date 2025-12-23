import L from "leaflet";
import { useEffect, useState } from "react";

interface UseIconProps {
  categoryUrl: string;
  isLoading?: boolean;
  gradient: string;
}

export const useMapIcon = ({
  categoryUrl,
  isLoading,
  gradient,
}: UseIconProps) => {
  const [icon, setIcon] = useState<L.DivIcon | undefined>(undefined);

  useEffect(() => {
    let newIcon: L.DivIcon | L.Icon;

    if (isLoading) {
      newIcon = L.divIcon({
        className: "",
        html: `
          <div class="flex items-center justify-center w-10 h-10 rounded-full shadow-lg ${gradient}">
            <img src="${categoryUrl}" class="w-5 h-5" />
          </div>
        `,
        iconSize: [40, 40],
        popupAnchor: [0, -20],
      });
    } else if (categoryUrl === "ownLocation") {
      newIcon = L.icon({
        iconUrl: "/assets/location.svg",
        iconSize: [40, 40],
        popupAnchor: [0, -20],
      });
    } else if (categoryUrl === "myHouse") {
      newIcon = L.icon({
        iconUrl: "/assets/myHouse.svg",
        iconSize: [40, 40],
        popupAnchor: [0, -20],
      });
    } else if (categoryUrl) {
      newIcon = L.divIcon({
        className: "",
        html: `
          <div class="flex items-center justify-center w-10 h-10 rounded-full text-my-white bg-gradient-to-br shadow-lg ${gradient}">
            <img src="${categoryUrl}" class="w-6 h-6" />
          </div>
        `,
        iconSize: [40, 40],
        popupAnchor: [0, -20],
      });
    } else {
      newIcon = L.icon({
        iconUrl: "/assets/defaultMarker.svg",
        iconSize: [35, 35],
        popupAnchor: [0, -20],
      });
    }

    setIcon(newIcon);
  }, [categoryUrl, isLoading, gradient]);

  return { icon };
};
