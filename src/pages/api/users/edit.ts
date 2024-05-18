import { NextApiRequest, NextApiResponse } from "next"
import { Role, User } from "@/model/User"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        return res.status(405).end()
    }

    const { email, role } = req.body

    if (!email) {
        return res.status(400).json({ error: "Email is required" })
    }

    if (!role) {
        return res.status(400).json({ error: "User type is required" })
    }

    if (!Object.values(Role).includes(role)) {
        return res.status(400).json({ error: "Invalid user type" })
    }

    const user = await User.findByEmail(email)

    if (!user) {
        return res.status(400).json({ error: "User not found" })
    }

    user.role = role

    const result = await user.update()

    if (!result) {
        return res.status(500).json({ error: "Something went wrong" })
    }

    res.status(200).json({ message: "User updated" })
}