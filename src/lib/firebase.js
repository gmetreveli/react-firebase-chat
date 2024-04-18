import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8a94d.firebaseapp.com",
  projectId: "reactchat-8a94d",
  storageBucket: "reactchat-8a94d.appspot.com",
  messagingSenderId: "945084490518",
  appId: "1:945084490518:web:cd5c5131bca93b092aa637",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
