import { create } from 'zustand';
import { doLike } from '../services/apiLikes';

interface LikeState {
  liked: boolean;
  toggleLikes: (productId: number) => void;
}

export const useLikeStore = create<LikeState>((set, get) => ({
  liked: false,
  toggleLikes: async (productId: number) => {
    const { liked } = get();

    if (!liked) {
      try {
        await doLike(productId);
        set({ liked: true });
      } catch (err) {
        console.error('خطا در لایک کردن:', err);
      }
    } else {
      await doLike(productId);
      set({ liked: false });
    }
  },
}));
