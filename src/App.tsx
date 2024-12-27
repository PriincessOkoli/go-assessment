import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllRoutes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
    </QueryClientProvider>
  );
}

export default App;
