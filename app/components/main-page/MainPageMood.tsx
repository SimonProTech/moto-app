import { fetchMotoStyle } from "@/helpers/fetchers/fetchMotoStyle";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { MainPageMoodIcon } from "@/app/components/main-page/MainPageMoodIcon";
import Link from "next/link";
import { countRoutesByMotoStyle } from "@/helpers/fetchers/countRoutesByMotoStyle";

export const MainPageMood = async () => {
  const motoRideStyles = await countRoutesByMotoStyle();

  return (
    <section className="mt-20 z-50 relative">
      <h2 className="text-3xl mb-20 text-center font-bold">
        Odkrywaj według{" "}
        <span className="font-instrument underline decoration-indigo-600 italic">
          charakteru
        </span>{" "}
        trasy
      </h2>

      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {motoRideStyles?.map((item) => (
          <Link
            href={`/trasy?ride-type=${item.moto_ride}`}
            key={item.id}
            className={`flex rounded-lg hover:scale-[1.02] cursor-pointer hover:shadow-lg flex-col items-center bg-gradient-to-br ${surfaceGradients[item.moto_ride]} justify-center hover:bg-accent cursor-pointer transition`}
          >
            <MainPageMoodIcon
              count={item.countTotal}
              moto_ride={item.moto_ride}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
