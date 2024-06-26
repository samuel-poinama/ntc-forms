import { getServerSession } from "next-auth/next"
import { authOptions } from "./[...nextauth]"
import { NextApiRequest, NextApiResponse } from "next"
import User from "@/model/User"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    const session = await getServerSession(req, res, authOptions)

    if (!session || !session.user || !session.user.email) {
        return res.status(401).end()
    }

    const user = await User.findByEmail(session.user.email)

    if (!user) {
        return res.status(401).end()
    }

    // update user info
    user.name = session.user.name ?? user.email
    user.image = session.user.image ?? user.image

    await user.update()

    res.status(200).end()
}