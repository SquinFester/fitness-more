"use client";

import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};
