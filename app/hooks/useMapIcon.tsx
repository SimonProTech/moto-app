import L from "leaflet";
import { useEffect, useState } from "react";

interface UseIconProps {
  categoryUrl: string;
  isLoading?: boolean;
}

export const useMapIcon = ({ categoryUrl, isLoading }: UseIconProps) => {
  const [icon, setIcon] = useState<L.Icon | undefined>(undefined);

  useEffect(() => {
    let newIcon: L.Icon;

    if (isLoading) {
      newIcon = L.icon({
        iconUrl: "/assets/mapIcons/startIcon.svg",
        iconSize: [35, 35],
        popupAnchor: [0, -20],
      });
    } else if (categoryUrl === "ownLocation") {
      // Ikona dla własnej lokalizacji
      newIcon = L.icon({
        iconUrl: "/assets/location.svg",
        iconSize: [40, 40],
        popupAnchor: [0, -20],
      });
    } else if (categoryUrl === "myHouse") {
      // Ikona dla domu użytkownika
      newIcon = L.icon({
        iconUrl: "/assets/myHouse.svg",
        iconSize: [40, 40],
        popupAnchor: [0, -20],
      });
    } else if (categoryUrl) {
      newIcon = L.icon({
        iconUrl: categoryUrl,
        iconSize: [35, 35],
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
  }, [categoryUrl, isLoading]);

  return { icon };
};
