import { useEffect } from "react"





export default function Loading({ fun, delay }: { fun?: () => void, delay?: number }) {

    useEffect(() => {
        if (delay === undefined) {
            return
        }
        
        setTimeout(() => {
            if (fun) {
                fun()
            }
        }, delay)
    }, [fun])

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    )
}