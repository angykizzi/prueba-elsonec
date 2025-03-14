import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../services/postService";
import { Post } from "../types/Post";

export function usePost(id: string) {
    return useQuery<Post>({
      queryKey: ["user", id],
      queryFn: () => getPostById(id),
      enabled: !!id,
    })
  }