import { NextApiRequest, NextApiResponse } from "next"
import Form from "@/model/forms"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }

    const { title, description } = req.body

    if (!title) {
        res.status(400).json({ message: "Title is required" })
        return
    }

    if (!description) {
        res.status(400).json({ message: "Description is required" })
        return
    }

    const form = new Form(title, description)
    form.insert()

    res.status(200).json({ message: "Form created" })
}