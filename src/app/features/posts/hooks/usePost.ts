import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../services/postService";
import { Post } from "../types/Post";

export function usePost(id: string) {
  return useQuery<Post>({
    queryKey: ["user", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: true,
    refetchOnMount: false,
    refetchOnReconnect: true,
  });
}
