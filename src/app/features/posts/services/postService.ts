import { Comments } from "../types/Comments";
import { Post } from "../types/Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_URL}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return data;

};

export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch user ${id}`)
  return res.json()
}

export async function getCommentsByPostId(postId: string): Promise<Comments[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  if (!res.ok) throw new Error(`Failed to fetch comments for post ${postId}`)
  return res.json()
}