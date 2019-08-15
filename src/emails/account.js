const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'qwqjoav@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app, ${name}. Thanks for chooseing us.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'qwqjoav@gmail.com',
        subject: 'Account Deleted ',
        text: `Dear ${name}, you account has been deleted successfully.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}