import merge from 'lodash/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'

import Bar from '~api/types/Bar'
import Foo from '~api/types/Foo'

import barQueries from '~api/resolvers/queries/bar'
import fooMutations from '~api/resolvers/mutations/foo'
import scalars from '~api/types/scalars'

const Root = /* GraphQL */ `
  # The dummy queries and mutations are necessary
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`

const resolvers = merge(
  {},
  scalars.resolvers,
  // mutations
  fooMutations,
  // queries
  barQueries
)

// Create the final GraphQL schema out of the type definitions
// and the resolvers
const schema = makeExecutableSchema({
  typeDefs: [scalars.typeDefs, Root, Bar, Foo],
  resolvers,
})

export default schema
