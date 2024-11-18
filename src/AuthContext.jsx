import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Criação do contexto
const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Função para realizar login
  const login = (userData) => {
    setUser(userData); // Salvar os dados do usuário
    localStorage.setItem("user", JSON.stringify(userData)); // Persistir no localStorage
    navigate("/"); // Redirecionar para a página principal
  };

  // Função para realizar logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login"); // Redirecionar para a página de login
  };

  // Função para verificar se o usuário está autenticado
  const isAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto mais facilmente
export const useAuth = () => {
  return useContext(AuthContext);
};