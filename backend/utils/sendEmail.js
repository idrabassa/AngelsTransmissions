import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import express from 'express'
import path from 'path'
// import { lstatSync, readdirSync } from 'fs'
// import { join } from 'path'

// const isDirectory = (source) => lstatSync(source).isDirectory()
// const getDirectories = (source) =>
//   readdirSync(source)
//     .map((name) => join(source, name))
//     .filter(isDirectory)

const app = express()
const __dirname = path.resolve()
app.use(`/views`, express.static(path.join(__dirname, 'views')))

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    // auth: {
    //   user: process.env.SMTP_EMAIL,
    //   pass: process.env.SMTP_PASSWORD,
    // },
  })
  const handlebarOptions = {
    viewEngine: {
      extName: '.handlebars',
      partialsDir: path.resolve(`${__dirname}`, 'views'),
      defaultLayout: false,
    },
    viewPath: path.resolve(`${__dirname}`, 'views'),
    extName: '.handlebars',
  }
  transporter.use('compile', hbs(handlebarOptions))
  console.log(path.resolve(`${__dirname}/backend`))
  // send mail with defined transport object
  let message = {
    from: `${process.env.FROM_NAME}<${process.env.FROM_EMAIL}>`, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
    template: 'index',
    context: { link: options.link, name: options.name },
  }

  const info = await transporter.sendMail(message)

  console.log('Message sent: %s', info.messageId)
}

export default sendMail
