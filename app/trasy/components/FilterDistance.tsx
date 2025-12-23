"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import useFilter from "@/app/hooks/useFilter";

type SliderProps = React.ComponentProps<typeof Slider>;

export const FilterDistance = ({ className, ...props }: SliderProps) => {
  const [showSlider, setShowSlider] = useState(false);
  const [sliderValue, setSliderValue] = useState([20, 130]);
  const { filterFn, getCurrentParamUrl, clearSelectedFilter } = useFilter({
    paramName: "distance",
  });

  return (
    <div>
      <h2 className="font-bold text-lg uppercase">Długość trasy</h2>
      <div className="grid grid-cols-2 mt-5 gap-2">
        {["0-50", "51-100", "101-150"].map((distance, index) => {
          const value = distance.toString().toLowerCase();
          const isActive = getCurrentParamUrl === value;
          return (
            <Button
              key={`${index + distance}`}
              onClick={() => filterFn(distance)}
              variant="fake-btn"
              className={cn(
                `px-3 py-2
                  ${isActive ? "bg-ring shadow-md" : "border-gray-border hover:bg-ring"}
                 cursor-pointer text-sm border border-gray-border hover:bg-ring hover:border-ring transition-all`,
              )}
            >
              {distance} km
            </Button>
          );
        })}
        <Button
          className={`cursor-pointer
           ${showSlider ? "bg-ring shadow-md duration-500" : "border-gray-border border hover:bg-ring"}
           `}
          onClick={() => setShowSlider((prev) => !prev)}
          variant="fake-btn"
        >
          Zaawansowane
        </Button>
        <div
          className={
            showSlider
              ? "mt-3 col-span-2 flex flex-col justify-between relative"
              : "hidden"
          }
        >
          <small className="text-left mb-2">
            Określ długość trasy przesuwając suwaki.
          </small>
          <div className="flex justify-between relative w-full">
            <Slider
              defaultValue={sliderValue}
              min={20}
              onValueChange={setSliderValue}
              max={500}
              step={1}
              minStepsBetweenThumbs={10}
              className={cn("w-[70%]", className)}
              {...props}
            />
            <small className="">
              ({sliderValue[0]} - {sliderValue[1]}) km
            </small>
          </div>
        </div>
        {showSlider ? (
          <div
            className={
              showSlider
                ? "col-span-2 flex flex-col items-center justify-between relative"
                : "hidden"
            }
          >
            <div className="flex justify-between relative w-full items-center gap-2">
              <Button
                size="sm"
                onClick={() => filterFn(sliderValue.join("-"))}
                className="mt-2 w-[60%] bg-indigo-700 hover:bg-indigo-800 cursor-pointer"
              >
                Zastosuj
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={clearSelectedFilter}
                className="mt-2 w-max cursor-pointer"
              >
                Wyczyść filtry
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
