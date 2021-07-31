// const express = require("express")
// const products = require("./data/products")
// const dotenv = require("dotenv")

import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import seeusRoutes from './routes/seeusRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import cors from 'cors'

dotenv.config()
connectDB()
const app = express()

//Enabld CORS
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
const __dirname = path.resolve()
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend' + 'index.html'))

//   console.log(path.join(__dirname, 'frontend' + 'index.html'))
// })

app.use(express.static('./frontend'))

app.use(express.json())

app.use('/api/users', userRoutes)

app.use('/api/seeus', seeusRoutes)

app.use('/api/upload', uploadRoutes)

app.use(`/uploads`, express.static(path.join(__dirname, 'uploads')))
// app.use(express.static('./frontend'))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {

// }

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(
    `App listening in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow.bold
  )
})
