import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { permissions } from '@/lib/checker'
import { Role } from '@/model/User'
import Form from '@/model/forms/forms'
import Response from '@/model/forms/response'
import { csvFormater } from '@/lib/csvFormater'
import { sendFormsMail } from '@/lib/mailer'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.VIEWER)

    if (!user) {
        return res.status(401).json({ error: "Unauthorized" })
    }


    const { id, email } = req.query

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'id is required' })
    }

    const form = await Form.find(id)

    if (!form) {
        return res.status(404).json({ error: 'Form not found' })
    }

    if (!email) {
        return res.status(400).json({ error: 'email is required' })
    } 

    
    const responses = await Response.getByForm(form)

    const csv = csvFormater(responses)
    if (email === 'true') {
        sendFormsMail(user.email, form.title, csv)
        return res.status(200).json({ message: 'Email sent' })
    } else if (email === 'false') {
        res.setHeader('Content-Type', 'text/csv')
        res.setHeader('Content-Disposition', `attachment; filename="${form.title}.csv"`)
        res.status(200).send(csv)
    } else {
        return res.status(400).json({ error: 'email is required' })
    }
}