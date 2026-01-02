import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex flex-col items-center pb-12 justify-center bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Login
        </h2>

        <Card className="p-6 w-96 mb-12">
          <LoginForm />
        </Card>
      </div>
    </>
  );
}
