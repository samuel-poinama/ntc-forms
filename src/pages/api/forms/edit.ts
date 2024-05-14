import { NextApiRequest, NextApiResponse } from "next"
import Form from "@/model/forms"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }


    const { id, title, description } = req.body

    if (!id) {
        res.status(400).json({ message: "Id is required" })
        return
    }

    const form = await Form.find(id)

    if (!form) {
        res.status(404).json({ message: "Form not found" })
        return
    }

    if (title) {
        form.title = title
    }

    if (description) {
        form.description = description
    }

    form.update()

    res.status(200).json({ message: "Form updated" })
}