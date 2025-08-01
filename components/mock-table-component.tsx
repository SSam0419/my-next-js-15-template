"use client";

import { DataTable } from "@/components/data-table/data-table";
import { DataTableAdvancedToolbar } from "@/components/data-table/data-table-advanced-toolbar";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableFilterList } from "@/components/data-table/data-table-filter-list";
import { DataTableSortList } from "@/components/data-table/data-table-sort-list";
import { useDataTable } from "@/hooks/use-data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

type Project = {
  id: string;
  title: string;
  lineItem: {
    status: "active" | "inactive";
  };
};

export const MockTableComponent = (): React.ReactNode => {
  const columns = useMemo<ColumnDef<Project>[]>(
    () => [
      {
        // Required: Unique identifier for the column
        id: "title",
        // Required: Key to access the data, `accessorFn` can also be used
        accessorKey: "title",
        // Optional: Custom header component
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        // Optional: Custom cell component
        cell: ({ row }) => <div>{row.getValue("title")}</div>,
        // Optional: Meta options for filtering, sorting, and view options
        meta: {
          label: "Title",
          placeholder: "Search titles...",
          variant: "text",
        },
        // By default, the column will not be filtered. Set to `true` to enable filtering.
        enableColumnFilter: true,
      },
      {
        id: "status",
        // Access nested data using `accessorFn`
        accessorFn: (row) => row.lineItem.status,
        header: "Status",
        meta: {
          label: "Status",
          variant: "select",
          options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
        },
        enableColumnFilter: true,
      },
    ],
    [],
  );

  const { table } = useDataTable<Project>({
    data: [
      {
        id: "1",
        title: "Project Alpha",
        lineItem: { status: "active" },
      },
      {
        id: "2",
        title: "Project Beta",
        lineItem: { status: "inactive" },
      },
    ],
    columns,
    pageCount: 0,
  });

  return (
    <DataTable table={table}>
      <DataTableAdvancedToolbar table={table}>
        <DataTableFilterList table={table} />
        <DataTableSortList table={table} />
      </DataTableAdvancedToolbar>
    </DataTable>
  );
};
