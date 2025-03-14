'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Comments } from "../types/Comments"

type Props = {
    onSubmit: (newComment: Comments) => void
}

export default function CommentForm({ onSubmit }: Props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newComment: Comments = {
            postId: 1,
            id: Date.now(),
            name,
            email,
            body,
        }
        onSubmit(newComment)
        setName("")
        setEmail("")
        setBody("")
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="body">Comentario</Label>
                <Textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required />
            </div>

            <Button type="submit">Enviar comentario</Button>
        </form>
    )
}