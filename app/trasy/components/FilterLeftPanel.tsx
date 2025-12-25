import React from "react";
import FilterRegions from "@/app/trasy/components/FilterRegions";
import FilterLvl from "@/app/trasy/components/FilterLvl";
import FilterStyle from "./FilterStyle";
import FilterTripTime from "@/app/trasy/components/FilterTripTime";
import { FilterSurface } from "@/app/trasy/components/FilterSurface";
import FilterHeader from "@/app/trasy/components/FilterHeader";
import { FilterDistance } from "@/app/trasy/components/FilterDistance";
import FilterResetButton from "@/app/trasy/components/FilterResetButton";

const FilterLeftPanel = () => {
  return (
    <div className="routes:flex hidden lg:flex-col lg:gap-10 lg:pb-10">
      <FilterHeader />
      <FilterRegions />
      <FilterLvl />
      <FilterDistance />
      <FilterStyle />
      <FilterTripTime />
      <FilterSurface />
      <FilterResetButton />
    </div>
  );
};

export default FilterLeftPanel;
