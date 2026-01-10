"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { RouteInterface } from "@/types/app";
import { useCountRoutesStore } from "@/app/store/countRoutes";
import TripCard from "@/app/trasy/components/TripCard";
import AllRoutesPagination from "@/app/trasy/components/AllRoutesPagination";
import { Separator } from "@/components/ui/separator";
import TripsNotFound from "@/app/trasy/components/TripsNotFound";

interface AllTripsProps {
  routes: RouteInterface[];
  count: number;
}

const AllTrips = ({ routes, count }: AllTripsProps) => {
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout") ?? "grid";
  const { setNewCountRoutes } = useCountRoutesStore();
  useEffect(() => {
    setNewCountRoutes({ countRoutes: count as number });
  }, [count]);

  return (
    <div className="routes:mt-5 mt-12 routes:p-5 p-0">
      <div
        className={`${layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "flex flex-col space-y-5"}`}
      >
        {routes.length <= 0 ? (
          <TripsNotFound />
        ) : (
          routes.map((route) => (
            <TripCard layout={layout} key={route.u_id} route={route} />
          ))
        )}
      </div>
      {routes.length > 0 ? <Separator className="my-10" /> : null}
      {routes.length > 0 ? (
        <AllRoutesPagination count={count} pageSize={26} />
      ) : null}
    </div>
  );
};

export default AllTrips;
