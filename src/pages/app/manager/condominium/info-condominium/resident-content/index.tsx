import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Plus, Search } from "lucide-react";

export function ResidentContent() {
  return (
    <TabsContent value="resident">
      <div className="space-y-8 rounded-lg bg-gray-600/15 border shadow-sm border-gray-700/20 p-4">
        <div className="mx-auto space-y-5">
          <div className="flex items-center justify-between">
            <form className="flex items-end gap-2">
              <div className="flex flex-col gap-2">
              <Label>Pesquisar morador</Label>
              <Input />
              </div>
              <Button type="submit" className="inline-flex gap-1">
                <Search className="size-4" />
                <span className="hidden md:block">Buscar</span>
              </Button>
            </form>

            <Button className="inline-flex gap-2 transition hover:opacity-65 ">
              <Plus className="size-4" />
              <span className="hidden md:block">Add Morador</span>
              <span className="block md:hidden">Add</span>
            </Button>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
