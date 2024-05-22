import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"
import { Role } from "@/model/User"
import Form from "@/model/forms/forms"
import Field, { BooleanField, DateField, NumberField, SelectField, TextField } from "@/model/forms/field"
import FieldType from "@/model/forms/fieldType"




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.VIEWER)
    if (!user) {
        return res.status(401).end()
    }

    const { id } = req.query

    if (!id) {
        return res.status(400).json({ error: "Id is required" })
    }

    const form = await Form.find(id as string)

    if (!form) {
        return res.status(404).end()
    }

    const { name } = req.body

    if (!name) {
        return res.status(400).json({ error: "Name is required" })
    }

    if (req.method === "POST") {
        const { type, isRequired } = req.body

        if (!type) {
            return res.status(400).json({ error: "Type is required" })
        }

        const fieldType = FieldType[type as keyof typeof FieldType]

        if (!fieldType) {
            return res.status(400).json({ error: "Invalid type" })
        }


        if (isRequired === undefined) {
            return res.status(400).json({ error: "isRequired is required" })
        }
        console.log(typeof isRequired)

        let field: Field
        switch (fieldType) {
            case FieldType.TEXT:
                const { regex } = req.body
                if (!regex) {
                    return res.status(400).json({ error: "regex is required" })
                }

                // convert string to regex
                const regexObj = new RegExp(regex)

                field = new TextField(name, isRequired, regexObj)
                break

            case FieldType.NUMBER:
                const { min, max } = req.body

                if (!min || !max) {
                    return res.status(400).json({ error: "min and max are required" })
                }

                field = new NumberField(name, isRequired, min, max)
                break

            case FieldType.BOOLEAN:
                field = new BooleanField(name, isRequired)
                break

            case FieldType.DATE:
                const { minDate } = req.body

                if (!minDate) {
                    return res.status(400).json({ error: "minDate are required" })
                }

                const date = new Date(minDate)
                field = new DateField(name, isRequired, date)
                break
            case FieldType.SELECT:
                const { options, defaultValue } = req.body

                if (!options) {
                    return res.status(400).json({ error: "options is required" })
                }

                if (!defaultValue) {
                    return res.status(400).json({ error: "defaultValue is required" })
                }

                field = new SelectField(name, isRequired, options, defaultValue)
                break
            

            default:
                return res.status(400).json({ error: "Invalid type" })
        }
        
        form.addField(field)
        await form.update()

        return res.status(201).json({ message: "Field added" })
    } else if (req.method === "DELETE") {
        const field = form.getField(name)
        if (!field) {
            return res.status(404).json({ error: "Field not found" })
        }

        form.removeField(field)
        await form.update()

        return res.status(200).json({ message: "Field removed" })
    } else {
        return res.status(405).end()
    }
}
