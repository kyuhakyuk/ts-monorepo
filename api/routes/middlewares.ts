import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'shared/middlewares/cors'
import { Router } from 'express'

// const isProd = process.env.NODE_ENV === 'production'

const middlewares = Router()

middlewares.use(bodyParser.json())

// Cross origin request support
middlewares.use(cors)
middlewares.options('*', cors)

middlewares.use(cookieParser())

export default middlewares
