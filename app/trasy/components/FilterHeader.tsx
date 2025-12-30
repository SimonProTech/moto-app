"use client";

import React from "react";
import { useCountRoutesStore } from "@/app/store/countRoutes";
import { Skeleton } from "@/components/ui/skeleton";

const FilterHeader = () => {
  const { countRoutes } = useCountRoutesStore();

  return (
    <h2 className="flex items-center gap-2">
      Dostępne trasy:
      {!countRoutes ? (
        <Skeleton className="w-16 h-6" />
      ) : (
        <span className="font-bold"> {countRoutes} tras</span>
      )}
    </h2>
  );
};

export default FilterHeader;
