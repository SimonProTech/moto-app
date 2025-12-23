"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FilterResetButton = () => {
  const params = useSearchParams();
  const router = useRouter();
  const hasActiveParams = params.size;

  const resetFilters = () => {
    return router.push("/trasy", {
      scroll: true,
    });
  };

  return (
    <div
      className={`${hasActiveParams > 0 ? "flex flex-col relative" : "hidden"} `}
    >
      <Separator className="mb-10" />
      <Button
        onClick={resetFilters}
        className="cursor-pointer bg-red-500 text-my-white hover:bg-red-600  hover:shadow-xl transition-all"
        variant="fake-btn"
      >
        Wyczyść filtry
      </Button>
    </div>
  );
};

export default FilterResetButton;
