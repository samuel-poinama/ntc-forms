import { Field, FieldType } from "@/model/field/field"
import Form from "@/model/forms"
import { NextApiRequest, NextApiResponse } from "next"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        res.status(405).json({ message: "Method Not Allowed" })
        return
    }

    const { id, type, name } = req.body

    if (!id) {
        res.status(400).json({ message: "Id is required" })
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

    if (!type) {
        res.status(400).json({ message: "Type is required" })
        return
    }

    const fieldType = FieldType[type as keyof typeof FieldType]
    if (!fieldType) {
        res.status(400).json({ message: "Invalid type" })
        return
    }

    const field = new Field(fieldType, name)
    form.addField(field)

    const result = await form.update()

    if (result) {
        res.status(200).json({ message: "Field added" })
    } else {
        res.status(500).json({ message: "Error adding field" })
    }

}