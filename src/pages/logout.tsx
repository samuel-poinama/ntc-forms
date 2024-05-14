import { useEffect } from "react"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import Loading from "@/components/loading"






export default function Logout() {
    const router = useRouter()
    const { data: session } = useSession()
    
    function redirect() {
        // if doesn't have session, redirect to home
        if (session === null) {
            router.push("/")
        // if has session, sign out
        } else if (session !== undefined) {
            signOut()
        }
    }


    // update session in global
    useEffect(() => {
    }, [session])
    
    return (
        <Loading fun={redirect} delay={500} />
    )
}