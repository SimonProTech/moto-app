"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useImageSliderStore } from "@/app/store/imageSlider";
import usePersistStore from "@/helpers/usePersistStore";

export interface BG_IMAGE {
  id: number;
  url: string;
  alt: string;
}

const BG_IMAGES: BG_IMAGE[] = [
  {
    id: 1,
    url: "/assets/landing-page/photo-1.jpg",
    alt: "Zdjęcie motocyklistów",
  },
  {
    id: 2,
    url: "/assets/landing-page/photo-2.jpg",
    alt: "Zdjęcie motocyklistów",
  },
  {
    id: 3,
    url: "/assets/landing-page/photo-3.jpg",
    alt: "Zdjęcie motocyklistów",
  },
  {
    id: 4,
    url: "/assets/landing-page/photo-4.jpg",
    alt: "Zdjęcie motocyklistów",
  },
];

const SliderWrapper = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);
  const store = usePersistStore(useImageSliderStore, (state) => state);

  const currentImage = BG_IMAGES[current];

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      const index = api.selectedScrollSnap();
      setCurrent(index);
    };

    setCount(api.scrollSnapList().length);
    updateCurrent();

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    store?.setNewImage(currentImage);
  }, [currentImage]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
        Fade(),
      ]}
      className="w-full border cursor-grab rounded-lg"
    >
      <CarouselContent className="w-[300px] rounded-lg h-52">
        {BG_IMAGES.map(({ id, url, alt }) => (
          <CarouselItem key={id}>
            <div className="p-1 w-full relative h-full rounded-lg">
              <Image
                className="rounded-lg"
                src={url}
                alt={alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-14 left-0 flex gap-4">
        <CarouselPrevious className="static bg-transparent cursor-pointer text-my-white translate-x-0" />
        <CarouselNext className="static bg-transparent cursor-pointer text-my-white -translate-x-2" />
      </div>
    </Carousel>
  );
};

export default SliderWrapper;
