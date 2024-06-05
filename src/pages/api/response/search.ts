import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"
import Response from "@/model/forms/response"
import { findApproximateMatches } from "@/lib/searcher"
import Role from "@/model/role"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }


    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.VIEWER)

    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const { s, t } = req.query

    if (!s || typeof s !== "string") {
        return res.status(400).json({ error: "Search term must be a string" })
    }

    if (!t || typeof t !== "string") {
        return res.status(400).json({ error: "Search type must be a string" })
    }

    let matches: any[] = []

    if (t === "user") {
        const responses = await Response.all()

        matches = findApproximateMatches(responses, s, 3, "userName")
        const matchByEmail = findApproximateMatches(responses, s, 3, "userEmail")

        // insert the email match into the name match if it is not already there
        matchByEmail.forEach((emailMatch) => {
            if (!matches.includes(emailMatch)) {
                matches.push(emailMatch)
            }
        })
    } else if (t === "form") {
        const responses = await Response.all()

        matches = findApproximateMatches(responses, s, 3, "title")
    } else {
        return res.status(400).json({ error: "Invalid search type" })
    }

    res.status(200).json(matches)
}