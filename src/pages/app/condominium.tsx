import { Button } from "@/components/ui/button";
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
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
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

export function Condominium() {
  return (
    <>
      <div className="flex  items-center flex-row gap-4 justify-between">
        <div >
          <h1 className="inline-block text-xl font-medium">
            Lista de Concominios
          </h1>
          <p className="mt-1 text-sm text-gray-500">
          Explore a lista de condomínios disponíveis e encontre informações essenciais para uma gestão eficiente.
          </p>
        </div>

        <Button className="inline-flex gap-2 hover:opacity-65 transition ">
          <Plus className="size-4" /> 
          <span className="hidden md:block">Add Condominio</span>
          <span className="block md:hidden">Add</span>
        </Button>
      </div>

      <div className="space-y-4">
        <Table className="border-y">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nome do Condominio</TableHead>
              <TableHead>Nº de Moradores</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map(() => {
              return (
                <TableRow>
                  <TableCell className="font-medium"></TableCell>
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
                      <DropdownMenuContent>
                        <DropdownMenuLabel className="inline-flex items-center gap-2">
                          <Settings className="size-4" /> Gerenciar
                        </DropdownMenuLabel>
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

        <Pagination className="md:justify-end">
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
    </>
  );
}
