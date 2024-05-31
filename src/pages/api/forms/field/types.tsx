import FieldType from "@/model/forms/fieldType";
import { NextApiRequest, NextApiResponse } from "next";





export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(200).json({ error: "Invalid method" });
    }

    const fieldTypes = Object.keys(FieldType);

    return res.status(200).json(fieldTypes);
}