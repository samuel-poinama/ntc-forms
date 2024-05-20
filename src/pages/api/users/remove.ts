import { NextApiRequest, NextApiResponse } from "next"
import { User } from "@/model/User"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "DELETE") {
        return res.status(405).end()
    }

    const { email } = req.body

    if (!email) {
        return res.status(400).json({ error: "Email is required" })
    }

    const user = await User.findByEmail(email)

    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }

    const result = await user.delete()

    if (!result) {
        return res.status(500).json({ error: "Something went wrong" })
    }

    res.status(200).json({ message: "User deleted" })
}