const Foo = /* GraphQL */ `
  type Foo {
    id: ID
  }

  input CreateFooInput {
    message: String!
  }

  extend type Mutation {
    createFoo(input: CreateFooInput): Foo
  }
`
export default Foo
