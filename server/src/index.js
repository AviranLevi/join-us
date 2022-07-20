import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import sslRedirect from 'heroku-ssl-redirect'
import logger from '../libs/logger'
import router from './router'

const app = express()
const { env } = process
const port = env.PORT || 5000
const url = env.CONNECTION_STRING || 'mongodb://localhost:27017/join-us'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

mongoose.connect(url, options).then(() => logger.info('DB Connected'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(sslRedirect())

app.use('/api', router)

app.listen(port, () => {
  logger.info(`app is listening to port ${port}`)
})
