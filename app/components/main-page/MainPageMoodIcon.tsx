import useIcon from "@/app/hooks/useIcon";
import { MOTO_RIDE } from "@/types/app";

interface MainPageMoodIconProps {
  moto_ride: MOTO_RIDE;
  count: number;
}

export const MainPageMoodIcon = async ({
  moto_ride,
  count,
}: MainPageMoodIconProps) => {
  const { styleIcons } = useIcon({ className: "w-12 h-12" });
  return (
    <div
      className={`relative w-full flex flex-col items-center aspect-video h-[200px] rounded-lg justify-center`}
    >
      {styleIcons[moto_ride] && (
        <span className="text-my-white mb-2">{styleIcons[moto_ride]}</span>
      )}
      <span className="text-my-white font-bold text-lg select-none">
        {moto_ride}
      </span>
      <small className="text-my-white font-bold">({count})</small>
    </div>
  );
};
