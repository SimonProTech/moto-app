import React from "react";
import { RouteInterface } from "@/types/app";
import useIcon from "@/app/hooks/useIcon";
import Link from "next/link";
import { changeNawierzchnia } from "@/helpers/changeNawierzchnia";
import { Separator } from "@/components/ui/separator";
import { toHoursAndMinutes } from "@/helpers/toHoursAndMinutes";
import { Milestone, Route, Timer } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TripCardProps {
  route: RouteInterface;
  layout: string;
}

export const surfaceGradients: Record<string, string> = {
  Górska: "from-blue-600 to-blue-400",
  Krajobrazowa: "from-green-600 to-green-400",
  Miejska: "from-orange-500 to-amber-300",
  "Off-road": "from-blue-600 to-amber-400",
  Rekreacyjna: "from-blue-600 to-emerald-400",
  Sportowa: "from-red-600 to-red-400",
  Turystyczna: "from-cyan-500 to-cyan-300",
  Wymagająca: "from-purple-600 to-purple-400",
};

const TripCard = ({ route, layout }: TripCardProps) => {
  const { styleIcons } = useIcon({ className: "w-12 h-12" });
  const normalizedSurface = changeNawierzchnia(route.route_surfaces.surface);
  const { hours, minutes } = toHoursAndMinutes(route.trip_time);
  return (
    <Link
      href={`/trasa/${route.u_id}/${route.trip_name.split(" ").join("-").toLowerCase()}`}
      className="w-full border hover:border-gray-border transition-all duration-300 rounded-lg p-2 relative"
      key={route.id}
    >
      <div
        className={`relative w-full flex gap-2 flex-col items-center ${layout === "grid" ? "md:aspect-video h-[200px]" : "p-6"}  rounded-lg overflow-hidden bg-gradient-to-br ${surfaceGradients[route.moto_ride_types.moto_ride]} flex items-center justify-center`}
      >
        {styleIcons[route.moto_ride_types.moto_ride] && (
          <span className="text-my-white">
            {styleIcons[route.moto_ride_types.moto_ride]}
          </span>
        )}
        <span className="text-my-white select-none">
          {route.moto_ride_types.moto_ride}
        </span>
      </div>
      <div className="absolute right-3 top-3 bg-black/20 backdrop-blur-sm px-3 rounded-full shadow-md">
        <span className="text-xs font-semibold text-white tracking-wide uppercase">
          {normalizedSurface}
        </span>
      </div>
      <div className="absolute left-3 top-3 bg-black/20 backdrop-blur-sm px-3 rounded-full shadow-md">
        <span className="text-xs font-semibold text-white tracking-wide uppercase">
          {route.route_regions.region_name}
        </span>
      </div>
      <div className="space-y-2 mt-3">
        {route.trip_name.length >= 44 ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <h3
                title={route.trip_name}
                className="font-semibold truncate text-gray-900"
              >
                {route.trip_name}
              </h3>
            </TooltipTrigger>
            <TooltipContent
              align="start"
              side="top"
              className="bg-my-white border"
            >
              {route.trip_name}
            </TooltipContent>
          </Tooltip>
        ) : (
          <h3
            title={route.trip_name}
            className="font-semibold truncate text-gray-900"
          >
            {route.trip_name}
          </h3>
        )}
        {route.trip_description.length >= 50 ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-sm truncate text-gray-700">
                {route.trip_description}
              </p>
            </TooltipTrigger>
            <TooltipContent
              align="start"
              side="top"
              className="bg-my-white border"
            >
              {route.trip_description}
            </TooltipContent>
          </Tooltip>
        ) : (
          <p className="text-sm truncate text-gray-700">
            {route.trip_description}
          </p>
        )}
      </div>
      <Separator className="my-3" />
      <div className="flex items-center justify-center gap-4 text-sm text-gray-700 mt-2">
        <div className="flex items-center gap-1 text-gray-600">
          <Route size={16} className="text-gray-500" />
          <span>{route.distance} km</span>
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
      <Separator className="my-3" />
      <div className="flex items-center justify-around gap-4 text-sm text-gray-700 mt-2">
        <div className="flex items-center gap-1 text-gray-600">
          {route.starting_city}
        </div>
        <Milestone size={16} />
        <div className="flex items-center gap-1 text-gray-600">
          {route.ending_city}
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
