import { User } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"






export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end()
    }
    /*
    const session = await getServerSession(req, res, authOptions)

    if (!session || !session.user || ! session.user.email) {
        return res.status(401).end()
    }

    const user = await User.findByEmail(session.user.email)

    if (!user) {
        return res.status(401).end()
    }*/

    const { id } = req.query

    if (id) {
        const user = await User.find(id as string)

        if (!user) {
            return res.status(404).end()
        }
        console.log(user)

        return res.status(200).json(user.toJson())
    }

    const users = await User.all()
    const json = users.map(user => user.toJson())

    res.status(200).json(json)
}