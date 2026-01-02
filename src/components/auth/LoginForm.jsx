// src/components/auth/LoginForm.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/api/auth";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    console.log({ email, password })
    const res = await login({ email, password });
    console.log(res)
    localStorage.setItem("token", res.data.access_token);
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button className="w-full">Login</Button>
      
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Don’t have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
