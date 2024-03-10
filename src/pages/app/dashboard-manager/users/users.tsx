import CreateUserDialog from "@/components/create-user-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, Plus, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Users() {
  return (
    <>
      <Helmet title="Usuários" />
      <Dialog>
        <div className="flex  flex-row items-center justify-between gap-4">
          <div>
            <h1 className="inline-block text-xl font-medium">
              Lista de Usuários
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore a lista completa de usuários cadastrados, visualizando
              informações detalhadas.
            </p>
          </div>
          <DialogTrigger asChild>
            <Button className="inline-flex gap-2 transition hover:opacity-65 ">
              <Plus className="size-4" />
              <span className="hidden md:block">Add Usuários</span>
              <span className="block md:hidden">Add</span>
            </Button>
          </DialogTrigger>
        </div>

        <div className="rounded-lg border shadow-sm">
          <Table className="border-b">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Usuários</TableHead>
                <TableHead>Tipo de Usuários</TableHead>
                <TableHead className="text-right" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="font-medium"></TableCell>
                    <TableCell>
                      Aurélio Chagas
                      <p className="text-xs text-muted-foreground">
                        aurelio.chagas.c@gmail.com
                      </p>
                    </TableCell>
                    <TableCell>Administrador</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel className="inline-flex items-center gap-2">
                            <Settings className="size-4" /> Gerenciar
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem>Bloquear</DropdownMenuItem>
                          <DropdownMenuItem>Excluir</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Pagination className="p-4 md:justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <CreateUserDialog />
      </Dialog>
    </>
  );
}
