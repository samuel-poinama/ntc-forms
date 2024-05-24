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
        return res.status(401).json({ error: "Unauthorized" })
    }


    // get form's id
    const { id } = req.query

    // secure id    
    if (typeof id !== "string") {
        return res.status(400).json({ error: "Id must be a string" })
    }


    // find form
    const form = await Form.find(id as string)

    if (!form) {
        return res.status(404).json({ error: "Form not found" })
    }

    const { name } = req.body


    // secure name
    if (typeof name !== "string") {
        return res.status(400).json({ error: "Name must be a string" })
    }

    if (req.method === "POST") {
        const { type, isRequired } = req.body


        // secure type
        if (typeof type !== "string") {
            return res.status(400).json({ error: "Type must be a string" })
        }

        const fieldType = FieldType[type as keyof typeof FieldType]

        if (!fieldType) {
            return res.status(400).json({ error: "Invalid type" })
        }

        // secure isRequired
        if (typeof isRequired !== "boolean") {
            return res.status(400).json({ error: "isRequired must be a boolean" })
        }

        let field: Field
        switch (fieldType) {
            case FieldType.TEXT:
                const { regex } = req.body


                // secure regex
                if (typeof regex !== "string") {
                    return res.status(400).json({ error: "Regex must be a string" })
                }

                // convert string to regex
                let regexObj: RegExp

                // check if regex is valid
                try {
                    regexObj = new RegExp(regex)
                } catch (e) {
                    return res.status(400).json({ error: "Invalid regex" })
                }


                field = new TextField(name, isRequired, regexObj)
                break

            case FieldType.NUMBER:
                const { min, max } = req.body

                // secure min
                if (typeof min !== "number") {
                    return res.status(400).json({ error: "min must be a number" })
                }

                // secure max
                if (typeof max !== "number") {
                    return res.status(400).json({ error: "max must be a number" })
                }

                field = new NumberField(name, isRequired, min, max)
                break

            case FieldType.BOOLEAN:
                field = new BooleanField(name, isRequired)
                break

            case FieldType.DATE:
                const { minDate } = req.body

                // secure minDate
                if (typeof minDate !== "number") {
                    return res.status(400).json({ error: "minDate must be a number" })
                }

                const date = new Date(minDate)
                field = new DateField(name, isRequired, date)
                break
            case FieldType.SELECT:
                const { options, defaultValue } = req.body

                // secure options
                if (!Array.isArray(options)) {
                    return res.status(400).json({ error: "options must be an array" })
                }

                if (options.length === 0) {
                    return res.status(400).json({ error: "options can't be empty" })
                }

                // secure defaultValue
                if (typeof defaultValue !== "string") {
                    return res.status(400).json({ error: "defaultValue must be a string" })
                }

                if (!options.includes(defaultValue)) {
                    return res.status(400).json({ error: "defaultValue must be in options" })
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
        return res.status(405).json({ error: "Method not allowed" })
    }
}
