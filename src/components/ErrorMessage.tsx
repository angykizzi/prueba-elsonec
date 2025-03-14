import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
    title?: string
    message?: string
}

export const ErrorMessage = ({
    title = "An error occurred",
    message = "Something went wrong. Please try again.",
}: ErrorMessageProps) => {
    return (
        <div className="w-full max-w-xl border border-red-300 bg-red-100 text-red-700 px-4 py-3 rounded-md flex items-start gap-3">
            <AlertCircle className="mt-1 w-5 h-5 text-red-500" />
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}
