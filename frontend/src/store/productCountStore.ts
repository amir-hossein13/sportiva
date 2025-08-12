import { create } from 'zustand';

interface Counter {
  count: number;
  inc: () => void;
  dec: () => void;
  setCount: (value: number) => void;
}

export const useCounter = create<Counter>((set, get) => ({
  count: 1,

  inc: () => set((state) => ({ count: state.count + 1 })),

  dec: () => {
    const current = get().count;
    if (current > 1) {
      set({ count: current - 1 });
    }
  },

  setCount: (value) => set({ count: value < 1 ? 1 : value }),
}));
