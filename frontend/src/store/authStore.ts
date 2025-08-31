import { create } from 'zustand';
import { getToken } from '../utils/auth';
import { getIsOwner } from '@/services/apiAdmin';

const token = getToken();

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  isOwner: boolean | null;
  login: (token: string) => void;
  logout: () => void;
  checkOwner: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: token,
  isLoggedIn: !!token,
  isOwner: null,
  login: (token) => set({ token, isLoggedIn: true, isOwner: null }),
  logout: () => set({ token: null, isLoggedIn: false, isOwner: null }),
  checkOwner: async () => {
    try {
      const isOwner = await getIsOwner();
      set({ isOwner });
    } catch (error) {
      console.error('Error checking owner:', error);
      set({ isOwner: false });
    }
  },
}));
