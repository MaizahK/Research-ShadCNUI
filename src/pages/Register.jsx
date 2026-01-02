// src/pages/Register.jsx
import RegisterForm from "@/components/auth/RegisterForm";
import { Card } from "@/components/ui/card";

export default function Register() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="p-6 w-96">
        <RegisterForm />
      </Card>
    </div>
  );
}
