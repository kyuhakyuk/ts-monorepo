import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

type Event<T = Record<string, any>> = Omit<APIGatewayProxyEvent, 'body'> & {
  body: T
}

export type Handler<T = Record<string, any>> = (
  event: Event<T>,
  res: Response,
  context: Context
) => Promise<APIGatewayProxyResult>

class Response {
  private _statusCode = 200

  private _headers = {}

  statusCode(statusCode: number) {
    this._statusCode = statusCode

    return this
  }

  set(headers: Record<string, any>) {
    this._headers = headers

    return this
  }

  async sendStatusCode(statusCode: number) {
    this._statusCode = statusCode

    return this.send
  }

  async send(response: any = 'ok'): Promise<APIGatewayProxyResult> {
    let _response: APIGatewayProxyResult = {
      headers: this._headers,
      statusCode: this._statusCode,
      body: response,
    }

    if (typeof response === 'object') {
      _response.body = JSON.stringify(response)
    } else {
      _response.body = response
    }

    return _response
  }
}

const middyfy = <T>(handler: Handler<T>) => {
  return middy((event, context) => handler(event, new Response(), context)).use(middyJsonBodyParser())
}

export default middyfy
