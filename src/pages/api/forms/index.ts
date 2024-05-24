import { NextApiRequest, NextApiResponse } from "next"
import Form from "@/model/forms/forms"
import { Role } from "@/model/User"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.VIEWER)
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const { id } = req.query

    if (id) {

        // secure id
        if (typeof id !== "string") {
            return res.status(400).json({ error: "Id must be a string" })
        }


        // find form
        const form = await Form.find(id)

        if (!form) {
            return res.status(404).json({ error: "Form not found" })
        }

        let out = {}

        if (req.method === "GET") {
            out = form.toJson()
        } else {
            if (user.role > Role.ADMIN) {
                return res.status(403).json({ error: "Unauthorized" })
            }

            switch (req.method) {
                case "PUT":
                    const { title, description } = req.body


                    // secure title
                    if (title !== undefined && typeof title !== "string") {
                        form.title = title
                    }

                    // secure description
                    if (description !== undefined && typeof description !== "string") {
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
                    return res.status(405).json({ error: "Method not allowed" })
            }
        }

        res.status(200).json(out)
    } else if (req.method === "GET") {
        const forms = await Form.all()
        res.status(200).json(forms)
    }  else if (req.method === "POST") {
        console.log(user.role, Role.ADMIN)
        if (user.role > Role.ADMIN) {
            return res.status(403).json({ error: "Unauthorized" })
        }

        const { title, description } = req.body

        console.log(title, description)
        // secure title
        if (typeof title !== "string") {
            return res.status(400).json({ error: "Title must be a string" })
        }

        // secure description
        if (typeof description !== "string") {
            return res.status(400).json({ error: "Description must be a string" })
        }

        const form = new Form(title, description)
        await form.insert()

        res.status(201).json({ message: "Form created" })
    } else {
        res.status(405).json({ error: "Method not allowed" })
    }
}