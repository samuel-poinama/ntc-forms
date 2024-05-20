import { NextApiRequest, NextApiResponse } from "next"
import Form from "@/model/forms"
import { Role, User } from "@/model/User"
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
        const form = await Form.find(id as string)

        if (!form) {
            return res.status(404).end()
        }

        let out = {}

        if (req.method === "GET") {
            out = form.toJson()
        } else {
            if (user.role > Role.ADMIN) {
                return res.status(403).end()
            }

            switch (req.method) {
                case "PUT":
                    const { title, description } = req.body

                    if (title) {
                        form.title = title
                    }

                    if (description) {
                        form.description = description
                    }
                    
                    await form.update()
                    out = { message: "Form updated" }
                    break
                case "DELETE":
                    await form.delete()
                    out = { message: "Form deleted" }
                    break
                default:
                    return res.status(405).end()
            }
        }

        res.status(200).json(out)
    } else if (req.method === "GET") {
        const forms = await Form.all()
        res.status(200).json(forms)
    }  else if (req.method === "POST") {
        if (user.role > Role.ADMIN) {
            return res.status(403).end()
        }

        const { title, description } = req.body

        if (!title) {
            return res.status(400).json({ error: "Title is required" })
        }

        const form = new Form(title, description)
        await form.insert()

        res.status(201).json({ message: "Form created" })
    } else {
        res.status(405).end()
    }
}