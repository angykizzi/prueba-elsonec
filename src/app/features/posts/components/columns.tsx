import { ColumnDef } from "@tanstack/react-table"
import { FaEye } from "react-icons/fa"
import Link from "next/link"
import { Post } from "../types/Post"

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "body",
    header: "Contenido",
  },
  {
    header: "Acciones",
    cell: ({ row }) => {
      const post = row.original
      return (
        <Link
          href={`/posts/${post.id}`}
          className="text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center"
        >
          <FaEye size={18} />
        </Link>
      )
    },
  },
]
