"use client";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1d1GjpL-dgC-TenU7Bt9iWqmZUB5AqPM",
  authDomain: "signsync-a13bd.firebaseapp.com",
  projectId: "signsync-a13bd",
  storageBucket: "signsync-a13bd.appspot.com",
  messagingSenderId: "197353783576",
  appId: "1:197353783576:web:afec42965efcb524af5e6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      // Send token to backend
      const loginResponse = await fetch("http://localhost:5500/user/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      });

      const loginData = await loginResponse.json();
      if (!loginResponse.ok) throw new Error(loginData.message);

      // Store token & redirect
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("refreshTime", (Date.now() + 55 * 60 * 1000).toString());
      router.push("/web/home");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={loginWithGoogle}
        className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Login with Google
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
