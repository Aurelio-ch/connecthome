import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  UserRoundCog,
  Users
} from "lucide-react";

export function DashboardAdmin() {
  return (
    <>
      <div>
        <h1 className="inline-block text-xl font-medium">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          O Dashboard centraliza dados essenciais em gráficos interativos para
          uma tomada de decisão eficaz.
        </p>
      </div>

      <Separator />

      <div className="grid gap-3 md:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">
              Clientes
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">20</span>
            <p className="text-xs text-muted-foreground">
              número de Clientes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Bloqueados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">2</span>
            <p className="text-xs text-muted-foreground">número de clientes bloqueados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Ativo</CardTitle>
            <b></b>
            <UserRoundCog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">18</span>
            <p className="text-xs text-muted-foreground">
              número de clientes ativos
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-row justify-between">
        
      </div>
    </>
  );
}
