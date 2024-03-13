import { useCan } from "@/hooks/use-can";
import { ReactNode } from "react";

interface CanProps {
    children: ReactNode;
    role?: string;
}

export function Can({children, role}: CanProps) {
    const userCanSeeComponent = useCan({role})

    if(!userCanSeeComponent) {
        return null
    }

    return (
        <>
          {children}
        </>
    )
}