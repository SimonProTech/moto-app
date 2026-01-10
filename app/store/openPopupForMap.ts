import { create } from "zustand";

interface Popup {
  isPopupOpen: boolean;
  popupType: "start" | "meta" | "";
}

interface OpenPopupActionStore {
  setPopupOpen: ({ open }: { open: boolean }) => void;
  setPopupType: ({ type }: { type: "start" | "meta" | "" }) => void;
  closePopup: () => void;
}

export const useOpenPopupForMap = create<Popup & OpenPopupActionStore>(
  (setState) => ({
    isPopupOpen: false,
    popupType: "start",
    setPopupOpen: (modal) =>
      setState(() => ({
        isPopupOpen: modal.open,
      })),
    closePopup: () => {
      setState(() => ({
        isPopupOpen: false,
      }));
    },
    setPopupType: ({ type }) => {
      setState(() => ({
        popupType: type,
      }));
    },
  }),
);
