"use client"
import { DataTable } from "@/components/DataTable"
import { columns } from "../components/columns"
import { useFilteredPosts } from "../hooks/useFilteredPosts"
import SearchInput from "@/components/SearchInput"
import SortDropdown from "../components/SortDropdown"
import LoadingOverlay from "@/components/LoadingOverlay"
import { ErrorMessage } from "@/components/ErrorMessage"

export default function PostListContainer() {
    const {
        posts,
        isLoading,
        search,
        sortOrder,
        setSearch,
        setSortOrder,
        error,
        isError
    } = useFilteredPosts()

    return (
        <div className="relative flex justify-center items-center">
            <LoadingOverlay isLoading={isLoading} />
            {isError ? (
                <ErrorMessage
                    title="Error fetching users"
                    message={(error as Error).message}
                />
            ) : (
                <div className="max-w-[1200px] flex flex-col justify-center items-center space-y-4">
                    <div className="flex justify-between items-center gap-6 w-full">
                        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
                        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
                    </div>
                    <div className="w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
                        <DataTable data={posts} columns={columns} />
                    </div>
                </div>
            )}
        </div>
    )
}
