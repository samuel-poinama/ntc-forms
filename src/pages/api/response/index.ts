import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"
import Role from "@/model/role"
import Response from "@/model/forms/response"
import Form from "@/model/forms/forms"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.USER)

    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const { id } = req.query

    if (id && typeof id === "string") {
        if (user.role > Role.VIEWER) {
            return res.status(403).json({ error: "Forbidden" })
        }

        const response = await Response.find(id)
        if (!response) {
            return res.status(404).json({ error: "Response not found" })
        }

        if (req.method === "GET") {
            const infos = await response.infos()
            return res.status(200).json(infos)
        } else if (req.method === "DELETE") {
            if (user.role > Role.ADMIN) {
                return res.status(403).json({ error: "Forbidden" })
            }

            response.remove()
            return res.status(200).json({ message: "Response deleted" })
        } else {
            return res.status(405).json({ message: "Method not allowed" })
        }

        
    } else if (req.method === "GET") {
        if (user.role > Role.VIEWER) {
            return res.status(403).json({ error: "Forbidden" })
        }

        const responses = await Response.all()

        res.status(200).json(responses)
    } else if (req.method === "POST") {
        const { id, fields } = req.body


        // secure id
        if (!id || typeof id !== "string") {
            return res.status(400).json({ error: "Invalid request" })
        }


        // check if response already exists
        const userResponses = await Response.getByUser(user)
        for (let i = 0; i < userResponses.length; i++) {
            if (userResponses[i].formId.toString() === id) {
                return res.status(409).json({ error: "Response already exists" })
            }
        }

        // secure fields
        if (!fields || !Array.isArray(fields)) {
            return res.status(400).json({ error: "Invalid request" })
        }

        const form = await Form.find(id)

        if (!form) {
            return res.status(404).json({ error: "Form not found" })
        }


        const entries: any[] = fields
        const response = new Response(form, user)

        // check if the fields is in response fields
        for (let i = 0; i < response.fields.length; i++) {
            let fieldError: any = null

            for (let j = 0; j < entries.length; j++) {
                const entry = entries[j]

                if (response.fields[i].name === entry.name) {
                    response.fields[i].content = entry.content
                    fieldError = response.fields[i].restriction()
                    break
                }
            }
            
            if (fieldError !== true) {
                return res.status(400).json(fieldError)
            }
        }

        if (!response.isFilled()) {
            res.status(400).json({ error: "all fields must be filled" })
        }

        const result = await response.insert()
        if (!result) {
            return res.status(500).json({ error: "Failed to insert response" })
        }

        res.status(200).json(response.toJson())
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}