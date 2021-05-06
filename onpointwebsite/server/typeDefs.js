const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    contactSubmit(
      name: String!
      phone: String!
      email: String!
      description: String
    ): Boolean!
  }
`;
module.exports = { typeDefs };
