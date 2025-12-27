"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FilterMobileView } from "@/app/trasy/components/FilterMobileView";
import {
  MOTO_RIDE_STYLE,
  ROUTE_DIFFICULTIES,
  ROUTE_REGIONS,
} from "@/types/app";

export interface FilterMobileViewProviderProps {
  filters: {
    regions: ROUTE_REGIONS[];
    routeDifficulties: ROUTE_DIFFICULTIES[];
    motoridestyles: MOTO_RIDE_STYLE[];
  };
}
export const FilterMobileViewProvider = ({
  filters,
}: FilterMobileViewProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(<FilterMobileView filters={filters} />, document.body);
};
