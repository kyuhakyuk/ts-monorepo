import { Express, Request, Response } from 'express'
import { graphqlHTTP } from 'express-graphql'

import prisma from '~api/prisma'
import schema from '~api/schema'

export type Context = {
  prisma: typeof prisma
  req: Request
  res: Response
}

export default function graphqlServer(app: Express) {
  app.use(
    '/graphql',
    graphqlHTTP((req, res) => ({
      schema: schema,
      graphiql: true,
      context: {
        req,
        res,
      },
    }))
  )
}
