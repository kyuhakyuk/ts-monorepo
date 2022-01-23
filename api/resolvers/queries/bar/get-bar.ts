import middy, { Request, Resolver } from '@middy-graphql/core'

import { Context } from '~api/graphql-server'

type Args = {
  input: {
    message: string
  }
}

const resolver: Resolver<any, Args, Context> = ({ args }) => {
  console.log(args)
}

const middlewares = () => {
  const before = (request: Request<any, Args>) => {
    console.log(`before - ${request.args}`)
  }

  return {
    before,
  }
}

export default middy(resolver).use(middlewares())
