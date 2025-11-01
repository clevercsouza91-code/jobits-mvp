// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//  Configuração corrigida do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqPvMUGvdJnTPd-xWxcy0qAozNxlDUoM4",
  authDomain: "jobits-mvp.firebaseapp.com",
  projectId: "jobits-mvp",
  storageBucket: "jobits-mvp.appspot.com", // <--- corrigido!
  messagingSenderId: "627865900523",
  appId: "1:627865900523:web:7f82d04004e582d82fb5ae",
};

// Garante que o app não será inicializado duas vezes (Next.js faz reload no Dev)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Exporta autenticação (Google e email/senha)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Exporta o Firestore (banco de dados)
export const db = getFirestore(app);

export default app;
