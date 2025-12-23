import React from "react";
import { BarChart, ChartSpline, Route, Timer, TrafficCone } from "lucide-react";
import { toHoursAndMinutes } from "@/helpers/toHoursAndMinutes";
import { ROUTE_DIFFICULTIES, ROUTE_SURFACE } from "@/types/app";
import { changeNawierzchnia } from "@/helpers/changeNawierzchnia";

interface TripDetailsMiddleSectionProps {
  duration: number;
  distance: number;
  difficultyLevel: ROUTE_DIFFICULTIES;
  surface: ROUTE_SURFACE;
}

const TripDetailsMiddleSection = ({
  duration,
  distance,
  difficultyLevel,
  surface,
}: TripDetailsMiddleSectionProps) => {
  const { hours, minutes } = toHoursAndMinutes(duration);
  const normalizedSurface = changeNawierzchnia(surface.surface);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-20 justify-around gap-5 lg:gap-10 items-center w-full">
      <div className="flex justify-center font-semibold items-center gap-3 special-detail_page-shadow py-6 rounded-full text-center w-full">
        <Timer className="text-orange-500" size={30} />
        {hours === 0 ? (
          <>{minutes} min</>
        ) : (
          <>
            {hours}.{minutes.toString().padStart(2, "0")}h
          </>
        )}
      </div>
      <div className="flex items-center font-semibold justify-center gap-3 special-detail_page-shadow py-6 rounded-full text-center w-full">
        <Route className="text-purple-700" size={30} />
        <span>{distance} km</span>
      </div>
      <div className="flex items-center justify-center font-semibold gap-3 special-detail_page-shadow py-6 rounded-full text-center w-full">
        <ChartSpline className="text-green-600" size={30} />
        <span>{difficultyLevel.difficulty_level}</span>
      </div>
      <div className="flex items-center justify-center gap-3 font-semibold special-detail_page-shadow py-6 rounded-full text-center w-full">
        <TrafficCone size={30} />
        <span>{normalizedSurface}</span>
      </div>
    </div>
  );
};

export default TripDetailsMiddleSection;
