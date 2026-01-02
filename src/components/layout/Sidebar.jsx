// src/components/layout/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 border-r p-4 space-y-3">
      <Link to="/dashboard" className="block font-medium">Dashboard</Link>
      <Link to="/spreadsheet" className="block font-medium">Spreadsheet</Link>
    </div>
  );
}
