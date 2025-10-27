"use client";

import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  // Monitora mudanças no login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login"; // redireciona para login
  };

  if (!user) {
    return (
      <main className="flex h-screen items-center justify-center">
        <p>Carregando usuário...</p>
      </main>
    );
  }

  return (
    <main className="flex h-screen items-center justify-center bg-slate-50">
      <div className="rounded-xl bg-white p-8 shadow-md text-center w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-4 text-[#3546AB]">
          Bem-vindo, {user.displayName}!
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Seu e-mail: {user.email}
        </p>
        <button
          onClick={handleLogout}
          className="w-full rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:opacity-90"
        >
          Sair
        </button>
      </div>
    </main>
  );
}

