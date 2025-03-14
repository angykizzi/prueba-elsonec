import { Input } from "@/components/ui/input"

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <Input
      type="text"
      placeholder="Buscar"
      value={value}
      onChange={onChange}
      className="w-full"
    />
  )
}
