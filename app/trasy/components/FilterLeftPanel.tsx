import React from "react";
import FilterRegions from "@/app/trasy/components/FilterRegions";
import FilterLvl from "@/app/trasy/components/FilterLvl";
import FilterStyle from "./FilterStyle";
import FilterTripTime from "@/app/trasy/components/FilterTripTime";
import { FilterSurface } from "@/app/trasy/components/FilterSurface";
import FilterHeader from "@/app/trasy/components/FilterHeader";
import { FilterDistance } from "@/app/trasy/components/FilterDistance";
import FilterResetButton from "@/app/trasy/components/FilterResetButton";
import { fetchRegions } from "@/helpers/fetchers/fetchRegions";
import { fetchDifficulties } from "@/helpers/fetchers/fetchDifficulty";
import { fetchMotoStyle } from "@/helpers/fetchers/fetchMotoStyle";

const FilterLeftPanel = async () => {
  const [regions, routeDifficulties, motoridestyles] = await Promise.all([
    fetchRegions(),
    fetchDifficulties(),
    fetchMotoStyle(),
  ]);
  return (
    <>
      <div className="routes:flex hidden routes:flex-col pt-5 routes:gap-10 routes:pb-10">
        <FilterHeader />
        <FilterRegions regions={regions} />
        <FilterLvl routeDifficulties={routeDifficulties} />
        <FilterDistance />
        <FilterStyle motoridestyles={motoridestyles} />
        <FilterTripTime />
        <FilterSurface />
        <FilterResetButton />
      </div>
    </>
  );
};

export default FilterLeftPanel;
