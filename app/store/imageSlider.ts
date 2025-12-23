import { create } from "zustand";
import { BG_IMAGE } from "@/app/components/main-page/SliderWrapper";

interface ImageSliderStore {
  currentImageUrl: {
    id: number;
    url: string;
    alt: string;
  };
  previousImageUrl: { url: string };
}

interface ImageSliderStoreAction {
  setNewImage: (image: BG_IMAGE) => void;
}

export const useImageSliderStore = create<
  ImageSliderStore & ImageSliderStoreAction
>((setState, getState) => ({
  currentImageUrl: {
    id: 1,
    url: "",
    alt: "",
  },
  previousImageUrl: { url: "" },
  setNewImage: (image) =>
    setState((state) => ({
      currentImageUrl: image,
      previousImageUrl: state.currentImageUrl,
    })),
}));
