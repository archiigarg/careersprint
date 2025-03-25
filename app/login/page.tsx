"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { firebaseAuth} from '@/lib/utils'

const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();

      // Send token to backend
      const loginResponse = await fetch("https://career-sprint-backend.vercel.app/user/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
      });

      const loginData = await loginResponse.json();
      if (!loginResponse.ok) throw new Error(loginData.message);
      console.log(loginData);
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
