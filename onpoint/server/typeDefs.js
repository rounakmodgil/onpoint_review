const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    bye: String
    users: [User!]!
    user(id: ID!): User!
    me: ID
    getCategory: [Category]!
    fetchposts(state:String! district:String! category:String!):[Poststruct]
    getstates:[String]!
    getdistricts(state:String!):[String]!
  }

  type Poststruct{
    id:ID!
    userid:ID!
    description:String!
    author:String!
    category:String!
    created:String!
    imageurl:String!
    votes:String!
  }
  type Category {
    id: ID!
    category: String
  }
  type User {
    id: ID!
    email: String!
    password: String!
    tokenVersion: Int!
  }
  type LoginResponse {
    accessToken: String!
    user: User!
  }
  type S3Payload {
    signedRequest: String!
    url: String!
  }
  type Mutation {
    createUser(
      name: String!
      phone: String!
      email: String!
      password: String!
    ): Boolean!
    login(email: String!, password: String!): LoginResponse
    revokeRefreshToken(userId: String!): Boolean!
    logout: Boolean!
    signS3(filename: String!, filetype: String!): S3Payload!
    addpost(
      userid:String!
      category: String!
      imageurl: String
      description: String!
      state: String!
      district: String!
    ): Boolean!
    addcategory(category: String!): Boolean!
    upvote(userid:ID!, postid:ID!):Boolean!
    downvote(userid:ID!, postid:ID!):Boolean!
    unvote(userid:ID!, postid:ID!):Boolean!
    bookmark(userid:ID!, postid:ID!):Boolean!
    unbookmark(userid:ID!, postid:ID!):Boolean!
    profileupdate(userid:ID!, name:String!, phone:String!):Boolean!

  }
`;
module.exports = {typeDefs};
