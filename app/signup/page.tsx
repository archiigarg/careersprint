"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Create the JSON object
    const signupData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    console.log("Sign-Up Data:", signupData);

    try{
      const resp = await fetch("http://localhost:8000/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      });

      const result = await resp.json();
      if(resp.ok){
        void router.push("/web/home");
      }
      else{
        alert(result.error)
        console.log("Error has occured")
      }
    }
    catch(error){
      console.log(error)
    }

    // Add your logic here to handle form submission, like making an API request

    // Redirect to login page
    void router.push("/web/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-5xl shadow-2xl shadow-black rounded-lg">
        <Card className="flex">
          <div className="w-1/2 ml-4">
            <img
              src="login.svg"
              alt="Login Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 p-8">
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
              <CardDescription>
                Enter your details to create a new account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <button className="w-full" onClick={handleSubmit}>
                Sign Up
              </button>
              <div className="mt-4 text-center text-sm">
                Have an account?
                <Link className="underline ml-2" href="/login">
                  Login
                </Link>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}
