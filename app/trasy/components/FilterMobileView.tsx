"use client";

import { useFilterModal } from "@/app/store/openModal";
import React from "react";
import { CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FilterMobileViewProviderProps } from "@/types/app";
import FilterRegions from "@/app/trasy/components/FilterRegions";
import FilterLvl from "@/app/trasy/components/FilterLvl";
import { FilterDistance } from "@/app/trasy/components/FilterDistance";
import FilterStyle from "@/app/trasy/components/FilterStyle";
import FilterTripTime from "@/app/trasy/components/FilterTripTime";
import { FilterSurface } from "@/app/trasy/components/FilterSurface";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export const FilterMobileView = ({
  filters,
}: FilterMobileViewProviderProps) => {
  const { isModalOpen, closeModalFn } = useFilterModal();
  const router = useRouter();
  const params = useSearchParams();

  const resetFilters = () => {
    return router.push("/trasy", {
      scroll: true,
    });
  };

  return (
    <div className="relative z-[99999999999]">
      <div
        onClick={closeModalFn}
        className={`
          fixed routes:hidden inset-0 bg-black/10
          transition-opacity duration-300
          ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />
      <div
        className={`
          fixed top-0 routes:hidden right-0 overflow-y-auto h-screen bg-my-white rounded-l-lg z-[9999999]
          transition-all duration-300 ease-in-out shadow-xl
          ${
            isModalOpen
              ? "sm:w-[420px] w-full opacity-100 translate-x-0"
              : "w-0 opacity-0 translate-x-full"
          }
        `}
      >
        <div className="">
          <div className="flex p-5 jus items-center">
            <Button
              onClick={closeModalFn}
              className={cn(
                `[&_svg:not([class*='size-'])]:size-6 cursor-pointer`,
              )}
              variant="fake-btn"
            >
              <CircleX className="cursor-pointer" />
            </Button>
            <h3 className="text-xl w-full ml-10 text-center font-medium">
              Filtry
            </h3>
            <Button
              onClick={resetFilters}
              disabled={params.size <= 0}
              className="cursor-pointer rounded-full bg-red-200 disabled:bg-red-300 disabled:text-red-600 text-red-500 hover:bg-red-100 transition-all"
              variant="fake-btn"
            >
              Wyczyść filtry
            </Button>
          </div>
          <Separator />
          <div className="flex flex-col p-5 gap-10 pb-10">
            <FilterRegions regions={filters.regions} />
            <FilterLvl routeDifficulties={filters.routeDifficulties} />
            <FilterDistance />
            <FilterStyle motoridestyles={filters.motoridestyles} />
            <FilterTripTime />
            <FilterSurface />
          </div>
        </div>
      </div>
    </div>
  );
};
