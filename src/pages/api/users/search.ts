import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"
import User from "@/model/User"
import Role from "@/model/role"
import { findApproximateMatches } from "@/lib/searcher"



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

    const { s } = req.query

    if (typeof s !== "string") {
        return res.status(400).json({ error: "Search term must be a string" })
    }


    const users = await User.all()
        
    const matches = findApproximateMatches(users, s, 3, "name")
    const matchByEmail = findApproximateMatches(users, s, 3, "email")

    // insert the email match into the name match if it is not already there
    matchByEmail.forEach((emailMatch) => {
        if (!matches.includes(emailMatch)) {
            matches.push(emailMatch)
        }
    })

    return res.status(200).json(matches)
}