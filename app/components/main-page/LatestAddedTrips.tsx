import { fetchLatestAddedRoutes } from "@/helpers/fetchers/fetchRoutes";
import { Suspense } from "react";
import AllRoutesSkeletons from "@/app/components/main-page/AllRoutesSkeletons";
import LatestAdded from "@/app/components/main-page/LatestAdded";

const LatestAddedTrips = async () => {
  const data = await fetchLatestAddedRoutes();

  return (
    <section className="pt-12 pb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Ostatnio dodane trasy
      </h2>
      <Suspense fallback={<AllRoutesSkeletons />}>
        <LatestAdded data={data} />
      </Suspense>
    </section>
  );
};

export default LatestAddedTrips;
