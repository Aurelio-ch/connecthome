import { Building2, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { NavLink } from "./ui/nav-link";
import AccountMenu from "./account-menu";

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
            <NavLink to="/">Painel</NavLink>
            <NavLink to="/condominium">Condomínios</NavLink>
            <NavLink to="/users">Usuários</NavLink>
          </nav>
        </div>

        <div className="inline-flex items-center gap-4">
          <AccountMenu />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
