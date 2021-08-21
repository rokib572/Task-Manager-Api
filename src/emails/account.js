//Send Grid API Key => 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
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rokib.hassan@encoders.tech',
        subject: 'Welcome to my Node Task Manager',
        text: `Dear ${name}, Thanks for using my Node Task Manager application.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rokib.hassan@encoders.tech',
        subject: 'We\'re sad to see you go',
        text: `Dear ${name}, we\'re sad to see you go. Can you let us know the reason behind this step and reply us back?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}