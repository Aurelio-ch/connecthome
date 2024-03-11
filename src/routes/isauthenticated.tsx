/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth } from "@/lib/auth";
import { Navigate } from "react-router-dom";
import { routerManeger } from "./maneger-router";
// import { routerManeger } from "./maneger-router";


const user = getAuth()

export const isauthenticated = !user
  ? [
      {
        path: "*",
        element: <Navigate to="/sign-in" />,
      },
      {
        path: "/",
        element: <Navigate to="/sign-in" />,
      },
    ]
  :   user.role === "maneger"
  ? routerManeger
  : user.role === "Admin"
    ? routerManeger
    : [
        {
          path: "*",
          element: <Navigate to="/sign-in" />,
        },
        {
          path: "/",
          element: <Navigate to="/sign-in" />,
        },
      ];


//   user.role === "maneger"
//     ? routerManeger
//     : user.role === "admin"
//       ? routerManeger
//       : [
//           {
//             path: "*",
//             element: <Navigate to="/sign-in" />,
//           },
//           {
//             path: "/",
//             element: <Navigate to="/sign-in" />,
//           },
//         ]