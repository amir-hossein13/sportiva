import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useUser } from '@/features/userPanel/user/useUser';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return <p>Loading...</p>; // or your loading spinner
  }

  if (isAuthenticated) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
}
