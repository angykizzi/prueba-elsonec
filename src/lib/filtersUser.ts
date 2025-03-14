import { User } from "@/app/features/users/types/user";

export function filterUsersBySearch(users: User[], search: string): User[] {
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase())
  )
}