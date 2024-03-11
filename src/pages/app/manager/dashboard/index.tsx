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
import {
  ArrowRight,
  Building,
  MoreVertical,
  Settings,
  UserRoundCog,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function DashboardManager() {
  return (
    <>
      <Helmet title="Dashboard" />
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
            <CardTitle className="text-base font-semibold">Usuários</CardTitle>
            <b></b>
            <UserRoundCog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold tracking-tight">10</span>
            <p className="text-xs text-muted-foreground">
              número de usuários do sistema
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <h1 className="inline-block text-xl font-medium">
            Lista de Concominios
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore a lista de condomínios disponíveis e encontre informações
            essenciais para uma gestão eficiente.
          </p>
        </div>

        <Button
          variant="link"
          className="inline-flex justify-end gap-1 text-muted-foreground transition hover:opacity-65"
          asChild
        >
          <Link to="/condominium">
            Ver mais <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="space-y-4 rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nome do Condominio</TableHead>
              <TableHead>Nº de Moradores</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="font-medium">Cod1</TableCell>
                  <TableCell>Condominio Solemar</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="inline-flex items-center gap-2">
                          {" "}
                          <Settings className="size-4" /> Gerenciar
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Editar</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" asChild>
                          <Link to="/condominium/moradores">
                            Moradores
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Add visitante</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
