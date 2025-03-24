"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

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
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-4xl shadow-2xl shadow-black rounded-lg flex items-center">
        <div className="w-1/2">
          <img src="login.svg" alt="Login Image" className="w-full h-full object-cover rounded-l-lg" />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription>Sign in to your account using Google</CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex justify-center">
            <Button className="bg-orange-500 text-white px-6 py-3 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:border-orange-500 hover:text-orange-500" onClick={loginWithGoogle}>
              Login with Google
            </Button>
          </CardContent>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
