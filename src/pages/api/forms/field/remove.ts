import Form from "@/model/forms"
import { NextApiRequest, NextApiResponse } from "next"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "DELETE") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }


    const { id, name } = req.body

    if (!id) {
        res.status(400).json({ message: "Id is required" })
        return
    }

    if (typeof id !== "string") {
        res.status(400).json({ message: "Id must be a string" })
        return
    }

    const form = await Form.find(id)

    if (!form) {
        res.status(404).json({ message: "Form not found" })
        return
    }

    if (!name) {
        res.status(400).json({ message: "Name is required" })
        return
    }

    if (typeof name !== "string") {
        res.status(400).json({ message: "Name must be a string" })
        return
    }

    const field = form.getField(name)

    if (!field) {
        res.status(404).json({ message: "Field not found" })
        return
    }

    form.removeField(field)

    res.status(200).json({ message: "Field removed" })
    await form.update()

}
