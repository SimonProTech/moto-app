import React from "react";
import { fetchMotoStyle } from "@/helpers/fetchers/fetchMotoStyle";
import FilterStyleGrid from "@/app/trasy/components/FilterStyleGrid";

const FilterStyle = async () => {
  const motoridestyles = await fetchMotoStyle();
  return (
    <div>
      <h2 className="font-bold text-lg uppercase">charakter trasy</h2>
      <div className="grid grid-cols-2 mt-5 gap-2">
        <FilterStyleGrid motoridestyles={motoridestyles} />
      </div>
    </div>
  );
};

export default FilterStyle;
