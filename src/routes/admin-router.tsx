import { AppLayout } from "@/pages/_layouts/app";
import { DashboardAdmin } from "@/pages/app/admin/dashboard";
import { Navigate } from "react-router-dom";

export function adminRoutes() {
  return {
    element: <AppLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <DashboardAdmin />,
      }
    ],
  };
}
