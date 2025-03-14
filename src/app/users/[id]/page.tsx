import DetailPage from "@/app/features/users/container/UserDetailContainer"

type Props = { params: { id: string } }

export default function Page({ params }: Props) {
  return <DetailPage id={params.id} />
}