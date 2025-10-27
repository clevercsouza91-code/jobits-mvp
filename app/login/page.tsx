"use client";

import { auth } from "../../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  async function handleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user); // usuário logado
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login!");
    }
  }

  return (
    <main className="flex h-screen items-center justify-center bg-slate-50">
      <div className="rounded-xl bg-white p-8 shadow-md text-center w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-4 text-[#3546AB]">
          Bem-vindo à Jobtis
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          IA que cria seu posicionamento profissional e acelera sua empregabilidade.
        </p>
        <button
          onClick={handleLogin}
          className="w-full rounded-md bg-[#3546AB] px-4 py-2 text-white font-medium hover:opacity-90"
        >
          Entrar com Google
        </button>
      </div>
    </main>
  );
}
