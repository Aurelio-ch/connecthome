import { Building2, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export function Header() {
  return (
    <div className="flex h-full w-full items-center justify-between rounded-r-lg border-b border-border p-4 ">
      <div className="inline-flex gap-4">
        <Sheet>

          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>

        </Sheet>
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
