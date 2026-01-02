// src/components/layout/UsersTable.jsx
import { useEffect, useState } from "react";
import { getUsers } from "@/api/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UsersTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(res => setUsers(res.data));
    }, []);

  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Email</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {users.map(u => (
            <TableRow key={u.id}>
                <TableCell className="font-medium">{u.id}</TableCell>
                <TableCell>{u.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
  );
}
