import { Role } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { permissions } from "@/lib/checker"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.USER)
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const roles: string[] = Object.keys(Role).filter(role => isNaN(Number(role)))
    
    res.status(200).json(roles)
}