const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transport = nodemailer.createTransport({
    service:"gmail",
    host: process.env.GMAIL_HOST,
    port: process.env.GMAIL_PORT,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    // attachments:[options.attachments]
  };

  if (JSON.stringify([options.attachments]) === JSON.stringify([undefined])) {
    return transport.sendMail(mailOptions);
  } else mailOptions.attachments = [options.attachments];

  transport.sendMail(mailOptions);
};

module.exports = sendEmail;
