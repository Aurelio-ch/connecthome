import { Condominium } from "@/pages/app/manager/condominium";
import { InfoCondominium } from "@/pages/app/manager/condominium/info-condominium";
import { DashboardManager } from "@/pages/app/manager/dashboard";
import { Users } from "@/pages/app/manager/users";

export const routerManeger = [{
    path: '/',
    element: <DashboardManager />,
  },
  {
    path: '/condominium',
    element: <Condominium />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/condominium/:condominiumId',
    element: <InfoCondominium />,
  },]