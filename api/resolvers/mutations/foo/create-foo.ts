import joi from 'joi'
import middy, { Request, Resolver } from '@middy-graphql/core'
import validator from '@middy-graphql/validator'

import { Context } from '~api/graphql-server'

type Args = {
  input: {
    message: string
  }
}

const inputSchema = joi.object({
  input: joi.object({
    message: joi.number().required().messages({
      'any.required': '{{#label}} is required!!',
      'number.base': '{{#label}} must be a number',
    }),
  }),
})

const resolver: Resolver<any, Args, Context> = () => {
  // console.log(args, context, info, root)
}

const middlewares = () => {
  const before = (_: Request<any, Args>) => {
    // console.log(`before - ${request}`)
  }

  const after = (_: Request<any, Args, Context, any>) => {
    // console.log(`after - ${request}`)
  }

  return {
    before,
    after,
  }
}

export default middy(resolver)
  .use(middlewares())
  .use(validator({ inputSchema }))
