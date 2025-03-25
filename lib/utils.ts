import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const firebaseConfig = {
  apiKey: "AIzaSyC1d1GjpL-dgC-TenU7Bt9iWqmZUB5AqPM",
  authDomain: "signsync-a13bd.firebaseapp.com",
  projectId: "signsync-a13bd",
  storageBucket: "signsync-a13bd.firebasestorage.app",
  messagingSenderId: "197353783576",
  appId: "1:197353783576:web:afec42965efcb524af5e6d",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);