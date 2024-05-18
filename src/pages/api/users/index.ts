import { User } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end()
    }

    const users = await User.all()
    const json = users.map(user => user.toJson())

    res.status(200).json(json)
}