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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function CreateUserDialog() {
  return (
    <DialogContent className="max-w-sm rounded-sm md:max-w-lg">
      <DialogHeader>
        <DialogTitle>Cadastro de Usuário</DialogTitle>
        <DialogDescription>
          Informe os dados para a criação do usuário.
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
            <Input id="email" type="email" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label className="text-sm">Perfil de usuário:</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar perfil de usuário" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Gerente</SelectItem>
                <SelectItem value="dark">Sub-Gerente</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full flex-col gap-2">
              <Label className="text-sm">Senha:</Label>
              <Input id="password" type="password" />
            </div>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
