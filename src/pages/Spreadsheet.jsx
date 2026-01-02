// src/pages/Spreadsheet.jsx
import AppLayout from "@/components/layout/AppLayout";
import { ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";

export default function Spreadsheet() {
  const rows = [
    {
      rowId: "header",
      cells: [
        { type: "text", text: "A" },
        { type: "text", text: "B" },
        { type: "text", text: "C" },
      ],
    },
    {
      rowId: 1,
      cells: [
        { type: "text", text: "1" },
        { type: "text", text: "2" },
        { type: "text", text: "3" },
      ],
    },
  ];

  const columns = [
    { columnId: "A", width: 150 },
    { columnId: "B", width: 150 },
    { columnId: "C", width: 150 },
  ];

  return (
    <AppLayout>
      <h2 className="text-xl font-semibold mb-4">Spreadsheet</h2>
      <ReactGrid rows={rows} columns={columns} />
    </AppLayout>
  );
}
