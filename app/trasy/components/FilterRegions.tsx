import { FilterRegionGrid } from "@/app/trasy/components/FilterRegionGrid";
import { fetchRegions } from "@/helpers/fetchers/fetchRegions";

const FilterRegions = async () => {
  const regions = await fetchRegions();

  return (
    <div>
      <h2 className="font-bold text-lg uppercase">region</h2>
      <div className="grid grid-cols-2 mt-5 gap-2">
        <FilterRegionGrid regions={regions} />
      </div>
    </div>
  );
};

export default FilterRegions;
