import { surfaceGradients } from "@/app/trasy/components/TripCard";
import useIcon from "@/app/hooks/useIcon";
import { RouteInterface } from "@/types/app";

interface TripCardIconProps {
  route: RouteInterface;
  layout: string;
}

export const TripCardIcon = ({ route, layout }: TripCardIconProps) => {
  const { styleIcons } = useIcon({ className: "w-12 h-12" });
  return (
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
  );
};
