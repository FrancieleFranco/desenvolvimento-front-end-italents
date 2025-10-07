import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../button/Button";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // limpa o usuário do contexto/localStorage
    navigate("/login", { replace: true }); 
  };

  return (
    <header className="bg-pink-400 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold no-underline">Bela Beleza</h1>
      {user && (
        <div>
          <nav className="flex space-x-4">
            <Link to="/">Sobre</Link>
            <Link to="/clients">Clientes</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/appointments">Agendamentos</Link>
            <Button onClick={handleLogout} className="underline px-3 p-2 mr-2">
              Sair
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
