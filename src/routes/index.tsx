import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { createBrowserRouter } from "react-router-dom";
import { routerAuth } from "./auth";
import { isauthenticated } from "./isauthenticated";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: isauthenticated,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: routerAuth,
  },
]);
