// import { getAuth } from "@/lib/auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./admin-router";
import { manegerRoutes } from "./maneger-router";
import { publicRoutes } from "./public-router";
import { usersRoutes } from "./users-router";
import { useAuth } from "@/context/auth-context";

export function RouterApp() {
  const { getAuth } = useAuth()
  const user = getAuth();

  console.log(user);

  const router = createBrowserRouter([
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

  return (
    <RouterProvider router={router} />
  )
}

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     children: [
//       user === null
//         ? publicRoutes()
//         : user.role === "manager"
//           ? manegerRoutes()
//           : user.role === "Admin"
//             ? adminRoutes()
//             : user.role === "user" || user.role === "port"
//               ? usersRoutes()
//               : publicRoutes(),
//     ],
//   },
// ]);
