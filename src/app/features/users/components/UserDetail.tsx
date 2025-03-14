import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "../types/user"
import { userInfo } from "@/lib/utils"

type Props = { user: User }


export default function UserDetail({ user }: Props) {
  return (
    <Card className="border rounded-lg shadow-md w-full max-w-md mx-auto p-4 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800">Detalle de usuario</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-gray-600">
        {userInfo.map(({ label, value }) => (
          <p key={label}>
            <strong className="font-medium text-gray-700">{label}:</strong> {value(user)}
          </p>
        ))}
      </CardContent>
    </Card>
  )
}
