import { createContext, useState, useContext } from "react";
import { login as loginService } from "../service/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const loggedUser = await loginService(username, password);
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
  };

   const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);