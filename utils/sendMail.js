const nodemailer = require("nodemailer");

const hostData = process.env.GMAIL_HOST ?? "";
const port= process.env.GMAIL_PORT ?? "";

const sendEmail = (options) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: hostData,
    port: port,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.APP_PASSWORD,
    },
  } );

  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info);
    }
  });
};

module.exports = sendEmail;
