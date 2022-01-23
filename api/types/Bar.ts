const Bar = /* GraphQL */ `
  type Bar {
    id: ID
  }

  input GetBarInput {
    message: String!
  }

  extend type Query {
    getBar(input: GetBarInput): Bar
  }
`
export default Bar
