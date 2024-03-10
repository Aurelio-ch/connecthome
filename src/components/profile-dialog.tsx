import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

export default function ProfileDialog() {
  return (
    <DialogContent className="md:max-w-lg max-w-sm rounded-sm">
      <DialogHeader>
        <DialogTitle>Perfil</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu usuários
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="flex flex-col gap-2">
            <Label className="text-sm">Nome:</Label>
            <Input id="name" />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm">Email:</Label>
            <Input id="email" type="email"/>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label className="text-sm">Senha Atual:</Label>
            <Input id="current-password" type="password"/>
          </div>

          <div className="flex gap-2">
            <div className="flex w-full flex-col gap-2">
              <Label className="text-sm">Nova Senha:</Label>
              <Input id="new-password" type="password"/>
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label className="text-sm">Confirmar senha:</Label>
              <Input id="password-confirmation" type="password"/>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6 flex gap-2 md:gap-0">
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
