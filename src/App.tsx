import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/theme-provider";
import "./global.css";
import { queryClient } from "./lib/react-query";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Helmet titleTemplate="%s | ConnectHome" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
