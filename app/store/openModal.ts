import { create } from "zustand";

interface ModelOpenStore {
  isModalOpen: boolean;
}

interface OpenModelActionStore {
  setOpenModal: (open: ModelOpenStore) => void;
  closeModal: () => void;
}

export const useOpenModel = create<ModelOpenStore & OpenModelActionStore>(
  (setState, getState) => ({
    isModalOpen: false,
    setOpenModal: (modal) =>
      setState(() => ({
        isModalOpen: modal.isModalOpen,
      })),
    closeModal: () => {
      setState(() => ({
        isModalOpen: false,
      }));
    },
  }),
);
