"use client";
import { useImageSliderStore } from "@/app/store/imageSlider";
import usePersistStore from "@/helpers/usePersistStore";

const ImageSlider = () => {
  const store = usePersistStore(useImageSliderStore, (state) => state);
  return (
    <div className="w-[95%] mt-6 mb rounded-[3rem] mx-auto relative">
      <div
        className="absolute z-10 rounded-[3rem] bg-no-repeat w-full bg-center bg-cover h-[700px] min-lp:h-[850px]"
        style={{ backgroundImage: `url(${store?.currentImageUrl.url})` }}
      />
      <div className="absolute z-20 rounded-[3rem] mx-auto w-full h-[700px] min-lp:h-[850px] inset-0 bg-black/60" />
    </div>
  );
};

export default ImageSlider;
