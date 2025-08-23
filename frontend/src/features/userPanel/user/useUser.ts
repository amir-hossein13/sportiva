import { getCurrentUser } from '@/services/apiUser';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false
  });
  return { isLoading, user, isAuthenticated: !user };
}
