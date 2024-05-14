import Form from "@/model/forms"
import { NextApiRequest, NextApiResponse } from "next"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "DELETE") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }

    const { id } = req.body

    if (!id) {
        res.status(400).json({ message: "Id is required" })
        return
    }

    const form = await Form.find(id)
    if (!form) {
        res.status(404).json({ message: "Form not found" })
        return
    }

    form.remove()

    res.status(200).json({ message: "Form removed" })
}