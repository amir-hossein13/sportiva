import { create } from 'zustand';
interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const useTabStore = create<TabState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useTabStore;
