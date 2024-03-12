import { AppLayout } from "@/pages/_layouts/app";
import { Condominium } from "@/pages/app/manager/condominium";
import { InfoCondominium } from "@/pages/app/manager/condominium/info-condominium";
import { DashboardManager } from "@/pages/app/manager/dashboard";
import { Users } from "@/pages/app/manager/users";
import { Navigate } from "react-router-dom";

export function manegerRoutes() {
  return {
    element: <AppLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/sign-in" />,
      },
      {
        path: "/",
        element: <DashboardManager />,
      },
      {
        path: "/condominium",
        element: <Condominium />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/condominium/:condominiumId",
        element: <InfoCondominium />,
      },
    ],
  };
}
