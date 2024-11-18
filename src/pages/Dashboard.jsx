import React from "react";
import { useAuth } from "../AuthContext.jsx";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-screen h-screen flex bg-slate-900 text-white">
      <nav className="w-[170px] h-screen px-2 flex flex-col justify-between bg-slate-700">
        <ul className="gap-2 flex flex-col justify-center mt-9 text-gray-200 text-lg">
          <li> <i class="text-base fa-solid fa-house"></i> <span className="font-medium">Home</span></li>
          <li> <i class="text-base fa-solid fa-box-archive"></i> <span className="font-medium">Produtos</span></li>
          <li> <i class="text-base fa-solid fa-sliders"></i> <span className="font-medium">Configurações</span></li>
        </ul>

        <div onClick={logout} className="gap-2 mb-2 flex items-center hover:transition-colors duration-75 cursor-pointer">
          <i class="text-base fa-solid fa-arrow-right-from-bracket text-red-600"></i>
          <span className="font-medium text-lg">Sair</span>
        </div>
      </nav>

      <div className="flex flex-col w-screen h-screen">
        <header className="w-full bg-slate-800 h-14 mb-10 px-2 flex items-center justify-center">
          a
        </header>

        <main className="px-2 w-full">
          <h1>Bem-vindo, {user?.username}!</h1>
          <ul>
            {user?.tasks.map((task) => (
              <li key={task.id}>{task.taskName}</li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;