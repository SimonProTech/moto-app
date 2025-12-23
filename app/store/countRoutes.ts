import { create } from "zustand/index";

interface Counts {
  countRoutes: number;
}

interface CountsActionStore {
  setNewCountRoutes: (counts: Counts) => void;
}

export const useCountRoutesStore = create<CountsActionStore & Counts>(
  (setState, getState) => ({
    countRoutes: 0,
    setNewCountRoutes: ({ countRoutes }) =>
      setState(() => ({
        countRoutes,
      })),
  }),
);
