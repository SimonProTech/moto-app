import { FilterRegionGrid } from "@/app/trasy/components/FilterRegionGrid";
import { ROUTE_REGIONS } from "@/types/app";

interface FilterRegionsProps {
  regions: ROUTE_REGIONS[];
}

const FilterRegions = ({ regions }: FilterRegionsProps) => {
  return (
    <div>
      <h2 className="font-bold text-lg uppercase">region</h2>
      <div className="grid small:grid-cols-2 grid-cols-1 mt-5 gap-2">
        <FilterRegionGrid regions={regions} />
      </div>
    </div>
  );
};

export default FilterRegions;
