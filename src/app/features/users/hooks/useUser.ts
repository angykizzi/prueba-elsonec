import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/userService";
import { User } from "../types/user";

export function useUser(id: string) {
    return useQuery<User>({
      queryKey: ["user", id],
      queryFn: () => getUserById(id),
      enabled: !!id,
    })
  }