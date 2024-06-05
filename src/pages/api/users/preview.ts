import User from '@/model/User'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { permissions } from '@/lib/checker'
import Role from '@/model/role'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.USER)
    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const infos = {
        last: await User.getLasts(),
        num: await User.getNumberOfUsers()
    }

    res.status(200).json(infos)
}