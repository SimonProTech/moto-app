import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TripCard from "@/app/trasy/components/TripCard";
import { RouteInterface } from "@/types/app";
interface TripSimilarCarouselProps {
  routes: RouteInterface[];
}

const TripSimilarCarousel = ({ routes }: TripSimilarCarouselProps) => {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-1">
        {routes.map((route, index) => (
          <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3`}>
            <div className="grid grid-cols-1 -translate-x-3">
              <TripCard route={route} layout="grid" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-8 right-12 gap-0">
        <CarouselPrevious className="disabled:bg-gray-200 text-foreground hover:border-foreground size-10 cursor-pointer hover:border hover:bg-gray-200 [&_svg:not([class*='size-'])]:size-5 translate-x-1 bg-gray-200 border-gray-200" />
        <CarouselNext className="disabled:bg-gray-200 hover:border hover:border-foreground hover:bg-gray-200 size-10 [&_svg:not([class*='size-'])]:size-5 cursor-pointer bg-gray-200" />
      </div>
    </Carousel>
  );
};

export default TripSimilarCarousel;
