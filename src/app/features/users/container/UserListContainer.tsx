'use client'

import { useMemo, useState } from "react"
import { filterUsersBySearch } from "@/lib/filtersUser"
import { DataTable } from "@/components/DataTable"
import { columns } from "../components/columns"
import SearchInput from "@/components/SearchInput"
import { useUsers } from "../hooks/useUsers"
import LoadingOverlay from "@/components/LoadingOverlay"
import { ErrorMessage } from "@/components/ErrorMessage"
import { useFilteredUsers } from "../hooks/useFilteredUsers"

export default function UserListContainer() {
    const [search, setSearch] = useState("")
    const { data, isLoading, error, isError } = useUsers()

    const filteredUsers = useFilteredUsers(data, search)

    return (
        <div className="relative flex justify-center items-center">
            <div className="max-w-[1200px] flex flex-col justify-center items-center space-y-4">
                <LoadingOverlay isLoading={isLoading} />
                {isError ? (
                    <ErrorMessage
                        title="Error fetching users"
                        message={(error as Error).message}
                    />
                ) : (
                    <>
                        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
                        <div className="w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
                            <DataTable columns={columns} data={filteredUsers} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
