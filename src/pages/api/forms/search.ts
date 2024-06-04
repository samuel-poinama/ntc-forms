import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"
import { Role } from "@/model/User"
import { findApproximateMatches } from "@/lib/searcher"
import Form from "@/model/forms/forms"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.USER)


    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const { s } = req.query

    if (typeof s !== "string") {
        return res.status(400).json({ error: "Search term must be a string" })
    }


    const forms = await Form.all()

    const matches = findApproximateMatches(forms, s, 3, "title")


    return res.status(200).json(matches)
}