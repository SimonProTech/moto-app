import { fetchRegions } from "@/helpers/fetchers/fetchRegions";
import { fetchDifficulties } from "@/helpers/fetchers/fetchDifficulty";
import { fetchMotoStyle } from "@/helpers/fetchers/fetchMotoStyle";
import { FilterMobileViewProvider } from "@/app/trasy/components/FilterMobileViewProvider";

export const FilterMobileWrapper = async () => {
  const [regions, routeDifficulties, motoridestyles] = await Promise.all([
    fetchRegions(),
    fetchDifficulties(),
    fetchMotoStyle(),
  ]);

  const filters = { regions, routeDifficulties, motoridestyles };

  return <FilterMobileViewProvider filters={filters} />;
};
