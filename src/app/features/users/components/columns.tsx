import { ColumnDef } from "@tanstack/react-table"
import { User } from "../types/user"
import { FaEye } from "react-icons/fa"
import { default as Link } from "next/link"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    header: "Acciones",
    cell: ({ row }) => {
      const user = row.original
      return (
        <Link
          href={`/users/${user.id}`}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaEye size={18} />
        </Link>
      )
    },
  },
]
