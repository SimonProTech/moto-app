import React from "react";
import { ChartSpline, Route, Timer, TrafficCone } from "lucide-react";
import { toHoursAndMinutes } from "@/helpers/toHoursAndMinutes";
import { ROUTE_DIFFICULTIES, ROUTE_SURFACE } from "@/types/app";
import { changeNawierzchnia } from "@/helpers/changeNawierzchnia";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { calculateTime } from "@/helpers/calculateTime";

interface TripDetailsMiddleSectionProps {
  duration: number;
  db_distance: number;
  distance: {
    distance_osrm: number;
    duration_osrm: number;
  };
  difficultyLevel: ROUTE_DIFFICULTIES;
  surface: ROUTE_SURFACE;
}

const TripDetailsMiddleSection = ({
  distance,
  difficultyLevel,
  surface,
  db_distance,
}: TripDetailsMiddleSectionProps) => {
  const normalizedSurface = changeNawierzchnia(surface.surface);
  const finalDistance =
    distance.distance_osrm !== 0
      ? Math.round(distance.distance_osrm)
      : db_distance;
  const finalTime =
    distance?.duration_osrm !== 0
      ? Math.round(distance?.duration_osrm)
      : calculateTime(80, finalDistance);

  const { hours, minutes } = toHoursAndMinutes(finalTime);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-20 justify-around gap-5 lg:gap-10 items-center w-full">
      <div className="flex justify-center font-semibold items-center shadow-lg border-1 border-gray-200 rounded-full text-center w-full">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center py-6 rounded-full gap-3 w-full h-full justify-center">
              <Timer className="text-orange-500" size={30} />
              {hours === 0 ? (
                <>{minutes} min</>
              ) : (
                <>
                  {hours}.{minutes.toString().padStart(2, "0")}h
                </>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent
            className={cn("bg-gray-100 text-sm [&_svg]:bg-gray-100")}
          >
            Szacowany czas — zależy od stylu jazdy.
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center font-semibold justify-center shadow-lg border-1 border-gray-200 rounded-full text-center w-full">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center py-6 rounded-full gap-3 w-full h-full justify-center">
              <Route className="text-purple-700" size={30} />
              <span>{finalDistance} km</span>
            </div>
          </TooltipTrigger>
          <TooltipContent
            className={cn("bg-gray-100 text-sm [&_svg]:bg-gray-100")}
          >
            Wartości orientacyjne — mogą się różnić w zależności od trasy.
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex items-center justify-center font-semibold gap-3 shadow-lg  border-1 border-gray-200 py-6 rounded-full text-center w-full">
        <ChartSpline className="text-green-600" size={30} />
        <span>{difficultyLevel.difficulty_level}</span>
      </div>
      <div className="flex items-center justify-center gap-3 font-semibold shadow-lg border-1 border-gray-200 py-6 rounded-full text-center w-full">
        <TrafficCone size={30} />
        <span>{normalizedSurface}</span>
      </div>
    </div>
  );
};

export default TripDetailsMiddleSection;
