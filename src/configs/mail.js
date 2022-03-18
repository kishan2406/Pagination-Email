const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "062eb11bee0708", // generated ethereal user
    pass: "cc972a6d2c89eb", // generated ethereal password
  },
});
