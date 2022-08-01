const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport( {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: "noreply@example.com", // Your email which would be sending
        pass: "*******" //Your Email password
    }
})

const options = {
    from: "send.example.com",
    to: "nodemailer.example.com",
    subject: "Sending email with Node mailer",
    text: "Hello World from code"
}

transporter.sendMail(options, function(err, info) {
    if(err) {
        console.log(err)
        return
    }
    console.log("sent: " + info.response)
})