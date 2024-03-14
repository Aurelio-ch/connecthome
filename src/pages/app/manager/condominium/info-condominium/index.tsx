import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { ConciergeContent } from "./concierge-content";
import { ResidentContent } from "./resident-content";
import { VisitorContent } from "./visitor-content";

export function InfoCondominium() {
  const { condominiumId } = useParams();
  return (
    <>
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="border-1 inline-flex md:h-32 md:w-32 items-center justify-center rounded-md border border-muted-foreground/50 bg-gradient-to-r from-primary to-orange-600 p-3 shadow-sm">
          <Building2 className="size-16 text-gray-100" />
        </div>

        <div>
          <h1 className="font-semibold text-3xl">Condominio Solar {condominiumId}</h1>
          <p className="text-muted-foreground font-medium">Endereço: </p>
          <p className="text-muted-foreground font-medium">Numero de Blocos:</p>
          <p className="text-muted-foreground font-medium">Numero de apartamento:</p>
        </div>
      </div>

      <div>
        <div>
          <Tabs defaultValue="resident">
            <TabsList>
              <TabsTrigger value="resident">Moradores</TabsTrigger>
              <TabsTrigger value="concierge">Porteiros</TabsTrigger>
              <TabsTrigger value="visitor">Visitantes</TabsTrigger>
            </TabsList>
            <ResidentContent />
            <ConciergeContent />
            <VisitorContent />
          </Tabs>
        </div>
      </div>
    </>
  );
}
