import FilterRightPanel from "@/app/trasy/components/FilterRightPanel";
import FilterLeftPanel from "@/app/trasy/components/FilterLeftPanel";
import AllTrips from "@/app/trasy/components/AllTrips";
import { fetchAllRoutes } from "@/helpers/fetchers/fetchRoutes";
import React from "react";

interface FiltersAndDataWrapperInterface {
  params: any;
  page: number;
}

const FiltersAndDataWrapper = async ({
  params,
  page,
}: FiltersAndDataWrapperInterface) => {
  const { data: routes, count } = await fetchAllRoutes(page, 26, params);
  return (
    <div className="flex items-start w-full pt-12">
      <FilterLeftPanel />
      <div className="flex-1 flex flex-col px-4 py-2">
        <FilterRightPanel />
        <div className="w-full">
          <AllTrips routes={routes} count={count as number} />
        </div>
      </div>
    </div>
  );
};

export default FiltersAndDataWrapper;
