"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useFilter from "@/app/hooks/useFilter";

const timeRanges = [
  { label: "Do 1h", value: "60" },
  { label: "1–2h", value: "61-120" },
  { label: "2–3h", value: "121-180" },
  { label: "3h+", value: "181" },
];

const FilterTripTime = () => {
  const { filterFn, getCurrentParamUrl } = useFilter({
    paramName: "trip-time",
  });
  return (
    <div>
      <h2 className="font-bold text-lg uppercase">czas trasy</h2>
      <div className="grid small:grid-cols-2 grid-cols-1 mt-5 gap-2">
        {timeRanges.map(({ label, value }, index) => {
          const normalizedV = value.toString().toLowerCase();
          const isActive = getCurrentParamUrl === value;
          return (
            <Button
              key={value + index}
              onClick={() => filterFn(normalizedV)}
              value={value}
              variant="fake-btn"
              className={cn(
                `px-3 py-2 
              ${isActive ? "bg-ring shadow-md" : "border-gray-border hover:bg-ring"}
              cursor-pointer text-sm border transition-all`,
              )}
            >
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterTripTime;
