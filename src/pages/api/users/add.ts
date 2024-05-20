import { Role, User } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    const { email, role } = req.body

    if (!email) {
        return res.status(400).json({ error: "Email is required" })
    }

    if (!role) {
        return res.status(400).json({ error: "User type is required" })
    }

    const newRole = Role[role as keyof typeof Role]
    

    if (newRole === undefined) {
        return res.status(400).json({ error: "Invalid user type" })
    }

    const user = new User(email, newRole)
    user.insert()

    res.status(200).json({ message: "User added" })
}