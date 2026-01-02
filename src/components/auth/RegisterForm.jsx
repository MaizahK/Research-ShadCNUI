// src/components/auth/RegisterForm.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/api/auth";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await register(form);
    window.location.href = "/login";
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <Input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button className="w-full">Register</Button>

      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}
