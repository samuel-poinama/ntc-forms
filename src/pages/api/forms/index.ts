import { NextApiRequest, NextApiResponse } from "next"
import Form from "@/model/forms/forms"
import { Role } from "@/model/User"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"
import FieldType from "@/model/forms/fieldType"
import { BooleanField, CheckBoxField, DateField, NumberField, SelectField, TextField } from "@/model/forms/field"


function createField(type: string, name: string, required: boolean, field: any) : any {
    switch (type) {
        case FieldType.TEXT:
            const { regex } = field


            // secure regex
            if (typeof regex !== "string") {
                return { error: "Regex must be a string" }
            }

            // convert string to regex
            let regexObj: RegExp

            // check if regex is valid
            try {
                regexObj = new RegExp(regex)
            } catch (e) {
                return { error: "Invalid regex" }
            }


            return new TextField(name, required, regexObj)

        case FieldType.NUMBER:
            let { min, max } = field

            // secure min
            try {
                min = Number(min)
            } catch (e) {
                return { error: "min must be a number" }
            }

            // secure max
            try {
                max = Number(max)
            } catch (e) {
                return { error: "max must be a number" }
            }

            // check if min is less than max
            if (min > max) {
                return { error: "min must be less than max" }
            }

            return new NumberField(name, required, min, max)

        case FieldType.BOOLEAN:
            return new BooleanField(name, required)

        case FieldType.DATE:
            let { minDate } = field

            // secure minDate
            try {
                minDate = Number(minDate)
            } catch (e) {
                return { error: "minDate must be a number" }
            }

            const date = new Date(minDate)
            return new DateField(name, required, date)
            
        case FieldType.SELECT:
            const { options } = field

            // secure options
            if (!Array.isArray(options)) {
                return { error: "options must be an array" }
            }

            if (options.length === 0) {
                return { error: "options can't be empty" }
            }

            return new SelectField(name, required, options)
        
        case FieldType.CHECKBOX:
            let { min: minCheck, max: maxCheck, options: checkOptions } = field

            // secure min
            try {
                maxCheck = Number(maxCheck)
            } catch (e) {
                return { error: "max must be a number" }
            }

            // secure max
            try {
                minCheck = Number(minCheck)
            } catch (e) {
                return { error: "min must be a number" }
            }

            // check if min is less than max
            if (minCheck > maxCheck) {
                return { error: "min must be less than max" }
            }

            // secure options
            if (!Array.isArray(checkOptions)) {
                return { error: "options must be an array" }
            }

            if (checkOptions.length === 0) {
                return { error: "options can't be empty" }
            }
            if (checkOptions.length < minCheck) {
                return { error: "min must be less than options length" }
            }

            if (checkOptions.length > maxCheck) {
                return { error: "max must be greater than options length" }
            }

            return new CheckBoxField(name, required, minCheck, maxCheck, checkOptions)

        default:
            return { error: "Invalid type" }
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.USER)
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const { id } = req.query

    if (id) {
        // secure id
        if (typeof id !== "string" || id === "undefined") {
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
        if (user.role > Role.ADMIN) {
            return res.status(403).json({ error: "Unauthorized" })
        }

        const { title, description, fields } = req.body

        // secure title
        if (typeof title !== "string") {
            return res.status(400).json({ error: "Title must be a string" })
        }


        // check if form already exists
        if (await Form.findByTitle(title)) {
            return res.status(409).json({ error: "Form already exists" })
        }

        // secure description
        if (typeof description !== "string") {
            return res.status(400).json({ error: "Description must be a string" })
        }

        // secure fields
        if (!Array.isArray(fields)) {
            return res.status(400).json({ error: "Fields must be an array" })
        }

        if (fields.length === 0) {
            return res.status(400).json({ error: "Fields can't be empty" })
        }
        
        const newFields = []
        for (const field of fields) {
            const { name, required, type } = field
            if (typeof name !== "string") {
                return res.status(400).json({ error: "Field name must be a string" })
            }

            if (typeof required !== "boolean") {
                return res.status(400).json({ error: "Field required must be a boolean" })
            }

            if (typeof type !== "string") {
                return res.status(400).json({ error: "Field type must be a string" })
            }

            const nField = createField(type, name, required, field)
            if (nField.error) {
                return res.status(400).json(nField)
            }

            newFields.push(nField)
        }

        const form = new Form(title, description, newFields)
        await form.insert()

        res.status(201).json({ _id: form.id.toString() })
    } else {
        res.status(405).json({ error: "Method not allowed" })
    }
}