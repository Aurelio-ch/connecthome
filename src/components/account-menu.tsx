import { signOut } from "@/api/sign-out";
import { useMutation } from "@tanstack/react-query";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileDialog from "./profile-dialog";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function AccountMenu() {
  const navigate = useNavigate();

  const { mutateAsync: signOutFn } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/sign-in", { replace: true });
    },
  });

  async function handleSignOut() {
    try {
        // throw new Error()
        await signOutFn()

        
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="inline-flex flex-col">
            Aurélio Chagas
            <p className="text-xs text-stone-400">aurelio.chagas.c@gmail.com</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <User className="mr-2 size-4" /> Perfil
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
            <button className="flex items-center" onClick={() => handleSignOut()}>
              <LogOut className="mr-2 size-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProfileDialog />
    </Dialog>
  );
}
