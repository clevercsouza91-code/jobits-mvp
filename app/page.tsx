"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-white to-[#eef2ff] text-slate-800">
      {/* Navbar simples */}
      <header className="w-full py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#3546AB]">Jobits</h1>
        <Link
          href="/login"
          className="rounded-md bg-[#3546AB] text-white px-4 py-2 font-medium hover:opacity-90 transition"
        >
          Entrar
        </Link>
      </header>

      {/* Conteúdo principal */}
      <section className="flex flex-col items-center text-center mt-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A78] max-w-2xl leading-tight">
          A IA que acelera sua <span className="text-[#3546AB]">empregabilidade</span>
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-xl">
          A <strong>Jobtis</strong> cria seu posicionamento profissional e te conecta às oportunidades certas usando inteligência artificial.
        </p>

        <div className="mt-10 text-left bg-slate-50 p-4 rounded-lg border text-sm text-slate-700">
          <p>✔ Criação de currículo profissional com IA</p>
          <p>✔ Versões prontas pra copiar e colar em plataformas de vagas</p>
          <p>✔ Mapa de Soft Skills (seus pontos fortes sem clichê)</p>
          <p>✔ Simulação de entrevista e feedback real</p>
        </div>

        <Link
          href="/login"
          className="mt-8 inline-block bg-[#3546AB] text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-[#2f3b97] transition"
        >
          Começar agora
        </Link>

        <div className="mt-16">
          <img
            src="/images/illustration.svg"
            alt="Ilustração de IA e emprego"
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />

        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-12 mb-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Jobits. Todos os direitos reservados.
      </footer>
    </main>
  );
}
