import { Monitor, Moon, MoonIcon, Sun, SunDim } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="divide-y space-y-0.5" align="end">
        <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => setTheme("light")}>
            <SunDim className="size-5" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 cursor-pointer " onClick={() => setTheme("dark")}>
            <MoonIcon className="size-5" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => setTheme("system")}>
            <Monitor className="size-5" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
