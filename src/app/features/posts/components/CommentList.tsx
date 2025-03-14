"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Comments } from "../types/Comments"
import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import CommentForm from "./CommentForm"
import { Button } from "@/components/ui/button"

type Props = {
  comments: Comments[]
}

export default function CommentList({ comments }: Props) {
  const [commentList, setCommentList] = useState<Comments[]>(comments)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleNewComment = (newComment: Comments) => {
    setCommentList((prev) => [newComment, ...prev])
    setIsDialogOpen(false) // Close the dialog after submitting the comment
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6 mt-6 w-full">
      <div className="max-w-[1200px]">
        {/* Comment Form Button */}
        <div className="flex justify-between items-center w-full">
          <h2 className="text-xl font-semibold">Comentarios</h2>
          <Button onClick={() => setIsDialogOpen(true)} >
            Añadir comentario
          </Button>
        </div>

        {/* Dialog for adding comment */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar comentario</DialogTitle>
            </DialogHeader>
            <CommentForm onSubmit={handleNewComment} />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Comments List */}
        <div className="space-y-4 border rounded p-6 w-[500px] h-[500px] overflow-y-auto">
          {commentList.map((comment) => (
            <Card key={comment.id} className="border rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-medium">{comment.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{comment.email}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{comment.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
