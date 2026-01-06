import { create } from "zustand/index";

interface Counts {
  countRoutes: number | null;
}

interface CountsActionStore {
  setNewCountRoutes: (counts: Counts) => void;
}

export const useCountRoutesStore = create<CountsActionStore & Counts>(
  (setState, getState) => ({
    countRoutes: null,
    setNewCountRoutes: ({ countRoutes }) =>
      setState(() => ({
        countRoutes,
      })),
  }),
);
