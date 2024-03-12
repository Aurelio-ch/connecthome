import { signIn } from "@/api/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function SignIn() {
  // const navigate = useNavigate()

  const {handleSubmit} = useForm({
    
  });

  const { mutateAsync: signInFn } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      window.location.href = '/'
    },
  });

  async function handleSignIn() {
    try {
        await signInFn()
        
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
  
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-sm text-muted-foreground text-center">Faça login de maneira rápida e segura para acessar todas as funcionalidades do sistema.</p>
      </div>

      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
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
    </>
  );
}
