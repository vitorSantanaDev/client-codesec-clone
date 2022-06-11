import { GraphQLClient } from 'graphql-request'

// const client = new GraphQLClient(process.env.GRAPHQL_HOST_PRODUCTION as string)
const client = new GraphQLClient(process.env.GRAPHQL_HOST_DEVELOPMENT as string)

export default client
