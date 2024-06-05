import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { permissions } from '@/lib/checker'
import Role from '@/model/role'
import Form from '@/model/forms/forms'
import Response from '@/model/forms/response'
import { csvFormater } from '@/lib/parser'
import { sendFormsMail } from '@/lib/mailer'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.redirect('405')
    }

    // check permissions
    const session = await getServerSession(req, res, authOptions)
    const user = await permissions(session, Role.VIEWER)

    if (!user) {
        return res.redirect('/401')
    }


    const { id, email } = req.query

    if (!id || typeof id !== 'string') {
        return res.redirect('/400')
    }

    const form = await Form.find(id)

    if (!form) {
        return res.redirect('/400')
    }

    if (!email) {
        return res.redirect('/400')
    } 

    
    const responses = await Response.getByForm(form)

    const csv = csvFormater(responses)
    if (email === 'true') {
        sendFormsMail(user.email, form.title, csv)
        return res.status(200).redirect('/panel/forms')
    } else if (email === 'false') {
        res.setHeader('Content-Type', 'text/csv')
        res.setHeader('Content-Disposition', `attachment; filename="${form.title}.csv"`)
        res.status(200).send(csv)
    } else {
        return res.redirect('/400')
    }
}