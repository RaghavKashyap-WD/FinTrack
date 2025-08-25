"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";



export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const Router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!username || !password) {
      if(!username && !password){
        setMsg("Username and Password are required");
      }
      else if(!username){
        setMsg("Username is required");
      }
      else if(!password){
        setMsg("Password is required");
      }
      return;
    }
    const url = isLoginMode ? "http://localhost:5000/login" : "http://localhost:5000/signup";
    // Call your login or signup API here
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include", // Needed for cookies/sessions! 
    });

    const data = await response.json();
    if (data.success) {
      setMsg(isLoginMode ? "Login successful!" : "Signup successful!");
      Router.push('/dashboard');
      // Redirect to dashboard or set auth state here
    } else {
      setMsg(data.message || (isLoginMode ? "Login failed": "Signup failed"));
    }
  };
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{isLoginMode ? "Login to your account 🚀" : "Create your account and get started 🚀"}</CardTitle>
          <CardDescription>
            {isLoginMode ? "Enter your email below to login to your account" : "Enter your email below to create your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isLoginMode ? "Login" : "Sign Up"}
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <Button type="button" variant="outline" className="w-full" onClick={() => setIsLoginMode((v) => !v)}>
                {isLoginMode
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
              </Button>
            </div>
            {msg && <p className="mt-4 text-center text-sm text-red-500">{msg}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
