import { Role, User } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.VIEWER)
    if (!user) {
        return res.status(401).end()
    }

    const { id } = req.query

    if (id) {
        if (typeof id !== "string") {
            return res.status(400).json({ error: "Id must be a string" })
        }


        // find user
        const target = await User.find(id)

        if (!target) {
            return res.status(404).end()
        }

        let out = {}

        if (req.method === "GET") {
            out = target.toJson()
        } else {
            if (user.role > Role.ADMIN) {
                return res.status(403).end()
            }

            switch (req.method) {
                case "PUT":
                    const { role } = req.body

                    // secure role
                    if (typeof role !== "string") {
                        return res.status(400).json({ error: "Role must be a string" })
                    }

                    const newRole = Role[role as keyof typeof Role]

                    if (!newRole) {
                        return res.status(400).json({ error: "Invalid role" })
                    }

                    target.role = newRole
                    await user.update()
                    out = { message: "User updated" }
                    break
                case "DELETE":
                    await target.delete()
                    out = { message: "User deleted" }
                    break
                default:
                    return res.status(405).end()
            }
        }
            
        return res.status(200).json(out)
    } else if (req.method === "POST") {
        if (user.role > Role.ADMIN) {
            return res.status(403).end()
        }

        const { email, role } = req.body

        // secure email
        if (typeof email !== "string") {
            return res.status(400).json({ error: "Email must be a string" })
        }

        // regex email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: "Invalid email" })
        }

        // secure role
        if (typeof role !== "string") {
            return res.status(400).json({ error: "Role must be a string" })
        }

        const newRole = Role[role as keyof typeof Role]

        if (!newRole) {
            return res.status(400).json({ error: "Invalid role" })
        }

        const target = new User(email, newRole)
        await target.insert()

        return res.status(201).json({ message: "User created" })
    } else if (req.method === "GET") {
        const users = await User.all()
        const json = users.map(user => user.toJson())

        return res.status(200).json(json)
    } else {
        return res.status(405).end()
    }
}