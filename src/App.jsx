import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
