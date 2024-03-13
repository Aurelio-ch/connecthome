import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/theme-provider";
import "./global.css";
import { queryClient } from "./lib/react-query";

import { AuthProvider } from "./context/auth-context";
import { RouterApp } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Helmet titleTemplate="%s | ConnectHome" />
          <QueryClientProvider client={queryClient}>
            <RouterApp />
          </QueryClientProvider>
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
