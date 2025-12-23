import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight, LineSquiggle } from "lucide-react";
import { CATEGORY_IMAGES } from "@/helpers/tripsImageByCategory";
import { RouteInterface } from "@/types/app";
import { changeNawierzchnia } from "@/helpers/changeNawierzchnia";

const SingleRoute = ({
  id,
  distance,
  trip_name,
  trip_description,
  route_surfaces,
  route_regions,
  u_id,
}: RouteInterface) => {
  const renamedSurfaceName = changeNawierzchnia(route_surfaces.surface);
  const imgSrc = CATEGORY_IMAGES[route_surfaces.surface?.toLowerCase()] || "";
  return (
    <div
      key={id}
      className="rounded-xl flex flex-col  h-max relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-72 relative">
        <Image
          src={imgSrc}
          alt={trip_name}
          fill
          className="w-full object-cover"
        />
        <div className="absolute right-2 bottom-2 bg-ring backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center gap-2 text-xs font-semibold text-foreground tracking-wide">
          <LineSquiggle size={15} /> <span>{distance} km</span>
        </div>
      </div>
      <div className="p-6 gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{trip_name}</h3>
        <p className="text-sm text-gray-700">{trip_description}</p>
        <Link
          href={`/trasa/${u_id}/${trip_name.split(" ").join("-").toLowerCase()}`}
          className="mt-4 flex hover:scale-105 transition-all duration-500 items-center relative px-4 py-2  rounded-xl bg-ring text-foreground text-sm font-medium"
        >
          Zobacz trasę
          <span className="absolute right-2">
            <CircleArrowRight />
          </span>
        </Link>
      </div>
      <div className="absolute right-2 top-2 bg-orange-500 backdrop-blur-sm px-3 rounded-full shadow-md">
        <span className="text-xs font-semibold text-white tracking-wide uppercase">
          {renamedSurfaceName}
        </span>
      </div>
      <div className="absolute left-2 top-2 bg-indigo-500/90 backdrop-blur-sm px-3 rounded-full shadow-md">
        <span className="text-xs font-semibold text-white tracking-wide uppercase">
          {route_regions.region_name}
        </span>
      </div>
    </div>
  );
};

export default SingleRoute;
