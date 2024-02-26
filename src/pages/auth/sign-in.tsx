import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div className="p-6 space-y-6 flex flex-col justify-center h-full">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-sm text-gray-500 text-center">Faça login de maneira rápida e segura para acessar todas as funcionalidades do sistema.</p>
      </div>

      <form action="" className="space-y-4">
        <div className="space-y-1">
          <label className="font-medium" htmlFor="user">Email ou usuario:</label>
          <Input className="w-full" type="email" id="user" placeholder="Digite seu email ou seu usuario"/>
        </div>
        <div className="space-y-1">
          <label className="font-medium" htmlFor="password">Senha:</label>
          <Input className="w-full" type="password" id="password" placeholder="Digite sua senha"/>
          <Link to="/reset-password" className="text-sm underline text-primary block">esqueci a senha</Link>
        </div>
        <Button className="w-full hover:opacity-65 transition">Acessar</Button>
      </form>
    </div>
  );
}
