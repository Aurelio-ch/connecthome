import { Building2, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex items-center justify-between h-full w-full rounded-r-lg border-b border-border p-4 ">
      <div className="inline-flex gap-4">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <span className="flex items-center gap-1 text-xl font-extrabold">
          <Building2 className="size-8 text-primary" />
          <span>
            Connect<span className="text-primary">Home</span>
          </span>
        </span>
      </div>

      <ModeToggle />
    </div>
  );
}
