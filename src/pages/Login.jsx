// src/pages/Login.jsx
import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="p-6 w-96">
        <LoginForm />
      </Card>
    </div>
  );
}
