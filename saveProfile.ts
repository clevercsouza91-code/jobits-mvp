// frontend/saveProfile.ts
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "./lib/firebase";
import { getApp } from "firebase/app";

export async function salvarPerfilInicial(dados: any) {
  const user = auth.currentUser;
  if (!user) return;

  const db = getFirestore(getApp());
  await setDoc(doc(db, "profiles", user.uid), {
    ...dados,
    updatedAt: new Date().toISOString(),
  });
}

