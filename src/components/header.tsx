import { Building2 } from "lucide-react";


export function Header() {
  return (
    <div className="w-full h-full border-r border-border p-8 rounded-r-lg space-y-10">
        <div>
            <span className="font-extrabold text-xl flex items-center gap-1">
              <Building2 className="size-8 text-primary" />
              <span>Connect<span className="text-primary">Home</span></span>
            </span>
        </div>
      
    </div>
  )
}
