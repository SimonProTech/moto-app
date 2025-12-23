"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useFilter from "@/app/hooks/useFilter";
import { ROUTE_DIFFICULTIES } from "@/types/app";

const FilterDifficultiesGrid = ({
  routeDifficulties,
}: {
  routeDifficulties: ROUTE_DIFFICULTIES[];
}) => {
  const { filterFn, getCurrentParamUrl } = useFilter({
    paramName: "difficulty",
  });
  return (
    <>
      {routeDifficulties.map(({ id, difficulty_level }) => {
        const normalizedValue = difficulty_level.toString().toLowerCase();
        const isActive = getCurrentParamUrl === normalizedValue;

        return (
          <Button
            onClick={() => filterFn(normalizedValue)}
            key={id}
            variant="fake-btn"
            className={cn(
              `px-3 py-2 
              ${isActive ? "bg-ring shadow-md" : "border-gray-border hover:bg-ring"}
              cursor-pointer text-sm border transition-all`,
            )}
          >
            {difficulty_level}
          </Button>
        );
      })}
    </>
  );
};

export default FilterDifficultiesGrid;
