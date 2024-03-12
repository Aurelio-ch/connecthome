import { AppLayout } from "@/pages/_layouts/app";
import { DashboardUser } from "@/pages/app/user/dashboard";
import { Navigate } from "react-router-dom";

export function usersRoutes() {
  return {
    element: <AppLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/sign-in" />,
      },
      {
        path: "/",
        element: <DashboardUser />,
      }
    ],
  };
}
