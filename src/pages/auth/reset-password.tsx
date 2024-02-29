import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResetPassword() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Recuperação de senha</h1>
        <p className="text-sm text-muted-foreground text-center">Redefina sua senha de forma simples e segura para recuperar o acesso à sua conta.</p>
      </div>

      <form action="" className="space-y-4">
        <div className="space-y-1">
          <label className="font-medium" htmlFor="user">Email de recuperação:</label>
          <Input className="w-full" type="email" id="user" placeholder="Digite seu email"/>
        </div>
        <Button className="w-full hover:opacity-65 transition">Redefinir senha</Button>
      </form>
    </>
  );
}
