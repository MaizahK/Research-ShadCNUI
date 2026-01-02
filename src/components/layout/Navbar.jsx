// src/components/layout/Navbar.jsx
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import { logout } from "@/utils/auth";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="h-14 border-b flex items-center w-screen">
      <h3 className="font-semibold text-lg px-6">ShadCN/UI Application</h3>
      <div className="flex-1"></div>
      <Switch checked={dark} onCheckedChange={setDark} className="mr-2"/>
      <Button variant="destructive" onClick={logout} className="mr-5">
        Logout
      </Button>
    </nav>
  );
}
