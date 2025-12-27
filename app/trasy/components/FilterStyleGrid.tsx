"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { styleIcons } from "@/app/trasy/components/FilterStyleIcons";
import { MOTO_RIDE_STYLE } from "@/types/app";
import { useMultiFilter } from "@/app/hooks/useMultiFilter";
import { useSelectableList } from "@/app/hooks/useSelectableList";
import { FilterMoreThenOneSelectedButtons } from "@/app/trasy/components/FilterMoreThenOneSelectedButtons";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface FilterStyleGridInterface {
  motoridestyles: MOTO_RIDE_STYLE[];
}
const FilterStyleGrid = ({ motoridestyles }: FilterStyleGridInterface) => {
  const { current, applyFn, clearSelectedFilter } = useMultiFilter("ride-type");
  const { selected, setSelected, toggle, handleApply, reset } =
    useSelectableList({
      current,
      applyFn,
    });
  const params = useSearchParams();
  const hasParam = params.get("ride-type");

  useEffect(() => {
    if (!hasParam) {
      reset();
    }
  }, [hasParam]);

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
        <FilterMoreThenOneSelectedButtons
          selected={selected}
          current={current}
          handleApply={handleApply}
          clearSelectedFilter={clearSelectedFilter}
          setSelected={setSelected}
          reset={reset}
        />
      ) : null}
    </>
  );
};

export default FilterStyleGrid;
