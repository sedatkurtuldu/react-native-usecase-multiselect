import React, {  } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainScreen from "./src/screens/MainScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainScreen />
    </QueryClientProvider>
  );
}
