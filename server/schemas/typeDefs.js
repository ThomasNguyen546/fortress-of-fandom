// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Comment {
  _id: ID
  commentText: String
  createdAt: String
  username: String
  }

  type Query {
  users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type User {
  _id: ID
  username: String
  password: String
  email: String
  Comments: [Comment]
  }

  type Mutation {
  login(email: String!, password: String!)
  addUser(username: String!, email: String!, password: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;