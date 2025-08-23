import { getUserLikes } from '@/services/apiLikes';
import { useQuery } from '@tanstack/react-query';

export function useLike() {
  const { isLoading: isLiking, data: likes } = useQuery({
    queryKey: ['like'],
    queryFn:  getUserLikes,
  });
  return { isLiking, likes };
}
