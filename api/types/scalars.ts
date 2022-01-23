/**
 * Custom scalars (data types, like Int, String,...) live in this file,
 * both their type definitions and their resolvers
 */
import { GraphQLUpload } from 'graphql-upload'
import { GraphQLDate } from 'graphql-iso-date'

const typeDefs = /* GraphQL */ `
  scalar Date
  scalar Upload
`

const resolvers = {
  Date: GraphQLDate,
  Upload: GraphQLUpload,
}

export default {
  typeDefs,
  resolvers,
}
