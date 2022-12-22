const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mail",
    pass: "pass"
  }
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./views"),
    defaultLayout: false
  },
  viewPath: path.resolve("./views"),
  extName: ".handlebars"
};

transporter.use("compile", hbs(handlebarOptions));

const options = {
  from: "mohamedtaher.benarbia@gmail.com",
  to: "benarbiamohamed84@gmail.com",
  subject: "Test",
  template: "email",
  context: {
    title: "test",
    description: "this is test"
  }
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mail send " + info.response);
  }
});
