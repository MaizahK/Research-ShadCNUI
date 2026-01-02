// src/pages/Dashboard.jsx
import AppLayout from "@/components/layout/AppLayout";
import UsersTable from "@/components/users/UsersTable";

export default function Dashboard() {
  return (
    <AppLayout>
      <UsersTable />
    </AppLayout>
  );
}
