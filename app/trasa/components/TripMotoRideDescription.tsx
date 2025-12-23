import { MotoRideName } from "@/types/app";
import { MOTO_RIDE_DESCRIPTIONS } from "@/app/trasa/helpers/MOTO_RIDE_DESCRIPTIONS";

interface MotoRideDescriptionProps {
  type: MotoRideName;
}

export const MotoRideDescription = ({ type }: MotoRideDescriptionProps) => {
  const data = MOTO_RIDE_DESCRIPTIONS[type];

  if (!data) return null;

  return (
    <div className="space-y-1">
      <p className="text-sm font-semibold text-foreground">{data.title}</p>
      <p className="text-xs text-muted-foreground">{data.text}</p>
    </div>
  );
};
