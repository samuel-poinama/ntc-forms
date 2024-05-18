import { Role } from "@/model/User"
import { NextApiRequest, NextApiResponse } from "next"





export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).end()
    }

    const roles: string[] = Object.keys(Role)
    
    res.status(200).json(roles)
}