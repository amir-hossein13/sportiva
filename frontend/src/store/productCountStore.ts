import { create } from 'zustand';
interface Counter {
  count: number;
  inc: (state: number) => void;
  dec: (state: number) => void;
  setCount: (value: number) => void;
}
export const useCounter = create<Counter>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  setCount: (value) => set({ count: value }),
}));
