import { SURFACES } from "@/types/app";

export const changeNawierzchnia = (surfaces: SURFACES) => {
  switch (surfaces.trim()) {
    case SURFACES.Asfalt:
      return "Asfalt";
    case SURFACES["Asfalt+Górska"]:
      return "Mieszana";
    case SURFACES.Górska:
      return "Górska";
    case SURFACES["Asfalt+Mieszane"]:
      return "Mieszana";
    case SURFACES["Mieszana"]:
      return "Mieszana";
    default:
      return "Nieznana nawierzchnia";
  }
};
