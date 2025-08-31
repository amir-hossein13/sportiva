import { getAllUser } from '@/services/apiUserManagement';
import { useQuery } from '@tanstack/react-query';

export function useUserList() {
  const { isLoading, data } = useQuery({
    queryKey: ['userList'],
    queryFn: getAllUser,
  });
  //@ts-expect-error error for the text

  return { isLoading, users: data?.users };
}
