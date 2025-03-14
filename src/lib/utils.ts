import { User } from "@/app/features/users/types/user"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const userInfo = [
  { label: "Nombre", value: (user: User) => user.name },
  { label: "Nombre de usuario", value: (user: User) => user.username },
  { label: "Correo", value: (user: User) => user.email },
  { label: "Teléfono", value: (user: User) => user.phone },
  { label: "Página web", value: (user: User) => user.website },
  { label: "Dirección", value: (user: User) => `${user.address.street}, ${user.address.city}` },
  { label: "Compañía", value: (user: User) => user.company.name },
]
