import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

export default function Header() {
   const { user, logout } = useAuth();
   const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // limpa o usuário do contexto/localStorage
    navigate("/login", { replace: true }); // redireciona para login
  };

  return (
    <header className="bg-pink-400 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold no-underline">Bela Beleza</h1>
      {user && (
        <div>
          <span className="mr-4">ola, {user.username}</span>
          <Button  onClick={handleLogout} className="underline">
           Sair
          </Button>
        </div>
      )}
    </header>
  );
}
