import React, { JSX } from "react";
import {
  Building2,
  Compass,
  Flag,
  Flame,
  Mountain,
  Image,
  Trees,
  LifeBuoy,
} from "lucide-react";

const useIcon = ({ className }: { className: string }) => {
  const styleIcons: Record<string, JSX.Element> = {
    Górska: <Mountain className={className} />,
    Krajobrazowa: <Image className={className} />,
    Miejska: <Building2 className={className} />,
    "Off-road": <LifeBuoy className={className} />,
    Rekreacyjna: <Trees className={className} />,
    Sportowa: <Flag className={className} />,
    Turystyczna: <Compass className={className} />,
    Wymagająca: <Flame className={className} />,
  };
  return {
    styleIcons,
  };
};

export default useIcon;
