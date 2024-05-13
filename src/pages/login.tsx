import Loading from "@/components/loading"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"




export default function Login() {
  const { data: session } = useSession()
  const router = useRouter()

  async function redirect() {
    //if doesn't have session, sign in
    if (session === null) {
      await signIn()
    // if has session, redirect to home
    } else if (session !== undefined) {
      router.push("/")
    }

  }

  // update session in global
  useEffect(() => {
  }, [session])

  return (
    <Loading fun={redirect} delay={500} />
  )
}