"use client";

import React from "react";
import { useCountRoutesStore } from "@/app/store/countRoutes";

const FilterHeader = () => {
  const { countRoutes } = useCountRoutesStore();
  return (
    <h2 className="flex items-center gap-2">
      Dostępne trasy:
      <span className="font-bold"> {countRoutes} tras</span>
    </h2>
  );
};

export default FilterHeader;
