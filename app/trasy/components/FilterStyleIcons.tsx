import {
  Mountain,
  Building2,
  Trees,
  Compass,
  Flag,
  Flame,
  Image,
  LifeBuoy,
} from "lucide-react";
import { JSX } from "react";

export const styleIcons: Record<string, JSX.Element> = {
  Górska: <Mountain className="w-4 h-4" />,
  Krajobrazowa: <Image className="w-4 h-4" />,
  Miejska: <Building2 className="w-4 h-4" />,
  "Off-road": <LifeBuoy className="w-4 h-4" />,
  Rekreacyjna: <Trees className="w-4 h-4" />,
  Sportowa: <Flag className="w-4 h-4" />,
  Turystyczna: <Compass className="w-4 h-4" />,
  Wymagająca: <Flame className="w-4 h-4" />,
};

export const styleIconsDetailPage: Record<string, JSX.Element> = {
  Górska: <Mountain className="w-14 h-14" />,
  Krajobrazowa: <Image className="w-14 h-14" />,
  Miejska: <Building2 className="w-14 h-14" />,
  "Off-road": <LifeBuoy className="w-14 h-14" />,
  Rekreacyjna: <Trees className="w-14 h-14" />,
  Sportowa: <Flag className="w-14 h-14" />,
  Turystyczna: <Compass className="w-14 h-14" />,
  Wymagająca: <Flame className="w-14 h-14" />,
};
