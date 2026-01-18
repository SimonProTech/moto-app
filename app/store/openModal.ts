import { create } from "zustand";

interface ModelOpenStore {
  isModalOpen: boolean;
}

interface OpenModelActionStore {
  isModalOpen: boolean;
  openModalFn: () => void;
  closeModalFn: () => void;
  toggleModal: () => void;
}

export const createModalStore = () =>
  create<ModelOpenStore & OpenModelActionStore>((setState) => ({
    isModalOpen: false,
    openModalFn: () =>
      setState(() => ({
        isModalOpen: true,
      })),
    closeModalFn: () => {
      setState(() => ({
        isModalOpen: false,
      }));
    },
    toggleModal: () =>
      setState((state) => ({
        isModalOpen: !state.isModalOpen,
      })),
  }));

export const useMobileMenu = createModalStore();
export const useFilterModal = createModalStore();
