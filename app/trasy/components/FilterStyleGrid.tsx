"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { styleIcons } from "@/app/trasy/components/FilterStyleIcons";
import { MOTO_RIDE_STYLE } from "@/types/app";
import { useMultiFilter } from "@/app/hooks/useMultiFilter";

interface FilterStyleGridInterface {
  motoridestyles: MOTO_RIDE_STYLE[];
}

const FilterStyleGrid = ({ motoridestyles }: FilterStyleGridInterface) => {
  const { current, applyFn, clearSelectedFilter } = useMultiFilter("ride-type");
  const [selected, setSelected] = useState<string[]>(current);

  const toggle = (value: string) => {
    if (current.includes(value)) return;
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleApply = () => {
    applyFn(selected);
  };

  return (
    <>
      {motoridestyles.map(({ id, moto_ride }) => {
        const value = moto_ride.toString();
        const isSelected = selected.includes(value);

        return (
          <Button
            key={id}
            variant="fake-btn"
            onClick={() => toggle(value)}
            className={cn(
              "flex items-center cursor-pointer gap-2 px-4 py-2 text-sm border border-gray-border rounded-md transition-all",
              isSelected
                ? "bg-ring border-ring shadow-md"
                : "hover:bg-ring hover:border-ring",
            )}
          >
            {styleIcons[moto_ride] && (
              <span className="flex items-center">{styleIcons[moto_ride]}</span>
            )}
            {moto_ride}
          </Button>
        );
      })}

      {selected.length ? (
        <div
          className={
            selected
              ? "col-span-2 flex flex-col items-center justify-between relative"
              : "hidden"
          }
        >
          <div className="flex justify-between relative w-full items-center gap-2">
            <Button
              size="sm"
              onClick={handleApply}
              className={`mt-2 ${current.length === 0 ? "w-full" : "w-[60%]"} bg-indigo-700 hover:bg-indigo-800 cursor-pointer`}
            >
              Zastosuj
            </Button>
            <Button
              size="sm"
              onClick={() => {
                clearSelectedFilter();
                setSelected([]);
              }}
              variant="destructive"
              className={`mt-2 w-max ${current.length === 0 ? "hidden" : "block"} cursor-pointer`}
            >
              Wyczyść filtry
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FilterStyleGrid;
