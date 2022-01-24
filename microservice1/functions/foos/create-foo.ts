import middyfy, { Handler } from 'shared/middyfy'

type Schema = {
  name: string
}

const handler: Handler<Schema> = (event, res) => {
  const { name } = event.body

  return res.send(name)
}

export default middyfy(handler)
