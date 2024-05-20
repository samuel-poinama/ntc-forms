import { Role, User } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)

    if (!session || !session.user || ! session.user.email) {
        return res.status(401).end()
    }

    const user = await User.findByEmail(session.user.email)
    console.log(user)

    if (!user) {
        return res.status(401).end()
    }

    console.log(user.role)
    console.log(Role.VIEWER)

    if (user.role > Role.VIEWER) {
        return res.status(403).end()
    }

    

    const { id } = req.query

    if (id) {
        const target = await User.find(id as string)

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

                    if (!role) {
                        return res.status(400).json({ error: "Role is required" })
                    }

                    const newRole = Role[role as keyof typeof Role]

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
        const { email, role } = req.body

        if (!email) {
            return res.status(400).json({ error: "Email is required" })
        }

        if (!role) {
            return res.status(400).json({ error: "Role is required" })
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