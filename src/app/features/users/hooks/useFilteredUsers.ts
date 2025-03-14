import { filterUsersBySearch } from "@/lib/filtersUser"
import { useMemo } from "react"
import { User } from "../types/user"

export function useFilteredUsers(users: User[] = [], search: string) {
    return useMemo(() => {
      return filterUsersBySearch(users, search)
    }, [users, search])
  }