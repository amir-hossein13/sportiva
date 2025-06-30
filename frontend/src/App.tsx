import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { login, logout } from "./services/apiAuth";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: true,
      retry: 1,
    },
  },
});

// ⬅️ Create a wrapper so `useRoutes` is inside <BrowserRouter>
function AppRoutes() {
  const router = useRoutes(routes);
  return router;
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <button onClick={logout}>fetch</button>
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
