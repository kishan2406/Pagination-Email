const path = require("path");

const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/user.model");

const router = express.Router();

/* 
    body => req.body
    url => req.params
    query string => req.query
*/
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
     return res.send({users:users});
} catch (error) {
    return res.send(error);
}
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', // sender address
      to: user.email, // list of receivers
      subject: "Welcome to ABC system",// Subject line which is show in inbox subject

      text: "Hello sir/madam your user is successfully Registerd", // plain text body

      //   html: "<b>Hello sir/madam your product is successfully created</b>", // html body
      alternatives: [
        {
          contentType: "text/html",
        
          path: path.join(__dirname, "../mailer/user.created-mailer.html"),
        },
      ],
    });

    return res.status(201).send({ message: "Product created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
