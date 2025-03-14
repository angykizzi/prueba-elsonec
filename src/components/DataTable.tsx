"use client"

import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im";

type DataTableProps<TData> = {
    data: TData[]
    columns: ColumnDef<TData>[]
    loading?: boolean
}

export function DataTable<TData>({ data, columns, loading = false }: DataTableProps<TData>) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })

    const table = useReactTable({
        data,
        columns,
        state: { pagination },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    const totalPages = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex

    const visiblePageButtons = () => {
        const pages: (number | string)[] = []
        if (totalPages <= 5) {
            for (let i = 0; i < totalPages; i++) pages.push(i)
        } else {
            if (currentPage <= 2) {
                pages.push(0, 1, 2, 3, "...", totalPages - 1)
            } else if (currentPage >= totalPages - 3) {
                pages.push(0, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1)
            } else {
                pages.push(0, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages - 1)
            }
        }
        return pages
    }

    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-gray-100">
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center py-6">
                                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                                        <ImSpinner2 className="h-12 w-12 animate-spin" />
                                        <span>Loading...</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center">
                                    No data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {!loading && totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {"<<"}
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {"<"}
                    </Button>

                    {visiblePageButtons().map((page, index) =>
                        page === "..." ? (
                            <span
                                key={`ellipsis-${index}`}
                                className="px-2 text-muted-foreground select-none"
                            >
                                ...
                            </span>
                        ) : (
                            <Button
                                key={`page-${page}`}
                                variant={page === currentPage ? "default" : "outline"}
                                size="sm"
                                onClick={() => table.setPageIndex(Number(page))}
                            >
                                {Number(page) + 1}
                            </Button>
                        )
                    )}

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {">"}
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.setPageIndex(totalPages - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {">>"}
                    </Button>
                </div>
            )}
        </>
    )
}
