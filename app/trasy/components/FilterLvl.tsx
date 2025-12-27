import React from "react";
import FilterDifficultiesGrid from "@/app/trasy/components/FilterDifficultiesGrid";
import { fetchDifficulties } from "@/helpers/fetchers/fetchDifficulty";
import { ROUTE_DIFFICULTIES } from "@/types/app";

interface FilterLvlProps {
  routeDifficulties: ROUTE_DIFFICULTIES[];
}

const FilterLvl = ({ routeDifficulties }: FilterLvlProps) => {
  return (
    <div>
      <h2 className="font-bold text-lg uppercase">poziom trudności</h2>
      <div className="grid small:grid-cols-2 grid-cols-1 mt-5 gap-2">
        <FilterDifficultiesGrid routeDifficulties={routeDifficulties} />
      </div>
    </div>
  );
};

export default FilterLvl;
