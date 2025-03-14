import { Post } from "../types/Post"

type Props = { post: Post }

export default function PostDetail({ post }: Props) {
  return (
    <div className="p-6 flex flex-col items-center justify-center w-full">
      <div className="space-y-4 max-w-[1200px] text-center">
        <h1 className="text-5xl font-semibold text-gray-800">{post.title}</h1>
        <p className="text-gray-600 text-lg">{post.body}</p>
      </div>
    </div>
  )
}
