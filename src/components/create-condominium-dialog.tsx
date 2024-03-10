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

export default function CreateCondominiumDialog() {
  return (
    <DialogContent className="max-w-sm rounded-sm md:max-w-lg">
      <DialogHeader>
        <DialogTitle>Cadastro de Condomínios</DialogTitle>
        <DialogDescription>
          Informe os dados para a criação do condomínios.
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="flex flex-col gap-2">
            <Label className="text-sm">Nome condomínios:</Label>
            <Input id="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm">Endereço:</Label>
            <Input id="name" />
          </div>
          <div className="flex gap-2">
            <div className="flex w-full flex-col gap-2">
              <Label className="text-sm">Nº de Blocos:</Label>
              <Input id="name" />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label className="text-sm">Nº de apartamento:</Label>
              <Input id="name" />
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6 flex gap-2 md:gap-0">
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit"variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
