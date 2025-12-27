"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { SURFACES } from "@/types/app";
import { useMultiFilter } from "@/app/hooks/useMultiFilter";
import { useSelectableList } from "@/app/hooks/useSelectableList";
import { FilterMoreThenOneSelectedButtons } from "@/app/trasy/components/FilterMoreThenOneSelectedButtons";
import { useSearchParams } from "next/navigation";

const surfaceOptions = [
  { label: "Asfalt", value: "Asfalt" },
  { label: "Górska", value: "Górska" },
  { label: "Mieszana", value: "Mieszana" },
];

export const FilterSurface = () => {
  const { current, applyFn, clearSelectedFilter } = useMultiFilter("surface");
  const { selected, toggle, handleApply, setSelected, reset } =
    useSelectableList({
      current,
      applyFn,
    });
  const params = useSearchParams();
  const hasParam = params.get("surface");

  useEffect(() => {
    if (!hasParam) {
      reset();
    }
  }, [hasParam]);

  return (
    <div>
      <h2 className="font-bold text-lg uppercase">nawierzchnia</h2>
      <div className="grid small:grid-cols-2 grid-cols-1 mt-5 gap-2">
        {surfaceOptions.map(({ label, value }) => {
          const isSelected = selected.includes(value);

          return (
            <Button
              key={value}
              onClick={() => toggle(value)}
              variant="fake-btn"
              className={cn(
                `px-4 py-2 ${value === SURFACES.Mieszana ? "small:col-span-2" : ""} cursor-pointer text-sm border border-gray-border rounded-md transition-all`,
                isSelected
                  ? "bg-ring border-ring shadow-md"
                  : "hover:bg-ring hover:border-ring",
              )}
            >
              {label}
            </Button>
          );
        })}
        {selected.length ? (
          <FilterMoreThenOneSelectedButtons
            selected={selected}
            current={current}
            handleApply={handleApply}
            clearSelectedFilter={clearSelectedFilter}
            setSelected={setSelected}
            reset={reset}
          />
        ) : null}
      </div>
    </div>
  );
};
