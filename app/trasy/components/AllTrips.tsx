"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { RouteInterface } from "@/types/app";
import { useCountRoutesStore } from "@/app/store/countRoutes";
import TripCard from "@/app/trasy/components/TripCard";
import AllRoutesPagination from "@/app/trasy/components/AllRoutesPagination";
import { Separator } from "@/components/ui/separator";

interface AllTripsProps {
  routes: RouteInterface[];
  count: number | null;
}

const AllTrips = ({ routes, count }: AllTripsProps) => {
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout") ?? "grid";
  const { setNewCountRoutes } = useCountRoutesStore();
  useEffect(() => {
    setNewCountRoutes({ countRoutes: count as number });
  }, [count]);

  return (
    <div className="mt-5 p-5">
      <div
        className={`${layout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "flex flex-col space-y-5"}`}
      >
        {routes.map((route) => (
          <TripCard layout={layout} key={route.u_id} route={route} />
        ))}
      </div>
      <Separator className="my-10" />
      <AllRoutesPagination count={count as number} pageSize={26} />
    </div>
  );
};

export default AllTrips;
