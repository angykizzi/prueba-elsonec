import { Post } from "@/app/features/posts/types/Post";

export function filterPostsBySearch(posts: Post[], search: string): Post[] {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    )
  }