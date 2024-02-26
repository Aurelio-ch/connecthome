import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building, MoreVertical, Settings, Users } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="inline-block text-xl font-medium">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          O Dashboard centraliza dados essenciais em gráficos interativos para
          uma tomada de decisão eficaz.
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">
              Condominios
            </CardTitle>
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
            <p className="text-xs text-muted-foreground">número de moradores</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Moradores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">120</span>
            <p className="text-xs text-muted-foreground">número de moradores</p>
          </CardContent>
        </Card>
      </div>
      <Table className="overflow-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome do Condominio</TableHead>
            <TableHead>Nº de Moradores</TableHead>
            <TableHead className="text-right" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 3 }).map(() => {
            return (
              <TableRow>
                <TableCell className="font-medium">Cod1</TableCell>
                <TableCell>Condominio Solemar</TableCell>
                <TableCell>200</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost">
                        <MoreVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel className="inline-flex gap-2 items-center"> <Settings className="size-4" /> Gerenciar</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Moradores</DropdownMenuItem>
                      <DropdownMenuItem>Add visitante</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
