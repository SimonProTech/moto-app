import React from "react";
import FilterStyleGrid from "@/app/trasy/components/FilterStyleGrid";
import { MOTO_RIDE_STYLE } from "@/types/app";

interface FilterStyleProps {
  motoridestyles: MOTO_RIDE_STYLE[];
}

const FilterStyle = ({ motoridestyles }: FilterStyleProps) => {
  return (
    <div>
      <h2 className="font-bold text-lg uppercase">charakter trasy</h2>
      <div className="grid small:grid-cols-2 grid-cols-1 mt-5 gap-2">
        <FilterStyleGrid motoridestyles={motoridestyles} />
      </div>
    </div>
  );
};

export default FilterStyle;
