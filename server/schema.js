const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
      users(query: String, first: Int, skip: Int): [User!]!
  }
  type User {
    name: String
    address: String
  }
`

module.exports = { typeDefs }