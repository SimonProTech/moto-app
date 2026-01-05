import { Route, Timer } from "lucide-react";
import { toHoursAndMinutes } from "@/helpers/toHoursAndMinutes";

interface TripCardMoreDetailsProps {
  distance_osrm: number;
  duration_osrm: number;
}
export const TripCardMoreDetails = ({
  duration_osrm,
  distance_osrm,
}: TripCardMoreDetailsProps) => {
  const { hours, minutes } = toHoursAndMinutes(Math.round(duration_osrm));

  return (
    <div className="flex items-center justify-center gap-4 text-sm text-gray-700 mt-2">
      <div className="flex items-center gap-1 text-gray-600">
        <Route size={16} className="text-gray-500" />
        <span>{Math.round(distance_osrm)} km</span>
      </div>
      |
      <div className="flex items-center gap-1 text-gray-600">
        <Timer size={16} className="text-gray-500" />
        <span>
          {hours === 0 ? (
            <>{minutes} min</>
          ) : (
            <>
              {hours}.{minutes.toString().padStart(2, "0")}h
            </>
          )}
        </span>
      </div>
    </div>
  );
};
