// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { getUsers } from "@/api/auth";
import AppLayout from "@/components/layout/AppLayout";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <AppLayout>
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppLayout>
  );
}
