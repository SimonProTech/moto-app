"use client";

import React from "react";
import { useOpenPopupForMap } from "@/app/store/openPopupForMap";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Navigation } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { surfaceGradients } from "@/app/trasy/components/TripCard";
import { MotoRideName } from "@/types/app";
import { useRouter } from "next/navigation";

interface MapPopupP {
  startingCity: string;
  endingCity: string;
  startLat: number;
  startLon: number;
  metaLat: number;
  metaLon: number;
  moto_ride_types: {
    moto_ride: MotoRideName;
  };
}

export const MapPopup = ({
  endingCity,
  startingCity,
  startLon,
  startLat,
  metaLat,
  metaLon,
  moto_ride_types,
}: MapPopupP) => {
  const { isPopupOpen, closePopup, popupType } = useOpenPopupForMap();
  const router = useRouter();
  const navigateToGoogle = () => {
    const [lat, lon] =
      popupType === "start" ? [startLat, startLon] : [metaLat, metaLon];
    return router.push(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}&travelmode=car`,
    );
  };

  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 w-full z-[9999999999] transition-all duration-300",
        isPopupOpen ? "h-56" : "h-0 overflow-hidden",
      )}
    >
      <div className="bg-white border-t border-gray-border rounded-t-2xl h-full flex flex-col items-center justify-start">
        <Button
          variant="ghost"
          onClick={closePopup}
          className="w-full flex hover:rounded-2xl hover:rounded-b-none h-8 justify-center cursor-pointer "
        >
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </Button>

        <div className="px-4 py-0 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Dane szczegółowe
            </h2>
            <Button
              variant="ghost"
              className="p-2 hover:text-indigo-500 transition-colors [&_svg:not([class*='size-'])]:size-5"
            >
              <Heart />
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Miejsce:
              </span>
              <span className="text-sm font-semibold underline text-foreground">
                {popupType === "start" ? startingCity : endingCity}
              </span>
            </div>
            <Separator />
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Współrzędne:
              </span>
              <div className="text-xs font-light px-3 py-2 rounded-md shadow-inner">
                {popupType === "start"
                  ? `${startLat}, ${startLon}`
                  : `${metaLat}, ${metaLon}`}
              </div>
            </div>
            <Button
              variant="fake-btn"
              onClick={navigateToGoogle}
              className={`w-full cursor-pointer mt-2 font-medium text-md bg-gradient-to-br ${surfaceGradients[moto_ride_types.moto_ride]} rounded-2xl py-6 text-my-white`}
            >
              <Navigation
                className={"[&_svg:not([class*='size-'])]:size-6"}
                size={23}
              />
              Nawiguj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
