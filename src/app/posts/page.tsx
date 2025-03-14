import Link from "next/link";
import PostListContainer from "../features/posts/container/PostListContainer";
import { Button } from "@/components/ui/button";


export default async function PostsPage() {

  return (
    <main className="p-4 mt-4 w-full h-full">
      <section>
        <Link href="/" passHref>
          <Button className="text-white">
            Regresar
          </Button>
        </Link>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Listado de Posts</h1>
        <PostListContainer />

      </section>
    </main>
  )
}