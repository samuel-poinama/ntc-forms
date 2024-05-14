import { getServerSession } from "next-auth/next"
import { authOptions } from "./[...nextauth]"
import { NextApiRequest, NextApiResponse } from "next"
import User from "@/model/User"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    const session = await getServerSession(req, res, authOptions)
    console.log(session)

    if (!session || !session.user || !session.user.email) {
        return res.status(401).end()
    }

    const user = await User.findByEmail(session.user.email)

    if (!user) {
        return res.status(401).end()
    }

    res.status(200).end()
}