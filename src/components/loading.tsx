import { useEffect } from "react"





export default function Loading({ fun, delay }: { fun: () => void, delay: number }) {

    useEffect(() => {
        setTimeout(() => {
            fun()
        }, delay)
    }, [fun])

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    )
}