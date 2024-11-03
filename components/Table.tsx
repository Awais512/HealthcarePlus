"use client";
import React from "react";
import { cn } from "@/lib/utils";

type ColumnDef<T> = {
  header: string;
  accessorKey: keyof T;
  cell?: (props: { row: T }) => React.ReactNode;
};

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  className,
}: TableProps<T>) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden",
        className
      )}
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {columns.map((column, index) => (
              <th
                key={index}
                className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-4">
                  {column.cell ? (
                    column.cell({ row })
                  ) : (
                    <span className="text-gray-800 dark:text-gray-200">
                      {String(row[column.accessorKey])}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
