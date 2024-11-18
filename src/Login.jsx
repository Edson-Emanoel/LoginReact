import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get("http://localhost:3001/users", {
        params: { username, password },
      });

      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        login(user); // Salvar o usuário no contexto
      } else {
        setError("Usuário ou senha inválidos.");
      }
    } catch (err) {
      setError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="w-screen h-screen text-white bg-slate-900 flex items-center justify-center text-lg">
      <div className="w-2/5 h-2/5 bg-slate-950 gap-4 flex items-center justify-center rounded-2xl">
        <img className="w-4/5 h-full rounded-s-2xl" src="/sideImg.jpg" alt="Image de Login" />

        <form onSubmit={handleLogin} className="w-4/5 h-full gap-4 flex flex-col items-center justify-center rounded-2xl">
          <h2 className="text-2xl font-semibold">Faça seu Login</h2>

          <div className="w-full flex flex-col items-center">
            <label className="self-start ml-11">Usuário:</label>
            <input
              className="w-4/5 h-8 border-none outline-none bg-slate-600 rounded px-1"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label className="self-start ml-11">Senha:</label>
            <input
              className="w-4/5 h-8 border-none outline-none bg-slate-600 rounded px-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-28 h-8 font-medium rounded bg-green-800">Entrar</button>

          {error && <p className="text-red-500 text-base">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
