"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type BillboardColumn = {
  id: string
  imageUrl: string;
  label: string;
  createdAt: string;
}


export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
  },
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];