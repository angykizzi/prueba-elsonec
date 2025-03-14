// src/features/users/services/userService.ts
import { User } from "../types/user"

const API_URL = "https://jsonplaceholder.typicode.com/users"

export async function getUserById(id: string): Promise<User> {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch user ${id}`)
  return res.json()
}

