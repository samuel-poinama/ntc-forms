import { sendContactMail } from "@/lib/mailer"
import { NextApiRequest, NextApiResponse } from "next"





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }


    const { firstname, lastname, email, phone, message } = req.body

    if (!firstname || !lastname || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required' })
    }

    // check email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email' })
    }

    // check phone
    if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
        return res.status(400).json({ error: 'Invalid phone number' })
    }

    // check message
    if (message.length < 10) {
        return res.status(400).json({ error: 'Message too short' })
    }

    if (message.length > 2000) {
        return res.status(400).json({ error: 'Message too long' })
    }

    // check name
    if (!/^[a-zA-Z]{2,}$/.test(firstname)) {
        return res.status(400).json({ error: 'Invalid firstname' })
    }

    if (!/^[a-zA-Z]{2,}$/.test(lastname)) {
        return res.status(400).json({ error: 'Invalid lastname' })
    }

    // send mail
    sendContactMail({ firstname, lastname, email, phone, message })

    res.status(200).json({ success: 'Message sent' })
}