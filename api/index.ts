import compression from 'compression'
import errorHandler from 'shared/middlewares/error-handler'
import express from 'express'
import { createServer } from 'http'

import graphqlServer from '~api/graphql-server'
import middlewares from '~api/routes/middlewares'
// Routes
import v1Routes from '~api/routes/v1'

const app = express()

// Trust the now proxy.
app.set('trust proxy', true)

app.use(middlewares)

// All other middlewares
app.use(compression())

// Routes
app.get('/', (_, res) => res.sendStatus(200))
app.use('/v1', v1Routes)

// Create graphql server.
graphqlServer(app)

app.use(errorHandler)

const server = createServer(app)
const port = process.env.PORT || 9000

server.listen({ port }, () => {
  console.log(`🚀 api ready at ${port}`)
})
