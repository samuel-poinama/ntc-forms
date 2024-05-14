import { NextApiRequest, NextApiResponse } from "next"
import Form from "@/model/forms"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }

    let json: any = {}
    const { id } = req.query
    if (id && typeof id === "string") {
        const form = await Form.find(id)

        if (!form) {
            res.status(404).json({ message: "Form not found" })
            return
        }

        json = form.toJson()
    } else {
        json = await Form.all()
    }

    res.status(200).json(json)
}