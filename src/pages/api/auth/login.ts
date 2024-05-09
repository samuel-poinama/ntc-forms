import User from '@/model/user'
import { NextApiRequest, NextApiResponse } from 'next'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }

    const { email, password } = req.body

    if (!email) {
        res.status(400).json({ message: "Email is required" })
        return
    }

    if (!password) {
        res.status(400).json({ message: "Password is required" })
        return
    }

    const user = await User.checkCredentials(email, password)

    if (!user) {
        res.status(404).json({ message: "email not found" })
        return
    }

    const token = user.generateToken()
    await user.update()

    const cookie = "token=" + token + "; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600; Secure"

    res.setHeader("Set-Cookie", cookie)
    res.status(200).json({ message: "Logged in" })
}