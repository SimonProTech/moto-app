"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutGrid, Rows3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { FilterButtonModelOpen } from "@/app/trasy/components/FilterButtonModelOpen";
import { Separator } from "@/components/ui/separator";

const FilterRightPanel = () => {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  const isSelected = searchParams.get("layout") ?? "grid";
  const router = useRouter();

  const changeLayout = (layout: string) => {
    if (layout === "grid") {
      newParams.set("layout", "grid");
    } else {
      newParams.set("layout", "flex");
    }
    router.push(`?${newParams.toString()}`);
  };

  const sortBy = (value: string) => {
    if (value === "popularity") {
      newParams.delete("sort");
    }

    if (value === "easy") {
      newParams.set("sort", "easy");
    }
    if (value === "hard") {
      newParams.set("sort", "hard");
    }
    if (value === "latest") {
      newParams.set("sort", "latest");
    }
    if (value === "short") {
      newParams.set("sort", "short");
    }
    if (value === "long") {
      newParams.set("sort", "long");
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex sm:flex-row flex-col items-center gap-5">
      <div className="routes:hidden sm:w-max w-full block z-[999]">
        <FilterButtonModelOpen />
      </div>
      <Separator className="sm:hidden sm:my-0 my-5 block" />
      <div className="flex sm:flex-row sm:w-max w-full flex-col-reverse gap-5 items-center sm:ml-auto space-x-2">
        <div className="space-x-2">
          <Button
            variant="fake-btn"
            onClick={() => changeLayout("grid")}
            className={cn(
              `
            ${isSelected === "grid" ? "bg-ring shadow-md" : "border border-gray-border"}
            [&_svg:not([class*='size-'])]:size-5 hover:bg-ring hover:border-ring transition-all  cursor-pointer`,
            )}
          >
            <LayoutGrid />
          </Button>
          <Button
            variant="fake-btn"
            onClick={() => changeLayout("flex")}
            className={cn(
              `
            ${isSelected === "flex" ? "bg-ring shadow-md " : "border border-gray-border"}
            [&_svg:not([class*='size-'])]:size-5 hover:bg-ring hover:border-ring transition-all cursor-pointer`,
            )}
          >
            <Rows3 className="cursor-pointer" />
          </Button>
        </div>
        <span className="hidden sm:block">/</span>
        <Select onValueChange={sortBy}>
          <SelectTrigger className="sm:w-[240px] w-full cursor-pointer data-[placeholder]:text-foreground [&_svg:not([class*='text-'])]:text-foreground border-gray-border">
            <SelectValue placeholder="Sortuj wg popularności" />
          </SelectTrigger>
          <SelectContent position="popper" className="w-full border-foreground">
            <SelectGroup>
              <SelectItem value="popularity">Sortuj wg popularności</SelectItem>
              <SelectItem value="latest">Sortuj od najnowszych</SelectItem>
              <SelectItem value="short">Sortuj od najkrótszych (km)</SelectItem>
              <SelectItem value="long">Sortuj od najdłuższych (km)</SelectItem>
              <SelectItem value="easy">Sortuj od najłatwiejszych</SelectItem>
              <SelectItem value="hard">Sortuj od najtrudniejszych</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterRightPanel;
