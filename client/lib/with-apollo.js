import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client";

let PORT = process.env.PORT || 8080
  export const client = new ApolloClient({
    uri: `http://localhost:${PORT}/graphql`,
    cache: new InMemoryCache()
  });
