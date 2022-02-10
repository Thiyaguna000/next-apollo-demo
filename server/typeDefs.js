import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: [
      users
    ]
  }
  type users {
    name : String
    location: String
    webPages: String,
    domain: String
  } 
`;
