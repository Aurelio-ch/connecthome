import { Building2, LogOut, Menu, Settings, User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NavLink } from "./ui/nav-link";

export function Header() {
  return (
    <div className="flex h-full w-full border-b border-border p-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="inline-flex items-center gap-4">
          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu />
          </Button>

          <span className="flex items-center gap-1 text-xl font-extrabold">
            <Building2 className="size-8 text-primary" />
            <span>
              Connect<span className="text-primary">Home</span>
            </span>
          </span>

          <nav className=" hidden gap-4 pl-4 md:inline-flex">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/condominium">Condominios</NavLink>
            <NavLink to="/users">Usuarios</NavLink>
          </nav>
        </div>

        <div className="inline-flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="inline-flex flex-col">
                Aurélio Chagas
                <p className="text-xs text-stone-400">
                  aurelio.chagas.c@gmail.com
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem> <User className="size-4 mr-2" /> Perfil</DropdownMenuItem>
              <DropdownMenuItem> <Settings className="size-4  mr-2" /> Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-rose-500 dark:text-rose-400"> <LogOut className="size-4 mr-2" /> Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
