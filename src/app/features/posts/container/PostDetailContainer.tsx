import Link from "next/link"
import { getCommentsByPostId, getPostById } from "../services/postService"
import PostDetail from "../components/PostDetail"
import CommentList from "../components/CommentList"
import { Button } from "@/components/ui/button"

type Props = { id: string }

export default async function DetailPage({ id }: Props) {
  const post = await getPostById(id)
  const comments = await getCommentsByPostId(id)
  return (
    <div className="p-6 space-y-4">
      <Link href="/posts" passHref>
        <Button className="text-white">
          Regresar
        </Button>
      </Link>
      <PostDetail post={post} />
      <CommentList comments={comments} />
    </div>
  )
}
