// components/SortDropdown.tsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { FaFilter } from "react-icons/fa"
import { sortOptions } from "@/lib/sortOptions"

type Props = {
    sortOrder: string
    setSortOrder: (sort: "asc" | "desc" | "none") => void
}

export default function SortDropdown({ sortOrder, setSortOrder }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <FaFilter className="text-white" /> ({sortOptions.find(option => option.value === sortOrder)?.label})
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {sortOptions.map(option => (
                    <DropdownMenuItem key={option.value} onClick={() => setSortOrder(option.value as "none" | "asc" | "desc")}>
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
