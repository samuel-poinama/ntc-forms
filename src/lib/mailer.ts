import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

if (!process.env.USER_EMAIL) {
    throw new Error('USER_EMAIL is not defined')

}

if (!process.env.EMAIL_ACCESS) {
    throw new Error('EMAIL_ACCESS is not defined')
}

if (!process.env.CONTACT_EMAIL) {
    throw new Error('CONTACT_EMAIL is not defined')
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_ACCESS
    }
})

const forms = fs.readFileSync(path.resolve('src', 'mails', 'forms.html'), 'utf8')
const contact = fs.readFileSync(path.resolve('src', 'mails', 'contact.html'), 'utf8')

export function sendContactMail(infos: {firstname: string, lastname: string, email: string, phone: string, message: string}) {
    const message = {
        from: process.env.USER_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: 'Contact Us',
        text: 'For clients with plaintext support only',
        html: contact
    }

    // replace %s by formName in html
    message.html = message.html.replace('%f', infos.firstname)
    message.html = message.html.replace('%l', infos.lastname)
    message.html = message.html.replace('%e', infos.email)
    message.html = message.html.replace('%p', infos.phone)
    message.html = message.html.replace('%m', infos.message)

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message)
        } else {
            console.log("mail sent successfully")
        }
    })
}

export function sendFormsMail(to: string, formName: string, attachment: string) {
    const message = {
        from: process.env.USER_EMAIL,
        to,
        subject: `Repsonses for "${formName}"`,
        attachments: [
            {
                filename: `${formName}.csv`,
                content: attachment
            }
        ],
        text: 'For clients with plaintext support only',
        html: forms
    }


    // replace %s by formName in html
    message.html = message.html.replace('%s', formName)
    

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message)
        } else {
            console.log("mail sent successfully")
        }
    })
}

