import middyfy, { Handler } from 'shared/middyfy'

const handler: Handler = (_, res) => {
  return res
    .statusCode(200)
    .set({
      Authorization: 'bearer xxxx-xxxx-xxxx',
    })
    .send()
}

export default middyfy(handler)
