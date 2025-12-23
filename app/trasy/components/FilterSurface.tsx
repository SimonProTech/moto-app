"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { SURFACES } from "@/types/app";
import { useMultiFilter } from "@/app/hooks/useMultiFilter";

const surfaceOptions = [
  { label: "Asfalt", value: "Asfalt" },
  { label: "Górska", value: "Górska" },
  { label: "Mieszana", value: "Mieszana" },
];

export const FilterSurface = () => {
  const { current, applyFn, clearSelectedFilter } = useMultiFilter("surface");
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
    <div>
      <h2 className="font-bold text-lg uppercase">nawierzchnia</h2>
      <div className="grid grid-cols-2 mt-5 gap-2">
        {surfaceOptions.map(({ label, value }) => {
          const isSelected = selected.includes(value);

          return (
            <Button
              key={value}
              onClick={() => toggle(value)}
              variant="fake-btn"
              className={cn(
                `px-4 py-2 ${value === SURFACES.Mieszana ? "col-span-2" : ""} cursor-pointer text-sm border border-gray-border rounded-md transition-all`,
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
      </div>
    </div>
  );
};
