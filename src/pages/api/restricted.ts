import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"


export default async function handler(req: any, res: any) {
  const session = await getServerSession(req, res, authOptions)

  if (session && session.user) {
    res.send({ user: session.user })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}