import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
}

export default App;
