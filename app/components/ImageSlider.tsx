"use client";
import { useImageSliderStore } from "@/app/store/imageSlider";
import usePersistStore from "@/helpers/usePersistStore";

const ImageSlider = () => {
  const store = usePersistStore(useImageSliderStore, (state) => state);
  return (
    <>
      <div
        className="absolute z-10 bg-no-repeat bg-center bg-cover w-full h-[850px]"
        style={{ backgroundImage: `url(${store?.currentImageUrl.url})` }}
      />
      <div className="absolute z-20 h-[850px] inset-0 bg-black/60" />
    </>
  );
};

export default ImageSlider;
