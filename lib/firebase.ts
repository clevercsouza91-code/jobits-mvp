// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqPvMUGvdJnTPd-xWxcy0qAozNxlDUoM4",
  authDomain: "jobits-mvp.firebaseapp.com",
  projectId: "jobits-mvp",
  storageBucket: "jobits-mvp.firebasestorage.app",
  messagingSenderId: "627865900523",
  appId: "1:627865900523:web:7f82d04004e582d82fb5ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Exporta o Auth
export default app;