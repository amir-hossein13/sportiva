import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { getAllProduct } from "./services/apiProduct";
import routes from "./routes/routes";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
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
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
