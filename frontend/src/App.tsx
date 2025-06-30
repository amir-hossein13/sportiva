import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  const route = useRoutes(routes);

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0, // data considered fresh (ms)
        cacheTime: 1000 * 60 * 10, // how long inactive data stays in cache
        refetchOnWindowFocus: true,
        retry: 1,
      },
    },
  });

  return <QueryClientProvider client={client}>{route}</QueryClientProvider>;
}

export default App;
