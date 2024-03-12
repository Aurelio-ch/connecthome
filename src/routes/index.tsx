import { getAuth } from "@/lib/auth";
import { createBrowserRouter } from "react-router-dom";
import { manegerRoutes } from "./maneger-router";
import { publicRoutes } from "./public-router";
import { usersRoutes } from "./users-router";
import { adminRoutes } from "./admin-router";

const user = getAuth();

console.log(user);

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      user === null
        ? publicRoutes()
        : user.role === "manager"
          ? manegerRoutes()
          : user.role === "Admin"
            ? adminRoutes()
            : user.role === "user" || user.role === "port"
              ? usersRoutes()
              : publicRoutes(),
    ],
  },
]);
