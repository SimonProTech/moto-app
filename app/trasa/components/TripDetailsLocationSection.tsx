import { MapPin, Flag } from "lucide-react";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { MotoRideName } from "@/types/app";
import { MotoRideDescription } from "@/app/trasa/components/TripMotoRideDescription";

interface TripDetailsLocationSectionProps {
  startCity?: string | null;
  endCity?: string | null;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
}

const TripDetailsLocationSection = ({
  startCity,
  endCity,
  moto_ride_types,
}: TripDetailsLocationSectionProps) => {
  const gradient = surfaceGradients[moto_ride_types.moto_ride];
  return (
    <div className="p-6 rounded-xl max-h-[400px] bg-white">
      {/* Timeline wrapper */}
      <div className="relative pl-10 h-full  flex flex-col justify-between space-y-10">
        {/* Jedna pionowa linia */}
        <div className="absolute left-4 top-6 z-50 bottom-0 w-[2px] bg-muted rounded-full" />

        {/* Start */}
        <div className="relative flex items-start gap-4">
          <div
            className={`p-2 rounded-full bg-gradient-to-br ${gradient} shadow-md`}
          >
            <MapPin className="text-white" size={20} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Start
            </p>
            <p className="text-lg font-semibold text-foreground">
              {startCity || "Brak danych"}
            </p>
          </div>
        </div>

        {/* Punkt 2 */}
        <div className="relative flex ml-5 items-start gap-4">
          <div className="absolute -left-11 z-20 w-6 top-6 h-[2px] bg-gray-200" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">
              Atrakcje po drodze
            </p>
            <p className="text-xs text-muted-foreground">
              Małe wioski, punkty widokowe, lokalne ciekawostki i klimatyczne
              miejsca.
            </p>
          </div>
        </div>

        {/* Punkt 3 */}
        <div className="relative flex ml-5 items-start gap-4">
          <div className="absolute -left-11 z-20 w-6 top-6 h-[2px] bg-gray-200" />
          <MotoRideDescription type={moto_ride_types.moto_ride} />
        </div>

        {/* Meta */}
        <div className="relative flex items-start gap-4">
          <div
            className={`p-2 rounded-full bg-gradient-to-br ${gradient} shadow-md`}
          >
            <Flag className="text-white" size={20} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Meta
            </p>
            <p className="text-lg font-semibold text-foreground">
              {endCity || "Brak danych"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsLocationSection;
