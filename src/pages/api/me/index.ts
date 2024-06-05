import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import User from '@/model/User'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }


    const session = await getServerSession(req, res, authOptions)


    if (!session || !session.user || !session.user.email) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    

    const user = await User.findByEmail(session.user.email)
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    return res.status(200).json(user.toJson())
}