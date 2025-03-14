import DetailPage from "@/app/features/posts/container/PostDetailContainer"

type Props = { params: { id: string } }

export default function Page({ params }: Props) {
  return <DetailPage id={params.id} />
}