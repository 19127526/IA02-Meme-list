import './App.css';
import MainLayout from "./layouts/MainLayout";

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout/>
    </QueryClientProvider>
  );
}

export default App;
