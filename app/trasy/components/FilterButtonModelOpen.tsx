"use client";

import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useFilterModal } from "@/app/store/openModal";

export const FilterButtonModelOpen = () => {
  const { openModalFn } = useFilterModal();
  return (
    <Button
      onClick={openModalFn}
      className="cursor-pointer sm:py-5 py-6 hover:bg-ring transition-all hover:border-ring hover:shadow hover:rounded-2xl duration-500 focus:scale-90 hover:special-detail_page-shadow w-full border border-gray-border"
      variant="fake-btn"
    >
      <SlidersHorizontal />
      Wszystkie filtry
    </Button>
  );
};
