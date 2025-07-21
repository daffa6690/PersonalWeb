import HomeRoute from "./routes/HomeRoute.tsx";
// import DashboardRoute from "./routes/Dashboard.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {    
  return (
      <div>
        <QueryClientProvider client={queryClient}>
        <HomeRoute/>
        </QueryClientProvider>
      </div>
  );
}

export default App;
