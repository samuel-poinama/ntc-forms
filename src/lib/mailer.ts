import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve('src', 'components', 'mail.html'), 'utf8')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_ACCESS
    }
})




export function sendEmail(to: string, formName: string, attachment: string) {
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
        html: html
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

