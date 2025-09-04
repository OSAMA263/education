import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/toaster";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-dvh">
        <AppRoutes />
        <Toaster />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
