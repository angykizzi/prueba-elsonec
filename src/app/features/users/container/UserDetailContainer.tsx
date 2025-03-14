import Link from "next/link"
import { getUserById } from "../services/userService"
import UserDetail from "../components/UserDetail"
import { Button } from "@/components/ui/button"

type Props = { id: string }

export default async function DetailPage({ id }: Props) {
  const user = await getUserById(id)

  return (
    <div className="p-6 space-y-4">
      <Link href="/users" passHref>
        <Button className="text-white">
          Regresar
        </Button>
      </Link>
      <UserDetail user={user} />
    </div>
  )
}
