import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building, Users } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
      <h1 className="text-xl font-medium inline-block">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500">
      O Dashboard centraliza dados essenciais em gráficos interativos para uma tomada de decisão eficaz.
      </p>
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-3">
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">Condominios</CardTitle>
          <Building className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">2</span>
            <p className="text-xs text-muted-foreground">
              número de condomínios 
            </p>
          </CardContent>
        </Card>

        <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">Moradores</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">120</span>
            <p className="text-xs text-muted-foreground">
              número de moradores 
            </p>
          </CardContent>
        </Card>

        <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">Moradores</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">120</span>
            <p className="text-xs text-muted-foreground">
              número de moradores 
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
