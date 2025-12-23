import React from "react";
import FilterRegions from "@/app/trasy/components/FilterRegions";
import FilterLvl from "@/app/trasy/components/FilterLvl";
import FilterStyle from "./FilterStyle";
import FilterTripTime from "@/app/trasy/components/FilterTripTime";
import { FilterSurface } from "@/app/trasy/components/FilterSurface";
import FilterHeader from "@/app/trasy/components/FilterHeader";
import { FilterDistance } from "@/app/trasy/components/FilterDistance";

const FilterLeftPanel = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <FilterHeader />
      <FilterRegions />
      <FilterLvl />
      <FilterDistance />
      <FilterStyle />
      <FilterTripTime />
      <FilterSurface />
    </div>
  );
};

export default FilterLeftPanel;
