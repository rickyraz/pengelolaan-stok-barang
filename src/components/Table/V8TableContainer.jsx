import React, { useState, useEffect, useMemo } from "react";
import useTableStore from "@/store/useTableStore";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  // pagination & sorted
  getPaginationRowModel,
  getSortedRowModel,
  // faceted
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
} from "@tanstack/react-table";

const V8TableContainer = ({ data, columns }) => {
  // Mendefinisikan kolom untuk tabel

  const defaultData = useMemo(() => [], []);

  // Row Selection
  const [rowSelection, setRowSelection] = useState({});
  // VisibilityState
  const [columnVisibility, setColumnVisibility] = useState({});
  // ColumnFiltersState
  const [columnFilters, setColumnFilters] = useState([]);
  // SortingState
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: data ?? defaultData,
    columns,
    state: {
      // globalFilter: filtering, // dari search input
      sorting, // ketika di klik tablenya / sorting manual
      columnFilters, // untuk memfilter tiap kolum tapi belom di terapkan
      columnVisibility,
      rowSelection,
    },
    //  - SET STATE
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection, // baru
    onSortingChange: setSorting, // sorting manual
    // OnGlobalFilterChange: setFiltering, // lama
    onColumnFiltersChange: setColumnFilters, // baru
    onColumnVisibilityChange: setColumnVisibility, // baru
    //  -  OPSI LAMA
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //  - OPSI BARU
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),

    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const { setTable } = useTableStore();
  useEffect(() => {
    setTable(table); // Menyimpan instance table ke store
  }, [table]);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500
                uppercase tracking-wider"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default V8TableContainer;
