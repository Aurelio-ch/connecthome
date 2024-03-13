import { useAuth } from "@/context/auth-context";

type UseCanParams = {
 role?: string
}
export function useCan({role} :UseCanParams) {
    const { getAuth } = useAuth()
    const user = getAuth();
    console.log(user)

    if(user === null) {
        return false
    }

    const hasRole = user.role === role

    if(!hasRole) {
        return false
    }

    return true

}