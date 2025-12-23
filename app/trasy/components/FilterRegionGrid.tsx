"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ROUTE_REGIONS } from "@/types/app";
import useFilter from "@/app/hooks/useFilter";

export const FilterRegionGrid = ({ regions }: { regions: ROUTE_REGIONS[] }) => {
  const { filterFn, getCurrentParamUrl } = useFilter({
    paramName: "region",
  });

  return (
    <>
      {regions.map(({ region_name, id }) => {
        const value = region_name.toString().toLowerCase();
        const isActive = getCurrentParamUrl === value;
        return (
          <Button
            onClick={() => filterFn(region_name.toString().toLowerCase())}
            key={id}
            variant="fake-btn"
            className={cn(
              `px-3 py-2 
              ${isActive ? "bg-ring shadow-md" : "border-gray-border hover:bg-ring"}
              cursor-pointer text-sm border transition-all`,
            )}
          >
            {region_name}
          </Button>
        );
      })}
    </>
  );
};
