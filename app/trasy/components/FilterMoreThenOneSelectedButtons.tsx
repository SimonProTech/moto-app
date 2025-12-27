import { Button } from "@/components/ui/button";
import React from "react";

interface FilterMoreThenOneSelectedButtonsProps {
  selected: string[];
  current: string[];
  handleApply: () => void;
  clearSelectedFilter: () => void;
  setSelected: (value: string[]) => void;
  reset: () => void;
}
export const FilterMoreThenOneSelectedButtons = ({
  clearSelectedFilter,
  selected,
  current,
  handleApply,
  reset,
}: FilterMoreThenOneSelectedButtonsProps) => {
  return (
    <div
      className={
        selected
          ? "small:col-span-2 flex flex-col items-center justify-between relative"
          : "hidden"
      }
    >
      <div className="flex small:flex-row flex-col justify-between relative w-full items-center gap-2">
        <Button
          size="sm"
          onClick={handleApply}
          className={`mt-2 ${current.length === 0 ? "w-full" : "small:w-[60%] w-full"} bg-indigo-700 hover:bg-indigo-800 cursor-pointer`}
        >
          Zastosuj
        </Button>
        <Button
          size="sm"
          onClick={() => {
            clearSelectedFilter();
            reset();
          }}
          variant="destructive"
          className={`small:mt-2 mt-1 small:w-max w-full ${current.length === 0 ? "hidden" : "block"} cursor-pointer`}
        >
          Wyczyść filtry
        </Button>
      </div>
    </div>
  );
};
