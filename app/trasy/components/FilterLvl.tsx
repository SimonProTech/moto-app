import React from "react";
import FilterDifficultiesGrid from "@/app/trasy/components/FilterDifficultiesGrid";
import { fetchDifficulties } from "@/helpers/fetchers/fetchDifficulty";

const FilterLvl = async () => {
  const routeDifficulties = await fetchDifficulties();
  return (
    <div>
      <h2 className="font-bold text-lg uppercase">poziom trudności</h2>
      <div className="grid grid-cols-2 mt-5 gap-2">
        <FilterDifficultiesGrid routeDifficulties={routeDifficulties} />
      </div>
    </div>
  );
};

export default FilterLvl;
