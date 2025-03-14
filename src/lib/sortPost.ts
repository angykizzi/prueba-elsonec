import { Post } from "@/app/features/posts/types/Post";

export function sortPostsByTitle(
  posts: Post[],
  sortOrder: "asc" | "desc" | "none"
): Post[] {
  if (sortOrder === "none") return posts;

  return [...posts].sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (sortOrder === "asc") return titleA.localeCompare(titleB);
    if (sortOrder === "desc") return titleB.localeCompare(titleA);
    return 0;
  });
}
